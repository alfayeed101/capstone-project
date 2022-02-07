
/*import imagee from '../img/imagee.png';
import image30 '../img/image30.png';
import maicom from '../img/maicom.png';
import Footer from './constant/Footer';*/
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
                 <div className="col-md-6 sect">
                     {/* <img src={image30} alt="image" className='ps-1'/> */}
                 </div>
                 <div className="col-md-6 p-5">
                 <h1 className='text-center '>About Us</h1>
                 <p>We are a non-profit social enterprise that creates access to job creation, talent discovery, skills acquisition and mentoring / tutoring.
                    We providing functional skills to young people thus improving 
                    their quality of life. Skills for All Foundation is a social enterprise 
                    that promotes the cause and advancement of Teenage, Youth, 
                    and Adult (Graduates, Dropout and Uneducated )
                    with more focus on vulnerable Teenage and Young people living
                    in under-served communities through training in technology, 
                    skill acquisitions, mentorship and Internship placements.
                </p>
                 </div>
             </div>
             </div> 
             <div className="about mt-4 container">
             <div className="row">
                 <div className="col-md-6 sect my-5 p-5">
                 <h1 className='text-center '>Our Target</h1>
                 <p className='mx-5 px-5'>Teen Age : 15 - 19 <br/>
                                Youth : 20 - 35 <br/>
                                Adult : 35 and above <br/>
                                Class : Graduates, Dropout and Uneducated.</p>
                 </div>
                 <div className="col-md-6 my-5 p-5 sect">
                 </div>
             </div>
             </div>
             <div className="about mt-4 container">
             <div className="row">
             <h1 className='text-center mb-3'>Benefits</h1>
             <div className="col-md-6 sect"></div>
                 <div className="col-md-6 p-5">
                 <h1 className='text-center'>Skill Acquisition</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis duis imperdiet sapien
                    eget ultrices mi nunc. Felis integer nibh erat a morbi enim sed. Sapien commodo, 
                    aliquet et, sit volutpat enim egestas massa tristique. Sit elementum congue ante vel 
                    egestas amet dolor facilisis morbi..</p>
                 </div>
             </div>
             </div>
             <div className="about mt-4 container">
             <div className="row">
                <div className="col-md-6 p-5">
                 <h1 className='text-center'>Product and Talent Discovery </h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis duis imperdiet sapien
                    eget ultrices mi nunc. Felis integer nibh erat a morbi enim sed. Sapien commodo, 
                    aliquet et, sit volutpat enim egestas massa tristique. Sit elementum congue ante vel 
                    egestas amet dolor facilisis morbi..</p>
                 </div>
                 <div className="col-md-6 sect"></div>
             </div>
             </div>
             <div className="about mt-4 container">
             <div className="row">
             <div className="col-md-6 sect"></div>
                 <div className="col-md-6 p-5">
                 <h1 className='text-center'>Job Creation</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis duis imperdiet sapien
                    eget ultrices mi nunc. Felis integer nibh erat a morbi enim sed. Sapien commodo, 
                    aliquet et, sit volutpat enim egestas massa tristique. Sit elementum congue ante vel 
                    egestas amet dolor facilisis morbi..</p>
                 </div>
             </div>
             </div>
             <div className="about mt-4 container">
             <div className="row">
                <div className="col-md-6 p-5">
                 <h1 className='text-center'>Mentoring / Tutoring </h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis duis imperdiet sapien
                    eget ultrices mi nunc. Felis integer nibh erat a morbi enim sed. Sapien commodo, 
                    aliquet et, sit volutpat enim egestas massa tristique. Sit elementum congue ante vel 
                    egestas amet dolor facilisis morbi..</p>
                 </div>
                 <div className="col-md-6 sect"></div>
             </div>
             </div>
             <div className="about mt-4 container">
             <div className="row">
             <h1 className='text-center my-3'>Our Awesome Team</h1>
             <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis duis imperdiet sapien eget ultrices mi nunc. Felis integer nibh erat a morbi enim sed. Sapien commodo.</p>
             <div className="col-md-4 card m-3 mx-auto">
                        <img src={imagejon} alt='image' className='p-2'/>
                        <div className="card-body">
                        <h5 className="card-title fw-bold">John Doe</h5>
                        <p className="card-text">Front End Engineer</p>
                        </div>
              </div>
              <div className="col-md-4 card m-3">
                        <img src={image} alt='image' className='p-2'/>
                        <div className="card-body">
                        <h5 className="card-title fw-bold">Jane Doe</h5>
                        <p className="card-text">Back End Engineer</p>
                        </div>
              </div>
              <div className="col-md-4 card m-3">
                        <img src={imagejon} alt='image' className='p-2'/>
                        <div className="card-body">
                         <h5 className="card-title fw-bold">John Doe</h5>
                         <p className="card-text">UI/UX Designer</p>
                        </div>
              </div>
             </div>
             </div>
             <Footer/>
        </div>
      );
}

export default About;