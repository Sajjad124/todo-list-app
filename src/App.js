import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder="Add new item" />
        <button>+</button>
        <ol>
          <li>buy apple</li>
        </ol>
      </div>
    </div>
  );
};

export default App;
