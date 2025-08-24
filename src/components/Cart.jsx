import { useEffect, useState } from "react";
import { getCart, clearCart } from "../utils/cartUtils";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleClear = () => {
    clearCart();
    setCart([]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Mon Panier</h2>
      {cart.length === 0 ? (
        <p>Ton panier est vide.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cart.map((item, index) => (
            <li key={index} style={{
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px"
            }}>
              {item.name} - {item.price} €
            </li>
          ))}
        </ul>
      )}


      <p>Total: {cart.reduce((total, item) => total + item.price, 0)} €</p>
      <button
        onClick={() => alert("Procéder au paiement")}
        style={{
          padding: "10px 15px",   
          backgroundColor: "#6fcf74ff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Procéder au paiement
      </button>
      <br />
      <br />
      <p>Nombre d'articles dans le panier: {cart.length}</p>
      <p>Montant total: {cart.reduce((total, item) => total + item.price, 0)} €</p> 


      {cart.length > 0 && (
        <button
          onClick={handleClear}
          style={{
            marginTop: "20px",
            padding: "10px 15px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Vider le panier
        </button>
      )}
    </div>
  );
}
