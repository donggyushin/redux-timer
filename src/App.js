import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import TimerContainer from "containers/TimerContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TimerContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
