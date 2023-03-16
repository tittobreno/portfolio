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
    <nav ref={overlayRef} className="overlay__menu-responsive">
      {isInAbout ? (
        <h1
          onClick={() => {
            navigate("/"), setOpenMenu(false);
          }}
          className="menu-responsive__item"
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
            className="menu-responsive__item"
          >
            SOBRE
          </motion.h1>
          <motion.a
            whileTap={{ scale: 1.1 }}
            onClick={() => setOpenMenu(false)}
            href="#skills"
            className="menu-responsive__item"
          >
            HABILIDADES
          </motion.a>
          <motion.a
            whileTap={{ scale: 1.1 }}
            onClick={() => setOpenMenu(false)}
            href="#projects"
            className="menu-responsive__item"
          >
            PROJETOS
          </motion.a>
        </>
      )}
    </nav>
  );
}

export default MenuResponsive;
