import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Aboutus from "./components/aboutus";
import Footer from "./components/footer";
import Contac from "./components/contact";
import "./styles/globals.css";
import Tutorials from "./components/tutorials";

export default function Page() {
  return (
    <>
      <div className="wrapper">
        <Navbar></Navbar>
      </div>
      <Hero></Hero>
      <div className="wrapper">
        <Aboutus></Aboutus>
        <h2 className="tutorial-nadpis">Tutoriály</h2>
        <div className="tutorial">
          <Tutorials name="HTML" img="/images/html.png" />
          <Tutorials name="CSS" img="/images/css.png" />
          <Tutorials name="Javascript" img="/images/javascript.png" />
        </div>
        <Contac></Contac>
        <Footer></Footer>
      </div>
    </>
  );
}
