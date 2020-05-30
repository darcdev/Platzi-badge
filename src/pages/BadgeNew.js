import React from "react";
import Badge from "../components/Badge";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <div className="BadgeNew__hero">
          <img className="img-fluid " src={header} alt="hero"></img>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                {...this.state.form}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BadgeNew;
