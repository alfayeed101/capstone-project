import reg2 from '../img/reg2.png';
import {Link, useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import '../App.css';
// import Footer from './constant/Footer';
function Signup() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const onSubmit = (data) =>{
        console.log(data);
        navigate('/login');
    }
    return ( 
        <div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 my-5">
                    <h2 className='py-1'>Get Started</h2>
                    <p className='fw-bold'>To get our amazing offers we’ve got to know you.</p>
                    <h4 className='pt-3'>Personal Information</h4>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col m-3">
                            <select className="form-select" {...register('select', {required: true})}>
                            <option defaultValue='0'>Title</option>
                            <option value="1">Mr</option>
                            <option value="2">Mrs</option>
                            <option value="3">Ms</option>
                            </select>
                            {errors.select && <p className='text-danger'>Title is required</p>}
                            </div>
                            <div className="col m-3">
                            <input type="text" className="form-control" placeholder='Name*'
                            {...register('fullname', {required: true})}/>
                            {errors.fullname && <p className='text-danger'>Name is required</p>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col m-3">
                            <input type="tel" className="form-control" placeholder='Mobile number*'
                            {...register('number', {required: true})}/>
                            {errors.number && <p className='text-danger'>Mobile number is required</p>}
                            </div>
                            <div className="col m-3">
                            <input type="email" className="form-control" placeholder='Email*'
                            {...register('email', {required: true})}/>
                            {errors.email && <p className='text-danger'>Email is required</p>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col m-3">
                            <input type="text" className="form-control" placeholder='Designation'
                            {...register('designation')}/>
                            </div>
                            <div className="col">
                            {/* <input type="email" className="form-control" placeholder='Email'
                            {...register('email', {required: true})}/>
                            {errors.email && <p className='text-danger'>Email is required</p>} */}
                            </div>
                        </div>
                        <div className="form-group m-3">
                            <button className="btn text-white">Get Started</button>
                            <p className='pt-1'>Already have an account?
                            <Link to={'/login' } style={{color: "#680721"}}> Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
                 <div className="col-md-6 mt-5">
                    <img src={reg2} alt="login" className='h-75'
                    style={{maxHeight: '400px'}} />
                </div>
            </div>
        </div>
        {/* <Footer/> */}
        </div>
     );
}

export default Signup;