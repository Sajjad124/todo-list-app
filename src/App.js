import "./App.css";
import { useState } from "react";
import ToDolists from "./ToDolists";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listofItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add new item"
          value={inputList}
          onChange={itemEvent}
        />
        <button onClick={listofItems}>+</button>
        <ol>
          {Items.map((itemval) => {
            return <ToDolists style={{ color: "blue" }}> text={itemval} </ToDolists>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
