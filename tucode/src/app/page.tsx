import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Aboutus from "./components/aboutus";
import Footer from "./components/footer";
import Contac from "./components/contact";
import "./styles/globals.css";




export default function Page() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Aboutus></Aboutus>
      <Contac></Contac>
      <Footer></Footer>
    </>
  );
}





