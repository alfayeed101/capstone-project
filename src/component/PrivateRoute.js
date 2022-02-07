import { Navigate, Route, Routes} from 'react-router-dom';

function PrivateRoute({children, ...otherProps}) {
    const auth = useAuth();
    return ( 
        auth ? children : <Navigate to='/login' />
     );
}

export default PrivateRoute;