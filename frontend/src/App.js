import "./App.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Plan from "./Components/Plan/Plan";
import Home from "./Components/Home/Home";
import SingleMovie from "./Components/SingleMovie/SingleMovie";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import FullVideo from "./Components/SingleMovie/FullVideo";
import HeaderOne from "./Components/Header/HeaderOne";
import Payments from './Components/Payment/index';
import HeaderTwo from './Components/Header copy/HeaderOne'
function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Register/> */}
{/* <Plan/> */}
{window.localStorage.getItem('isLogin')==true?(<HeaderOne/>):(<HeaderTwo/>)}
<Routes>
<Route path="/" element={<Login/>} />

        <Route path="/movies" element={<Home/>} />
        <Route path="/FullMovie/:id" element={<FullVideo/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Plan" element={<Plan/>} />
        <Route path="/Payments" element={<Payments/>} />



        </Routes>

    </div>
  );
}

export default App;
