import image30 from '../img/image30.png';
import DecentWork from '../img/DecentWork.jpeg';
import image22 from '../img/image22.png';
import Footer from './constant/Footer';

function Courses() {
    return ( 
        <div className="container-fluid">
        <div className="mt-3">
            <div className="py-5 text-center" style={{'minHeight': '300px', backgroundColor: '#fff'}}>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={image30} className=" w-50" alt="image" style={{height: '200px', width: '100px'}}/>
                </div>
                <div className="carousel-item">
                <img src={DecentWork} className="w-50" alt="image" style={{height: '200px', width: '100px'}}/>
                </div>
                <div className="carousel-item">
                <img src={image22} className=" w-50" alt="image" style={{height: '200px', width: '100px'}}/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            </div>
        </div>
        <div className="container text-center">
            <h1>Get Skills and Acquire Knowledge</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus eu ut fames massa 
                lobortis at convallis mi cras. Arcu ac fringilla tristique nibh pulvinar cursus 
                elementum. A, hendrerit quis nulla odio vitae libero odio elementum donec. Ullamcorper
                 sagittis, tincidunt urna 
            </p>
            <form className="d-flex justify-content-center">
                <input className="form-control w-50 me-2" type="search" placeholder="Search by job, company, location" 
                aria-label="Search"/>
                <button className="btn btn-outline-dark bg-dark text-white" type="submit">Search</button>
            </form>
            <h3 className='pt-4'>Available Skills</h3>
            <div className="row">
            <div className="col-md-4 card my-2 mx-1">
                        {/* <img src={imagejon} alt='image' className='p-2'/> */}
                        <div className="card-body">
                        <h5 class="card-title fw-bold">Product Design</h5>
                        <p class="card-text">Location: Lagos</p>
                        <p class="card-text">Type: Part-time</p>
                        <p class="card-text">Location: Lagos</p>
                        <p class="card-text">Job Description: Lorem ipsum sit, consectetur adipibhb scing... </p>
                        <button className="btn btn-secondary">Apply</button>
                        </div>
              </div>
              <div className="col-md-4 card my-2 mx-1">
                        {/* <img src={imagejon} alt='image' className='p-2'/> */}
                        <div className="card-body">
                        <h5 class="card-title fw-bold">Web Development</h5>
                        <p class="card-text">Location: Lagos</p>
                        <p class="card-text">Type: Part-time</p>
                        <p class="card-text">Location: Lagos</p>
                        <p class="card-text">Job Description: Lorem ipsum sit, consectetur adipibhb scing... </p>
                        <button className="btn btn-secondary">Apply</button>
                        </div>
              </div>
              <div className="col-md-4 card my-2">
                        {/* <img src={imagejon} alt='image' className='p-2'/> */}
                        <div className="card-body">
                        <h5 class="card-title fw-bold">Product Design</h5>
                        <p class="card-text">Location: Lagos</p>
                        <p class="card-text">Type: Part-time</p>
                        <p class="card-text">Location: Lagos</p>
                        <p class="card-text">Job Description: Lorem ipsum sit, consectetur adipibhb scing... </p>
                        <button className="btn btn-secondary">Apply</button>
                        </div>
              </div>
                </div>
            </div>
            <Footer/>
        </div>
        
     );
}

export default Courses;