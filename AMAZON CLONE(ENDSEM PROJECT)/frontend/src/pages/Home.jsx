import { PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Home.css";

export default function Home({ setPage, addToCart }) {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <div className="home">
      {/* Hero */}
      <div className="hero">
        <div className="hero-content">
          <p className="hero-tag">🎉 New Season Arrivals</p>
          <h1 className="hero-title">Shop Smart.<br />Live Better.</h1>
          <p className="hero-sub">
            Discover thousands of products — from fashion to electronics.
            Fast delivery. Best prices. Made for India.
          </p>
          <div className="hero-btns">
            <button className="btn-gold" onClick={() => setPage("products")}>
              Shop Now →
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-blob">
            <span className="hero-emoji">🛍️</span>
          </div>
          <div className="stat-card sc1"><span>12K+</span><small>Products</small></div>
          <div className="stat-card sc2"><span>4.8★</span><small>Rating</small></div>
          <div className="stat-card sc3"><span>Free</span><small>Delivery</small></div>
        </div>
      </div>

      {/* Categories */}
      <div className="page-container">
        <div className="cats-row">
          {["Electronics", "Fashion", "Books", "Home"].map((cat, i) => (
            <div
              key={cat}
              className="cat-chip"
              onClick={() => setPage("products")}
            >
              <span>{["⚡", "👔", "📚", "🏠"][i]}</span>
              {cat}
            </div>
          ))}
        </div>

        {/* Featured */}
        <h2 className="section-title">Featured Products</h2>
        <p className="section-sub">Handpicked just for you</p>
        <div className="products-grid">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button className="btn-gold" onClick={() => setPage("products")}>
            View All Products →
          </button>
        </div>
      </div>
    </div>
  );
}
