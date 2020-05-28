import React from "react";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="" />
        </div>
        <div>
          <img src="" alt="" />
          <p>
            Diego <br /> Rojas
          </p>
        </div>
        <div>Frontend @darcdev</div>
        <div>#platziconf</div>
      </div>
    );
  }
}
export default Badge;
