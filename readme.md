

#  Groop – Project Management Platform

Groop is a scalable project management web application that enables teams to collaborate efficiently across multiple isolated workspaces. Each workspace maintains its own projects, tasks, analytics, and members, ensuring clear separation and structured collaboration.

The platform supports end-to-end project and task management, role-based access control, and analytics dashboards to help teams track productivity and progress using data-driven insights.

---

## 📌 Overview

Groop is designed for teams that require:
- Structured collaboration across multiple projects
- Clear role-based responsibilities
- Visibility into project progress and team performance

Key objectives of the project:
- Scalable backend architecture
- Efficient relational database design
- Secure authentication and authorization
- Clean, responsive, and user-friendly interface

---

## ✨ Core Features

### 🏢 Multiple Workspaces
- Create and manage multiple independent workspaces
- Each workspace contains its own projects, tasks, and members
- Full isolation between workspaces

### 📁 Project Management
- Create, update, and manage projects within a workspace
- Assign team members to projects
- Track project-level progress and status

### ✅ Task Management
- Assign tasks to team members
- Set due dates and priorities
- Update task status (To Do / In Progress / Completed)
- Track task ownership and deadlines

### 👥 User & Role Management
- Invite team members via email
- Role-based access control (Admin / Member)
- Manage workspace members and permissions
- View user activity within projects

### 📊 Analytics Dashboard
- Project completion rates
- Task progress visualization
- Team size insights
- Productivity-focused metrics for decision-making

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- HTML5
- JavaScript

### Backend
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM

### Authentication & Services
- Clerk (Authentication & Organizations)
- Neon (Serverless PostgreSQL)
- Nodemailer.js (Email Invitations)

### Tools
- Git & GitHub
- Postman
- Vercel / Railway (Deployment)

---

## 🏗️ Architecture & Data Flow

```text
Client (React UI)
   ↓
API Layer (Express.js)
   ↓
Prisma ORM
   ↓
PostgreSQL (Neon)
   ↓
Response back to Client

```

## 🔐 Security & Best Practices
- Role-based access control  
- Protected routes using authentication middleware  
- Secure handling of environment variables  
- Server-side input validation  
- Email-based invitation workflow  

---

## 🚧 Future Enhancements
- Advanced analytics and reporting  
- Notifications and reminders  
- Activity logs  
- Performance optimizations  
- Fine-grained permissions at task level  

---

## ❌ Contribution Policy
This project is not open for contributions.

- Pull requests are not accepted  
- Issues are disabled  
- The repository is intended solely for showcase and evaluation purposes  

---

## 📄 License
This project is licensed under the **MIT License**.

---

## 👤 Author
**Your Name**  
GitHub: https://github.com/bhargavmalasala  
LinkedIn: https://linkedin.com/in/tzbhargav  

