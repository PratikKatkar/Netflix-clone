
import react from 'react';
import {BrowserRouter,  Route} from "react-router-dom"
import {Routes} from "react-router-dom"
import './App.css';
import Footer from './Componunts/Footer/Footer';
import Home from './Pages/Home';
import NetflixShow from './Pages/NetflixShow';

function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
    <Routes>

    <Route exact path="/" element={<Home></Home>}></Route>
    <Route path="/netflixshow" element={<NetflixShow></NetflixShow>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
