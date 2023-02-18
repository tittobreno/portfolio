import Header from "../../components/Header";
import "./styles.css";
import { useGlobal } from "../../contexts/GlobalContext";
import MenuResponsive from "../../components/MenuResponsive";
const About = () => {
  const { openMenu } = useGlobal();

  return (
    <main className="container-about">
      <Header />
      <section className="section-main">
        <h1 className="about-me">
          Meu objetivo como desenvolvedor de software é trazer soluções práticas
          e efetivas por meio da tecnologia! <br />
          Tenho convicção no poder transformador da tecnologia, e essa é a minha
          motivação para entregar o melhor resultado em tudo que me proponho a
          fazer.
        </h1>
      </section>
      {openMenu && <MenuResponsive />}
    </main>
  );
};

export default About;
