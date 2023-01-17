import './styles.css';
import { useEffect, useRef } from 'react';
import { useGlobal } from '../../contexts/GlobalContext';
function MenuResponsive() {
    const { openMenu } = useGlobal();
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

            <h1 className='section-menu_item'>SOBRE</h1>
            <h1 className='section-menu_item'>HABILIDADES</h1>
            <h1 className='section-menu_item'>PROJETOS</h1>
            <h1 className='section-menu_item'>CONTATO</h1>

        </main>
    );
}

export default MenuResponsive;
