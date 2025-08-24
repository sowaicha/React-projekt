import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Login from "./components/Login";      
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />  
        <Route path="/login" element={<Login />} />      
      </Routes>
    </Router>
  );
}

export default App;
