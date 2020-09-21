import React, { Component } from 'react';
import { Button } from "@blueprintjs/core";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {name: "Mohib"};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((prevState, props) => ({
      name: prevState.name.toUpperCase()
    }));
  }

  handleChange(e) {
    this.setState((inputText, props) => ({
      name: inputText.e.target.value()
    }));
  }

  render() {
    return (
      <div className="App">
        <p> {this.state.name}</p>
        <Button intent="success" text="UPPERCAS!I" type="button" onClick={this.handleClick}>
        </Button>
        <input type="text" value={this.state.inputText} name="inputText" placeholder="Enter your Comment!" onChange={this.handleChange}  /> 
      </div>
    )
  }
}

export default App;
