import { Navigate, Route, Routes} from 'react-router-dom';

function PrivateRoute({children, ...otherProps}) {
    return ( 
        isAuthenticated ? children : <Navigate to='/' />
     );
}

export default PrivateRoute;