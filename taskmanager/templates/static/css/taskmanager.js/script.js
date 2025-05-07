document.addEventListener("DOMContentLoaded", function() {
    //toggle task completion via AJAX
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
                        taskItem.classList.remove("task-complete-animation");
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

        // Category modal handling
        const categoryModal = document.getElementById("categoryModal");
        document.getElementById("add-category-btn").addEventListener("click", () => {
            categoryModal.show();
        })

        //Ajax category form submission
        document.getElementById("category-form").addEventListener("submit", function(e) {
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
                    //Add new category to select and list
                    const categorySelect = document.querySelector('select[name="category"]');
                    const newOption = document.createElement("option");
                    newOption.value = data.category_id;
                    newOption.textContent = data.category_name;
                    categorySelect.appendChild(newOption);
                    newOption.selected = true;
                
                // Add to categories list
                const categoriesList = document.querySelector(".list-group-flush");
                const newCategoryLink = document.createElement("a");
                newCategoryLink.href = `?category=${data.category_id}`;
                newCategoryLink.className = "list-group-item list-group-item-action";
                newCategoryLink.textContent = data.category_name;
                categoriesList.appendChild(newCategoryLink);
                
                // Reset and close modal
                this.reset();
                categoryModal.hide();
                
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

       // Helper function to get CSRF Token
       
       function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== "") {
            const cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if(cookie.substring(0, name.length + 1) === (name + "=")) {
                    cookieValue = decodeURIComponent(cookie,substring(name.length + 1));
                    break;
                }
            }
        }
       return cookieValue;
    }
    
        });
