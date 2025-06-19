


/**Solution Overview
Frontend Framework: React.js with Vite.

Styling: Bootstrap 5 for responsive, clean UI.

Dummy Auth: Login form with predefined user IDs (1 leader, 4 members).

Form: Collects answers to the 10 questions with validation for required fields.

Dummy Database: localStorage stores responses by user ID, question, and date.

Dashboard:
Filters responses by date range.

Views individual team member answers by user ID.

Views collective answers by question.

CSV export for reports.

Questions:
Today's Date * (Date input)

Your Name * (Text input, pre-filled from auth)

New Leads Generated * (Textarea, company names)

Client Meetings * (Textarea, company names)

New Opportunities * (Textarea, company names and amounts)

Closed Opportunities * (Textarea, company names and amounts)

New Activations Confirmed * (Textarea, company names, dates, locations)

Upcoming Meetings - Next Week * (Textarea, company names)

Current Roadblocks or Barriers * (Textarea)

Morale Score * (Select, 1–10 scale)

Assumptions:
5 users (1 leader: leader1, 4 members: member1–4).

Morale Score is a 1–10 dropdown.

Required fields (*) are validated.

No backend; localStorage simulates database.

 */


/**
 * File structure: 
 * uso-report-app/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── uso-logo.png (optional, placeholder)
│   ├── components/
│   │   ├── AuthForm.jsx
│   │   ├── ReportForm.jsx
│   │   ├── LeaderDashboard.jsx
│   │   └── Navbar.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── bootstrap.min.css (CDN used in index.html)
├── package.json
├── vite.config.js
└── README.md
 */