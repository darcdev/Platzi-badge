import React, {Component} from "react";

export class BadgeForm extends Component {
  handleChange = function handleChangeInput(e) {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
  };
  handleClick = function handleClickButton(e) {
    console.log("Button was clicked");
  };
  handleSubmit = function handleFormSubmit(e) {
    e.preventDefault();
    console.log("Form was submitted");
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
