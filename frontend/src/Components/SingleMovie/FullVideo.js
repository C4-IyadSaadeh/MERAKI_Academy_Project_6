import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import HeaderOne from "../Header/HeaderOne";
import { setOne, setMovies } from "../Redux/Movie/index";

export default function FullVideo() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  // navigate and dispatch
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // store Redux
  const state = useSelector((state) => {
    return {
      Movies: state.movieReducer,
      userId: state.loginsReducer.userId,
      roleId: state.loginsReducer.roleId,
    };
  });
  const getSingleMovie = () => {
    let e = {};
    state?.Movies[0].map((element) => {
      if (element.id == id) {
        e = element;
        
      }
    });
    return e;
  };
  useEffect(() => {
    getSingleMovie();
  }, [state.Movies[0]]);
  // console.log("Movie state", state.Movies[0]);
  // console.log(state.Movies[0])
  console.log(getSingleMovie());

  return (
    <div>
    <HeaderOne/>

      <iframe
        title={state.Movies[0].length === 0 ? "" : getSingleMovie().title}
        src={state.Movies[0].length === 0 ? "" : getSingleMovie().trailer}
        width="100%"
        height="700"
        allowFullScreen
        
        frameBorder="0"
      ></iframe>
    </div>
  );
}
