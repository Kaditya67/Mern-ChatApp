# MERN-ChatApp

A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.IO. Supports one-to-one and group messaging with presence and message history.

Live demo: https://mern-chat-app-gules.vercel.app

## Features
- Secure user authentication (register / login)
- Real-time messaging via Socket.IO
- One-to-one and group chats
- Online presence / active-user indicator
- Persisted message history (MongoDB)
- Responsive UI built with React, Vite and Tailwind CSS

## Tech stack
- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express, Socket.IO
- Database: MongoDB (Mongoose)
- Auth: JWT

## Project structure
- /backend
    - server.js — backend entry point (Express + Socket.IO)
    - controllers/ — business logic for users, chats, messages
    - models/ — Mongoose schemas (User, Chat, Message)
    - routes/ — REST endpoints (auth, users, chats, messages)
    - socket/ — Socket.IO event handlers
- /frontend
    - src/ — React components, pages, context/state
    - public/ — static assets
    - index.html — app entry
- LICENSE
- README.md

## Prerequisites
- Node.js v14+
- MongoDB (local or Atlas)

## Environment variables
Create a `.env` in `/backend` (example):
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```
(Optional) In frontend, set VITE_BACKEND_URL or similar if required by the app.

## Backend — run locally
bash
cd backend
npm install
# set .env
npm run dev    # or `npm start` depending on scripts

Default: http://localhost:5000

## Frontend — run locally
bash
cd frontend
npm install
npm run dev

Default: http://localhost:5173

## Usage
1. Register or log in.
2. Start or join a chat (direct or group).
3. Send and receive messages in real time.
4. View chat history and presence status.

## Development tips
- Backend supports Socket.IO for real-time events — check socket/ for handlers.
- Use the React context to access auth and socket across components.
- Ensure CORS and CLIENT_URL are configured to allow frontend <-> backend communication.

## Contributing
1. Fork the repo
2. Create a branch: git checkout -b feature/YourFeature
3. Commit: git commit -am "Add feature"
4. Push: git push origin feature/YourFeature
5. Open a Pull Request
Report issues via GitHub Issues.

## License
MIT — see LICENSE for details.
