import './styles.css';

const ProjectCard = ({ name }) => {
    return (
        <main className="container-project-card">
            <h2>{name}</h2>
        </main>
    )
};

export default ProjectCard;