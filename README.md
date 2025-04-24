## Table of Contents
- [UX Design](#ux-design)
- [Purpose of Project](#purpose)
- [Target Audience](#target-audience)
- [User Query](#user-query)
- [Features and Functionalities](#features)
- [Technologies used](#technologies)
- [Future Enhancements](#future-enhancements)
- [Design Rationale](#design-rationale)
- [Code Implementation](#code-implementation)
- [Internal and External Code](#internal-and-external-code)
- [Validation](#validator)
- [Commit Messages](#internal-and-external-code)
- [Finished Project](#finished-project)
- [Deployment](#deployment)
- [Getting Started](#getting-started)


# UX Design <a id="ux-design">

## 👤 User Persona
Name: Lia Addison
Age: 25
Occupation: University Student
Tech Savviness: Intermediate

Goals: 
   - Efficiently manage academic and extracurricular tasks
   - Prioritise assignments based on deadlines
   - Stay organised and reduce stress.

Frustrations:
   - Overwhelmed by multiple tasks with varying deadlines
   - Difficulty tracking progress across different categories
   - Needs a tool that adapts to both academic and personal tasks.

Behavior:
   - Uses a smartphone and laptop daily
   - Prefers apps with intuitive interfaces and minimal setup
   - Values features like task categorisation, due dates, priority indicators.

#README: CineLens(http://localhost:5501/) [CineLens]
# Purpose of Project <a id="purpose"></a>

The Task Manager is a comprehensive productivity application designed to help users organise, prioritise, and track their tasks efficiently. This Django-based web application provides a platform for managing personal and professional tasks with features like categorisation, priority setting, due date tracking and completion status.

Key Objectives: 

- Provide an intuitive interface for task management
- Enable users to categorise tasks for better organisation
- Implement priority levels to help with task prioritisation.
- Offer filtering and search capabilities for each task retrievel.
- Support task completion tracking and overdue notifications.


# Target Audience<a id="target-audience"></a>

The Task Manager is designed for:

- Professionals needing to organise work tasks and deadlines.
- Students managing academic assignments and projects.
- Individuals looking to improve personal productivity.
- Teams requiring a simple task tracking solution
- Anyone seeking a clean, efficient way to manage daily responsibiities.


# User Query<a id="user-query"></a>

This application addresses several user needs:
- "How can I organise my growing list of tasks?"
- "I need to prioritise my work - What's more important?"
- "How can I remember all my deadlines in one place?"
- "I want to see just my high-priority tasks for the day"
- "How can I categorise my tasks for different projects?"


# Features and Functionalities<a id="features"></a>

Core Features
1. Task Management
  - Create, edit, and delete tasks
  - Mark tasks as complete/incomplete
  - Set priorities(High/Medium/Low)
  - Add descriptions and due dates
  - Categorise tasks for better organisation.

2. User Experience
   - Responsive design for all device sizes
   - Intuitive dashboard with task overview
   - Visual indicators for priority and overdue tasks
   - Smooth animations for task completion
  
3. Filtering & Search
   - Filter by priority level
   - Filter by category
   - Searcg by task title
   - Reset filters easily

4. Category Management
   - Create custom categories
   - Assign tasks to categories
   - Filter tasks by category

5. User Authentication
   - Secure Login/Logout
   - User-specific task isolation
   - Personalised Dashboard
  
Advanced Features
- Ajax-powered category creation
- Client-side date formatting
- Task completion animations
- Overdue task highlighting
- Responsive design with Bootstrap 5

# Technologies <a id="technologies"></a>

Backend

- Django: Python web framework for rapid development
- Python
- Django Authentication: Secure user management.

Frontend
- HTML: Structure of my project
- Bootstrap 5: Responsive CSS framework
- Javascript: Interactive elements and AJAX
- CSS3: Custom styling and animations.

Development tools
- Git: Version control
- VS code: Development environment
  
# Future enhancements <a id="future-enhancements"></a>

 1. Task Sharing: Allow users to share tasks with others
 2. Recurring Tasks: Support for repeating tasks
 3. Calendar View: Alternative task visualisation
 4. File Attachments: Add files to tasks
 5. Email Reminders: Notifications for upcoming deadlines
 6. Team Collaboration: Multi-user task management
 7. Mobile App: Native application versions
 8. Dark mode: Alternate color scheme
 9. Task Templates: Predefined task structures.
    


# Design Rationale <a id="design-rationale"></a>

Design Overview:

This application follows a clean, minimalist design focused on usability and efficieny. The layout emphasises the task list while providing easy access to filters and actions.

Color scheme:

- Primary: Bootstrap blue (#od6efd) for main actions
- Priority Indicators:
  - High: Red (#dc3545)
  - Medium: Orange (#fd7e14)
  - Low: Gray (#6c757d)
- Completed Tasks: Light gray with strikethrough
- Overdue Tasks: Red text with bold styling

Typography: 
- Primary Font:
- Headings: Bold Bootstrap defaults
- Body Text: Clean, readable sans-serif

Layout:
- Two column design on desktop (filters + tasks)
- Stacked layout on mobile for better small-screen use
- Card-based UI for clear information grouping
- Consistent spacing with Bootstrap's padding system.

User Experience:
- Porgressive Disclosure: Advanced features hidden until needed
- Immediate Feedback: Visual responses to user actions
- Minimal clicks: Efficient task management workflows

# Code Implementation <a id="code-implementation"><a>

Key Implementation Decisions
1. Model Design
   - Task model with priority choices and category relationship
   - Separate category model for user-specific categorisation
   - Proper foreign key relationships with cascading rules
2. Form Handling
   - Dynamic category filtering based on logged-in user
   - Date input widgets for better UX
   - ModelForms for efficient data handling
3. View logic
   - Class based views where appropriate
   - Login-required decorator for security
   - Efficient query filtering
   - AJAX support for category creation
4. Template Structure
   - Base template for consistent layout
   - Modular components(e.g., category modal)
   - Conditional displays based on task states
5. JavaScript Enhancements
   - Task completion toggling via AJAX
   - Dynamic category addition
   - Modal handling
  
# Internal and External Code <a id="internal-and-external-code"></a>



# Validation <a id="validator"></a>





# Commit Messages <a id="commit-messages"></a>




# Finish Project <a id="finished-project"></a>




# Deployment <a id="deployment"></a>

Development Setup
1. VS- Terminal:  Clone the repository:
 git clone https://github.com/Imzzz01/taskmanager.git

2. Create and activate a virtual environment:
   - python -m venv venv
   - venv\Scripts\activate
     
3. Install Dependencies
   - pip install -r requirements.txt

4. Apply Migrations:
   - python manage.py migrate
  
5. Create a superuser:
   - python manage.py createsuperuser

6. Run the development server:
   - python manage.py runserver

# Getting started <a id="getting-started"></a>

First-Time Use
1. Register a new account or login
2. Create your first task using the "+ Add Task" button
3. Optionally create categories to organise your tasks
4. Use filters to focus on specific tasks
5. Mark Tasks complete as you finish them.

Tips for Effective Use
1. Prioritise: Use priority levels to highlight important tasks
2. Categorise: Group related tasks for better organisation
3. Date Tasks: Set due dates for time-sensitive items
4. Filter: Use the filters to focus on what matters now
5. Complete: Regularly mark finished tasks to keep your list current.







