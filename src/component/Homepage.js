import micro from '../img/micro.jpg';
import tech4dev from '../img/tech4dev.jpeg';
import venture from '../img/venture.png';
import sdg8 from '../img/sdg8.png';
import image30 from '../img/image30.png';
import { Link } from 'react-router-dom';
import Footer from './constant/Footer';

function Homepage() {
    return ( 
        <div className="mt-3">
            <div className="sect mx-auto py-5 text-center">
                <h1>Make the World a Better Place</h1>
                <p>We are a non-profit social enterprise that creates access to 
                job creation, <br/> talent discovery, skills acquisition and mentoring / tutoring.</p>
                <button className="btn btn-secondary">Learn More</button>
            </div>
            <div className="container">
            <div className="row mt-3">
                <div className="col-md-3"><img src={tech4dev} alt="tech4dev" className='img'/></div>
                <div className="col-md-3"><img src={venture} alt="venture" className='img'/></div>
                <div className="col-md-3"><img src={sdg8} alt="sdg8" className='img'/></div>
                <div className="col-md-3"><img src={micro} alt="microsoft"  className='img'/></div>
                </div>
            </div>
            <div className="container feature mt-4">
                <h1 className='text-center'>Features</h1>
                <div className="row">
                    <div className="col-md-4 card m-3">
                        <img src={image30} alt='image' className='p-2'/>
                        <div className="card-body">
                        <h5 class="card-title fw-bold">E-learning for tech and vocational skills  </h5>
                        <p class="card-text">The E-learnig platform with code/ID contains online classes on various tech, 
                            where user can enroll to acquire skills.
                        </p>
                        <Link to='/' class="btn btn-secondary mx-auto">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-md-4 card m-3">
                        <img src={image30} alt='image' className='p-2'/>
                        <div className="card-body">
                        <h5 class="card-title fw-bold">Business connect and link</h5>
                        <p class="card-text">The business connect/link with cold ID contain businesses / ideas by registered user for direct 
                            interaction with customer/ investor/mentor
                        </p>
                        <Link to='/' class="btn btn-secondary">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-md-4 card m-3">
                        <img src={image30} alt='image' className='p-2'/>
                        <div className="card-body">
                        <h5 class="card-title fw-bold">Grants, aid and Government loans</h5>
                        <p class="card-text">The grant and government loan provide a platform for user to have information on the 
                        </p>
                        <Link to='/' class="btn btn-secondary mx-auto">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about mt-4 container">
             <div className="row">
                 <div className="col-md-6 sect">
                     {/* <img src={image30} alt="image" /> */}
                 </div>
                 <div className="col-md-6 p-5">
                 <h1 className='text-center'>About Us</h1>
                 <p>We are a non-profit social enterprise that creates access to job creation, 
                    talent discovery, skills acquisition and mentoring / tutoring.</p>
                    <div className="text-center">
                    <Link className='btn btn-secondary' to='/about'>Learn More</Link>
                    </div>
                 </div>
             </div>
             </div>
            <div className="about mt-4 container">
             <div className="row">
                 <div className="col-md-6 sect my-5 p-5">
                 <h1 className='text-center '>Our Mission</h1>
                 <p className=''>Creating wealth through information technology and vocational development </p>
                 </div>
                 <div className="col-md-6 my-5 p-5 sect">
                 <h1 className='text-center'>Our Vision</h1>
                 <p>To reduce the rtae of poverty and illiteracy in nigeria before next decade</p>
                 </div>
             </div>
             </div>
            <div className="about my-4 container">
             <div className="row">
                 <div className="col-md-6 sect">
                 <div className="form ">
                        <div className="form-group my-3 pt-4">
                            <input type="email" className="form-control" placeholder='admin@example.com'
                           />
                        </div>
                        <div className="form-group my-3 pt-2">
                            <input type="password" className="form-control" placeholder='Password1234'
                            />
                        </div>
                        <div className="form-group my-3 pt-2">
                            <input type="tel" className="form-control" placeholder='0801000000'
                            />
                        </div>
                        <div className="form-group my-3 pt-2">
                            <textarea  className="form-control" placeholder='Kindly drop an enquiry message'></textarea>
                        </div>
                        <div className="form-group my-3 text-center">
                          <button className="btn btn-secondary">Submit</button>
                        </div>
                    </div>
                 </div>
                 <div className="col-md-6 p-5 text-center">
                 <h1 className='pb-2'>Contact Us</h1>
                 <h4>Hope For Humanity</h4>
                    <p>Social media</p>
                 </div>
             </div>
            </div>
            <Footer/>
        </div>
     );
}

export default Homepage;

