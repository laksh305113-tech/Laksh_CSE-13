import { useState } from "react";
import "./ProductCard.css";

export default function ProductCard({ product, addToCart }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <div className="product-card">
      <div className="product-img-wrap">
        <img src={product.image} alt={product.name} className="product-img" />
        <span className="product-category">{product.category}</span>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">₹{product.price.toLocaleString()}</span>
          <div className="product-rating">
            {"★".repeat(Math.floor(product.rating))}
            <span className="rating-val"> {product.rating}</span>
          </div>
        </div>
        <button
          className={`btn-add ${added ? "added" : ""}`}
          onClick={handleAdd}
        >
          {added ? "✓ Added!" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
