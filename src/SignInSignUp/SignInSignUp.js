import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
import './SignInSignUp.css';
import '@emailjs/browser'
function SignInSignupWithLocalStorage(){
    const name=useRef()
    const email=useRef()
    const password=useRef()
    const Date_of_birth=useRef()
    const phone=useRef()
    const [showHome,setShowHome]=useState(false)
    const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")
    useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
    })
   const handleClick=()=>{
    if(name.current.value&&email.current.value&&password.current.value&&phone.current.value&&Date_of_birth.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("phone",phone.current.value)
        localStorage.setItem("Date_of_birth",Date_of_birth.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        alert("Account created successfully!!")
        window.location.reload()
      }
    }


   const handleSignIn=()=>{
    if(email.current.value===localEmail&&password.current.value===localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Please Enter valid Credential")
    }
}
    return(
        <div>
            {showHome?<Home/>:
            (show?
                <div className="container">
                        <h1>Hello {localName}</h1>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <button onClick={handleSignIn}>Sign In</button>
                </div>
                :
                <div className="container">
                    <div class="form-control">
                        <div className="input_space">
                            <input placeholder="Name"  type='name' id="name" ref={name} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Email" type='email' id="email" ref={email} />
                        </div>
                        <div class="input_space">
                            <input placeholder="Phone Number" type='tel' ref={phone} />
                        </div>
                        <div class="input_space">
                            <input placeholder="Date of Birth" type='date' ref={Date_of_birth} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' id="password" ref={password} />
                        </div>
                        <button onClick={handleClick}>Sign Up</button>
                    </div>

                </div>)
            }
        </div>
    );
}
export default SignInSignupWithLocalStorage;
