import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import data from './quotes_'


function App()
{
  
  const length = Object.keys(data['quote']).length
  
  const initialQuote = Math.floor(Math.random()*length)
  

  let [quote, setQuote] = useState(
    {
      quote: data['quote'][initialQuote],
      author: data['author'][initialQuote]
    }
  );


  function generateQuote() 
  {
    const randomIndex = Math.floor(Math.random() * length);
    if(data['quote'][randomIndex]==undefined ||data['quote'][randomIndex].length>150){ generateQuote() }
    else
    setQuote({
      quote: data['quote'][randomIndex].replace(/”|“|"/g,' '),
      author: data['author'][randomIndex]
      });
    
  }
  



  return(<>
    <div id='quote-box'>
      <div id='text'>{quote.quote}</div>
      <div id='author'>{quote.author}</div>
      <button id='new-quote' onClick={generateQuote} >New Quote</button>
      <a href='' id='tweet-quote'></a>
    </div>
    </>  
  )

  }
export default App;