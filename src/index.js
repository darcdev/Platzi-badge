import React from "react";
import ReactDOM from "react-dom";
import Badge from "./components/Badges";
//styles
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

ReactDOM.render(
  <Badge
    firstname="diego"
    lastname="rojas"
    avatarUrl="https://secure.gravatar.com/avatar/2de01bb76406913e614db40e7e39ab03"
    description="frontend"
    twitter="@darcdev"
  />,
  document.getElementById("app")
);
