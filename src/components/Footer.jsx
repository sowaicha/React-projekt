const footerStyle = {
  backgroundColor: "#163f3cff",
  color: "white",
  textAlign: "center",
  padding: "20px 15px",
};

function Footer() {
  return (
    <footer style={footerStyle}>
      © {new Date().getFullYear()} Mon Magasin. Tous droits réservés.
      <br />
      <a
        href="/privacy-policy"
        style={{ color: "white", textDecoration: "underline" }}
      >
        Politique de confidentialité
      </a>
      {" | "}
      <a
        href="/terms-of-service"
        style={{ color: "white", textDecoration: "underline" }}
      >
        Conditions d'utilisation
      </a>
      <br />
      <a
        href="/imprint"
        style={{ color: "white", textDecoration: "underline" }}
      >
        Mentions légales
      </a>
      {" | "}
      <a
        href="/contact"
        style={{ color: "white", textDecoration: "underline" }}
      >
        Contact
      </a>
    </footer>
  );
}
export default Footer;
