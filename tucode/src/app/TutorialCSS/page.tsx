import TutorialContent from "../components2/TutorialContent";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const TutorialCSS = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <TutorialContent
          name="CSS"
          content="
          CSS, neboli kaskádové styly, je jazyk používaný k definici vzhledu a formátování webových stránek. Pomocí CSS můžete nastavit barvy, velikosti, styly písma, umístění prvků a další vizuální vlastnosti HTML prvků. Tento jazyk je integrován s HTML a umožňuje vytvářet atraktivní a dobře strukturované webové stránky. CSS je klíčovým nástrojem pro designéry a vývojáře, kteří chtějí vytvořit moderní a uživatelsky přívětivé webové rozhraní."
          video='<iframe width="560" height="315" src="https://www.youtube.com/embed/1PnVor36_40?si=rK2RLEVZ47q0hFlG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
        ></TutorialContent>
      </div>

      <Footer />
    </>
  );
};
export default TutorialCSS;
