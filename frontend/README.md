## Military Asset Management System

A full-stack web application designed to manage military assets such as vehicles, weapons, and ammunition across multiple bases. The system enables secure asset tracking, purchases, transfers, assignments, and user role management using Role-Based Access Control (RBAC).

## Live Demo

- Frontend: https://military-asset-management-swart.vercel.app

- Backend API: https://military-backend-olq6.onrender.com

## Login Credentials
# Admin
- Email: admin@gmail.com
- Password: 123456

# Commander
- Email: commander@gmail.com
- Password: 123456

# Logistics
- Email: logistics@gmail.com
- Password: 123456

## Features
# Authentication & Security
- JWT based login system
- Protected routes
- Secure password hashing with bcrypt

## Role-Based Access Control (RBAC)
# Role	    Access
- Admin	    Full Access
- Commander	Dashboard, Assignments
- Logistics	Dashboard, Purchases, Transfers

## Asset Management
- Add new purchases
- Transfer assets between bases
- Assign assets for missions/use
- View centralized dashboard

## User Management
- Admin can view all users
- Multi-user role system

## UI/UX
- Responsive design for mobile / tablet / desktop
- Clean modern interface

## Tech Stack
# Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Axios

# Backend
- Node.js
- Express.js
- JWT Authentication
- bcryptjs

# Database
- MongoDB Atlas

# Deployment
- Vercel (Frontend)
- Render (Backend)

## Project Structure
military-asset-management/
│── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── services/
│
│── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js

## API Endpoints
# Auth
- POST /api/auth/register
- POST /api/auth/login
- GET  /api/auth/users

# Assets
- GET  /api/assets
- POST /api/purchases
- POST /api/transfers
- POST /api/assignments

## Local Setup
# Clone Repository
git clone https://github.com/atulvats/military-asset-management.git
cd military-asset-management

## Backend Setup
cd backend
npm install
npm run start

# Create .env

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
PORT=5000

## Frontend Setup
cd frontend
npm install
npm run dev

## Future Improvements
- Audit logs
- Export reports
- Charts & analytics dashboard
- Email alerts
- Delete / edit users
- Advanced search filters

## Author
Atul Vats

GitHub: https://github.com/atulvats