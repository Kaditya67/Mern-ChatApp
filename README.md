# MERN-ChatApp

A real-time chat app built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.IO. Supports one-to-one and group messaging, live user presence, and persistent chat history.

Live demo: https://mern-chat-app-gules.vercel.app

## Features
- Secure registration and login (JWT authentication)
- Real-time messaging with Socket.IO
- Direct (one-to-one) and group chats
- Live online status for users
- Persistent message history in MongoDB
- Responsive UI (React + Vite + Tailwind CSS)

## Tech Stack
- Frontend: React, Vite, Tailwind CSS  
- Backend: Node.js, Express, Socket.IO  
- Database: MongoDB (Mongoose)  
- Authentication: JWT

## Project Structure
```
/backend
    server.js        # Express + Socket.IO server entry
    controllers/     # User, chat, message logic
    models/          # Mongoose schemas (User, Chat, Message)
    routes/          # REST API endpoints
    socket/          # Socket.IO event handlers

/frontend
    src/             # React components, pages, context/state
    public/          # Static assets
    index.html       # Frontend entry

LICENSE
README.md
```

## Prerequisites
- Node.js v14 or higher  
- MongoDB (local or Atlas, ensure an accessible URI)

## Environment Variables (Backend)
Create a `.env` file in `/backend`:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```
(Frontend: set `VITE_BACKEND_URL` if required.)

## Running Locally

### Backend
```bash
cd backend
npm install
# create .env as above
npm run dev   # or: npm start
# By default: http://localhost:5000
```

### Frontend
```bash
cd frontend
npm install
npm run dev
# By default: http://localhost:5173
```

## Usage
- Register or log in  
- Start or join chats (direct or group)  
- Send real-time messages  
- View chat history and live user status

## Development Tips
- Socket.IO events and logic: `/backend/socket/`  
- Authentication and socket instance managed via React context in `/frontend/src/`  
- Ensure CORS settings and `CLIENT_URL` are correct for API access

## Contributing
1. Fork this repo  
2. Create a branch: `git checkout -b feature/YourFeature`  
3. Commit: `git commit -am "Add feature"`  
4. Push: `git push origin feature/YourFeature`  
5. Open a Pull Request  
Use GitHub Issues for bugs and suggestions.

## License
MIT — see LICENSE
