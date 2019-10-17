import React from "react";
import ReactDOM from "react-dom";
import './stylesheets/styles.scss';
import InstagramEmbed from 'react-instagram-embed';



const destination = document.getElementById("root");

console.log('Can you see this?')

class App extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
      <div>
        <InstagramEmbed
          url='https://www.instagram.com/p/B3ZDadxnngD/'
          hideCaption={true}
          containerTagName='div'
        />
        <InstagramEmbed
          url='https://www.instagram.com/p/B3JoGALH0Ja/'
          hideCaption={true}
          containerTagName='div'
        />
      </div>)  
  }
}
  
ReactDOM.render(<App />, destination);