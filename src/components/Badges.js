import React from "react";
//images
import confLogo from "../images/badge-header.svg";
//styles
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="Badge__section-name">
          <img
            src="https://secure.gravatar.com/avatar/2de01bb76406913e614db40e7e39ab03"
            alt="avatar"
          />
          <h1>
            Diego <br /> Rojas
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Frontend</h3>
          <div>@darcdev</div>
        </div>
        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}
export default Badge;
