import TutorialContent from "../components2/TutorialContent";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const TutorialHTML = () => {
  return (
    <>
      <Navbar />
      <div className="container p-5">
        <div className="wrapper">
          <TutorialContent
            name="HTML"
            content="HTML, neboli HyperText Markup Language, je standardní značkovací jazyk používaný k vytváření a designu webových stránek. Poskytuje strukturu obsahu pomocí systému značek a atributů k definici prvků, jako jsou nadpisy, odstavce, odkazy, obrázky a další. HTML dokumenty jsou interpretovány webovými prohlížeči, které je zobrazují jako vizuálně přitažlivé a interaktivní webové stránky, se kterými uživatelé mohou navigovat a interagovat."
            video='<iframe width="560" height="315" src="https://www.youtube.com/embed/qz0aGYrrlhU?si=lctqVihEccQhLVXC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
          ></TutorialContent>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default TutorialHTML;
