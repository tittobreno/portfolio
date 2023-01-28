import "./styles.css";
import { useEffect, useRef } from "react";
import { useGlobal } from "../../contexts/GlobalContext";
import { motion } from "framer-motion";
function MenuResponsive() {
  const { openMenu, setOpenMenu } = useGlobal();
  const overlayRef = useRef();

  const handleMenu = () => {
    if (openMenu) {
      overlayRef.current.style.top = "10rem";
    }
  };

  useEffect(() => {
    handleMenu();
  });

  return (
    <main ref={overlayRef} className="overlay-menu-responsive">
      <motion.a
        whileTap={{ scale: 1.1 }}
        onClick={() => setOpenMenu(false)}
        href="#about"
        className="section-menu_item"
      >
        SOBRE
      </motion.a>
      <motion.a
        whileTap={{ scale: 1.1 }}
        onClick={() => setOpenMenu(false)}
        href="#skills"
        className="section-menu_item"
      >
        HABILIDADES
      </motion.a>
      <motion.a
        whileTap={{ scale: 1.1 }}
        onClick={() => setOpenMenu(false)}
        href="#projects"
        className="section-menu_item"
      >
        PROJETOS
      </motion.a>
      <motion.a
        whileTap={{ scale: 1.1 }}
        onClick={() => setOpenMenu(false)}
        href="#contact"
        className="section-menu_item"
      >
        CONTATO
      </motion.a>
    </main>
  );
}

export default MenuResponsive;
