import './styles.css';
import CondingIcon from '../../assets/coding.png';
const Header = () => {

    return (
        <header className='container-header'>
            <img className='header-logo-icon' src={CondingIcon} alt='Logo' />
            <section className='section-titles'>
                <h1 className='section-titles_item'>SOBRE</h1>
                <h1 className='section-titles_item'>HABILIDADES</h1>
                <h1 className='section-titles_item'>PROJETOS</h1>
                <h1 className='section-titles_item'>CONTATO</h1>
            </section>
        </header>
    )
};

export default Header;