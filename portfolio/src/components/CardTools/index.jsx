import "./styles.css";
const CardTools = ({ name, icon }) => {
  return (
    <main className="tools">
      <h3 className="tools__title">{name}</h3>
      <img className="tools__img" src={icon} alt="icon" />
    </main>
  );
};

export default CardTools;
