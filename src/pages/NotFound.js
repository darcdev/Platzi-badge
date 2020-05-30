import React from "react";
import astronaut from "../images/astronaut.webp";

import "./styles/NotFound.css";

function NotFound() {
  return (
    <div className="NotFound__container">
      <img src={astronaut} alt="not found" />
      <h1>404: Not Found</h1>
    </div>
  );
}
export default NotFound;
