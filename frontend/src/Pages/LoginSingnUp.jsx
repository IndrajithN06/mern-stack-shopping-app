import React from 'react'
import { useState } from 'react';
import './CSS/LoginSignup.css'
import config from '../config'

const LoginSingnUp = () => {
  const[state,setState]=useState('Sign Up');

  const[formData,setFormData]=useState({
    username:"",
    password:"",
    email:""
  })


  const signup = async () => {
    try {
      console.log("Sign Up function executed", formData);
  
      const response = await fetch(`${config.backendUrl}/signup`, {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const responseData = await response.json();
  
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      // Handle error appropriately (e.g., display error message to user)
      // You can add specific error handling here
    }
  };
  
  const login=async ()=>{
     try {
      console.log("Sign Up function executed", formData);
  
      const response = await fetch(`${config.backendUrl}/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const responseData = await response.json();
  
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }


  const changeHandler=(e)=>{
   setFormData({...formData,[e.target.name]:e.target.value});
  }

  return (
    <div className='loginsignup'>
      <div className="loginsigup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input type="text" name='username' value={formData.username} onChange={changeHandler} placeholder='Your Name'/>:<></>}
          <input type="email" placeholder='Email Address' name='email' value={formData.email} onChange={changeHandler}/>
           <input type="password" placeholder='Password' name='password' value={formData.password}  onChange={changeHandler}/>
        </div>
        <div className="button">
        <button onClick={()=>{state==="Sign Up"?signup():login()}}>Continue</button>
        {state==="Sign Up"? <p className="loginsignup-login">Already have an account?<span onClick={()=>{setState("Login")}}>Login here</span></p>: <p className="loginsignup-login">If you dont have an account?<span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing,i agree to the terms of use & privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSingnUp
