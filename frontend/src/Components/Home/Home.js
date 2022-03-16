import React, { useState, useEffect } from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { setMovies } from "../Redux/Movie/index";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import MovieCard from "../SingleMovie/Card";
import { Col, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import SingleMovie from "../SingleMovie/SingleMovie";
export default function Home() {
  // use state
  const [message, setMessage] = useState("");
  const [movie, setMovie] = useState([]);
  const [genre, setGenres] = useState([]);
  const [fake, setFake] = useState(false);

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
  // ----------------------------------
  const getGenre = async () => {
    const result = await axios.get("http://localhost:5000/Genre/all");
    if (result.data.success) {
      setGenres(result.data.Genre);
    }
  };
  // -----------------------------------------------------------------
  const getAllMovie = async () => {
    try {
      let result = await axios.get("http://localhost:5000/movie/allMovies");
      if (result.data.success) {
        dispatch(setMovies(result.data.Movies));
console.log(result.data.Movies);
        setMovie(result.data.Movies);
      }
    } catch (error) {
      throw error;
    }
  };
  // --------------------------useEffect
  useEffect(() => {
    getAllMovie();
    getGenre();
  }, []);

  // ----------------------------------------------------------------
  // setting slider slick
  let settings = {
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div>
      <Carousel
        className="Carousel"
        activeIndex={0}
        controls={false}
        indicators={false}
      >
        <Carousel.Item>
          <iframe
          title={movie.length === 0 ? "" : movie[96].title}
            width="100%"
            height="500"
            src={movie.length === 0 ? "" : movie[96].trailer}
          ></iframe>
          <Carousel.Caption style={{ textAlign: "left" }}>
            <h3>{movie.length === 0 ? "" : movie[96].title}</h3>
            <p>{movie.length === 0 ? "" : movie[96].description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="slider">
        <h2>New Movies</h2>
        <Slider {...settings}>
          {movie
            .filter((movie) => movie.year >= 2021)
            .map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
        </Slider>
      </div>
      <div className="slider">
        <h2>Top 10</h2>
        <Slider {...settings}>
          {movie
            .filter((movie) => parseFloat(movie.rating) >= 8.0)
            .map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
        </Slider>
      </div>
      {genre.map((element, index) => (
        <div className="slider" key={index}>
          <h2>{element.genre}</h2>
          <Slider {...settings}>
            {movie
              .filter((movie) => movie.genre == element.genre)
              .map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))}
          </Slider>
        </div>
      ))}
    </div>
  );
}
