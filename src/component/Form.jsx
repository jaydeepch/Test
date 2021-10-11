import React, { Component } from "react";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.account, this.schema, options);
    console.log(result);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };
  doSubmit = () => {
    console.log("submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
    console.log(account.username);
  };
  renderButton(label) {
    return (
      // <button
      //   disabled={this.validate()}
      //   type="submit"
      //   className="btn btn-primary m-2 width:20px"
      // >
      //   {label}
      // </button>
      <button disabled={this.validate()} type="submit" class="btn btn-primary">
        {label}
      </button>
    );
  }
}
export default Form;
