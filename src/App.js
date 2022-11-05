import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [inputList, setInputList] = useState("Buy Apple");

  const itemEvent=(event)=>{
     
  };

  
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder="Add new item" onChange={itemEvent} />
        <button>+</button>
        <ol>
          <li>{inputList}</li>
        </ol>
      </div>
    </div>
  );
};

export default App;
