import React, { useState, useEffect } from "react";
import {AiOutlineCheck} from 'react-icons/ai';
import './Plan.css';
import axios from 'axios';
import Swal from "sweetalert2";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

export default function Plan() {
    const [subscription,setSubscription]= useState( [
        {
            "id": 1,
            "title": "Basic",
            "price": "7.99",
            "quality": "Good",
            "watch": "480p",
            "created_at": "2022-03-19T17:56:37.000Z",
            "updated_at": "2022-03-19T17:58:44.000Z",
            "is_deleted": 0
        },
        {
            "id": 2,
            "title": "Standard",
            "price": "9.99",
            "quality": "Better",
            "watch": "1080p",
            "created_at": "2022-03-19T17:58:44.000Z",
            "updated_at": "2022-03-19T17:58:44.000Z",
            "is_deleted": 0
        },
        {
            "id": 3,
            "title": "Premium",
            "price": "11.99",
            "quality": "Best",
            "watch": "4K+HDR",
            "created_at": "2022-03-19T17:58:44.000Z",
            "updated_at": "2022-03-19T17:58:44.000Z",
            "is_deleted": 0
        }
    ])
  const navigate = useNavigate();

    const choosePlan=(e)=>{
        Swal.fire({
            position: "center",
            icon: "success",
            title: 'Enjoy in Your Subscription',
            showConfirmButton: false,
            timer: 2000,
          });
          window.localStorage.setItem('isLogin',true)
         navigate('/movies')

    }
    const getPlans=async()=>{
        try {
            const res = await  axios.get('http://localhost:5000/subscription/all')
            if (res.status===200) {
                
            setSubscription(res.data.Subscription)
              }
              else{
                  console.log(res)
              }
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getPlans()
    },[])
    console.log('s',subscription)
  return (
    <div className="container " style={{marginTop: "100px"}}>
        <div className="row m-5">
            <div className="col-6 col-md-6 col-sm-6 col-xs-6 lg-6 col-xl-6 col-xxl-6 ps-5 ms-4  ">
                <h4>Choose your plan.</h4>
                </div>
            <div className="col-6 col-md-6 col-sm-6 col-xs-6 lg-6 col-xl-6 col-xxl-6 ps-5  ms-4 ">
                <h6><AiOutlineCheck className="icon_color"/>No Commitments, cancel anytime.</h6>
                <h6><AiOutlineCheck className="icon_color"/>Everything on IyadFlex for one low price.</h6>
                <h6><AiOutlineCheck className="icon_color"/>Unlimited viewing on all your devices.</h6>
                <h4><AiOutlineCheck className="icon_color"/>Today is Free</h4>
                </div>
            <div className="col-6 col-md-6 col-sm-6 col-xs-6 lg-6 col-xl-6 col-xxl-6  p-2 m-2">
                <table className="table table-hover" style={{color:'white'}}>
                    <thead>
                        <tr>
                        <th scope="col">{''}</th>
                        
                            
                            <th scope="col">{subscription[0].title}</th>
                            <th scope="col">{subscription[1].title}</th>
                            <th scope="col">{subscription[2].title}</th>

                        </tr>
                    </thead>
                    <tbody>
                    
                         <tr>
                         <th scope="row">Monthly Price</th>
                         
                         <td>Free</td>
                         <td>Free</td>
                         <td>Free</td>


                     </tr>       
                    
                        <tr>
                            <th scope="row">Video quality</th>
                         

                            <td>{subscription[0].quality}</td>
                            <td>{subscription[1].quality}</td>
                            <td>{subscription[2].quality}</td>

                        </tr>
                        <tr>
                            <th scope="row">Resolution</th>
                            <td>{subscription[0].watch}</td>
                            <td>{subscription[1].watch}</td>
                            <td>{subscription[2].watch}</td>

                        </tr>
                       <tr>
                       
    <td></td>
    <td><button className="btn btn-primary bg-dark"style={{marginLeft:'-10px'}} onClick={choosePlan} >Select</button></td>
    <td><button className="btn btn-primary bg-dark" style={{marginLeft:'-10px'}} onClick={choosePlan}>Select</button></td>
    <td><button className="btn btn-primary bg-dark" style={{marginLeft:'-10px'}} onClick={choosePlan}>Select</button></td>

                       </tr>
                    </tbody>
                </table>
               
                </div>

            </div>
        </div>
  )
}
