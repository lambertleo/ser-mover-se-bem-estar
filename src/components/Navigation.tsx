
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  useEffect(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    const mobileNavClose = document.querySelector('.mobile-nav-close');
    
    const openMobileNav = () => {
      if (mobileNav && overlay) {
        mobileNav.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    };
    
    const closeMobileNav = () => {
      if (mobileNav && overlay) {
        mobileNav.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    };
    
    menuToggle?.addEventListener('click', openMobileNav);
    mobileNavClose?.addEventListener('click', closeMobileNav);
    overlay?.addEventListener('click', closeMobileNav);
    
    return () => {
      menuToggle?.removeEventListener('click', openMobileNav);
      mobileNavClose?.removeEventListener('click', closeMobileNav);
      overlay?.removeEventListener('click', closeMobileNav);
    };
  }, []);

  return (
    <>
      <div className="nav-container container">
        <div className="logo">
          Programa <span>SER</span>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Início</Link></li>
            <li><Link to="/sobre" className={location.pathname === '/sobre' ? 'active' : ''}>Sobre</Link></li>
            <li><Link to="/moverse" className={location.pathname === '/moverse' ? 'active' : ''}>Mover-se</Link></li>
            <li><Link to="/calendario" className={location.pathname === '/calendario' ? 'active' : ''}>Calendário</Link></li>
            <li><Link to="/depoimentos" className={location.pathname === '/depoimentos' ? 'active' : ''}>Depoimentos</Link></li>
            <li><Link to="/inscricao" className={location.pathname === '/inscricao' ? 'active' : ''}>Inscrição</Link></li>
            <li><Link to="/contato" className={location.pathname === '/contato' ? 'active' : ''}>Contato</Link></li>
          </ul>
        </nav>
        <button className="menu-toggle" aria-label="Menu">☰</button>
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <button className="mobile-nav-close" aria-label="Fechar menu">✕</button>
        <ul className="mobile-nav-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Início</Link></li>
          <li><Link to="/sobre" className={location.pathname === '/sobre' ? 'active' : ''}>Sobre</Link></li>
          <li><Link to="/moverse" className={location.pathname === '/moverse' ? 'active' : ''}>Mover-se</Link></li>
          <li><Link to="/calendario" className={location.pathname === '/calendario' ? 'active' : ''}>Calendário</Link></li>
          <li><Link to="/depoimentos" className={location.pathname === '/depoimentos' ? 'active' : ''}>Depoimentos</Link></li>
          <li><Link to="/inscricao" className={location.pathname === '/inscricao' ? 'active' : ''}>Inscrição</Link></li>
          <li><Link to="/contato" className={location.pathname === '/contato' ? 'active' : ''}>Contato</Link></li>
        </ul>
      </div>
      <div className="overlay"></div>
    </>
  );
};

export default Navigation;
