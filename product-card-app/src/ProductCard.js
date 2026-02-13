import React from "react";
import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} className="product-img" />

      <h2>{props.name}</h2>
      <p>Price: ₹{props.price}</p>

      {props.inStock ? (
        <p className="in">In Stock ✅</p>
      ) : (
        <p className="out">Out of Stock ❌</p>
      )}
    </div>
  );
}

export default ProductCard;
