# Groop – Project Management Platform

**Groop** is a scalable **PERN-stack project management platform** designed for multi-workspace collaboration, structured task tracking, and productivity analytics.

Each workspace operates in isolation with its own projects, tasks, members, and analytics—ensuring clean separation of data and efficient team workflows.

---

## 📌 Overview

Groop is built for teams that require:
- Multi-workspace collaboration with strict data isolation
- Role-based project and task ownership
- Real-time visibility into progress and team performance

### Project Objectives
- Design a scalable backend architecture
- Implement efficient relational data models
- Enforce secure authentication and authorization
- Deliver a responsive, user-friendly frontend

---

## ✨ Core Features

### 🏢 Multiple Workspaces
- Independent workspaces with isolated data
- Workspace-level members, projects, and analytics

### 📁 Project & Task Management
- Create and manage projects within workspaces
- Assign tasks, set due dates, and track statuses
- Ownership-based task visibility

### 👥 User & Role Management
- Email-based team invitations
- Role-based access control (Admin / Member)
- Workspace-level permission handling

### 📊 Analytics Dashboard
- Project completion metrics
- Task progress visualization
- Team size and productivity insights

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM

**Services**
- Clerk (Authentication & Organizations)
- Neon (Serverless PostgreSQL)
- Nodemailer.js (Email invitations)

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
Client Response
```

---

## 🚧 Future Enhancements
- Advanced analytics and reporting
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

