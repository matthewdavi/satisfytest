import React, { Component } from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import OrderCard from "./OrderCard.js";
import HeaderBar from "./HeaderBar.js";
//const response = require("./response.js");
import response from "./response.js";
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div class="App">
          <HeaderBar />
          <OrderCard orderData={response} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
