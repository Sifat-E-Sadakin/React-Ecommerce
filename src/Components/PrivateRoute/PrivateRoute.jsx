import React, { useContext } from 'react';
import { userInfo } from '../UserContext/UserContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    let {user, loading} = useContext(userInfo);

    if(loading){
        return 
    }

    if(user){
       return children
        
    }
    

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;