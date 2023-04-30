import { Outlet } from 'react-router-dom';


// Components
import NavBar from './components/Navbar';
import './App.css'


function App() {


  return (
    
      <div className="App">
        <NavBar />
        <Outlet />
      </div>
        
      
        
    
  );
}

export default App
