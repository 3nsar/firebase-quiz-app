import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Game from './pages/Game';
import Main from './pages/Main';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/game' element={<Game />}/>
        <Route path='/login' element={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
