import './styles.css';
import Header from '../../components/Header';
function Main() {
  return (
    <main className='container-main'>
      <Header />

      <section className='container-about'>
        <h3 className='about-txt primary'>Olá,</h3>
        <h3 className='about-txt secondary'>{`Eu sou o Breno, :)`}</h3>
        <span className='about-sub-txt'>Desenvolvedor Back-end</span>
      </section>
    </main>
  );
}

export default Main;
