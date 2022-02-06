import login from '../img/login.png';
import {Link, useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Footer from  './constant/Footer';
function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const onSubmit = (data) =>{
        if (data.email === "skill4profit@example.com" && data.password === "1234") {
            localStorage.setItem('authenticated', 'true');
            console.log(data);
            navigate('/');
        }else{
            setError("Email and Password is wrong");
        }
    }
    return ( 
        <div>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={login} alt="login" className='m-5 w-75'
                    style={{maxHeight: '700px'}}/>
                </div>
                <div className="col-md-6 my-5">
                    <h2 className='bg-dark w-25 text-white text-center rounded py-1'>Log in</h2>
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group my-5 pt-2">
                            <input type="email" className="form-control text-dark" placeholder='admin@example.com'
                            {...register('email', {required: true})}/>
                            {errors.email && <p className='text-danger'>Email is required</p>}
                        </div>
                        <div className="form-group my-5 pt-2">
                            <input type="password" className="form-control text-dark" placeholder='Password1234'
                            {...register('password', {required: true})}/>
                            {errors.password && <p className='text-danger'>Password is required</p>}
                        </div>
                        <div className="form-check ">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Keep me logged in
                        </label>
                        <Link to="/" style={{color: "#680721"}} className="ms-5">Forgot password?</Link>
                        </div>
                        <div className="form-group my-2 text-center">
                            <button className="btn text-white w-50">Login</button>
                            <p className='pt-1'>Don't have an account yet? <br/>
                        <Link to={'/signup'} style={{color: "#680721"}}> Sign up</Link></p>
                        </div>
                        {error &&<p className='text-danger text-center'>{error}</p>}
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
     );
}

export default Login;