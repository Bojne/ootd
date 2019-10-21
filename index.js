import React from "react";
import ReactDOM from "react-dom";
import './stylesheets/styles.scss';
import InstagramEmbed from 'react-instagram-embed';
import data from './data/postLink'


const destination = document.getElementById("root");
const postLinks = data.post.filter(item => Math.random() > 0.5)

class App extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
      <div>
        <div class='container'>
          {postLinks.map(obj => {
            return this.renderIgPosts(obj.link);
          })}
        </div>
      </div>)  
    }
    renderIgPosts(link) {
      console.log(link)
      return (
        <div class='item'>
          <InstagramEmbed
            url={link}
            hideCaption={true}
            containerTagName='div'
          />
        </div>
        
      );
    }
}
  
ReactDOM.render(<App />, destination);