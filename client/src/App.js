import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/Landing';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App p-10">
      <Navbar/>
      <br>
      </br>
      
      <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<Landing/>}/>
        <Route path ="/cart" element = {<Cart/>}/>
        </Routes></BrowserRouter>
      Namaste
    </div>
  );
}

export default App;
