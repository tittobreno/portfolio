import './styles.css';
import Header from '../../components/Header';
import { useGlobal } from '../../contexts/GlobalContext';
import MenuResponsive from '../../components/MenuResponsive';
function Main() {
  const { openMenu } = useGlobal();
  return (

    <main className='container-main'>
      <Header />

      <section className='container-about'>
        {openMenu && <MenuResponsive />}

        <h3 className='about-txt primary'>Olá,</h3>
        <h3 className='about-txt secondary'>{`Eu sou o Breno!`}</h3>
        <span className='about-sub-txt'>Desenvolvedor Back-end</span>
        <span className='about-sub-txt'>ABOUT-ME</span>
      </section>

      <section className='section'>
        <a name='skills'><h1 className='section-title'>HABILIDADES</h1></a>

      </section>

      <section className='section'>
        <a name='projects'><h1 className='section-title'>PROJETOS</h1></a>

      </section>

      <section className='section'>
        <a name='contact'><h1 className='section-title'>CONTATO</h1></a>

      </section>
    </main>
  );
}

export default Main;
