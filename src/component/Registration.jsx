import React, { Component } from "react";
import Input from "./input";
import Form from "./Form";
import { Link } from "react-router-dom";

import * as userService from "../services/userService";
import Joi from "joi-browser";
class Registration extends Form {
  state = {
    account: { name: "", username: "", password: "" },
    errors: {},
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.account);
      localStorage.setItem("token", response.headers["x-auth-token"]);
      // this.props.history.push("/login");
      this.props.history.push("/content");
      // console.log("helo", respo);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = errors;
        this.setState({ errors });
      }
    }
    console.log("RegisterForm submitted");
  };

  schema = {
    name: Joi.string().alphanum().min(3).max(30).required(),
    username: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "in"] },
    }),
    password: Joi.string().min(8).required(),
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="name"
            type="text"
            value={account.name}
            label="Name"
            onChange={this.handleChange}
            err={errors.name}
          />
          <Input
            autoFocus
            name="username"
            value={account.username}
            label="username"
            type="text"
            onChange={this.handleChange}
            err={errors.email}
          />
          <Input
            name="password"
            type="password"
            value={account.password}
            label="password"
            onChange={this.handleChange}
            err={errors.password}
          />

          {this.renderButton("Register")}
          <Link class="nav-link" to="/Login">
            Login here
          </Link>
        </form>
      </div>
    );
  }
}

export default Registration;
