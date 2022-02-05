import '../../App.css';
import {Link} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

function Header() {
    return ( 
        <div className="containerFluid">
        <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed">
        <div className="container">
            <Link className="navbar-brand" to="/">
               <h2>Skill4profit</h2>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/courses">Courses</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link " to="/grants" >Grants and Aids</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link " to="/connects" >Connects</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link " to="/contact" >Contact Us</Link>
                </li>
                <li className="nav-item btn ms-2">
                <Link className="nav-link p-1 mx-auto" to="/donate" >Donate</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </div>
     );
}

export default Header;