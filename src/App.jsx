import React from 'react';

function App() {
  // CONFIGURATION - FEELS EASY TO EDIT
  const CONFIG = {
    title: "Roll And Roll Lince",
    handle: "@rollandrolllince",
    slogan: "Ese gusto que sí vale la pena",
    whatsappNumber: "51966755312",
    whatsappMessage: "Hola Roll And Roll! Quisiera hacer un pedido.",
    menuLink: "https://drive.google.com/file/d/1X-V5Tw5S3wv7uq2QbOD3vRLRa69YRfaU/preview",
    address: "Av. José Leal 998, Lince", // EDIT HERE
    googleMapsSearch: "https://www.google.com/maps/search/?api=1&query=Roll+And+Roll+Lince",
    footerTitle: "DELIVERY Y TIENDA",
    footerText: "Abiertos todos los días, tarde y noche."
  };

  const waLink = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;

  return (
    <div className="container">
      <header className="profile">
        <div className="logo-container">
          <img src="/logo-rollandroll.png" alt="Roll And Roll Logo" className="logo-img" />
        </div>
        <h1 className="brand-title">{CONFIG.title}</h1>
        <div className="handle">{CONFIG.handle}</div>
        <h2 className="slogan">{CONFIG.slogan}</h2>
      </header>

      <main className="links-section">
        <a
          href={CONFIG.menuLink}
          target="_blank"
          rel="noopener noreferrer"
          className="link-block"
          style={{ backgroundImage: 'url("/bg-menu.png?v=2")' }}
        >
          <div className="overlay"></div>
          <span className="link-text">Ver carta</span>
        </a>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="link-block"
          style={{ backgroundImage: 'url("/bg-whatsapp.png?v=2")' }}
        >
          <div className="overlay"></div>
          <span className="link-text">Pedir por WhatsApp</span>
        </a>

        <a
          href={CONFIG.googleMapsSearch}
          target="_blank"
          rel="noopener noreferrer"
          className="link-block"
          style={{ backgroundImage: 'url("/bg-location.png?v=2")' }}
        >
          <div className="overlay"></div>
          <span className="link-text">Cómo llegar</span>
        </a>
      </main>

      <footer className="footer-info">
        <div className="footer-title">{CONFIG.footerTitle}</div>
        <div className="footer-text">{CONFIG.footerText}</div>
        <div className="address-edit">{CONFIG.address}</div>
      </footer>
    </div>
  );
}

export default App;
