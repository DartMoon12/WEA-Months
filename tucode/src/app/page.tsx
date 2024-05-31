import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Aboutus from "./components/aboutus";
import Footer from "./components/footer";
import Contact from "./components/contact";
import "./styles/globals.css";
import Tutorials from "./components/tutorials";





export default function Page() {

  return (
    <>
      <div className="wrapper">
        <Navbar/>
      </div>
      <Hero/>
      <div className="wrapper">
        <Aboutus/>
        <div className="seperator"></div>
        <h2 className="tutorial-nadpis">Tutoriály</h2>
        <div className="tutorial">
          <Tutorials name="HTML" img="/images/html.png" alt="html logo"/>
          <Tutorials name="CSS" img="/images/css.png" alt = "css logo" />
          <Tutorials name="Javascript" img="/images/javascript.png" alt = "javascript logo" />
        </div>
        <Contact/>
        <Footer/>
  


        

      

      </div>
    

      </>
  );
}
