
import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    const [classShow,setClassShow]=useState('collapse show')
    const [classNotShow,setNotClassShow]=useState('collapse')

    const show=(e)=>{

    }
  return (
    <div style={{color:'white'}}>
        <div class="container">
    <div className="row row-cols-1">
        <div className="col text-center"><i className="material-icons" style={{color:'red'}}>lock_outline</i></div>
        <div className="col">
            <h3 className="text-center">Set up Your payment</h3>
        </div>
        <div className="col">
            <p className="text-center">Your membership starts<br />as soon as you set up <br />payments.</p>
        </div>
        <div className="col">
            <h5 className="text-center">No commitments.</h5>
        </div>
        <div className="col">
            <h5 className="text-center">Cancel online anytime.</h5>
        </div>
    </div>
</div>
      <div className="container">
        <div className="row text-center">
          <div className="col-5 text-right mx-auto">
            <span>Secure Server</span>
            <i
              className="material-icons"
              style={{color: 'gold'}}
            >
              lock_outline
            </i>
            <div>
              <a
                className="btn btn-primary text-left text-dark bg-white d-flex justify-content-md-start align-items-md-center "
                data-toggle="collapse "
                aria-expanded="false"
                aria-controls="collapse-1"
                href="#collapse-1"
                role="button"
              >
                Credit or Debit Card 
                <i
                  className="la la-cc-visa d-md-flex justify-content-md-center"
                  style={{fontSize: "40px"}}
                ></i>
                <i
                  className="fab fa-cc-mastercard d-md-flex justify-content-md-center"
                  style={{fontSize: "29px"}}

                ></i>
              </a>
              <div className={classShow} onClick={show} id="collapse-1">
                <div
                  className="row row-cols-1"
                  style={{marginRight: "40px",marginLeft: "15px",marginTop: "10px"}}

                  
                >
                  <div className="col text-center">
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      style={{width: "100%"}}

                      
                    />
                  </div>
                  <div className="col text-center">
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      style={{width: "100%"}}
                    />
                  </div>
                  <div className="col text-center">
                    <input
                      type="text"
                      placeholder="Card Number"
                      required
                      style={{width: "100%"}}
                    />
                  </div>
                  <div className="col text-center">
                    <input
                      type="text"
                      placeholder="Expiration Date (MM/YY)"
                      required
                      style={{width: "100%"}}
                    />
                  </div>
                  <div className="col text-center">
                    <input
                      type="text"
                      placeholder="Security code (CVV)"
                      required
                      style={{width: "100%"}}
                    />
                  </div>
                </div>
                <div
                  className="row row-cols-2 align-items-center"
                  style={{backgroundColor: "#efeeee",marginTop: "20px"}}
                  
                >
                  <div className="col-6 text-left">
                    <h5>USD 7.5/month</h5>
                    <h6>Basic Plan</h6>
                  </div>
                  <div className="col-6 text-right">
                    <button
                      className="btn btn-primary"
                      type="button"
                  style={{backgroundColor: "rgba(112,113,113,0)",color:' rgb(13,36,251)',fontSize: "21px"}}

                      
                    >
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center" style={{marginTop: "10px"}}
>
          <div className="col-5 text-right mx-auto">
            <div>
              <a
                className="btn btn-primary text-left text-dark bg-white d-flex justify-content-md-start align-items-md-center"
                data-toggle="collapse"
                aria-expanded="true"
                aria-controls="collapse-2"
                href="#collapse-2"
                role="button"
              >
                PayPal 
                <i
                  className="la la-paypal d-md-flex justify-content-md-center"
                  style={{fontSize: "40px",color: "rgb(72,79,255)"}}
                ></i>
              </a>
              <div className={classShow} onClick={show} id="collapse-2">
                <div
                  className="row row-cols-2 align-items-center"
                  style={{backgroundColor: "#efeeee",marginTop: "20px"}}

                  
                >
                  <div className="col-6 text-left">
                    <h5>USD 7.5/month</h5>
                    <h6>Basic Plan</h6>
                  </div>
                  <div className="col-6 text-right">
                    <button
                      className="btn btn-primary"
                      type="button"
                      style={{backgroundColor: "rgba(112,113,113,0)",color:' rgb(13,36,251)',fontSize: "21px"}}

                      
                    >
                      Change
                    </button>
                  </div>
                </div>
                <div
                  className="row row-cols-1 align-items-center"
                  style={{marginTop: "10px"}}
                >
                  <div className="col text-center" style={{width: "100%"}}>
                    <button
                      className="btn text-center text-white bg-danger border-danger"
                      type="button"
                  style={{backgroundColor: "rgba(112,113,113,0)",color:' rgb(13,36,251)',fontSize: "21px"}}
                    >
                      Continue to payPal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
