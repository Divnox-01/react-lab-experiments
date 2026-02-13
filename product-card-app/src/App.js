import React from "react";
import ProductCard from "./ProductCard";

// Images import
import mouse from "./images/mouse.jpg";
import printer from "./images/printer.jpg";
import laptop from "./images/laptop.jpg";
import keyboard from "./images/keyboard.jpg";
import joystick from "./images/joystick.jpg";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Product Card Experiment</h1>

      <ProductCard
        name="Mouse"
        price="499"
        image={mouse}
        inStock={true}
      />

      <ProductCard
        name="Printer"
        price="5999"
        image={printer}
        inStock={false}
      />

      <ProductCard
        name="Laptop"
        price="55999"
        image={laptop}
        inStock={true}
      />

      <ProductCard
        name="Keyboard"
        price="999"
        image={keyboard}
        inStock={true}
      />

      <ProductCard
        name="Joystick"
        price="1499"
        image={joystick}
        inStock={false}
      />
    </div>
  );
}

export default App;
