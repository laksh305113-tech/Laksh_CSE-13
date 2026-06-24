import "./Cart.css";

export default function Cart({ cart, removeFromCart, updateQty, setPage }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="page-container cart-empty">
        <div className="empty-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Add some products to get started!</p>
        <button className="btn-gold" onClick={() => setPage("products")}>
          Shop Now →
        </button>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h2 className="section-title">Your Cart</h2>
      <p className="section-sub">{itemCount} item{itemCount !== 1 ? "s" : ""} in your cart</p>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <span className="cart-cat">{item.category}</span>
                <p className="cart-item-price">₹{item.price.toLocaleString()}</p>
              </div>
              <div className="qty-control">
                <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                <span>{item.qty}</span>
                <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
              </div>
              <div className="cart-item-total">
                ₹{(item.price * item.qty).toLocaleString()}
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal ({itemCount} items)</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span className="free-tag">FREE</span>
          </div>
          <div className="summary-row discount-row">
            <span>Discount (10%)</span>
            <span>− ₹{Math.round(total * 0.1).toLocaleString()}</span>
          </div>
          <hr />
          <div className="summary-row total-row">
            <span>Total</span>
            <span>₹{Math.round(total * 0.9).toLocaleString()}</span>
          </div>
          <button className="btn-gold checkout-btn">
            Proceed to Checkout →
          </button>
          <button
            className="btn-outline"
            style={{ width: "100%", marginTop: "0.75rem" }}
            onClick={() => setPage("products")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
