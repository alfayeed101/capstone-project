import register from '../img/register.png';
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Footer from './constant/Footer';
function Signup() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    return ( 
        <div>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={register} alt="image" className='my-5'
                    style={{maxHeight: '600px'}}/>
                </div>
                <div className="col-md-6 my-5">
                    <h2 className='bg-dark w-25 text-white text-center rounded py-1'>Sign Up</h2>
                    <form className="form ">
                    <div className="form-group my-5 pt-2">
                            <input type="text" className="form-control" placeholder='Enter Fullname: John Doe'
                            {...register('fullname', {required: true})}/>
                            {/* {errors.fullname && <p className='text-danger'>Full name is required</p>} */}
                        </div>
                        <div className="form-group my-5 pt-2">
                            <input type="email" className="form-control" placeholder='Enter email: admin@example.com'
                            {...register('email', {required: true})}/>
                            {/* {errors.email && <p className='text-danger'>Email is required</p>} */}
                        </div>
                        <div className="form-group my-5 pt-2">
                            <input type="password" className="form-control" placeholder='Enter password: Password1234'
                            {...register('password', {required: true})}/>
                            {/* {errors.password && <p className='text-danger'>Password is required</p>} */}
                        </div>
                        <div className="form-group my-5 pt-2">
                            <input type="password" className="form-control" placeholder='Confirm password: Password1234'
                            {...register('confirmpassword', {required: true})}/>
                            {/* {errors.confirmpassword && <p className='text-danger'>Password must match confirm password</p>} */}
                        </div>
                        <div className="form-group my-5 text-center">
                            <button className="btn text-white w-50">Register</button>
                            <p className='pt-1'>Already have an account?
                            <Link to={'/login' } style={{color: "#680721"}}> Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
     );
}

export default Signup;