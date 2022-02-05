import rect5 from '../img/rect5.png';
import rect from '../img/rect.png';
import rect6 from '../img/rect6.png';
import rect7 from '../img/rect7.png';
import rect8 from '../img/rect8.png';
import rect9 from '../img/rect9.png';
import rect10 from '../img/rect10.png';
import Footer from './constant/Footer';

function Courses() {
    return ( 
        <div className="">
        <div className="mt-3 container-fluid">
            <div className="row">
                <div className="col-md-5 p-5 mt-5">
                    <h2>Learn skills that go <br/>beyond certifications</h2>
                    <p>All our programs are specifically designed to empower <br/>
                        young African boys and girls in tech with the <br/>
                        technical and career skills needed to <br/>
                        scale in their fields. </p>
                </div>
                <div className="col-md-7">
                    <img src={rect5} alt="image" className='p-3' style={{width: "700px"}}/>
                </div>
            </div>
        </div>
        <div className="container text-center mt-5">
            <h2>Get Skills and Acquire Knowledge</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus eu ut fames massa 
                lobortis at convallis mi <br/>cras. Arcu ac fringilla tristique nibh pulvinar cursus 
                elementum. A, hendrerit quis nulla odio vitae libero odio <br/> elementum donec. Ullamcorper
                 sagittis, tincidunt urna 
            </p>
            <form className="d-flex justify-content-center pt-1">
                <input className="form-control w-50" type="search" placeholder="Search by job, company, location" 
                aria-label="Search"/>
                <button className="btn text-white" type="submit">Search</button>
            </form>
            <h3 className='p-4'>Available Skills</h3>
            <div className="row justify-content-center">
            <div className="col-md-4 card my-2 mx-1">
                        <img src={rect} alt='image' className='p-2'/>
                        <div className="card-body">
                        <h5 class="card-title fw-bold">E-learning for tech</h5>
                        <p class="card-text">The E-learning platform with code/ID contains online classes on various tech, 
                            where user can enroll to acquire skills</p>
                        <button className="btn text-white">Get Started</button>
                        </div>
              </div>
              <div className="col-md-4 card my-2 mx-1">
                        <img src={rect6} alt='image' className='p-2'/>
                        <div className="card-body">
                        <h5 class="card-title fw-bold">Catering</h5>
                        <p class="card-text">The business connect/link with cold ID contain businesses / ideas by registered user for direct 
                        interaction with customer/ investor/mentor</p>
                        <button className="btn text-white">Get Started</button>
                        </div>
              </div>
              <div className="col-md-4 card my-2 mx-1">
                        <img src={rect7} alt='image' className='p-2'/>
                        <div className="card-body">
                        <h5 class="card-title fw-bold">Coding</h5>
                        <p class="card-text">The grant and government loan provide a platform for user to 
                        have information on the </p>
                        <button className="btn text-white">Get Started</button>
                        </div>
              </div>
                </div>
                <div className="row justify-content-center pb-5">
            <div className="col-md-4 card my-2 mx-1">
                        <img src={rect8} alt='image' className='p-2'/>
                        <div className="card-body">
                        <h5 class="card-title fw-bold">Fashion Design</h5>
                        <p class="card-text">The Fashion  platform with code/ID contains online classes on various tech, 
                        where user can enroll to acquire skills</p>
                        <button className="btn text-white">Get Started</button>
                        </div>
              </div>
              <div className="col-md-4 card my-2 mx-1">
                        <img src={rect9} alt='image' className='p-2'/>
                        <div className="card-body">
                        <h5 class="card-title fw-bold">Barbing</h5>
                        <p class="card-text">The business connect/link with cold ID contain businesses / ideas by registered user for direct 
                        interaction with customer/ investor/mentor</p>
                        <button className="btn text-white">Get Started</button>
                        </div>
              </div>
              <div className="col-md-4 card my-2 mx-1">
                        <img src={rect10} alt='image' className='p-2'/>
                        <div className="card-body">
                        <h5 class="card-title fw-bold">Product Management</h5>
                        <p class="card-text">The grant and government loan provide a platform for user to 
                        have information on the  </p>
                        <button className="btn text-white">Get Started</button>
                        </div>
              </div>
                </div>
            </div>
            <Footer/>
        </div>
        
     );
}

export default Courses;