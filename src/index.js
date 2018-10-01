import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      discription: "",
      age: 0,
      user_type: "",
      checkbox: "",
      radio: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.type, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <form action="">
          <p>
            <input
              name="username"
              value={this.state.username}
              type="text"
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input
              name="password"
              type="password"
              onChange={this.handleChange}
            />
          </p>
          <p>
            <textarea name="discription" onChange={this.handleChange} />
          </p>
          <p>
            <input name="age" type="number" onChange={this.handleChange} />
          </p>
          <p>
            <select name="user_type" value="admin" onChange={this.handleChange}>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </p>
          <p>
            <input
              name="checkbox"
              type="checkbox"
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input name="radio" type="radio" onChange={this.handleChange} />
          </p>
          <p>
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
          </p>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
