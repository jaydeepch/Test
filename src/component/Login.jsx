import React from "react";
import Input from "./input";
import Form from "./Form";
import Joi from "joi-browser";
import { login } from "../services/authService";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

class Login extends Form {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };
  doSubmit = async () => {
    try {
      const { account } = this.state;
      const { data: jwt } = await login(account.username, account.password);
      localStorage.setItem(
        "login",
        JSON.stringify({
          login: true,
          token: jwt,
        })
      );
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = errors;
        this.setState({ errors });
      }
    }
  };
  responseGoogle = (response) => {
    if (response) {
      localStorage.setItem("access_token", response.accessToken);
      localStorage.setItem("access_name", response.profileObj.givenName);

      window.location = "/";

      console.log(response);
    } else {
      alert("something wents wrong");
    }
    console.log(response.profileObj);
  };

  responseFacebook = (response) => {
    if (response) {
      localStorage.setItem("facebook_login", response.accessToken);
      localStorage.setItem("facebook_name", response.name);
      window.location = "/";

      console.log("response", response);
    } else {
      alert("login by facebook error");
    }
  };
  componentClicked = (data) => {
    console.log(data);
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div className="container">
        <h1>login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            autoFocus
            name="username"
            value={account.username}
            label="username"
            type="text"
            onChange={this.handleChange}
            err={errors.username}
          />
          <Input
            name="password"
            type="password"
            value={account.password}
            label="password"
            onChange={this.handleChange}
            err={errors.password}
          />
          {this.renderButton("Login")}
        </form>
        <br />
        <GoogleLogin
          clientId="814370973132-naiba19v0a3emotriakt0ucm3p4ho0ap.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <FacebookLogin
          appId="3135933476630049"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          // cssClass="my-facebook-button-class"
          // icon={<TiSocialFacebookCircular />}
        />
        , ,
      </div>
    );
  }
}

export default Login;
