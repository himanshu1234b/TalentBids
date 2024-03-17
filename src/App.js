import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Whatwedo from "./components/Whatwedo";
import Whyus from "./components/Whyus";
import Aasdev from "./components/Aasdev";

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route  path="/About" element={<About />} />
      <Route path="/whatwedo/*" element={<Whatwedo />} />
      <Route path="/whyus" element={<Whyus />} />
      <Route path="/aasdev" element={<Aasdev />} />
    </Routes>
      
      {/* <Home />
      <Footer /> */}
    </BrowserRouter>
    </>
  );
}

export default App;
