import './styles.css';
import CondingIcon from '../../assets/coding.png';
import MenuIconOpen from '../../assets/menu.png';
import MenuIconClose from '../../assets/cancel.png';
import { useGlobal } from '../../contexts/GlobalContext';

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
                <a className='section-titles_link' href='#'><h1 className='section-titles_item'>SOBRE</h1></a>
                <a className='section-titles_link' href='#skills'><h1 className='section-titles_item'>HABILIDADES</h1></a >
                <a className='section-titles_link' href='#projects'><h1 className='section-titles_item'>PROJETOS</h1></a>
                <a className='section-titles_link' href='#contact'><h1 className='section-titles_item'>CONTATO</h1></a>
            </section>
        </header>
    )
};

export default Header;