import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import CondingIcon from "../../assets/coding.png";
import { useGlobal } from "../../contexts/GlobalContext";
import "./styles.css";

const Header = () => {
  const navigate = useNavigate();
  const { openMenu, setOpenMenu } = useGlobal();
  const [isIscrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const isInAbout = location.pathname === "/about" ? true : false;

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const hide = {
    opacity: 0,
    transition: { duration: 0.8 },
    transitionEnd: {
      display: "none",
    },
  };

  const show = {
    opacity: 1,
    transition: { duration: 0.8 },
    display: "flex",
  };

  return (
    <motion.header
      animate={isIscrolled ? hide : show}
      className={"container-header"}
    >
      <img className="header-logo-icon" src={CondingIcon} alt="Logo" />
      <nav className="section-titles">
        <motion.button
          className="header-button_responsive"
          onClick={() => setOpenMenu(!openMenu)}
          whileTap={{ scale: 1.1 }}
        >
          {openMenu ? (
            <FiX className="section-titles_menu" size={40} />
          ) : (
            <FiMenu className="section-titles_menu" size={40} />
          )}
        </motion.button>
        {isInAbout ? (
          <ul className="navigation">
            <li onClick={() => navigate("/")} className="navigation-list-item">
              <h1 className="section-titles_item">HOME</h1>
            </li>
          </ul>
        ) : (
          <ul className="navigation">
            <li
              onClick={() => navigate("/about")}
              className="navigation-list-item"
            >
              <h1 className="section-titles_item">SOBRE</h1>
            </li>

            <a className="section-titles_link" href="#skills">
              <h1 className="section-titles_item">HABILIDADES</h1>
            </a>

            <a className="section-titles_link" href="#projects">
              <h1 className="section-titles_item">PROJETOS</h1>
            </a>

            <a className="section-titles_link" href="#contact">
              <h1 className="section-titles_item">CONTATO</h1>
            </a>
          </ul>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
