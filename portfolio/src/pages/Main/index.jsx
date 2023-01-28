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
        <span className='about-sub-txt'>Desenvolvedor Full-Stack</span>
        <span id='about' className='about-sub-txt'>ABOUT-ME</span>
      </section>

      <section className='section section-skills'>
        <h1 id='skills' className='section-title'>HABILIDADES</h1>
        <main className='section-skills_main'>
          {skills.map((skill, i) => (
            <CardTools
              key={`${skill} - ${i}`}
              name={skill.name}
              icon={skill.icon}
            />

          ))}
        </main>
      </section>

      <section className='section section-projects'>
        <h1 id='projects' className='section-title'>PROJETOS</h1>
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
        <h1 id='contact' className='section-title'>CONTATO</h1>
        <div className='section-contact_main'>
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
