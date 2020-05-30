import React from "react";
import {Link} from "react-router-dom";
import astronaut from "../images/astronauts.svg";
import platziconf from "../images/platziconf-logo.svg";
import "./styles/Home.css";

function Home() {
  return (
    <div className="Home__container">
      <div className="start">
        <img className="PlatziConfLogo" src={platziconf} alt="welcome" />
        <Link to="/badges" className="startButton btn btn-primary mt-4">
          Start Now
        </Link>
      </div>
      <div className="Astronauts">
        <img className="PlatziWelcome" src={astronaut} alt="welcome" />
      </div>
    </div>
  );
}
export default Home;
