import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

// Enhanced NotFound component with background styling
function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-full bg-gray-800 text-white p-8 rounded-md shadow-lg'>
      <h1 className='text-4xl font-bold mb-4'>404 - Page Not Found</h1>
      <p className='mb-8'>Sorry, the page you're looking for doesn't exist.</p>
      <Link to='/' className='text-blue-300 underline'>
        Go to Home
      </Link>
    </div>
  );
}

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route
          path='/'
          element={authUser ? <Home /> : <Navigate to='/login' />}
        />
        <Route
          path='/login'
          element={authUser ? <Navigate to='/' /> : <Login />}
        />
        <Route
          path='/signup'
          element={authUser ? <Navigate to='/' /> : <SignUp />}
        />
        {/* Wildcard route for handling 404 Not Found */}
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
