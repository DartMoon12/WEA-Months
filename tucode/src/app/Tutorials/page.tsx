import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Tutorial from "../components/tutorials";

export default function Tutorials() {
  return (
    <>
      <Navbar></Navbar>
      <div className="tutorial-page">
        <div className="wrapper">
          <div className="seperator"></div>
          <h2>Tutoriály</h2>
          <div className="tutorial">
            <Tutorial name="HTML" img="/images/html.png" alt="html logo" />
            
            <Tutorial name="CSS" img="/images/css.png" alt="css logo" />
            
            <Tutorial
              name="Javascript"
              img="/images/javascript.png"
              alt="javascript logo"
            />
            
          </div>

          <div className="col-md-6">
             
          <a href="./tutorials-html"><button className="bt1">Odkaz</button></a>
          <a href="./tutorials-css"><button className="bt2">Odkaz</button></a>
          <a href="./tutorials-js"><button className="bt3">Odkaz</button></a>
              
          </div>

        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
