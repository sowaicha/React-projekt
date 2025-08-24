import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import { getCartCount } from "../utils/cartUtils";
import "./styles/Navbar.css";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setCartCount(getCartCount());

    const handleStorageChange = () => setCartCount(getCartCount());
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleSearch = () => {
    localStorage.setItem("searchQuery", searchQuery);
    navigate("/productList");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img className="nav-logo" src={logo2} alt="logo" />
        <Link className="nav-link" to="/">
          Accueil
        </Link>
        <Link className="nav-link" to="/productList">
          Produits
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </div>

      <div className="nav-right">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Suche..."
        />
        <button className="nav-button" onClick={handleSearch}>
          Suche
        </button>

        <Link className="nav-link" to="/cart">
          🛒
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
}
