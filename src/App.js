import React, { Component, createContext } from "react";
import "./App.css";
import TypeMe from "./TypeMe";
import ErrorBoundary from "./ErrorBoundery";

const FirstName = createContext();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Assignment 4</p>
        </header>

        <ErrorBoundary>
          <FirstName.Provider value={"Hiii..."}>
            <TypeMe />
          </FirstName.Provider>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
export { FirstName };
