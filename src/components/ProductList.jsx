import ProductCard from "../components/ProductCard.jsx";
import earrings from "../assets/img/earrings.png";
import colis from "../assets/img/colis.png";
import chaine from "../assets/img/chaine.png";
import colisComplet from "../assets/img/colisComplet.png";
import silverearrings from "../assets/img/silverearrings.png";
import montre from "../assets/img/montre.png";
import bijoux from "../assets/img/bijoux.png";

export default function ProductList() {
  
  const products = [
    {
      id: 1,
      name: "Boucles d'oreilles",
      image: earrings,
      price: 29.99,
    },
    {
      id: 2,
      name: "Colis surprise",
      image: colis,
      price: 49.99,
    },
    {      id: 3,
      name: "Chaine en or",
      image: chaine,
      price: 99.99,
    },
    {      id: 4,
      name: "Colis complet",
      image: colisComplet,
      price: 79.99,
    },
    {      id: 5,
      name: "Bracelet en argent",
      image:  chaine,
      price: 39.99,
    },
    {      id: 6,
      name: "Montre en cuir",
      image: montre,
      price: 89.99,   
    },

    {      id: 7,
      name: "Bijoux en or",
      image: bijoux,
      price: 120.00,
    },
    {      id: 8,
      name: "Boucles d'oreilles en argent",
      image: silverearrings,
      price: 34.99,
    },
  ];

  return (
   <div style={{
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "30px",
  padding: "20px",
  
}}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
