import './styles.css';
const Contact = ({ icon, description, link }) => {
    if (link) {
        return (
            <div className="container-contact">
                <a
                    target='_blank'
                    rel='noreferrer'
                    href={link}
                    className="container-contact"
                >
                    <img className='contact-img' src={icon} alt='icon' />
                    <p>{description}</p>
                </a>
            </div>

        )
    } else {
        return (

            <div className="container-contact">
                <img className='contact-img' src={icon} alt='icon' />
                <p>{description}</p>
            </div>
        )
    }
};

export default Contact;