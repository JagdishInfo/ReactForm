import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <form action="">
        <p>
          <input name type="text" />
        </p>
        <p>
          <input name type="password" />
        </p>
        <p>
          <textarea name="" />
        </p>
        <p>
          <input name type="number" />
        </p>
        <p>
          <input name type="checkbox" />
        </p>
        <p>
          <input name type="radio" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
