import "./App.css";
import { useState } from "react";
import ToDolists from "./ToDolists";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listofItems = (event) => {
    event.preventDefault();
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <form className="main_div" onSubmit={listofItems}>
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add new item"
          value={inputList}
          onChange={itemEvent}
          required
        />
        <button type="submit">+</button>
        <ol>
          {Items.map((itemval, index) => {
            return (
              <ToDolists
                key={index}
                id={index}
                style={{ color: "blue" }}
                text={itemval}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </form>
  );
};

export default App;
