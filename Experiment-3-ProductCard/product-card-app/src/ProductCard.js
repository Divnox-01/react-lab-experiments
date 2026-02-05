import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="card">

      <img src={props.image} alt="product" className="product-image" />

      <h2>{props.name}</h2>

      <p className="price">₹{props.price}</p>

      <p className={props.inStock ? "in-stock" : "out-stock"}>
        {props.inStock ? "In Stock" : "Out of Stock"}
      </p>

      <button disabled={!props.inStock}>
        Buy Now
      </button>

    </div>
  );
}

export default ProductCard;
