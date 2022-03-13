import React from "react";
import "./Login.css";
import { AiOutlineGoogle } from "react-icons/ai";
export default function Login() {
  return (
    <div className="login container text-align-center">
      <div className="row row-cols- justify-content-center">
        <div className="col-12 w-50 p-2 m-2">
          <h2>Sign In</h2>
        </div>
        <div className="col-12 w-50 p-2 m-2">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="col-12 w-50 p-2 m-2">
          <input
            type="password"
            className="form-control"
            placeholder="password"
          />
        </div>
        <div className="col-12 w-50 p-2 m-2">
          <button className="btn btn-danger form-control">Sign In</button>
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
          <span>
            {" "}
            <AiOutlineGoogle />
            Login with Google
          </span>
        </div>
        <div className="col-12 w-50 p-2 m-2">
          <span>New to NetFlex?</span>
          <button className="btn btn-danger">Sign up now </button>
        </div>
      </div>
    </div>
  );
}
