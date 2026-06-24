import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id, qty) => {
    if (qty === 0) return removeFromCart(id);
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="app-root">
      <Navbar
        page={page}
        setPage={setPage}
        cartCount={cartCount}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {page === "home" && <Home setPage={setPage} addToCart={addToCart} />}
      {page === "products" && (
        <Products addToCart={addToCart} searchTerm={searchTerm} />
      )}
      {page === "cart" && (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          updateQty={updateQty}
          setPage={setPage}
        />
      )}
    </div>
  );
}
