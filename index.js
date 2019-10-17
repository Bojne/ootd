import React from "react";
import ReactDOM from "react-dom";
import './stylesheets/styles.scss';
import InstagramEmbed from 'react-instagram-embed';



const destination = document.getElementById("root");

console.log('Can you see this?')

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        posts:
        [
          {link: 'https://www.instagram.com/p/B3txEARAcSI'},
          {link: 'https://www.instagram.com/p/B3o0K1CA5Ld'},
          {link: 'https://www.instagram.com/p/B3hh9rsAb0D'},
          {link: 'https://www.instagram.com/p/B3e0Yjggasv'},
          {link: 'https://www.instagram.com/p/B3cG_MEAPFU'},
          {link: 'https://www.instagram.com/p/B3ZEkw6goxS'},
          {link: 'https://www.instagram.com/p/B3WqTHbgvPY'},
          {link: 'https://www.instagram.com/p/B3T3BKaAXUd'},
          {link: 'https://www.instagram.com/p/B3R9hV3ABpm'},
          {link: 'https://www.instagram.com/p/B3PBcuoAIfa'},
          {link: 'https://www.instagram.com/p/B3MctJzAvnB'},
          {link: 'https://www.instagram.com/p/B3J2PQIgf-_'}]
      }
    }
    render() {
      return (
      <div>
        <div>
          {this.state.posts.map(obj => {
            return this.renderIgPosts(obj.link);
          })}
        </div>
      </div>)  
    }
    renderIgPosts(link) {
      console.log(link)
      return (
        <InstagramEmbed
          url={link}
          hideCaption={true}
          containerTagName='div'
        />
      );
    }
}
  
ReactDOM.render(<App />, destination);