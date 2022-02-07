import '../../App.css';
import {Link} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import logo1 from '../../img/logo1.jpeg';

function Header() {
    return ( 
        <div className="containerFluid">
        <nav className="navbar navbar-expand-lg navbar-light navbar-fixed">
        <div className="container">
            <Link className="navbar-brand" to="/">
               <img src={logo1} alt="logo" className='logo'/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <Link className="nav-link text-dark" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-dark" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-dark" to="/courses">Courses</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-dark" to="/grants" >Grants and Aids</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-dark" to="/connects" >Connects</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-dark" to="/contact" >Contact Us</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-dark" to="/job" >Job Creation</Link>
                </li>
                <li className="nav-item btn ms-2">
                <Link className="nav-link p-1 mx-auto text-white" to="/donate" >Donate</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </div>
     );
}

export default Header;