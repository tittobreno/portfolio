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
    <motion.header animate={isIscrolled ? hide : show} className="header">
      <img className="header__logo" src={CondingIcon} alt="Logo" />
      <nav className="header__navigation">
        <motion.button
          className="header__button-responsive"
          onClick={() => setOpenMenu(!openMenu)}
          whileTap={{ scale: 1.1 }}
        >
          {openMenu ? (
            <FiX className="header__button--close" size={40} />
          ) : (
            <FiMenu className="header__button--open" size={40} />
          )}
        </motion.button>
        {isInAbout ? (
          <ul className="header__navigation-list">
            <li
              onClick={() => navigate("/")}
              className="header__navigation-item"
            >
              <h1 className="header__navigation-title">HOME</h1>
            </li>
          </ul>
        ) : (
          <ul className="header__navigation-list">
            <li
              onClick={() => navigate("/about")}
              className="header__navigation-item"
            >
              <h1 className="header__navigation-title">SOBRE</h1>
            </li>

            <a
              className="header__navigation-link header__navigation-item"
              href="#skills"
            >
              <h1 className="header__navigation-title">HABILIDADES</h1>
            </a>

            <a
              className="header__navigation-link header__navigation-item"
              href="#projects"
            >
              <h1 className="header__navigation-title">PROJETOS</h1>
            </a>
          </ul>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
