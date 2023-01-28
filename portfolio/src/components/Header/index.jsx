import "./styles.css";
import CondingIcon from "../../assets/coding.png";
import MenuIconOpen from "../../assets/menu.png";
import MenuIconClose from "../../assets/cancel.png";
import { useGlobal } from "../../contexts/GlobalContext";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
const Header = () => {
  const { openMenu, setOpenMenu } = useGlobal();
  const [isIscrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

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
      <section className="section-titles">
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

        <a className="section-titles_link" href="#about">
          <h1 className="section-titles_item">SOBRE</h1>
        </a>
        <a className="section-titles_link" href="#skills">
          <h1 className="section-titles_item">HABILIDADES</h1>
        </a>
        <a className="section-titles_link" href="#projects">
          <h1 className="section-titles_item">PROJETOS</h1>
        </a>
        <a className="section-titles_link" href="#contact">
          <h1 className="section-titles_item">CONTATO</h1>
        </a>
      </section>
    </motion.header>
  );
};

export default Header;
