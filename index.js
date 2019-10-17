import React from "react";
import ReactDOM from "react-dom";
import './stylesheets/styles.scss';


const destination = document.getElementById("root");

console.log('Can you see this?')

class App extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (<div>Hello World!👑</div>)  
  }
}
  
ReactDOM.render(<App />, destination);