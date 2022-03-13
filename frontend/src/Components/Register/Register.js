import React, { useState } from "react";
import "./Register.css";
import Bgimg from '../../images/background.jpg'
export default function Register() {
  const [Show,setShow]=useState(true);
  
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
                  <h6>iyaadsaadeh@gmail.com</h6>
                </div>
                <div className="col-12 w-50 p-2 m-2">
                  
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                      
                    />
                    <button className="btn btn-danger w-100 mt-3" type="button"  onClick={() => setShow(!Show)}>
                      Next
                    </button>
                  
                </div>
              </div>
            </div>
          )
      

  
}
