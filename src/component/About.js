import {Link} from 'react-router-dom';
import adeolu from '../img/adeolu.png';
import adijat from '../img/adijat.png';
import adaku from '../img/adaku.png';
import kene from '../img/kene.png';
import usen from '../img/usen.png';
import oluchi from '../img/oluchi.png';
import malcom from '../img/malcom.png';
import abayomi from '../img/abayomi.png';
import reg2 from '../img/reg2.png';
import rect4 from '../img/rect4.png';
import rect7 from '../img/rect7.png';
import rect8 from '../img/rect8.png';
import rect9 from '../img/rect9.png';
import rect12 from '../img/rect12.png';
import rect13 from '../img/rect13.png';
import rect14 from '../img/rect14.png';
import rect15 from '../img/rect15.png';
import rect16 from '../img/rect16.png';
import Footer from './constant/Footer';

function About() {
    return (
        <div className="">
          <div className="about mt-4 container">
             <div className="row">
                  <div className="col-md-6 p-5">
                 <h2 className='text-center '>About Us</h2>
                 <p>We are a non-profit social enterprise that creates access to job creation, talent discovery, skills acquisition and mentoring / tutoring.
                    We providing functional skills to young people thus improving 
                    their quality of life. Skills for All Foundation is a social enterprise 
                    that promotes the cause and advancement of Teenage, Youth, 
                    and Adult (Graduates, Dropout and Uneducated )
                    with more focus on vulnerable Teenage and Young people living
                    in under-served communities through training in technology, 
                    skill acquisitions, mentorship and Internship placements.
                </p>
                <div className="pt-4">
                    <Link className="btn text-white" to='/donate'>Donate</Link>
                </div>
                 </div>
                 <div className="col-md-6">
                     <img src={rect12} alt="image" className='ps-1'/>
                 </div>
             </div>
             </div> 
             <div className="about mt-4 container">
             <div className="row">
                 <div className="col-md-6 my-5 p-2">
                 <h2 className=''>Our Target</h2>
                 <p className=''>Youth : 20 - 35 <br/>
                                Adult : 35 and above <br/>
                                Class : Graduates, Dropout and Uneducated.</p>
                <div className="pt-4">
                    <Link className="btn text-white" to='/donate'>Donate</Link>
                </div>
                 </div>
                 <div className="col-md-6 my-5 p-3">
                     <div className="row">
                         <div className="col-md-3">
                         <img src={rect8} alt="image" style={{width: "100px"}} className='pb-2'/>    
                        <img src={rect9} alt="image" style={{width: "100px"}}/>
                         </div>
                         <div className="col-md-3">
                         <img src={rect7} alt="image" className='pb-3' style={{width: "100px", height: "200px"}}/> 
                         </div>
                         <div className="col-md-3">
                            <img src={reg2} alt="image" style={{width: "100px"}} className='pb-3'/>
                            <img src={rect4} alt="image" style={{width: "100px"}}/>
                         </div>
                     </div>
                      
                     
                 </div>
             </div>
             </div>
             <div className="about mt-4 container">
             <div className="row">
             <h2 className='text-center mb-3'>Benefits</h2>
             <div className="col-md-6 ">
                 <img src={rect15} alt="image" />
             </div>
                 <div className="col-md-6 p-5">
                 <h2 className='text-center'>Skill Acquisition</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis duis imperdiet sapien
                    eget ultrices mi nunc. Felis integer nibh erat a morbi enim sed. Sapien commodo, 
                    aliquet et, sit volutpat enim egestas massa tristique. Sit elementum congue ante vel 
                    egestas amet dolor facilisis morbi..</p>
                <div className="pt-4">
                    <Link className="btn text-white" to='/courses'>Get Started</Link>
                </div>
                 </div>
             </div>
             </div>
             <div className="about mt-4 container">
             <div className="row">
                <div className="col-md-6 p-5">
                 <h2 className='text-center'>Product and Talent Discovery </h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis duis imperdiet sapien
                    eget ultrices mi nunc. Felis integer nibh erat a morbi enim sed. Sapien commodo, 
                    aliquet et, sit volutpat enim egestas massa tristique. Sit elementum congue ante vel 
                    egestas amet dolor facilisis morbi..</p>
                <div className="pt-4">
                    <Link className="btn text-white" to='/courses'>Get Started</Link>
                </div>
                 </div>
                 <div className="col-md-6">
                 <img src={rect16} alt="image" />
                 </div>
             </div>
             </div>
             <div className="about mt-4 container">
             <div className="row">
             <div className="col-md-6">
                 <img src={rect13} alt="image" />
             </div>
                 <div className="col-md-6 p-5">
                 <h2 className='text-center'>Job Creation</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis duis imperdiet sapien
                    eget ultrices mi nunc. Felis integer nibh erat a morbi enim sed. Sapien commodo, 
                    aliquet et, sit volutpat enim egestas massa tristique. Sit elementum congue ante vel 
                    egestas amet dolor facilisis morbi..</p>
                <div className="pt-4">
                    <Link className="btn text-white" to='/courses'>Get Started</Link>
                </div>
                 </div>
             </div>
             </div>
             <div className="about mt-4 container">
             <div className="row">
                <div className="col-md-6 p-5">
                 <h2 className='text-center'>Mentoring / Tutoring </h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis duis imperdiet sapien
                    eget ultrices mi nunc. Felis integer nibh erat a morbi enim sed. Sapien commodo, 
                    aliquet et, sit volutpat enim egestas massa tristique. Sit elementum congue ante vel 
                    egestas amet dolor facilisis morbi..</p>
                <div className="pt-4">
                    <Link className="btn text-white" to='/courses'>Get Started</Link>
                </div>
                 </div>
                 <div className="col-md-6">
                 <img src={rect14} alt="image" />
                 </div>
             </div>
             </div>
             <div className="about mt-4 container py-4">
             <div className="row justify-content-center">
             <h2 className='text-center my-3'>Our Awesome Team</h2>
             <p className="text-center">We achieve more Together!!!</p>
             <div className="col-md-4 card m-3">
                        <img src={adeolu} alt='image' className='p-2'/>
                        <div className="card-body">
                        <h5 className="card-title fw-bold">Adeolu Olayinka</h5>
                        <p className="card-text">Cyber Security</p>
                        </div>
              </div>
              <div className="col-md-4 card m-3">
                        <img src={adijat} alt='image' className='p-2'/>
                        <div className="card-body">
                        <h5 className="card-title fw-bold">Adijat Titilayo Atanda</h5>
                        <p className="card-text">Product Design</p>
                        </div>
              </div>
              <div className="col-md-4 card m-3">
                        <img src={adaku} alt='image' className='p-2'/>
                        <div className="card-body">
                        <h5 className="card-title fw-bold">Ruth A Nwokoukwu</h5>
                        <p className="card-text">Product Management</p>
                        </div>
              </div>
             </div>
             <div className="row justify-content-center">
             <div className="col-md-4 card m-3">
                        <img src={kene} alt='image' className='p-2'/>
                        <div className="card-body">
                        <h5 className="card-title fw-bold">Ojiteli Kenechukwu C</h5>
                        <p className="card-text">Software Development</p>
                        </div>
              </div>
              <div className="col-md-4 card m-3">
                        <img src={usen} alt='image' className='p-2'/>
                        <div className="card-body">
                        <h5 className="card-title fw-bold">Usen Jackson</h5>
                        <p className="card-text">Software Development</p>
                </div>
              </div>
              <div className="col-md-4 card m-3">
                        <img src={oluchi} alt='image' className='p-2'/>
                        <div className="card-body">
                        <h5 className="card-title fw-bold">Onuoha Oluchi</h5>
                        <p className="card-text">Data Science</p>
                </div>
              </div>
             </div>
             <div className="row justify-content-center">
             <div className="col-md-4 card m-3">
                        <img src={malcom} alt='image' className='p-2'/>
                        <div className="card-body">
                        <h5 className="card-title fw-bold">Ovwighose Malcom</h5>
                        <p className="card-text">Product Design</p>
                        </div>
              </div>
              <div className="col-md-4 card m-3">
                        <img src={abayomi} alt='image' className='p-2'/>
                        <div className="card-body">
                        <h5 className="card-title fw-bold">Abayomi Scott</h5>
                        <p className="card-text">Product Management</p>
                </div>
              </div>
             </div>
             </div>
             <Footer/>
        </div>
      );
}

export default About;