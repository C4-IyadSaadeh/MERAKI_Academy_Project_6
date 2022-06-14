import React, { useState } from "react";
import "./Register.css";
import Bgimg from '../../images/background.jpg'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
export default function Register() {
  const [Show,setShow]=useState(true);
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
const registerUser=async(e)=>{
  e.preventDefault();
try {
  const res = await axios.post("http://localhost:5000/user/createUser",{
    email:email,password:password,plan:1,role:1
  });
  console.log(res.data);
  if (res.data.success) {
    
    navigate('/Plan')
    

  }else throw Error;
}
 catch (error) {
  if (error.response && error.response.data) {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: error.response.data.message,
      showConfirmButton: false,
      timer: 2000,
    });

    return;
  }
  Swal.fire({
    position: "center",
    icon: "warning",
    title: "Error happened while Sign up, please try again",
    showConfirmButton: false,
    timer: 2000,
  });
}
}
  return Show?
    (
        <div className="Register container">
          <div className="row row-cols-1 text-center flex-row justify-content-center ">
            <div className="col-12 w-50 p-2 m-2">
              <h2>
                Unlimited movies, TV
                <br />
                shows, and more.
              </h2>
              <h3>Watch anywhere. Cancel anytime.</h3>
              <h5>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h5>
            </div>
            <div className="col-12 w-50 p-2 m-2">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(e)=>{setEmail(e.target.value)}}
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button className="btn btn-danger" type="button" id="button-addon2" onClick={() => setShow(!Show)} >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      ):(
        
            <div className="Register container">
              <div className="row row-cols-1 text-left flex-row justify-content-center ">
                <div className="col-12 w-50 p-2 m-2">
                  <h2>
                  Welcome back!<br />Joining NetFlex is easy.
                  </h2>
                  <h4>Enter Your Password and you&#39;ll be watching in no <br />time</h4>
                  <h6>Email</h6>
                  <h6>{email}</h6>
                </div>
                <div className="col-12 w-50 p-2 m-2">
                  
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                     onChange={(e)=>{setPassword(e.target.value)}}
                      
                    />
                    <button className="btn btn-danger w-100 mt-3" type="button"  onClick={registerUser}>
                      Next
                    </button>
                  
                </div>
              </div>
            </div>
          )
      

  
}
