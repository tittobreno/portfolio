import { useEffect } from "react";
import IconPage from "../../assets/icon-page.svg";
import CardTools from "../../components/CardTools";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import MenuResponsive from "../../components/MenuResponsive";
import ProjectCard from "../../components/ProjectCard";
import { useGlobal } from "../../contexts/GlobalContext";
import { contacts, skills } from "../../utils/data";
import "./styles.css";

function Main() {
  const { openMenu, projects } = useGlobal();
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);
  return (
    <main className="container-main">
      <Header />

      <section className="intro">
        {openMenu && <MenuResponsive />}
        <div className="intro__left">
          <section>
            <h3 className="intro__title primary">Olá,</h3>
            <h3 className="intro__title secondary">Eu sou o Breno!</h3>
            <strong className="intro__sub-title">
              Desenvolvedor Full-Stack
            </strong>
          </section>

          <p className="intro__citation">
            “O sucesso é a soma de pequenos esforços repetidos dia após dia.”
            <br />- Robert Collier
          </p>
        </div>

        <img
          className="intro__img"
          src={IconPage}
          alt="Imagem de uma pessoa no computador."
        />
      </section>

      <section className="section section-skills">
        <h1 id="skills" className="section-title">
          HABILIDADES
        </h1>
        <main className="section-skills_main">
          {skills.map((skill, i) => (
            <CardTools
              key={`${skill} - ${i}`}
              name={skill.name}
              icon={skill.icon}
            />
          ))}
        </main>
      </section>

      <section className="section section-projects">
        <h1 id="projects" className="section-title">
          PROJETOS
        </h1>
        <main className="section-projects_main">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              linkGithub={project.linkGithub}
              linkDeploy={project.linkDeploy}
            />
          ))}
        </main>
      </section>
    </main>
  );
}

export default Main;
