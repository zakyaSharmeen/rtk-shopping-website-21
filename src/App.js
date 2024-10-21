import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './omponents/Header';

import "./omponents/style.css"
import Home from './omponents/Home';
import CardDetails from "./omponents/CardDetails.jsx"

import { Routes, Route } from "react-router-dom";





function App() {
  return (
   <>
   <div>
    <Header/>
    

    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/card" element={<CardDetails />}></Route>


         
       
      </Routes>
   </div>
   </>
  );
}

export default App;
