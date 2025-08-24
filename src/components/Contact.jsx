import React from 'react';
import { useState } from "react";
import Footer from "./Footer";



export default function Contact() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées :", { name, email, message });

 
    alert("Votre message a été envoyé ✅");
    
    // Réinitialiser les champs
    setName("");
    setEmail("");
    setMessage("");
  };

  return (

  <section>
    <div style={{
      maxWidth: "600px",
      margin: "130px auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "12px",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)"
    }}>
      <h1 style={{ textAlign: "center", color: "#163f3c" }}>📩 Contactez-nous</h1>
      <p style={{ textAlign: "center", marginBottom: "30px", fontSize: "18px" }}>
        Une question sur un produit, une commande ou un partenariat ?  
        Remplissez le formulaire ci-dessous et nous reviendrons vers vous rapidement.
      </p>

      {/* Formulaire contrôlé */}
      <form 
        onSubmit={handleSubmit} 
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <input
          type="text"
          placeholder="Votre nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <textarea
          placeholder="Votre message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}
        ></textarea>
        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#6fcf74",
            color: "white",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Envoyer
        </button>
      </form>

       <div style={{ marginTop: "30px", textAlign: "center" }}>
        <p><strong>Email :</strong> contact@monsite.com</p>
        <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
        <p><strong>Adresse :</strong> 123 Rue du Shop, Paris</p>
      </div>
     
    </div>

   <Footer />

  </section>
  );
}

