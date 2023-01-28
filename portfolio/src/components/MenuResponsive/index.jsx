import './styles.css';
import { useEffect, useRef } from 'react';
import { useGlobal } from '../../contexts/GlobalContext';
function MenuResponsive() {
    const { openMenu, setOpenMenu } = useGlobal();
    const overlayRef = useRef();

    const handleMenu = () => {
        if (openMenu) {
            overlayRef.current.style.top = '10rem';
        }
    };

    useEffect(() => {
        handleMenu()
    })

    return (
        <main ref={overlayRef} className='overlay-menu-responsive'>

            <a onClick={() => setOpenMenu(false)} href='#about' className='section-menu_item'>SOBRE</a>
            <a onClick={() => setOpenMenu(false)} href='#skills' className='section-menu_item'>HABILIDADES</a>
            <a onClick={() => setOpenMenu(false)} href='#projects' className='section-menu_item'>PROJETOS</a>
            <a onClick={() => setOpenMenu(false)} href='#contact' className='section-menu_item'>CONTATO</a>

        </main>
    );
}

export default MenuResponsive;
