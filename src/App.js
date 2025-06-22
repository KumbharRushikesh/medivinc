import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Vision from "./pages/Vision";
import Social from "./pages/Social";
import Products from "./pages/Products";
import Contactus from "./pages/Contactus";
import Login from "./pages/Login";
import AllProducts from "./pages/AllProducts";
import Footer from "./components/Footer";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "../src/components/ScrollToTop";

const App = () => (
  <HelmetProvider>
  <Router>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/social" element={<Social />} />
      <Route path="/products" element={<Products />} />
      <Route path="/Contactus" element={<Contactus />} />
      <Route path="/login" element={<Login />} />
      <Route path="/allproducts" element={<AllProducts />} />
    </Routes>
    <Footer />

  </Router>
  </HelmetProvider>
);

export default App;
