document.addEventListener("DOMContentLoaded", function(){
    // Function to attach event listeners to tasks
    function attachTaskEventListeners() {
        // Toggle task completion via AJAX
        document.querySelectorAll(".task-checkbox").forEach(function(checkbox) {
            checkbox.addEventListener("change", function (){
                const taskId = this.dataset.taskId;
                const taskItem = this.closest(".list-group-item");

                fetch(`/toggle/${taskId}/`, {
                    method: "POST",
                    headers: {
                        'X-CSRFToken': getCookie('csrftoken'),
                        'X-Requested-With': 'XMLHttpRequest',
                    }
                })
                .then(response => {
                    if (response.ok) {
                        taskItem.classList.toggle("task-completed");
                        taskItem.classList.add("task-completed-animation");
                        setTimeout(() => {
                            taskItem.classList.remove("task-completed-animation");
                        }, 500);
                    }
                })
                .catch(error => {
                    console.error("Error toggling task:", error);
                });
            });
        });

        // Delete Confirmation
        document.querySelectorAll(".btn-delete").forEach(button => {
            button.addEventListener("click", function(e) {
                if (!confirm("Are you sure you want to delete this task?")) {
                    e.preventDefault();
                }
            });
        });

        // Format due dates
        document.querySelectorAll(".due-date").forEach(dateElement => {
            const dateText = dateElement.textContent.trim();
            if (dateText) {
                const date = new Date(dateText);
                const today = new Date();
                today.setHours(0,0,0,0);

                if(date < today) {
                    dateElement.classList.add("overdue");
                }
                dateElement.textContent = date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                });
            }
        });
    }

    // Handle Edit Category buttons
    if (document.querySelectorAll(".edit-category-btn").length > 0) {
        document.querySelectorAll(".edit-category-btn").forEach(btn => {
            btn.addEventListener("click", function(e) {
                e.preventDefault();
                const categoryId = this.dataset.categoryId;
                fetch(`/category/edit/${categoryId}/`)
                .then(response => response.text())
                .then(html => {
                    const modal = document.getElementById("categoryModal");
                    if (modal) {
                        modal.querySelector(".modal-content").innerHTML = html;
                        const bsModal = new bootstrap.Modal(modal);
                        bsModal.show();
                    }
                })
                .catch(error => {
                    console.error("Error fetching category edit form:", error);
                });
            });
        });
    }

    // Handle Delete Category buttons
    if (document.querySelectorAll(".delete-category-btn").length > 0) {
        document.querySelectorAll(".delete-category-btn").forEach(btn => {
            btn.addEventListener("click", function(e) {
                if (!confirm("Are you sure you want to delete this category?")) {
                    e.preventDefault();
                }
            });
        });
    }

    // Category Add Button
    const addCategoryBtn = document.getElementById("add-category-btn");
    const categoryModal = document.getElementById("categoryModal");
    
    if (addCategoryBtn && categoryModal) {
        addCategoryBtn.addEventListener("click", function() {
            const bsModal = new bootstrap.Modal(categoryModal);
            bsModal.show();
        });
    }

    // Ajax category form submission
    const categoryForm = document.getElementById("category-form");
    if (categoryForm) {
        categoryForm.addEventListener("submit", function(e) {
            e.preventDefault();

            fetch(this.action, {
                method: 'POST',
                body: new FormData(this),
                headers: {
                    "X-CSRFToken": getCookie('csrftoken'),
                    "X-Requested-With": "XMLHttpRequest",
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Reload the page to show the new category
                    window.location.reload();
                }
            })
            .catch(error => {
                console.error("Error submitting category form:", error);
            });
        });
    }

    // Helper function to get CSRF Token
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== "") {
            const cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if(cookie.substring(0, name.length + 1) === (name + "=")) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    // Initialize task event listeners on page load
    attachTaskEventListeners();
});