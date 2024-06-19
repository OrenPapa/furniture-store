import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/home";
import AboutUs from "./view/about";
import Services from "./view/services";
import Blog from "./view/blog";
import ContactUs from "./view/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
