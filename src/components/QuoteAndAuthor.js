import React from "react";
import quotes from "../QuoteDB";
import useGenerateRandomColor from '../useGenerateRandomColor';
import './quoteAndAuthor.css'


export default function QuoteAndAuthor(props){

    const { quote, generateRandomQuote } = props;
    const { color, generateColor } = useGenerateRandomColor();
   
    return (
        <div className="container pt-5" style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "#" + color,
            border: "0px"
          }}>
        <div className="card">

            <div className="card-body" style = {{
                textAlign: "center",
            }}>
                
                <p className="card-text">{quote.text}</p>
                <h5 className="card-title">- {quote.author}</h5>
                
                <button className="ml-3 btn btn-info" onClick={() => {
                        generateRandomQuote(quotes);
                        window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(quote.quote + '--' + quote.author))
                    }}
                    type="submit"><i class="fab fa-twitter"></i> Share Quote</button>

                <button className="btn btn-success"
                    onClick={() => { generateRandomQuote(quotes) 
                                     generateColor()}}
                    type="submit">
                    <i class="fas fa-mouse"></i> Generate Quote</button>
            </div>
        </div> 
        </div>
    );
}
