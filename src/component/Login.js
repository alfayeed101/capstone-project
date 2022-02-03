// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Link, useNavigate } from 'react-router-dom';
// import '../App.css';

// function Login() {
//    const {register, handleSubmit, formState: {errors}} = useForm();
//    const [error, setError] = useState('');
//    const navigate = useNavigate();
//    const onSubmit = (data) =>{
//     if(data.email === 'admin@example.com' && data.password === '1234'){
//       localStorage.setItem('authenticated', 'true');
//       console.log(data);
//       navigate('/home');
//     }else{
//        setError('Email and password is wrong');
//     }
//    }
//     return ( 
//         <div className="container">
//            <div className="row">
//               <div className="col-md-3"></div>
//               <div className="col-md-6">
//                  <h1 className='mt-4'>Welcome to flicked -- login your details</h1><hr/>
//                  <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
//                   {error && <p className='text-danger'>{error}</p>}
//                  <div className="form-group mb-4">
//                  <label htmlFor="email">Email</label>
//                  <input 
//                  type="email" 
//                  className="form-control" 
//                  {...register('email', {required: true})}/>
//                </div>
//                {errors.email && <p className='text-danger'>Email is required</p>}
//                <div className="form-group mb-4">
//                  <label htmlFor="pwrd">Password</label>
//                  <input 
//                  type="password" 
//                  className="form-control" 
//                  {...register('password', {required: true})}/>
//                </div>
//                {errors.password && <p className='text-danger'>Password is required</p>}
//                <div className="text-center">
//                <button className="btn btn1">Login</button>
//                </div>
//                <p className='text-center'>Don't have an account yet?</p>
//                <Link to={'/register'} className='nav-link text-center'>click here to register</Link>
//                </form>
//               </div>
//               <div className="col-md-3"></div>
//            </div>
//         </div>
//      );
// }

// export default Login;
import image22 from '../img/image22.png';
import {Link, useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    // const [error, setError] = useState('');
    //    const navigate = useNavigate();
    //    const onSubmit = (data) =>{
    //     if(data.email === 'admin@example.com' && data.password === '1234'){
    //       localStorage.setItem('authenticated', 'true');
    //       console.log(data);
    //       navigate('/home');
    //     }else{
    //        setError('Email and password is wrong');
    //     }
    //    }
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={image22} alt="decentwork" className='my-5'
                    style={{maxHeight: '300px'}}/>
                </div>
                <div className="col-md-6 my-5">
                    <h1 title='Login your details!'>Login</h1>
                    <div className="form ">
                        <div className="form-group my-5 pt-2">
                            <input type="email" className="form-control" placeholder='admin@example.com'
                            {...register('email', {required: true})}/>
                        </div>
                        <div className="form-group my-5 pt-2">
                            <input type="password" className="form-control" placeholder='Password1234'
                            {...register('password', {required: true})}/>
                        </div>
                        <div className="form-group my-5 text-center">
                            <button className="btn btn-secondary">Login</button>
                            <p className='pt-1'>Don't have an account yet?
                        <Link to={'/signup'}> click here to register</Link></p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Login;