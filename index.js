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
          {link: 'https://www.instagram.com/p/B3J2PQIgf-_'}, 
          {link: 'https://www.instagram.com/p/B3uHNpAnMKa'},
          {link: 'https://www.instagram.com/p/B3trzHPnUG7'},
          {link: 'https://www.instagram.com/p/B3tBJh-HU9A'},
          {link: 'https://www.instagram.com/p/B3rg1S7H6dd'},
          {link: 'https://www.instagram.com/p/B3rHaJpHamD'},
          {link: 'https://www.instagram.com/p/B3qeBMVn4o5'},
          {link: 'https://www.instagram.com/p/B3o8rO5n5sw'},
          {link: 'https://www.instagram.com/p/B3ohAtOnQGv'},
          {link: 'https://www.instagram.com/p/B3n3T9FHunv'},
          {link: 'https://www.instagram.com/p/B3mYpwinelx'},
          {link: 'https://www.instagram.com/p/B3l8qXRH9wA'},
          {link: 'https://www.instagram.com/p/B3lTE7fnrhQ'},
          {link: 'https://www.instagram.com/p/B3uAONDH4OD'},
          {link: 'https://www.instagram.com/p/B3t2mYUnACx'},
          {link: 'https://www.instagram.com/p/B3tt_iiHG8P'},
          {link: 'https://www.instagram.com/p/B3ttlUvnGrN'},
          {link: 'https://www.instagram.com/p/B3te14Hng3M'},
          {link: 'https://www.instagram.com/p/B3tMLz_nYlo'},
          {link: 'https://www.instagram.com/p/B3rOSRFHRvq'},
          {link: 'https://www.instagram.com/p/B3q6UsFH3Rx'},
          {link: 'https://www.instagram.com/p/B3o2d4fnrui'},
          {link: 'https://www.instagram.com/p/B3oSnHknjBx'},
          {link: 'https://www.instagram.com/p/B3l99DqHI2C'},
          {link: 'https://www.instagram.com/p/B3lvmTwnU_z'}
        ].filter(item => Math.random() > 0.5)
      }
    }
    render() {
      return (
      <div>
        <div class='container'>
          {this.state.posts.map(obj => {
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