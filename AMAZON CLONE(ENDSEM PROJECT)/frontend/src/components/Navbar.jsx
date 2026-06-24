import "./Navbar.css";

export default function Navbar({ page, setPage, cartCount, searchTerm, setSearchTerm }) {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="nav-brand" onClick={() => setPage("home")}>
          <span className="brand-icon">image:"https://th.bing.com/th/id/ODF.QhaTy7HPvKoaJWwye8j2CQ?w=32&h=32&o=6&pid=AdsPlus"</span>
          <span className="brand-name">AMAZON</span>
        </div>

        <div className="nav-search">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setPage("products")}
          />
        </div>

        <div className="nav-links">
          <button
            className={`nav-btn ${page === "home" ? "active" : ""}`}
            onClick={() => setPage("home")}
          >
            Home
          </button>
          <button
            className={`nav-btn ${page === "products" ? "active" : ""}`}
            onClick={() => setPage("products")}
          >
            Products
          </button>
          <button className="nav-cart-btn" onClick={() => setPage("cart")}>
            🛒
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}
