import logo1 from '../img/logo1.jpeg';
import {Link} from 'react-router-dom';
function Donate() {
    return ( 
        <div className="container mt-3">
        <div className="row m-5 p-5">
            <div className="col-md-6 ps-5">
                <h6 className='py-3'>Skill4profit Foundation</h6>
                <h2 className='fw-bold py-3'>
                    <img src={logo1} alt="logo" style={{width: '50px'}}/>
                    Skill4Profit
                </h2>
                <h6 className=''>Thank you for donating to our foundation</h6>
            </div>
            <div className="col-md-6">
                <div className='pb-3'>
                    <Link to='#' style={{color: '#8B1736'}}>Monthly</Link>
                    <Link to='#' className='text-dark ms-5' style={{textDecoration: 'none'}}>Annually</Link>
                </div>
                <form >
                    <div className="form-group">
                        {/* <label htmlFor="fname">First Name</label> */}
                        <input type="text" className='form-control m-3' placeholder='First Name'/>
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="lname">Last Name</label> */}
                        <input type="text" className='form-control m-3' placeholder='Last Name'/>
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="email">Email</label> */}
                        <input type="email" className='form-control m-3' placeholder='Email'/>
                    </div>
                    <div className="input-group mb-3 ps-3">
                    <span class="input-group-text" id="basic-addon3">NGN</span>
                    <input type="number" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                       <button className="btn text-white w-50 m-3">Donate</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
     );
}

export default Donate;