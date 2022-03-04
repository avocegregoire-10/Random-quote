import React, {Component} from 'react'
import QuoteAndAuthor from './components/QuoteAndAuthor';
import quotes from "./QuoteDB";
import './App.css'

export default class App extends Component {

  
  //state
   state = {
    text: quotes[0].text,
    author: quotes[0].author,
  }
  //fonction génératrice de différentes citations

   generateRandomQuote = (arr) => {
    //get random numbers
    let num = Math.floor(Math.random() * quotes.length)
    let newQuote = quotes[num];

    //update state
    this.setState({
      text: newQuote.text,
      author: newQuote.author,
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Random Quote Machine</h1>
        <QuoteAndAuthor
          generateRandomQuote={this.generateRandomQuote}
          quote={this.state}
        />
      </div>
      
    )
  }
}

