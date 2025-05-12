import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Vision from "./pages/Vision";
import Social from "./pages/Social";
import Products from "./pages/Products";
import Quality from "./pages/Quality";
import Login from "./pages/Login";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/social" element={<Social />} />
      <Route path="/products" element={<Products />} />
      <Route path="/quality" element={<Quality />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
