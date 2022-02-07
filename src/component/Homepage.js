import microsoft from '../img/microsoft.png';
import tech4dev1 from '../img/tech4dev1.png';
import venture from '../img/venture.png';
import imagee from '../img/imagee.png';
import sterling from '../img/sterling.png';
import sdg8 from '../img/sdg8.png';
import wwd from '../img/wwd.png';
import rect from '../img/rect.png';
import rect1  from '../img/rect1.png';
import rect2 from '../img/rect2.png';
import rect3 from '../img/rect3.png';
import rect4 from '../img/rect4.png';
import rect11 from '../img/rect11.png';
import image30 from '../img/image30.png';
import image82 from '../img/image82.png';
import { Link } from 'react-router-dom';
import Footer from './constant/Footer';

function Homepage() {
    return ( 
        <div>
        <div className="mt-3 container-fluid">
            <div className="row">
                <div className="col-md-5 p-5 mt-5" style={{margin: "auto"}}>
                    <h2>We see the opportunity <br/> to make a difference</h2>
                    <p>We are a non-profit social enterprise  that <br/> 
                        creates access to job creation, talent <br/>
                        discovery, skills acquisition <br/>
                        and mentoring / tutoring.</p>
                    <Link className="btn text-white me-4" to="/login">Get Started</Link>
                    <Link className="btn bg-white" to="/donate" style={{border: "1px solid #8B1736"}}>Donate</Link>
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4">
                            <img src={rect3} alt="image" style={{height :"220px"}} className="img-fluid py-2"/>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="row">
                        <div className="col-md-4">
                            <img src={rect4} alt="image" style={{height :"150px"}} /> 
                        </div> 
                        <div className="col-md-4">
                            <img src={image30} alt="image" style={{height :"150px"}} className="rounded mx-auto d-block"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
            <div className="row justify-content-center">
                {/* <h3 className='text-center p-3'>What We Do</h3> */}
                <img src={wwd} alt="" style={{width: '800px'}}/>
                {/* <div className="col-md-3"><img src={imagee} alt="tech4dev" className='img'/></div>
                <div className="col-md-3"><img src={tech4dev1} alt="tech4dev" className='img'/></div>
                <div className="col-md-3"><img src={sterling} alt="tech4dev" className='img'/></div>
                <div className="col-md-3"><img src={microsoft} alt="microsoft"  className='img'/></div> */}
               </div>
            </div>
            <div className="about mt-4 text-white container">
             <div className="row">
                 <div className="col-md-6">
                     <img src={image82} alt="image" style={{width: "500px", height: "370px"}}/>
                 </div>
                 <div className="col-md-6">
                <div>
                 <h2 className='' style={{color: "#A21942"}}>Our Mission</h2>
                 <p className='text-dark'>Creating wealth through information<br/> technology and vocational<br/> development </p>
                 </div>
                 <div className="">
                 <h2 className='' style={{color: "#A21942"}}>Our Vision</h2>
                 <p className='text-dark'>To reduce the rtae of poverty and<br/> illiteracy in nigeria before next<br/> decade</p>
                 </div>
                 <div>
                 <h2 className='' style={{color: "#A21942"}}>Our Values</h2>
                 <p className='text-dark'>Team work, Community growth, Technical <br/>growth, Leadership and Visibility</p> 
                 </div>
                 </div>
             </div>
             </div>
            <div className="feature mt-5">
                <h2 className='text-center'>Features</h2>
                <div className="row justify-content-center align-items-stretch">
                    <div className="col-md-4 card m-3">
                        <img src={rect} alt='image' className='card-img-top'/>
                        <div className="card-body">
                        <h5 class="card-title fw-bold">E-learning for tech and vocational skills  </h5>
                        <p class="card-text">The E-learnig platform with code/ID contains online classes on various tech, 
                            where user can enroll to acquire skills.
                        </p>
                        <Link to='/' class="btn text-white">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-md-4 card m-3">
                        <img src={rect1} alt='image' className='card-img-top'/>
                        <div className="card-body">
                        <h5 class="card-title fw-bold">Business connect and link</h5>
                        <p class="card-text">The business connect/link with cold ID contain businesses / ideas by registered user for direct 
                            interaction with customer/ investor/mentor
                        </p>
                        <Link to='/' class="btn text-white">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-md-4 card m-3">
                        <img src={rect2} alt='image' className='card-img-top'/>
                        <div className="card-body">
                        <h5 class="card-title fw-bold">Grants, aid and Government loans</h5>
                        <p class="card-text">The grant and government loan provide a platform for user to have information on the 
                        </p>
                        <Link to='/' class="btn text-white">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
           <div className="about my-4 p-5 mt-5 text-white" style={{backgroundImage: `url(${rect11})`,
            backgroundColor: "#EA9BBD"}}>
             <div className="row">
                 <div className="col-md-6 ">
                 <div className="form">
                 <div className="form-group my-3 pt-4">
                            <input type="text" className="form-control" placeholder='Full name eg John Doe'
                           />
                        </div>
                        <div className="form-group my-3 pt-4">
                            <input type="email" className="form-control" placeholder='admin@example.com'
                           />
                        </div>
                        <div className="form-group my-3 pt-4">
                            <input type="password" className="form-control" placeholder='Password1234'
                            />
                        </div>
                        <div className="form-group my-3 pt-4">
                            <input type="tel" className="form-control" placeholder='0801000000'
                            />
                        </div>
                        <div className="form-group my-3 pt-4">
                            <textarea  className="form-control" placeholder='Kindly drop an enquiry message'></textarea>
                        </div>
                        <div className="form-group my-3 text-center pt-4">
                          {/* <button className="btn w-50 text-white">Submit</button> */}
                        </div>
                    </div>
                 </div>
                 <div className="col-md-6 p-5 text-center">
                 <h4 className='pb-2'>Contact Us</h4>
                 <h2 className=''>Hope For Humanity</h2>
                    <p>Social media</p>
                    <span style={{color: "white"}}>
                    <Link to="/instagram.com"></Link>
                    <i className="fab fa-twitter px-3"></i>
                    <i className="fab fa-facebook px-3"></i>
                    <i className="fab fa-instagram px-3"></i>
                    <i className="fab fa-whatsapp px-3"></i>
                    </span>
                 </div>
                 
             </div>
            </div>
            <div className="about mt-4 container">
             <div className="row">
             <h2 className='text-center' style={{color: '#175977'}}>Customer Stories</h2>
                 <p className='text-center'>What our customers have to say</p>
             </div>
             </div>
             <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-2"><img src={imagee} alt="tech4dev" className='img'/></div>
                <div className="col-md-2"><img src={tech4dev1} alt="tech4dev" className='img'/></div>
                <div className="col-md-2"><img src={sterling} alt="tech4dev" className='img'/></div>
                <div className="col-md-2"><img src={microsoft} alt="microsoft"  className='img'/></div>
                <div className="col-md-2"><img src={venture} alt="venture" className='img'/></div>
                <div className="col-md-2"><img src={sdg8} alt="sdg8" className='img'/></div>
            </div>
            </div>
          </div>
          <Footer/>
        </div>
     );
}

export default Homepage;

