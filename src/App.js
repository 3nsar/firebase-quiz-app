import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Game from './pages/Game';
import Main from './pages/Main';
import Login from './pages/Login';
import { createContext } from 'react';
import { useState, useEffect} from 'react';
import Achievement from './pages/Achievement';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  
  
  const toggleTheme = () =>{
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
      <Router>
        <Navbar toggleTheme={ toggleTheme} theme={theme}/>
        <Routes>
        <Route path='/main' element={<Main />}/>
        <Route path='/game' element={<Game />}/>
        <Route path='/' element={<Login />}/>
        <Route path='/achievement' element={<Achievement />}/>
        </Routes>
      </Router>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
