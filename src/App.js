import Header, { HeaderPhone } from "./Components/Header";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Timeline from "./Components/Timeline";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Skill from "./Components/Skill";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  

  return (
    <>
  
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home ratio={ratio} />
      <Work />
      <Timeline />
      <Services />
      {/* <Skill/>   */}
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
      <Toaster />
    </>
  
    
  )
}

export default App;