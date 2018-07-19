import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.getData = this.getData.bind(this);
    this.uncontrolled = React.createRef();
    this.controlled = React.createRef();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  getData(e) {
    e.preventDefault();
    console.log(this.controlled.current.value);
    console.log(this.uncontrolled.current.value);
    console.log(this.state.value);
  }
  /* 

  oc
  * @TODO Controlled vs Uncontrolled inputs in React
  * Try typing something in each of the inputs. What is the difference between
  * controlled and uncontrolled inputs in React?
  * 
  * Once you've observed the differences: 
  * - Write the necessary code to update the value in the controlled input. 
      (Hint: Use setState)
  * - Write the necessary code to track what the user is typing into the 
  *   uncontrolled input. (Hint: Use React.createRef())
  *
  **/
  render() {
    return (
      <div className="App">
        <h3>React Form Basics</h3>
        <form onSubmit={this.getData}>
          <label htmlFor="controlled">
            Controlled Input:
            <input
              name="controlled"
              type="text"
              ref={this.controlled}
              value={this.state.value}
              onChange={this.handleChange}
            />{" "}
            />
          </label>
          <label htmlFor="un-controlled">
            Uncontrolled Input:
            <input
              name="un-controlled"
              defaultValue="Uncontrolled input"
              type="text"
              ref={this.uncontrolled}
            />
          </label>

          <button>Get data </button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
