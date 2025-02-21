import React, { useState } from "react";
import Card from "./Card";

function Converter() {
  const [inputValue, setInputValue] = useState("0");
  const [defaultBase, setDefaultBase] = useState(10);
  const [savedCards, setSavedCards] = useState([]); 

  const adjustValue = (amount) => {
    setInputValue((prev) => (parseFloat(prev) || 0) + amount);
  };

  const convert = () => {
    const numbers = inputValue
      .split(",")
      .map((num) => parseFloat(num.trim()))
      .filter((num) => !isNaN(num));

    if (numbers.length === 0) {
      alert("Please enter at least one valid number.");
      return;
    }

    const newResult = {
      id: Date.now(), 
      binary: numbers.map((num) => num.toString(2)).join(", "),
      octal: numbers.map((num) => num.toString(8)).join(", "),
      hexadecimal: numbers.map((num) => num.toString(16).toUpperCase()).join(", "),
      decimal: numbers.join(", "),
      customBase: numbers.map((num) => num.toString(defaultBase)).join(", "),
    };

    setSavedCards((prev) => [...prev, newResult]); 
  };

  const deleteCard = (id) => {
    setSavedCards((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <div className="converter-container">
      <h1>Digital Keypad:</h1>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter number(s), comma-separated"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={convert} className="normal-button">
        Convert & Save Card
      </button>

      
      <div className="adjust-buttons">
        <button onClick={() => adjustValue(5)}>Increment +5</button>
        <button onClick={() => adjustValue(-5)}>Decrement -5</button>
        <button onClick={() => adjustValue(1)}>Increment by 1</button>
        <button onClick={() => adjustValue(-1)}>Decrement by 1</button>
      </div>

      <h3>Saved Conversions:</h3>
      <div className="cards-container">
        {savedCards.map((card) => (
          <Card key={card.id} {...card} onDelete={() => deleteCard(card.id)} />
        ))}
      </div>
    </div>
  );
}

export default Converter;
