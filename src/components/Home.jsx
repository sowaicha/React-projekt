import { addToCart } from "../utils/cartUtils";
import bijoux from "../assets/img/bijoux.png";
import chaine from "../assets/img/chaine.png";
import colis from "../assets/img/colis.png";
import { useEffect, useState } from "react";
import montre from "../assets/img/montre.png";
import Footer from "./Footer";

const featuredProducts = [
  { id: 1, name: "  bague et collier", price: 100, image: bijoux },
  { id: 2, name: "Un collier en or", price: 200, image: chaine },
  { id: 3, name: "Des jolis bague en Diamant ", price: 150, image: colis },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ marginTop:"15px" }}>
      {/* Slider */}
      <section style={{ textAlign: "center" }}>
        <img
          src={featuredProducts[currentSlide].image}
          alt={featuredProducts[currentSlide].name}
          style={{
            width: "60%", 
            borderRadius: "15px",
            maxHeight: "600px",
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        />
        {/*   <h2>{featuredProducts[currentSlide].name}</h2>
        <p>{featuredProducts[currentSlide].price} €</p> */}
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2 style={{ textAlign: "center" }}>À propos de notre boutique</h2>
        <p
          style={{
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.8",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          Bienvenue sur notre boutique en ligne ! Nous sommes une équipe
          passionnée par la qualité et le service client. Notre objectif est de
          vous offrir des produits uniques, soigneusement sélectionnés pour
          répondre à vos besoins et vos goûts. Chaque produit est testé et
          vérifié afin de garantir sa durabilité et sa performance. Nous croyons
          en la transparence, la fiabilité et le respect de nos clients. C’est
          pourquoi nous mettons un point d’honneur à fournir des descriptions
          claires et détaillées pour chacun de nos articles. Notre boutique est
          plus qu’un simple site e-commerce : c’est un espace où vous pouvez
          découvrir de nouvelles tendances, bénéficier de conseils personnalisés
          et trouver exactement ce que vous cherchez. Nous sommes également
          disponibles pour répondre à toutes vos questions et vous accompagner
          tout au long de votre expérience d’achat. Merci de nous faire
          confiance et de choisir notre boutique pour vos achats. Nous espérons
          que vous apprécierez naviguer sur notre site et que vous trouverez les
          produits parfaits pour vous et vos proches !
        </p>
      </section>
      {/* Produits phares */}
      <section>
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
          Nos produits phares
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "550px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              />
              <h3>{product.name}</h3>
              <p>{product.price} €</p>
              <button
                onClick={() => addToCart(product)}
                style={{
                  padding: "5px 10px",
                  borderRadius: "5px",
                  backgroundColor: "#6fcf74ff",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          margin: "0 auto",
          paddingTop: "40px",
          maxWidth: "70%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: " 30px",
        }}
      >
        <img
          style={{
            width: "800px",
            height: "250px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
          src={montre}
          alt="une tres belle montre "
        />
        <div>
          <h2 style={{ textAlign: "center" }}>
            Notre nouvelle collection de montres
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            Nous sommes fiers de vous présenter notre dernière collection de
            montres, alliant élégance et fonctionnalité. Chaque pièce est conçue
            avec soin pour répondre aux attentes des amateurs de montres les
            plus exigeants. Que vous recherchiez une montre pour une occasion
            spéciale ou pour un usage quotidien, notre collection offre une
            variété de styles et de designs pour tous les goûts.
          </p>
        </div>
      </section>

      <section
        style={{ marginTop: "40px", marginBottom: "20px", textAlign: "center" }}
      >
        <h2>Livraison rapide et sécurisée</h2>
        <p
          style={{
            
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.8",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          Nous nous engageons à vous offrir une expérience d'achat fluide et
          agréable. Nos produits sont expédiés rapidement et en toute sécurité,
          afin que vous puissiez profiter de vos achats sans attendre. Nous
          travaillons avec des partenaires de confiance pour garantir que vos
          commandes arrivent à temps et en parfait état. De plus, nous offrons
          plusieurs options de livraison pour s'adapter à vos besoins. Que ce
          soit une livraison standard ou express, nous veillons à ce que votre
          commande soit traitée avec le plus grand soin. Votre satisfaction est
          notre priorité, et nous sommes là pour vous accompagner à chaque étape
          de votre expérience d'achat. N'hésitez pas à nous contacter si vous
          avez des questions ou des préoccupations concernant votre commande.
        </p>
      </section>
      <Footer />
    </section>
  );
}
