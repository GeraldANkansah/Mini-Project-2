import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
    return (
      <div className="about-container">
        <h1>About Digital Keypad</h1>
        <p>
        You may enter and work with numbers in binary, octal, decimal, and
          hexadecimal systems with the Digital Keypad, a strong yet
          user-friendly tool. This application makes conversions simple,
          regardless of whether you're a student, programmer, or tech
          enthusiast. It can take multiple arguments as well, and you can even
          change the bases from numbers 2 through 36!.
        </p>
  
        <h2>Key Features: </h2>
        <ul>
        <li>Real-Time Conversion: See how numbers change across different bases.</li>
          <li>Intuitive Interface: Non-complex design with an easy number entry system.</li>
          <li>Interactive Controls: Increment/Decrement numbers easily.</li>
        </ul>
  
        <h2>Fun Facts about each number:</h2>
        <ul>
          <li>Binary: It is a counting system with only two digits. These digits are typically 0 and 1. </li>
          <li>Decimal: The number system we typically use everyday!</li>
          <li>Hexadecimal: It's the way for us to be able to represent numbers in 16 different ways.</li>
          <li>Octal: It uses digits 0-7 in order to represent numbers.</li>
        </ul>
  
        
      </div>
    );
  }