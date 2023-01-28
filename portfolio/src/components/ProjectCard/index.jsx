import './styles.css';

const ProjectCard = ({ name }) => {
    return (
        <main className="container-project-card">
            <h2 className='project-card_title'>{name}</h2>
        </main>
    )
};

export default ProjectCard;