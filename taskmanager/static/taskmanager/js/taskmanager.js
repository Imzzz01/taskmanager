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

    // Attach category filter event listeners
    document.querySelectorAll(".category-filter").forEach(filter => {
        filter.addEventListener("click", function(e){
            e.preventDefault();
            const categoryId = this.dataset.categoryId || "all";
            updateTaskList(categoryId);
        });
    });

    function updateTaskList(categoryId) {
        const url = categoryId === "all" ? window.location.pathname : `${window.location.pathname}?category=${categoryId}`;

        fetch(url, {
            headers: {
                "X-Requested-With": "XMLHttpRequest",
            }
        })
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser(); // Fixed: added 'new' keyword
            const doc = parser.parseFromString(html, "text/html");
            const newContent = doc.querySelector(".list-group").innerHTML;
            document.querySelector(".list-group").innerHTML = newContent;

            document.querySelectorAll(".category-filter").forEach(item => {
                item.classList.remove("active");
                if (item.dataset.categoryId === categoryId || 
                    (categoryId === "all" && item.dataset.categoryId === undefined)) {
                   
                    item.classList.add("active");
                }
            });
            attachTaskEventListeners();
        });
    }

    // Category modal handling
    const categoryModal = document.getElementById("categoryModal");
    const addCategoryBtn = document.getElementById("add-category-btn");
    
    // Check if elements exist before adding event listeners
    if (addCategoryBtn && categoryModal) {
        addCategoryBtn.addEventListener("click", () => {
            // Check if bootstrap modal
            if (typeof categoryModal.show === 'function') {
                categoryModal.show();
            } else {
                // Handle as Bootstrap 5 modal
                const bsModal = new bootstrap.Modal(categoryModal);
                bsModal.show();
            }
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
                    // Add new category to select and list
                    const categorySelect = document.querySelector('select[name="category"]');
                    if (categorySelect) {
                        const newOption = document.createElement("option");
                        newOption.value = data.category_id;
                        newOption.textContent = data.category_name;
                        categorySelect.appendChild(newOption);
                        newOption.selected = true;
                    }
                
                    // Add to categories list
                    const categoriesList = document.querySelector(".list-group-flush");
                    if (categoriesList) {
                        const newCategoryLink = document.createElement("a");
                        newCategoryLink.href = `?category=${data.category_id}`;
                        newCategoryLink.className = "list-group-item list-group-item-action category-filter";
                        newCategoryLink.dataset.categoryId = data.category_id;
                        newCategoryLink.textContent = data.category_name;
                        categoriesList.appendChild(newCategoryLink);
                        
                        // Add event listener to the new category link
                        newCategoryLink.addEventListener("click", function(e) {
                            e.preventDefault();
                            updateTaskList(this.dataset.categoryId);
                        });
                    }
                
                    // Reset and close modal
                    this.reset();
                    
                    // Handle modal closing based on Bootstrap version
                    if (typeof categoryModal.hide === 'function') {
                        categoryModal.hide();
                    } else {
                        const bsModal = bootstrap.Modal.getInstance(categoryModal);
                        if (bsModal) {
                            bsModal.hide();
                        }
                    }
                }
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
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1)); // Fixed: cookie.substring not cookie,substring
                    break;
                }
            }
        }
        return cookieValue;
    }

    // Initialize task event listeners on page load
    attachTaskEventListeners();
});