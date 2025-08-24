import React, { useState } from "react";
//import Footer from "./Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Bitte E-Mail und Passwort eingeben.");
      return;
    }
    setError("");
    alert(`Eingeloggt als: ${email}`);
  };

  const sectionStyle = {
    maxWidth: "400px",
    padding: "20px",
    maxHeight: "500px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ccc",
    borderRadius: 8,
    boxSizing: "border-box",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "150px  auto", 
    


  };

  return (
   <section>
      <div style={sectionStyle}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="name">Nom d'utilisateur:</label>
            <input
              type="text"
              id="name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{ width: "100%", padding: 8, marginTop: 4 }}
              required
            />
          </div>

          <div>
            <label htmlFor="lastname">Prenom :</label>
            <input
              type="text"
              id="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{ width: "100%", padding: 8, marginTop: "4px" }}
              required
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label htmlFor="email">E-Mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: 8, marginTop: 4 }}
              required
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label htmlFor="password">Mot de pass:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: 8, marginTop: 4 }}
              required
            />
          </div>
          {error && (
            <div style={{ color: "red", marginBottom: 16 }}>{error}</div>
          )}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: 10,
              background: "#a18c8cff",
              color: "#fff",
              border: "none",
              borderRadius: 4,
            }}
          >
            Login
          </button>
        </form>
      </div>
  

</section>
  );
}