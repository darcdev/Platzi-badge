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
          <img src={this.props.avatarUrl} alt="avatar" />
          <h1>
            {this.props.firstname} <br /> {this.props.lastname}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.description}</h3>
          <div>{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}
export default Badge;