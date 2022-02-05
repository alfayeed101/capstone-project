import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './component/constant/Header';
import Homepage from './component/Homepage';
import Login from './component/Login';
import Footer from './component/constant/Footer';
import Signup from './component/Signup';
import PrivateRoute from './component/PrivateRoute';
import About from './component/About';
import Courses from './component/Courses';
import Grants from './component/Grant';
import './App.css';
import Connects from './component/Connects';
import Contact from './component/Contact';
import Donate from './component/Donate';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <div className="">
       <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/grants" element={<Grants/>}/>
        <Route path="/connects" element={<Connects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/donate" element={<Donate/>}/>
        {/* <Route path="/home" element={<PrivateRoute><Homepage/></PrivateRoute>}/> */}
      </Routes>
      </div>
      {/* <Footer/> */}
    </div>
    </Router>
  );
}

export default App;
