
import react from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Home from './Pages/Home';
import NetflixShow from './Pages/NetflixShow';

function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
    <Routes>

    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/netflixshow" element={<NetflixShow></NetflixShow>}></Route>
    </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
