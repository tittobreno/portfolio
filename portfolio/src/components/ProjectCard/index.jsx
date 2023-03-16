import "./styles.css";

const ProjectCard = ({ name }) => {
  return (
    <main className="projects">
      <h2 className="projects__title">{name}</h2>
    </main>
  );
};

export default ProjectCard;
