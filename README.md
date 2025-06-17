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
- [Test Plan](#test-plan)
- [Commit Messages](#internal-and-external-code)
- [HTML Validation](#html-validation)
- [Finished Project](#finished-project)
- [Deployment](#deployment)
- [Getting Started](#getting-started)


# UX Design <a id="ux-design">

## 👤 User Persona

| **Attribute** | **Details**        |
|---------------|--------------------|
| Name          | Lia Addison        |
| Age           | 25                 |
| Occupation    | University Student |
| Tech Savviness| Intermediate       |

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

# User Journey <a id="user-journey"></a>

UX test 

Test Participants: 5 University students

Findings:
- Positive
     - Each task creation process
     - Effective use of categories for organisation
     - Clear priority indicators
- Challenges:
     - Desire for drag-and-drop task reordering
     - Confusion with filter reset functionality
     - Request for recurring task feature.
- Actionable Insights:
     - Implement drag-and-drop functionality in future updates
     - Improve filter reset UI for clarity
     - Consider adding recurring task options.
 
UX Mockup
![UX mockup](https://github.com/user-attachments/assets/337584cb-c580-4441-aa3b-b40b2f19c36d)

  
  

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

Backend:

I have built the core fuctionality using Django's powerful framework. 

1. Data organisation(Models)
   - Our category model lets users create personalised groups like ("study", "work", "shopping" etc) 
   - The task model handles all tasks details and smart features:
      - A three-tier priority system(High/Medium/Low) that drives visual cues.
      - Optional due dates with automatic overdue detection
      - Flexible categorisation that persists even if categories change.

2. Logic and processing (views)
   - Specialised views handle every user action:
      - A smart task listers that filters by priority or category
      - A secure creation/editing workflows with form validation
      - An efficient completion toggle that updates instantly via AJAX

3. User Interface (Templates)
   - Dynamic pages that adapt to your data:
      - Automatic priority coloring (red for urgent tasks)
      - Clean card-based layouts with hover actions
      - Interactive modals or adding categories without page reloads
    
Frontend: The Interactive Experience
- Javascript:
   - Instant task completion toggles
   - Smooth category creation popups

- Custom styling:
   - Clear visual hierarchy( priority colors, due date prominence)
   - Mobile-friendly designs that work on any device
   - Pleasant animations for completed tasks

Essential Frameworks:
- Django provides the secure foundation for user accounts and data handling
- Bootstrap 5 ensures professional, consistent interfaces

# Test Plan <a id="test-plan"></a>

[Test Plan-Taskmanager.docx](https://github.com/user-attachments/files/20213909/Test.Plan-Taskmanager.docx)



# Commit Messages <a id="commit-messages"></a>
![image](https://github.com/user-attachments/assets/88f635b2-b7a8-4472-9df6-ffd40d692400)

# Html Validation <a id="html-validation"></a>

View Source - Html validation
Login / Register
![image](https://github.com/user-attachments/assets/120ed1a8-3b3a-41b4-9202-2c3ba01c6e28)
![image](https://github.com/user-attachments/assets/0ecca8b1-eebe-4c51-90c1-f0cd01e1ffd4)

Dashboard 

![image](https://github.com/user-attachments/assets/128f0c6e-a139-46ef-a7a0-879194653424)

Add Tasks 

![image](https://github.com/user-attachments/assets/d9f61d9c-2f01-4da2-bb3b-ad6f3660486d)


CSS validation

![image](https://github.com/user-attachments/assets/db19fbfd-faea-48ef-8e74-91ca7a377649)


# Finish Project <a id="finished-project"></a>
![image](https://github.com/user-attachments/assets/35684212-d58a-4fb1-b766-a58d4842cd11)
![image](https://github.com/user-attachments/assets/2360b0af-8aee-4948-8a89-c3ccc06a510e)
![image](https://github.com/user-attachments/assets/2002a824-58d7-4d34-84b9-db33f54abc23)



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







