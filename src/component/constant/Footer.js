import '../../App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import tech4dev from '../../img/tech4dev.jpeg';
import venture from '../../img/venture.png';
import sdg8 from '../../img/sdg8.png';

function Footer() {
    return ( 
    <div className="container-fluid footer fixed text-white">
        <div className="footer container px-3 py-4">
            <div className="row">
                {/* <div className="col-md-3"></div> */}
                <div className="col-md-4 ps-1">
                    <h3 className='fw-bold'>SkillForAll</h3>
                    <p>Vocational skill acquisition is aimed at 
                        reducing the rate of unemployment, education and skill acquisition 
                        across all category.
                    </p>
                </div>
                <div className="col-md-4 ps-1">
                <h3 className='fw-bold'>Get in Touch</h3>
                <p>alma.lawson@example.com</p>
                <p>4517 Washington Ave. <br/> Manchester, Kentucky 39495</p>
                <p>(406) 555-0120</p>
                </div>
                {/* <div className="col-md-3">
                <h3 className='fw-bold'>Our Sponsors</h3>
                <div className='ps-3'>
                    <img src={tech4dev} alt="tech4dev" className='img px-2 pb-2'/>
                    <img src={venture} alt="venture" className='img pb-2'/><br/>
                    <img src={sdg8} alt="sdg8" className='img px-2'/> 
                    <img src={micro} alt="microsoft"  className='img'/>
                </div>
                </div> */}
                <div className="col-md-4">
                <h3 className='fw-bold'>Subscribe to our Newsletter</h3>
                <form className="d-flex">
                <input className="form-control" type="search" placeholder="Email" aria-label="Search"/>
                <button className="btn text-white" type="submit">Submit</button>
                 </form>
                 <div className="logo1 py-3">
                 <span>
                 <i className="fab fa-linkedin ps-1"></i>
                    <i className="fab fa-twitter ps-3"></i>
                    <i className="fab fa-facebook ps-3"></i>
                    <i className="fab fa-instagram ps-3"></i>
                    <i className="fab fa-whatsapp ps-3"></i>
                    </span>
                 </div>
                </div>
            </div>
        </div>
    </div> 
    );
}

export default Footer;