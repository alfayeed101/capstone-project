import '../../App.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import {microsoft, sdg8, tech4dev, venture} from '../images';
import micro from '../../img/micro.jpg';
import tech4dev from '../../img/tech4dev.jpeg';
import venture from '../../img/venture.png';
import sdg8 from '../../img/sdg8.png';

function Footer() {
    return ( 
    <div className="container-fluid footer fixed">
        <div className="footer container px-3 py-4">
            <div className="row">
                <div className="col-md-3 ">
                    <h3 className='fw-bold'>VSA</h3>
                    <p>Vocational skill acquisition is aimed at 
                        reducing the rate of unemployment, education and skill acquisition 
                        across all category.
                    </p>
                </div>
                <div className="col-md-3">
                <h3 className='fw-bold'>Get in Touch</h3>
                <p>alma.lawson@example.com</p>
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                <p>(406) 555-0120</p>
                </div>
                <div className="col-md-3">
                <h3 className='fw-bold'>Our Sponsors</h3>
                <div className='ps-3'>
                    <img src={tech4dev} alt="tech4dev" className='img px-2 pb-2'/>
                    <img src={venture} alt="venture" className='img pb-2'/><br/>
                    <img src={sdg8} alt="sdg8" className='img px-2'/> 
                    <img src={micro} alt="microsoft"  className='img'/>
                </div>
                </div>
                <div className="col-md-3">
                <h3 className='fw-bold'>Subscribe to our Newsletter</h3>
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Email" aria-label="Search"/>
                <button className="btn btn-outline-dark" type="submit">Submit</button>
                 </form>
                </div>
            </div>
        </div>
    </div> 
    );
}

export default Footer;