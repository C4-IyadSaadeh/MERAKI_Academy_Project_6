import React, { useState, useEffect } from "react";
import "./Login.css";
import { AiOutlineGoogle } from "react-icons/ai";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import {login} from "../Redux/Login/index"
export default function Login() {
  const navigate= useNavigate();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      Movies: state.movieReducer,
      userId: state.loginsReducer.userId,
      roleId: state.loginsReducer.roleId,
    };
  });
const checkLogin=async(e)=> {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:5000/user/loginUser",{
    email,password
  });
  if (res.data.success) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: res.data.message,
      showConfirmButton: false,
      timer: 2000,
    });
    navigate('/movies')
    dispatch(
      login({
        token: res.data.token,
        isLoggedIn: true,
        userId: res.data.userId,
        roleId: res.data.role,
        plan: res.data.plan,
      })
    );

  }else throw Error;
  } catch (error) {
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
      title: "Error happened while Login, please try again",
      showConfirmButton: false,
      timer: 2000,
    });
  }
}

  return (
    <div className="login container text-align-center">
      <div className="row row-cols- justify-content-center">
        <div className="col-12 w-50 p-2 m-2">
          <h2>Sign In</h2>
        </div>
        
        <div className="col-12 w-50 p-2 m-2">
          <input type="email" className="form-control" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className="col-12 w-50 p-2 m-2">
          <input
            type="password"
            className="form-control"
            onChange={(e)=>{setPassword(e.target.value)}}
            placeholder="password"
          />
        </div>
        <div className="col-12 w-50 p-2 m-2">
          <button className="btn btn-danger form-control" onClick={checkLogin}>Sign In</button>
        </div>
        <div className="col-12 w-50 p-2 m-2">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label class="form-check-label" for="flexCheckChecked">
              Remember me
            </label>
          </div>
        </div>

        <div className="col-12 w-50 p-2 m-2">
        <AiOutlineGoogle  style={{cursor: 'pointer'}}/>

          <span style={{cursor: 'pointer'}}>
            {" "}
            Login with Google
          </span>
        </div>
        <div className="col-12 w-50 p-2 m-2">
          <span>New to NetFlex?</span>
          <button className="btn btn-danger"  style={{marginLeft:'10px'}} onClick={() =>{navigate('/Register')}}>Sign up now </button>
        </div>
        
      </div>
    </div>
  );
}
