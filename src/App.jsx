import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/footers/Footer";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Context";
import Service from "./Pages/Services/Service";
// import Categories from "./components/Categories/Categories";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<HeroSection />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/service" element={<Service/>} />
        </Routes>
        <Footer />
        
      </BrowserRouter>
      {/* <Categories/> */}
    </>
  );
}

export default App;
