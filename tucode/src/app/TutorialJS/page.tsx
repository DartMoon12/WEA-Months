import TutorialContent from "../components2/TutorialContent";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const TutorialJS = () => {
  return (
    <>
      <Navbar />
      <div className="container p-5">
        <div className="wrapper">
          <TutorialContent
            name="JS"
            content="JavaScript je skriptovací programovací jazyk používaný především pro vytváření interaktivního obsahu na webových stránkách. Umí manipulovat s obsahem HTML a CSS, reagovat na události a interakce uživatele a komunikovat s webovými servery. JavaScript bývá prováděn ve webových prohlížečích a také na serverové straně pomocí technologií jako Node.js. Je známý svou flexibilitou a širokým spektrem použití v různých oblastech vývoje webových aplikací."
            video='<iframe width="560" height="315" src="https://www.youtube.com/embed/W6NZfCO5SIk?si=eEWqN_aavHSZ0JRC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
          ></TutorialContent>
        </div>
        </div>

      <Footer />
    </>
  );
};
export default TutorialJS;
