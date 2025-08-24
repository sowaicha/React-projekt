import { addToCart } from "../utils/cartUtils.jsx";

export default function ProductCard({ product }) {
  const handleAdd = () => {
    addToCart(product);
    alert(`${product.name} ajouté au panier !`);
  };

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "20px",
      width: "300px",
      backgroundColor: "white",
      boxShadow: "0 4px 8px rgba(20, 10, 10, 0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "12px"
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "190px",
          objectFit: "cover",
          borderRadius: "8px"
        }}
      />
      <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
        {product.name}
      </h3>
      <p style={{ fontSize: "16px", color: "#6fcf74", fontWeight: "bold" }}>
        {product.price} €
      </p>
      <button
        onClick={handleAdd}
        style={{
          backgroundColor: "#6fcf74",
          color: "white",
          border: "none",
          padding: "20px 20px",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
          
        }}
      >
        Ajouter au panier
      </button>
    </div>
  );
}
