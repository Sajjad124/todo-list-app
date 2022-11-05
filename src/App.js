import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [inputList, setInputList] = useState("Buy Apple");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listofItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder="Add new item" onChange={itemEvent} />
        <button onClick={listofItems}>+</button>
        <ol>
          {/* <li>{inputList}</li> */}

          {Items.map((itemval) => {
            return <li>{itemval}</li>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
