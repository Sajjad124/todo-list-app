import React from "react";
import "./ToDolists.css";

const ToDolists = (props) => {
  return (
    <div className="todo_style">
      <i className="fa fa-times" aria-hidden="true "></i>
      <li style={{ color: "blue" }}>{props.text}</li>
    </div>
  );
};

export default ToDolists;
