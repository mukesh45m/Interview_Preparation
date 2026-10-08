# AI Interview Preparation & Job Matching Platform

An AI-powered full-stack web application that helps candidates prepare for job interviews by analyzing their Job Description (JD) and Resume/Self-Description.

The application uses the Google Gemini API to analyze job requirements, identify skill gaps, generate personalized technical and HR interview questions, and create a personalized interview preparation roadmap.

## Live Demo

https://interview-preparation-theta-opal.vercel.app/

## GitHub Repository

https://github.com/mukesh45m/Interview_Preparation

---

## Features

### User Authentication

- User Registration
- User Login
- Authentication & Authorization
- Protected Dashboard
- User-specific interview preparation workflow

### Job Compatibility Analysis

- Analyze Job Description with candidate information
- Generate Job Match Percentage
- Identify Matching Skills
- Identify Skill Gaps
- Compare candidate skills with target job requirements

### AI-Powered Interview Preparation

- Integrated Google Gemini API
- Personalized interview report generation
- Technical interview question generation
- HR interview question generation
- Job-specific preparation recommendations

### Skill Gap Analysis

- Identify missing or weak skills
- Highlight areas that need improvement
- Provide preparation recommendations
- Suggest relevant topics to prepare

### Preparation Roadmap

- Personalized preparation roadmap
- Recommended preparation topics
- Preparation guidance
- Suggested preparation timeline

---

## Application Workflow

1. Register or Login
2. Access the Dashboard
3. Enter Job Description
4. Provide Resume or Self-Description
5. Generate Interview Report
6. Analyze Job Compatibility
7. View Skill Gaps
8. Generate Technical Interview Questions
9. Generate HR Interview Questions
10. Get Preparation Recommendations
11. Get Personalized Preparation Roadmap

---

## Tech Stack

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Tailwind CSS
- Axios
- Vite

### Backend

- Node.js
- Express.js
- REST APIs

### Database

- MongoDB
- Mongoose

### Authentication & Security

- JWT
- Authentication & Authorization
- Cookies

### AI Integration

- Google Gemini API

### Tools

- Git
- GitHub
- Postman
- npm
- Vercel

---

## Project Structure

```text
Interview_Preparation/
│
├── Frontend/
│
├── Backend/
│
├── .gitignore
└── README.md
```markdown
---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/mukesh45m/Interview_Preparation.git
```

```bash
cd Interview_Preparation
```

---

## Frontend Setup

Navigate to the frontend directory:

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_API_URL=your_backend_api_url
```

Start the development server:

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

## Backend Setup

Open another terminal and navigate to the backend:

```bash
cd Backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_google_gemini_api_key
```

Start the backend server:

```bash
npm start
```

Or, if using nodemon:

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file in the required directories and add your credentials.

Example:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_google_gemini_api_key
VITE_API_URL=your_backend_api_url
```

Do not upload `.env` files or expose API keys and database credentials on GitHub.

Add the following to `.gitignore`:

```text
.env
.env.local
node_modules/
```

---

## How It Works

The application follows this workflow:

```text
User Registration / Login
          ↓
       Dashboard
          ↓
Job Description + Resume/Self-Description
          ↓
    Google Gemini API
          ↓
   Personalized Report
          ↓
 ┌───────────────────────┐
 │ Job Match Percentage  │
 │ Skill Gap Analysis    │
 │ Technical Questions   │
 │ HR Questions          │
 │ Preparation Guidance  │
 │ Preparation Roadmap   │
 └───────────────────────┘
```

---

## Job Match Analysis

The application analyzes the candidate's information against the target Job Description and provides:

- Job compatibility percentage
- Relevant matching skills
- Skill gaps
- Areas for improvement
- Preparation recommendations

---

## Interview Question Generation

Based on the target job requirements and candidate information, the system generates:

### Technical Questions
Questions related to the technologies, skills, and requirements mentioned in the target job.

### HR Questions
Questions designed to help candidates prepare for HR and behavioral interview rounds.

---

## Preparation Roadmap

The application generates a personalized roadmap that includes:

- Skills to improve
- Topics to study
- Recommended preparation areas
- Suggested preparation timeline

This helps candidates focus their preparation according to the requirements of their target job.

---

## Future Improvements

- Mock Interview Simulation
- Voice-based Interview
- Interview Answer Evaluation
- Interview History
- Performance Tracking
- Resume Improvement Suggestions
- Job Recommendations
- Company-specific Interview Preparation
- Advanced Interview Analytics

---

## Author

### Mukesh Patel

B.Tech Computer Science & Engineering

GitHub:  
https://github.com/mukesh45m

LinkedIn:  
https://linkedin.com/in/Mukesh-patel

---

## License

This project is developed for educational and portfolio purposes.
```
