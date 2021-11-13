import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import {useState} from 'react'
function App() {

  const [isLoggedIn, setIsLoggedIn]= useState(false)

  return (
    <div className="appContainer">
      {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn}/>}
      {isLoggedIn && <Dashboard />}
    </div>
  );
}

export default App;
