import "./App.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Plan from "./Components/Plan/Plan";
import Home from "./Components/Home/Home";
import SingleMovie from "./Components/SingleMovie/SingleMovie";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import FullVideo from "./Components/SingleMovie/FullVideo";
import HeaderOne from "./Components/Header/HeaderOne"
function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Register/> */}
{/* <Plan/> */}
<HeaderOne/>
<Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/FullMovie/:id" element={<FullVideo/>} />

        </Routes>

    </div>
  );
}

export default App;
