import React, { Component } from "react";
const Input = ({ name, label, value, onChange, type, err }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        onChange={onChange}
        id={name}
        type={type}
        name={name}
        className="form-control"
        value={value}
      />

      {err && <div className="alert alert-danger">{err}</div>}
    </div>
  );
};

export default Input;
