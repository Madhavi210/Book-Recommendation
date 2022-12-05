import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDatabase = {
  Romance: [
    { name: "Pride and Prejudice", rating: "5/5" },
    { name: "Gone with the wind", rating: "3.5/5" },
    { name: "the promise", rating: "4.3/5" }
  ],

  fiction: [
    { name: "the alchimist", rating: "5/5" },
    { name: "Alice in wonderland", rating: "4.5/5" },
    { name: "the great indian novel", rating: "3/5" }
  ],
  
  selfhelp: [
    { name: "How to Win Friends and Influence People", rating: "4.5/5" },
    { name: "Think and Grow Rich", rating: "5/5" },
    { name: "the monk who sold his farrari", rating: "3/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Romance");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h2> ​📙​📖​goodbooks </h2>
      <p style={{ fontSize: "medium" }}> Here are my favorite books </p>

      <div>
        {Object.keys(bookDatabase).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              background: "#d1d5db",
              borderRadius: "1rem",
              padding: "1rem  2rem",
              border: "2px solid black",
              margin: "3rem 0.5rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDatabase[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                background: "#fee2e2",
                listStyle: "none",
                padding: "2rem",
                border: "1px solid black",
                width: "60%",
                margin: "2rem 0rem",
                borderRadius: "0.6rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
