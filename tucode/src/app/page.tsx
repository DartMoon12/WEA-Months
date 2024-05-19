import Navbar from "./navbarsection/navbar";
import Hero from "./herosection/hero";
import Aboutus from "./aboutussection/aboutus";
import "./styles/globals.css";


export default function Page() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Aboutus></Aboutus>
    </>
  );
}