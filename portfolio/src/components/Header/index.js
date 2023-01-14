import './styles.css';
import CondingIcon from '../../assets/coding.png';
import MenuIconOpen from '../../assets/menu.png';
import MenuIconClose from '../../assets/cancel.png';
import { useGlobal } from '../../contexts/GlobalContext';
import { Link } from 'react-router-dom';
const Header = () => {
    const { openMenu, setOpenMenu } = useGlobal()
    return (
        <header className='container-header'>
            <img className='header-logo-icon' src={CondingIcon} alt='Logo' />
            <section className='section-titles'>
                <img
                    className='section-titles_menu'
                    src={openMenu ? MenuIconClose : MenuIconOpen}
                    onClick={() => setOpenMenu(!openMenu)}
                    alt='Menu'
                />
                <a className='section-titles_item' href='#'><h1 >SOBRE</h1></a>
                <a className='section-titles_item' href='#skills'><h1 >HABILIDADES</h1></a >
                <a className='section-titles_item' href='#projects'><h1 >PROJETOS</h1></a>
                <a className='section-titles_item' href='#contact'><h1 >CONTATO</h1></a>
            </section>
        </header>
    )
};

export default Header;