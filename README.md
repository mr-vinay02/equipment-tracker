 Equipment Tracker

A simple full-stack web application to manage equipment records.
Users can add, view, edit, and delete equipment along with their type, status, and last cleaned date.

This project was built as part of an intern take-home assignment to demonstrate understanding of frontend, backend, and basic data handling.

Features :

View all equipment in a table

Add new equipment

Edit existing equipment

Delete equipment

Track:

Equipment Name

Type (Machine, Vessel, Tank, Mixer)

Status (Active, Inactive, Under Maintenance)

Last Cleaned Date

Clean and simple UI

REST API based architecture

Tech Stack :

Frontend 

React (Create React App)

Axios

CSS (basic styling)

Backend

Node.js

Express.js

REST APIs

Database

JSON file (equipment.json) used as a lightweight data store

📁 Project Structure
equipmenttracker/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── equipmentRoutes.js
│   ├── data/
│   │   └── equipment.json
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── EquipmentForm.jsx
│   │   │   └── EquipmentTable.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
│
└── README.md

⚙️ How to Run the Project Locally
1️⃣ Clone the Repository
git clone <your-repo-url>
cd equipmenttracker

2️⃣ Start the Backend
cd backend
npm install
node server.js


You should see:

Server running on port 5000


Test backend:

http://localhost:5000/api/equipment

3️⃣ Start the Frontend (in a new terminal)
cd frontend
npm install
npm start


Open in browser:

http://localhost:3000

🔌 API Endpoints
Method	Endpoint	Description
GET	/api/equipment	Get all equipment
POST	/api/equipment	Add new equipment
PUT	/api/equipment/:id	Update equipment
DELETE	/api/equipment/:id	Delete equipment

Assumptions Made

Authentication is not required

Data is stored in a JSON file instead of a database

The “Last Cleaned” date is updated when equipment is added or edited

Single-user usage (no concurrency handling)

Future Improvements

If more time were available, I would:

Replace JSON storage with a real database (MongoDB / MySQL)

Add search and filtering

Add sorting by date or status

Improve form validation and error handling

Make the UI fully mobile-responsive

Add loading indicators and empty-state messages

Conclusion

This project demonstrates:

Full-stack development skills

REST API design

React component architecture

Basic state management

Clean and readable code structure
