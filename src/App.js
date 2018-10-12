import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

constructor() {
  super();
  this.state = {
      quotes: '',
      gif: []
 };
}

  handleSubmit = (event) => {
    event.preventDefault();


   axios.get(`http://api.giphy.com/v1/gifs/search?q=ron+swanson/random&api_key=`)
    .then(res => {
      const gif = [res.data.data[0]];
      //noCanvas();
      //createImageBitmap (res.data[0].url)
      //for(var i=0; i<res.data.length; i++ ){
//createImageBitmap(this.state.gif)
     // }
      this.setState({
        gif:gif
      
    })
    console.table([res.data.data[0]])
    
  })



  /*
  HOST
  api.giphy.com
     //https://ron-swanson-quotes.herokuapp.com/v2/quotes
//var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
//xhr.done(function(data) { console.log("success got data", data); });
PATH
GET /v1/gifs/random
*/

    axios.get(` https://ron-swanson-quotes.herokuapp.com/v2/quotes
    `)
    .then(res => {
      const quotes = res.data;
      
      this.setState({
         quotes:quotes 
         
        });
     // console.log(quotes);
  
    })  
   }
    

      render() {
        return (

          <div className="Main-App">
        <header className="App-header">
          <h1 className="title textColor">Ron Swanson Quotes</h1>
          <br />
        </header>
        <br></br>
        <button href="#" className= "myButton" type="button" onClick={this.handleSubmit}>Get New Quote</button>

      {/* <form> */}
 <br></br>
      {/* </form> */}

<div>

 <div >
  <h1 className='textColor'>Ron Says</h1>    
   <div className="row">
    <div className="col-sm-6">
      <p>{this.state.quotes}</p>
      <br />
      <div className='container'>
        {this.state.gif}
       
        
      </div>
    </div>
   </div>
 </div>
</div>
</div>
   );
  }
}
export default App;
