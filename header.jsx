import { useState } from 'react';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner section-wrap">
        <a className="brand" href="#home" aria-label="Sophias Nexa home">
          Sophias Nexa<span className="brand-dot">.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav
          className={`navigation${menuOpen ? ' navigation-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
        </nav>
        <a className="header-contact" href="#contact">
          Let's Talk <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
