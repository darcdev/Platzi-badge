import React from "react";
import Badge from "../components/Badge";
import header from "../images/platziconf-logo.svg";
import "./styles/BadgeNew.css";
import BadgeForm from "../components/BadgeForm";
import api from "../api";
import PageLoading from "../components/PageLoading";
class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
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
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
      error: null,
    });
    try {
      await api.badges.create(this.state.form);
      this.setState({
        loading: false,
      });
      this.props.history.push("/badges");
    } catch (e) {
      this.setState({
        loading: false,
        error: e,
      });
    }
  };
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <div>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid "
            src={header}
            alt="hero"
          ></img>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-7">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                twitter={this.state.form.twitter || "twitter"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                email={this.state.form.email || "EMAIL"}
                avatarUrl="https://es.gravatar.com/userimage/153903818/cb14649c4719d457e5e6d57b7e4ef3cc.jpg"
              />
            </div>
            <div className="col-5">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BadgeNew;
