import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { Footer } from "./components/footer/Footer";
import { ShoppingCart } from "./components/Router/ShoppingCart";
import { ShoppingCartProvider } from "./components/context/ShoppingCartContext";
import Products from "./data/products.json";
import Promo from "./data/promocion.json";
import { ShopHerramientas } from "./components/shop/shopHerramientas/ShopHerramientas";
import { ShopCuchillos } from "./components/shop/shopCuchillos/ShopCuchillos";
import { ShopConjuntos } from "./components/shop/ShopConjuntos/ShopConjuntos";

function App() {
  const [productsPorPage, setProductsPorPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home products={Products} promo={Promo} />}
          />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route
            path="/cuchillos"
            element={
              <ShopCuchillos
                productsPorPage={productsPorPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            }
          />
          <Route
            path="/herramientas"
            element={
              <ShopHerramientas
                productsPorPage={productsPorPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            }
          />
          <Route
            path="/conjuntos"
            element={
              <ShopConjuntos
                productsPorPage={productsPorPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
