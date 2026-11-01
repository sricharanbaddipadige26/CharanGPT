🤖 CharanGPT

CharanGPT is a full-stack AI chatbot application inspired by ChatGPT. It provides a simple and interactive chat interface where users can send questions and receive AI-generated responses using the Google Gemini API.

🚀 Live Demo

Frontend:
https://charan-gpt-two.vercel.app

Backend:
https://charangpt-2.onrender.com

---

✨ Features

- 💬 Interactive AI chatbot
- 🤖 Google Gemini API integration
- ⚡ Real-time chat responses
- 🎨 Clean and responsive user interface
- 🆕 New Chat option
- 🔐 API key stored securely using environment variables
- 🌐 Deployed frontend and backend
- 🔗 REST API communication between React and Spring Boot

---

🛠️ Technologies Used

Frontend

- React.js
- Vite
- JavaScript
- HTML
- CSS

Backend

- Java
- Spring Boot
- REST API
- Maven

AI

- Google Gemini API

Deployment

- Vercel — Frontend
- Render — Backend

Version Control

- Git
- GitHub

---

📁 Project Structure

CharanGPT/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   └── demo/
│       ├── src/
│       ├── pom.xml
│       ├── mvnw
│       └── Dockerfile
│
└── README.md

---

⚙️ How to Run Locally

1. Clone the repository

git clone https://github.com/sricharanbaddipadige26/CharanGPT.git

cd CharanGPT

2. Start the Frontend

Open a terminal:

cd frontend
npm install
npm run dev

Frontend will run at:

http://localhost:5173

3. Start the Backend

Open a second terminal:

cd backend/demo

Then run:

.\mvnw.cmd spring-boot:run

Backend will run on:

http://localhost:8080

---

🔑 Environment Variables

The Gemini API key should never be uploaded to GitHub.

Set the environment variable:

GEMINI_API_KEY=your_api_key_here

The Spring Boot application uses the environment variable for the Gemini API configuration.

---

🔄 Application Flow

User
  ↓
React Frontend
  ↓
Spring Boot REST API
  ↓
Google Gemini API
  ↓
AI Response
  ↓
React Frontend
  ↓
User

---

🌐 Deployment

Frontend

The React frontend is deployed using Vercel.

Backend

The Spring Boot backend is deployed using Render with Docker.

The frontend communicates with the deployed backend through:

https://charangpt-2.onrender.com/api/chat

---

📸 Project Preview

Add screenshots of your application here:

![CharanGPT Screenshot](screenshots/chat.png)

---

🎯 Future Improvements

- User authentication
- Chat history storage
- Multiple conversations
- Dark/light theme
- Markdown response formatting
- Code syntax highlighting
- Voice input
- File upload support
- Database integration

---

👨‍💻 Developer

Sri Charan

B.Tech Computer Science & Engineering

---

⭐ If you like this project

Give the repository a ⭐ on GitHub!