import './styles.css';
const CardTools = ({ name, icon }) => {
    return (
        <main className="container-tools">
            <h3 className='tool-title'>{name}</h3>
            <img className='tool-img' src={icon} alt='icon' />
        </main>
    )
};

export default CardTools;