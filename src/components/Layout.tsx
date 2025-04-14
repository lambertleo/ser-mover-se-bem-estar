
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (route: string) => {
    return path === route ? "active" : "";
  };

  return (
    <div className="site-wrapper">
      {/* Header & Navigation */}
      <header>
        <div className="nav-container container">
          <div className="logo">
            Programa <span>SER</span>
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/" className={isActive('/')}>Início</Link></li>
              <li><Link to="/sobre" className={isActive('/sobre')}>Sobre</Link></li>
              <li><Link to="/moverse" className={isActive('/moverse')}>Mover-se</Link></li>
              <li><Link to="/calendario" className={isActive('/calendario')}>Calendário</Link></li>
              <li><Link to="/depoimentos" className={isActive('/depoimentos')}>Depoimentos</Link></li>
              <li><Link to="/inscricao" className={isActive('/inscricao')}>Inscrição</Link></li>
              <li><Link to="/contato" className={isActive('/contato')}>Contato</Link></li>
            </ul>
          </nav>
          <button className="menu-toggle" aria-label="Menu">☰</button>
        </div>

        {/* Mobile Navigation */}
        <div className="mobile-nav">
          <button className="mobile-nav-close" aria-label="Fechar menu">✕</button>
          <ul className="mobile-nav-links">
            <li><Link to="/" className={isActive('/')}>Início</Link></li>
            <li><Link to="/sobre" className={isActive('/sobre')}>Sobre</Link></li>
            <li><Link to="/moverse" className={isActive('/moverse')}>Mover-se</Link></li>
            <li><Link to="/calendario" className={isActive('/calendario')}>Calendário</Link></li>
            <li><Link to="/depoimentos" className={isActive('/depoimentos')}>Depoimentos</Link></li>
            <li><Link to="/inscricao" className={isActive('/inscricao')}>Inscrição</Link></li>
            <li><Link to="/contato" className={isActive('/contato')}>Contato</Link></li>
          </ul>
        </div>
        <div className="overlay"></div>
      </header>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <div className="footer-logo">Programa <span>SER</span></div>
              <p>Promovendo bem-estar e qualidade de vida para a comunidade universitária desde 2020.</p>
            </div>
            <div className="footer-links">
              <h3>Links Rápidos</h3>
              <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/moverse">Mover-se</Link></li>
                <li><Link to="/calendario">Calendário</Link></li>
                <li><Link to="/depoimentos">Depoimentos</Link></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h3>Contato</h3>
              <p>Email: programaser@universidade.edu.br</p>
              <p>Instagram: @programaser</p>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Instagram">
                  <span>📱</span>
                </a>
                <a href="#" className="social-icon" aria-label="Facebook">
                  <span>📘</span>
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <span>🐦</span>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Programa SER. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
