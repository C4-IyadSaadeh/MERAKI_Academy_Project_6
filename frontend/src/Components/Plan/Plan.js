import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai';
import './Plan.css';
import axios from 'axios';
export default function Plan() {
  return (
    <div className="container ">
        <div className="row m-5">
            <div className="col-6 col-md-6 col-sm-6 col-xs-6 lg-6 col-xl-6 col-xxl-6 ps-5 ms-4  ">
                <h4>Choose your plan.</h4>
                </div>
            <div className="col-6 col-md-6 col-sm-6 col-xs-6 lg-6 col-xl-6 col-xxl-6 ps-5  ms-4 ">
                <h6><AiOutlineCheck className="icon_color"/>No Commitments, cancel anytime.</h6>
                <h6><AiOutlineCheck className="icon_color"/>Everything on IyadFlex for one low price.</h6>
                <h6><AiOutlineCheck className="icon_color"/>Unlimited viewing on all your devices.</h6>

                </div>
            <div className="col-6 col-md-6 col-sm-6 col-xs-6 lg-6 col-xl-6 col-xxl-6  p-2 m-2">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Basic</th>
                            <th scope="col">Stander</th>
                            <th scope="col">Premium</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                    </tbody>
                </table>
                </div>

            </div>
        </div>
  )
}
