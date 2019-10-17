import React from "react";
import ReactDOM from "react-dom";

const destination = document.getElementById("root");

class App extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (<div>Hello World!</div>)  
  }
}
  
ReactDOM.render(<App />, destination);