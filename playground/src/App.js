import React from "react";
import "./App.css";
import { CharComponent } from "./CharComponent";
import { ValidationComponent } from "./ValidationComponent";

class App extends React.Component {
  state = { input: "" };

  onChangeHandler = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  removeLetterHandler = (idx) => {
    const arr = this.state.input.split("");
    arr.splice(idx, 1);
    this.setState({ input: arr.join("") });
  };

  render() {
    const charList = this.state.input
      .split("")
      .map((letter, idx) => (
        <CharComponent
          key={idx}
          letter={letter}
          removeLetter={() => this.removeLetterHandler(idx)}
        />
      ));

    return (
      <div className="App">
        <div className="input">
          <input
            type="text"
            value={this.state.input}
            onChange={this.onChangeHandler}
          ></input>
        </div>
        <p>{this.state.input}</p>
        <ValidationComponent textLength={this.state.input.length} />
        {charList}
      </div>
    );
  }
}

export default App;
