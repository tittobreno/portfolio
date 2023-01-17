import './styles.css';
import Header from '../../components/Header';
import { useGlobal } from '../../contexts/GlobalContext';
import MenuResponsive from '../../components/MenuResponsive';
import ProjectCard from '../../components/ProjectCard';
import CardTools from '../../components/CardTools';
import { contacts, skills } from '../../utils/data';
import Contact from '../../components/Contact';
function Main() {
  const { openMenu, projects } = useGlobal();
  return (

    <main className='container-main'>
      <Header />

      <section className='container-about'>
        {openMenu && <MenuResponsive />}

        <h3 className='about-txt primary'>Olá,</h3>
        <h3 className='about-txt secondary'>{`Eu sou o Breno!`}</h3>
        <span className='about-sub-txt'>Desenvolvedor Back-end</span>
        <span className='about-sub-txt'>ABOUT-ME</span>
      </section>

      <section className='section section-skills'>
        <a name='skills'><h1 className='section-title'>HABILIDADES</h1></a>
        <main className='section-skills_main'>
          {skills.map((skill) => (
            <CardTools
              key={skill.id}
              name={skill.name}
              icon={skill.icon}
            />

          ))}
        </main>
      </section>

      <section className='section section-projects'>
        <a name='projects'><h1 className='section-title'>PROJETOS</h1></a>
        <main className='section-projects_main'>
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

      <section className='section'>
        <a name='contact'><h1 className='section-title'>CONTATO</h1></a>
        <div className='section-contact_main'>
          {contacts.map((contact) => (
            <Contact
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
