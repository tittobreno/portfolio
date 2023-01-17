import './styles.css';
const Contact = ({ name, icon, description, link }) => {
    if (link) {
        return (

            <a
                target='_blank'
                href={link}
                className="container-contact"
            >
                <img className='contact-img' src={icon} />
                <p>{description}</p>
            </a>
        )
    } else {
        return (

            <div
                className="container-contact"
            >
                <img className='contact-img' src={icon} />
                <p>{description}</p>
            </div>
        )
    }
};

export default Contact;