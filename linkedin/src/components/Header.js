import '../stylesheets/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">TITULO</h1>
      <h2 className="header__subtitle header__underline">SUBTITULO</h2>
      <a className="header__logo" href="https://github.com/Adalab/ejercicios-en-clase-k/" title="Ir al repo del ejercicio" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/Adalab/resources/master/images/adalab-logo-32x32.png" alt="Adalab logo" />
        <span className="hidden">Ir al repo</span>
      </a>
    </header>
  );
};

export default Header;
