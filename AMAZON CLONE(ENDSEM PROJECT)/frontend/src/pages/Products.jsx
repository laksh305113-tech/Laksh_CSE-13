import { useState, useMemo } from "react";
import { PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Products.css";

const CATEGORIES = ["All", "Electronics", "Fashion", "Books", "Home"];

export default function Products({ addToCart, searchTerm }) {
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (category !== "All") list = list.filter((p) => p.category === category);
    if (searchTerm) {
      const s = searchTerm.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(s) ||
          p.description.toLowerCase().includes(s)
      );
    }
    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, searchTerm, sortBy]);

  return (
    <div className="page-container">
      <h2 className="section-title">All Products</h2>
      <p className="section-sub">{filtered.length} products found</p>

      <div className="filters-row">
        <div className="cat-filters">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`cat-filter-btn ${category === c ? "active" : ""}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <select
          className="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Sort: Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="no-results">
          <p style={{ fontSize: "3rem" }}>🔍</p>
          <p>No products found for "{searchTerm}"</p>
        </div>
      ) : (
        <div className="products-grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
}
