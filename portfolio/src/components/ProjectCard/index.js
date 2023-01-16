import './styles.css';

const ProjectCard = ({ id, name, description, linkGithub, linkDeploy }) => {
    return (
        <main className="container-project-card">
            <h2>{name}</h2>
        </main>
    )
};

export default ProjectCard;