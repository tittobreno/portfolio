import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGlobal } from "../../contexts/GlobalContext";
import "./styles.css";

function MenuResponsive() {
  const navigate = useNavigate();
  const location = useLocation();
  const { openMenu, setOpenMenu } = useGlobal();
  const overlayRef = useRef();
  const isInAbout = location.pathname === "/about" ? true : false;
  const handleMenu = () => {
    if (openMenu) {
      overlayRef.current.style.top = "10rem";
    }
  };

  useEffect(() => {
    handleMenu();
  });

  return (
    <nav ref={overlayRef} className="overlay-menu-responsive">
      {isInAbout ? (
        <h1
          onClick={() => {
            navigate("/"), setOpenMenu(false);
          }}
          className="section-menu_item"
        >
          HOME
        </h1>
      ) : (
        <>
          <motion.h1
            whileTap={{ scale: 1.1 }}
            onClick={() => {
              navigate("/about"), setOpenMenu(false);
            }}
            className="section-menu_item"
          >
            SOBRE
          </motion.h1>
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
        </>
      )}
    </nav>
  );
}

export default MenuResponsive;
