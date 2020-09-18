import React, { useState, useEffect } from "react";
import "./index.css";
const MyQuotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  function getNewQuote() {
    fetch("http://localhost:4000/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuote(data.quote);
        setAuthor(data.author);
      });
  }
  useEffect(() => {
    fetch("http://localhost:4000/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuote(data.quote);
        setAuthor(data.author);
      });
  }, []);
  return (
    <div>
      <p> {quote}</p>
      <p>{author}</p>
      <button onClick={getNewQuote}>Get new quote</button>
    </div>
  );
};

export default MyQuotes;
