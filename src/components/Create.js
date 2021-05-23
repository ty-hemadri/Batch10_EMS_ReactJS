import React, { Component } from "react";

export default class Create extends Component {
  state = {
    user: "",
    email: "",
    phoneno: "",
    nickname: "",
    pwd: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle Submit");
    console.log(this.state);
    localStorage.setItem(this.state.user, JSON.stringify(this.state));
    this.setState({
      user: "",
      email: "",
      phoneno: "",
      nickname: "",
      pwd: "",
    });

    this.props.history.push("/home");
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="container card mt-5 col-md-6">
        <form className="card-body" onSubmit={this.handleSubmit}>
        <div className="form-group">
            <label htmlFor="exampleInputUser1">UserName</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUser1"
              value={this.state.user}
              onChange={this.handleChange}
              name="user"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPhoneno1">PhoneNo</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPhoneno1"
              value={this.state.phoneno}
              onChange={this.handleChange}
              name="phoneno"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputNickname1">NickName</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputNickname1"
              value={this.state.nickname}
              onChange={this.handleChange}
              name="nickname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={this.state.pwd}
              onChange={this.handleChange}
              name="pwd"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
