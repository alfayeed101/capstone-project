import rec368 from '../img/rec368.png';
import rec321 from '../img/rec321.png';
import image55 from '../img/image55.png'
import image54 from '../img/image54.png'
import image52 from '../img/image52.png'
import image53 from '../img/image53.png'
import maskgroup from '../img/maskgroup.png'
import image60 from '../img/image60.png'
import image56 from '../img/image56.png'
import Footer from './constant/Footer';



function Connects() {
    return ( 
        <div className="container-fluid">
          <img src={ rec368 } alt="image" className='connect'/>
         {/* <div className="connect my-4 p-5 mt-0" style={{backgroundImage: `url(${rec368})`,
           backgroundColor: "#EA9BBD", position: "absolute", 
           width: "1442px", height: "636px", left: "1px", 
           top: "70px"}}>
           
         </div>*/}

          <div>
            <h1 className="join">Join our Community of Experts</h1>
            <h3 className="minds">And connect with the like minds</h3>
            
          </div>
          {/*<div className="media">
            <a href="#" className='magine' id='linkin'><img src={ rec321 } alt="image" /></a> 
            <a href="#" className='magine' id='tele'><img src={ image55 } alt="image" /></a>
            <a href="#" className='magine' id='insta'><img src={ image54 } alt="image" /></a>
            <a href="#" className='magine' id='twitte'><img src={ image52 } alt="image" /></a>
            <a href="#" className='magine' id='face'><img src={ image53 } alt="image" /></a>
        </div>*/}
           <div className='container-lg separate'>light</div>
          <section id='intro'>
            <h2 className='text-center mb-5 mt-5'>Meet our Entrepreneur of the year</h2>
            <div className="container-lg">
              <div className="row justify-content-center align-items-center">
               <div className="col-md-5 text-center d-none d-md-block">
                 <img src={ maskgroup } alt="image"  className='mask'/>
               </div>
                <div className="col-md-5  text-md-end">
                <h1>ADIJAT SAKANSINA</h1>
                <p className='lead my-4'>I am a  fashion designer who has intensionally invested into learning.
                  I am very happy yet not suprised for this feat of greatness because a 
                  prepared individual is not far from being celebrated and awarded. 
                  Thanks to all the facilitors and patners for this program.</p>
                  <a href="#" className='m-5'><img src={ image60 } alt='image'/>adidijj@gmail.com</a>
                  <a href="#"><img src={ image56 } alt='image'/>adidijj@instagram</a>
                </div>
              </div>  
              
                
              
            </div>

          </section>
          <section id='intro'>
            <div className="container-lg">
              <div className="row justify-content-center align-items-center">
               
                <div className="col-md-5 text-center mb-5 mt-5 text-md-end">
                <h1>ADIJAT SAKANSINA</h1>
                <p className='lead my-4'>I am a  fashion designer who has intensionally invested into learning.
                  I am very happy yet not suprised for this feat of greatness because a 
                  prepared individual is not far from being celebrated and awarded. 
                  Thanks to all the facilitors and patners for this program.</p>
                  <a href="#" className='m-5'><img src={ image60 } alt='image'/>adidijj@gmail.com</a>
                  <a href="#"><img src={ image56 } alt='image'/>adidijj@instagram</a>

                  
                </div>

                
                

                <div className="col-md-5 text-center d-none d-md-block">
                  <img src={ maskgroup } alt="image"  className='mask'/>
                </div>
              
              </div>  
              
            </div>

           

          </section>

          <div class="d-grid gap-2 col-3 mx-auto mt-5 mb-5">
              <button class="btn btn-secondary" type="button">It can be you someday!</button>
              
          </div>
        
          <Footer />
        </div>
        
      
    );
}

export default Connects;