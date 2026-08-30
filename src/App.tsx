
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import WhyChooseUs from "./Components/WhyChooseUs";
import Contact from "./Components/Contact";
import Machinery from "./Components/Machinery";
import Clients from "./Components/Clients";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Contact />
      <Machinery />
      <Clients />
    </>
  );
}

export default App;
