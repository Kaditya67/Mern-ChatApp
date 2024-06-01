import './App.css';  // Importing CSS styles for the application
import Login from './pages/login/Login';  // Importing the Login,SignUp and Home component from the specified path
import SignUp from './pages/signup/SignUp'; 
import Home from './pages/home/Home';  


function App() {
  // The App component returns a div that centers the Login component on the screen
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Home />
    </div>
  );
}

export default App;  // Exporting the App component as the default export
