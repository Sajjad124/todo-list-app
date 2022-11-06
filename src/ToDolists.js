import React from "react";
import "./ToDolists.css";

const ToDolists = (props) => {
  return (
    <div className="todo_style">
      <i
        className="fa fa-times"
        onClick={props.onSelect}
        aria-hidden="true "
      ></i>
      <li className="text">{props.text}</li>
    </div>
  );
};

export default ToDolists;
