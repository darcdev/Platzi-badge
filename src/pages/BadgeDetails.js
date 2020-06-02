import React from "react";
import {Link} from "react-router-dom";

import "./styles/BadgeDetails.css";

import confLogo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";

function BadgeDetails(props) {
  const badge = props.badge;
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img
                className="BadgeDetails__hero-logo"
                src={confLogo}
                alt="Logo de la Conferencia"
              />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              jobTitle={badge.jobTitle}
              twitter={badge.twitter}
            />
          </div>
          <div className="col-5">
            <h2 className="text-center mb-4">Actions</h2>
            <div className="BadgeDetails__buttons">
              <Link
                to={`/badges/${badge.id}/edit`}
                className="btn btn-primary mb-4"
              >
                Edit
              </Link>
              <Link className="btn btn-danger mb-4">Delete</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
