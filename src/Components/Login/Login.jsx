import React, { useContext, useState } from 'react';
import './Login.css'
import { userInfo } from '../UserContext/UserContext';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {

    let {getInto, googleSingUp,  resetPassword} = useContext(userInfo);

    let [err, setErr]= useState([]);

    let location = useLocation();
    let from = location.state?.from?.pathname || '/';
    console.log(location);

    let navigate = useNavigate();


    let login= (event)=>{
        event.preventDefault();

        

       
        let email = event.target.email.value;
        let password = event.target.password.value;

        console.log(email, password);

        getInto(email, password)
        .then(res=>{
            let user= res.user;
            console.log(user);
            navigate(from, {replace: true})

        })
        .catch(err=>{
            console.log(err.message)
            setErr(err.message)
        })
     

    }

    let google =()=>{
        googleSingUp()
        .then(res=>{
            let user= res.user;
            console.log(user);
            navigate(from, {replace: true})

        })
        .catch(err=> console.log(err.message))
     
    }

    let recoverPassword=()=>{

        let email = document.getElementById('email').value;
        // console.log(email);
        resetPassword(email)
        .then(
            alert('Check Your Email')
        )


    }

    return (
        <div>
            <form onSubmit={login} className="SignUpForm">
                <h2>Login...!</h2>
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                
                <input type="password" id="password" name="password" required />
                <p onClick={recoverPassword} ><u> Forget password</u></p>
                <p>{err}</p>
                <button type="submit">Login</button>
                <button onClick={google} > <img src="./google-logo-9808.png" id='logo' alt="" /> Login with Google</button>
            </form>
            
            
        </div>
    );
};

export default Login;