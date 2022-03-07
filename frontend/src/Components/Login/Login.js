import React from 'react'
import './Login.css';
import {AiFillFacebook} from 'react-icons/ai'
export default function Login() {
  return (
    <div className="login">
        <div className="Login_Form">
        <h2 className="Login_Tittle">Sign In</h2>

            <input type="email" className="Login_Input" placeholder="Email"/>
            <input type="password" className="Login_Input" placeholder="Password"/>
<button className="Login_button">Sign in</button>
<div className="Login_ForgetPassword_Row">
    
    <span className="Login_Remember"><input type="checkbox" className="Login_CheckBox"/>Remember me</span>
    <span className="Login_Help">Need help?</span>

</div>
<div className="Login_FaceBook">
  <AiFillFacebook className="facebook_icon"/>
<span className="Login_face">Login with Facebook</span>
    
</div>
<div className="Login_SignUp">
<span className="Login_New">New to IyadFlex?</span>
    <a href="#">Sign up now</a> 
</div>
<p className="Login_Learn_More">This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
        </div>
    </div>
  )
}
