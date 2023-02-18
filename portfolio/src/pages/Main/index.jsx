import "./styles.css";
import Header from "../../components/Header";
import { useGlobal } from "../../contexts/GlobalContext";
import MenuResponsive from "../../components/MenuResponsive";
import ProjectCard from "../../components/ProjectCard";
import CardTools from "../../components/CardTools";
import { contacts, skills } from "../../utils/data";
import Contact from "../../components/Contact";
import { useEffect } from "react";
import IconPage from "../../assets/icon-page.svg";

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

      <section className="section-profile">
        {openMenu && <MenuResponsive />}
        <div className="profile_introduction">
          <h3 className="about-txt primary">Olá,</h3>
          <h3 className="about-txt secondary">{`Eu sou o Breno!`}</h3>
          <strong className="about-sub-txt">Desenvolvedor Full-Stack</strong>
          <div>
            <p className="about-quote">
              “O sucesso é a soma de pequenos esforços repetidos dia após dia.”
              <p>- Robert Collier</p>
            </p>
          </div>
        </div>

        <img className="icon-page" src={IconPage} alt="Ícone" />
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

      <section className="section">
        <h1 id="contact" className="section-title">
          CONTATO
        </h1>
        <div className="section-contact_main">
          {contacts.map((contact) => (
            <Contact
              key={contact.name}
              name={contact.name}
              icon={contact.icon}
              description={contact.description}
              link={contact.link}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
