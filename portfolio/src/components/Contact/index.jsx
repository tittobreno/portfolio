import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoMailOutline,
} from "react-icons/io5";
import "./styles.css";
const Contact = ({ name, icon, description, link }) => {
  const setIcon = () => {
    if (name === "LinkedIn") {
      return <IoLogoLinkedin size={50} />;
    } else if (name === "E-mail") {
      return;
    } else if (name === "GitHub") {
      return <IoLogoGithub size={50} />;
    } else if (name === "Telefone") {
      return <IoLogoWhatsapp size={50} />;
    }
  };
  if (link) {
    return (
      <div className="container-contact">
        <a
          target="_blank"
          rel="noreferrer"
          href={link}
          className="container-contact"
        >
          {setIcon(name)}
          <p>{description}</p>
        </a>
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex", alignContent: "center" }}>
        <section className="container-contact" style={{ cursor: "default" }}>
          <IoMailOutline size={50} />
          <p style={{ cursor: "text" }}>{description}</p>
        </section>
      </div>
    );
  }
};

export default Contact;
