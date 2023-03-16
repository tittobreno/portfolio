import Header from "../../components/Header";
import "./styles.css";
import { useGlobal } from "../../contexts/GlobalContext";
import MenuResponsive from "../../components/MenuResponsive";
const About = () => {
  const { openMenu } = useGlobal();

  return (
    <main className="about">
      <Header />
      <section className="about__main">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          quia?
        </p>
      </section>
      {openMenu && <MenuResponsive />}
    </main>
  );
};

export default About;
