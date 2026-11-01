🤖 CharanGPT

CharanGPT is a ChatGPT-like AI chatbot application built using React and Spring Boot. It provides a simple and responsive interface for interacting with Google's Gemini AI.

🚀 Features

- 💬 AI-powered chat
- 🤖 Gemini AI integration
- ⚡ React + Vite frontend
- ☕ Spring Boot backend
- 🔐 Environment variable support for API keys
- 🌐 Frontend and backend deployment support
- 📱 Responsive chat interface

🛠️ Technologies

- Java
- Spring Boot
- React
- Vite
- JavaScript
- CSS
- Google Gemini API
- Maven
- Git & GitHub

📁 Project Structure

CharanGPT/
├── backend/
│   └── demo/
│       ├── src/
│       ├── pom.xml
│       ├── mvnw
│       └── Dockerfile
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
└── README.md

▶️ Running the Project

Backend

Open a terminal in the project folder:

cd backend/demo

Run Spring Boot:

Windows:

mvnw.cmd spring-boot:run

The backend runs on:

http://localhost:8080

Frontend

Open another terminal:

cd frontend

Install dependencies:

npm install

Start the frontend:

npm run dev

The frontend runs on:

http://localhost:5173

🔑 Environment Variables

The Gemini API key should never be uploaded to GitHub.

Set the environment variable:

GEMINI_API_KEY=your_api_key_here

The Spring Boot backend reads the API key from this environment variable.

🌐 Deployment

The project can be deployed using:

- Frontend: Vercel
- Backend: Render

📸 Project

CharanGPT provides a simple ChatGPT-style interface where users can send questions and receive AI-generated responses.

👨‍💻 Author

Sri Charan

B.Tech Computer Science & Engineering

⭐ Future Improvements

- Chat history
- User authentication
- Multiple AI models
- Voice input
- Dark/light mode
- Improved mobile UI
- Conversation management