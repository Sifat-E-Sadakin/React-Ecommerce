import React, { useContext, useState } from 'react';
import './SingUp.css'
import { userInfo } from '../UserContext/UserContext';
import ReactDOM from 'react-dom'


const SingUp = () => {

    let {createAccount,googleSingUp , verifyEmail} = useContext(userInfo)

    let [err, setErr]= useState([]);

    let submit =(event)=>{
        event.preventDefault();

        

        let name = event.target.name.value;
        let email = event.target.email.value;
        let password = event.target.password.value;
        let confirmPassword = event.target.confirmPassword.value;

        console.log(email, password);

        setErr('')
        
        if(password != confirmPassword){

            setErr('Password Did not Match')
            return

        }

        if(password.length <6){
            setErr('Password must be at least 6 character ')
            return 
        }

        createAccount(email, password)
        .then(res=>{
            let user= res.user;
            verifyEmail(user);
            alert('Verify Your Email For Better Experience')
            console.log(user);
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
            navigate('/')

        })
        .catch(err=> console.log(err.message))
     
    }

    return (
        <div>

            <form onSubmit={submit} className="SignUpForm">
                <h2>Sign Up</h2>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required />
                {err}
                <button type="submit">Submit</button>
                <button onClick={google}><img src="./google-logo-9808.png" id='logo' alt="" /> SingUp With Google</button>
                
                
                
            </form>
            
    
        </div>
    );
};

export default SingUp;