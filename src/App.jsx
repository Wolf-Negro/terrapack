import React from 'react';

function App() {
  // CONFIGURATION - FEELS EASY TO EDIT
  const CONFIG = {
    title: "Terrapack Peru",
    handle: "@terrapackperu",
    slogan: "Tu marca en todas partes",
    whatsappNumber: "51968201059",
    catalogLink: "https://terrapackperu.pe/",
    footerTitle: "EMPAQUES BIODEGRADABLES",
    footerText: "Sostenibilidad para tu marca."
  };

  const waLink = (message) => `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="container">
      <header className="profile">
        <div className="logo-container">
          <img src="/logo-rollandroll.png" alt="Terrapack Peru Logo" className="logo-img" />
        </div>
        <h1 className="brand-title">{CONFIG.title}</h1>
        <div className="handle">{CONFIG.handle}</div>
        <h2 className="slogan">{CONFIG.slogan}</h2>
      </header>

      <main className="links-section">
        <a
          href={waLink("Hola Terrapack! Me gustaría una cotización de vasos para bebidas frías.")}
          target="_blank"
          rel="noopener noreferrer"
          className="link-block"
          style={{ backgroundImage: 'url("/Bebidas%20Frias.png")' }}
        >
          <div className="overlay"></div>
          <span className="link-text">Cotización Bebidas Frías</span>
        </a>

        <a
          href={waLink("Hola Terrapack! Me gustaría una cotización de vasos para bebidas calientes.")}
          target="_blank"
          rel="noopener noreferrer"
          className="link-block"
          style={{ backgroundImage: 'url("/Bebidas%20Calientes.png")' }}
        >
          <div className="overlay"></div>
          <span className="link-text">Cotización Bebidas Calientes</span>
        </a>

        <a
          href={waLink("Hola Terrapack! Me gustaría una cotización de vasos para bebidas frías y calientes.")}
          target="_blank"
          rel="noopener noreferrer"
          className="link-block"
          style={{ backgroundImage: 'url("/Bebidas%20Ambos.png")' }}
        >
          <div className="overlay"></div>
          <span className="link-text">Cotización de Ambos</span>
        </a>

        <a
          href={CONFIG.catalogLink}
          target="_blank"
          rel="noopener noreferrer"
          className="link-block"
          style={{ backgroundImage: 'url("/catalogo%20mokup.png")' }}
        >
          <div className="overlay"></div>
          <span className="link-text">Ver Catálogo</span>
        </a>
      </main>

      <footer className="footer-info">
        <div className="footer-title">{CONFIG.footerTitle}</div>
        <div className="footer-text">{CONFIG.footerText}</div>
      </footer>
    </div>
  );
}

export default App;
