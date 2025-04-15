import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Inscricao = () => {
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

  return <div className="site-wrapper">
    {/* Header & Navigation */}
    <header>
      <div className="nav-container container">
        <div className="logo">
          Programa <span>SER</span>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/moverse">Mover-se</Link></li>
            <li><Link to="/calendario">Calendário</Link></li>
            <li><Link to="/depoimentos">Depoimentos</Link></li>
            <li><Link to="/inscricao" className="active">Inscrição</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
        <button className="menu-toggle" aria-label="Menu">☰</button>
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <button className="mobile-nav-close" aria-label="Fechar menu">✕</button>
        <ul className="mobile-nav-links">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/moverse">Mover-se</Link></li>
          <li><Link to="/calendario">Calendário</Link></li>
          <li><Link to="/depoimentos">Depoimentos</Link></li>
          <li><Link to="/inscricao" className="active">Inscrição</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </div>
      <div className="overlay"></div>
    </header>

    {/* Page Header */}
    <section className="page-header" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1506744038136-46273834b3fb")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '4rem 0',
      textAlign: 'center'
    }}>
      <div className="container">
        <h1>Inscrição</h1>
        <p>Inicie sua jornada de bem-estar</p>
      </div>
    </section>

    {/* Registration Form */}
    <section>
      <div className="container">
        <div className="section-title">
          <h2>Formulário de Inscrição</h2>
          <p>Preencha os campos abaixo para participar do Programa SER</p>
        </div>
        <div className="form-container">
          <form>
            <div className="form-group">
              <label htmlFor="nome">Nome Completo*</label>
              <input type="text" id="nome" name="nome" required placeholder="Seu nome completo" />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail*</label>
              <input type="email" id="email" name="email" required placeholder="seu.email@exemplo.com" />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" />
            </div>
            <div className="form-group">
              <label htmlFor="vinculo">Vínculo com a Universidade*</label>
              <select id="vinculo" name="vinculo" required>
                <option value="">Selecione uma opção</option>
                <option value="estudante-graduacao">Estudante de Graduação</option>
                <option value="estudante-pos">Estudante de Pós-Graduação</option>
                <option value="professor">Professor(a)</option>
                <option value="tecnico">Técnico(a) Administrativo(a)</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="curso">Curso/Departamento</label>
              <input type="text" id="curso" name="curso" placeholder="Se aplicável" />
            </div>
            <div className="form-group">
              <label>Atividades de Interesse*</label>
              <div style={{
                marginTop: '0.5rem'
              }}>
                <div style={{
                  marginBottom: '0.5rem'
                }}>
                  <input type="checkbox" id="yoga" name="atividades[]" value="yoga" />
                  <label htmlFor="yoga" style={{
                    display: 'inline',
                    marginLeft: '0.5rem'
                  }}>Yoga</label>
                </div>
                <div style={{
                  marginBottom: '0.5rem'
                }}>
                  <input type="checkbox" id="alongamento" name="atividades[]" value="alongamento" />
                  <label htmlFor="alongamento" style={{
                    display: 'inline',
                    marginLeft: '0.5rem'
                  }}>Alongamento</label>
                </div>
                <div style={{
                  marginBottom: '0.5rem'
                }}>
                  <input type="checkbox" id="corrida" name="atividades[]" value="corrida" />
                  <label htmlFor="corrida" style={{
                    display: 'inline',
                    marginLeft: '0.5rem'
                  }}>Corrida</label>
                </div>
                <div style={{
                  marginBottom: '0.5rem'
                }}>
                  <input type="checkbox" id="caminhada" name="atividades[]" value="caminhada" />
                  <label htmlFor="caminhada" style={{
                    display: 'inline',
                    marginLeft: '0.5rem'
                  }}>Caminhada</label>
                </div>
                <div style={{
                  marginBottom: '0.5rem'
                }}>
                  <input type="checkbox" id="jogos" name="atividades[]" value="jogos" />
                  <label htmlFor="jogos" style={{
                    display: 'inline',
                    marginLeft: '0.5rem'
                  }}>Jogos Coletivos</label>
                </div>
                <div style={{
                  marginBottom: '0.5rem'
                }}>
                  <input type="checkbox" id="tabuleiro" name="atividades[]" value="tabuleiro" />
                  <label htmlFor="tabuleiro" style={{
                    display: 'inline',
                    marginLeft: '0.5rem'
                  }}>Jogos de Tabuleiro</label>
                </div>
                <div>
                  <input type="checkbox" id="danca" name="atividades[]" value="danca" />
                  <label htmlFor="danca" style={{
                    display: 'inline',
                    marginLeft: '0.5rem'
                  }}>Dança</label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="disponibilidade">Disponibilidade de Horários</label>
              <select id="disponibilidade" name="disponibilidade">
                <option value="">Selecione uma opção</option>
                <option value="manha">Manhã (7h às 12h)</option>
                <option value="almoco">Horário de Almoço (12h às 14h)</option>
                <option value="tarde">Tarde (14h às 18h)</option>
                <option value="noite">Noite (18h às 21h)</option>
                <option value="flexivel">Flexível</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="expectativas">Expectativas e Objetivos</label>
              <textarea id="expectativas" name="expectativas" rows={4} placeholder="Conte-nos o que você espera do programa e quais são seus objetivos de bem-estar"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="como-soube">Como ficou sabendo do Programa SER?</label>
              <select id="como-soube" name="como-soube">
                <option value="">Selecione uma opção</option>
                <option value="site">Site da Universidade</option>
                <option value="redes">Redes Sociais</option>
                <option value="email">E-mail Institucional</option>
                <option value="professor">Indicação de Professor</option>
                <option value="amigo">Indicação de Amigo</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className="form-group" style={{
              marginBottom: '2rem'
            }}>
              <input type="checkbox" id="concordo" name="concordo" required />
              <label htmlFor="concordo" style={{
                display: 'inline',
                marginLeft: '0.5rem'
              }}>Concordo em receber comunicações sobre o Programa SER e suas atividades*</label>
            </div>
            <div className="form-submit">
              <button type="submit" className="btn">Enviar Inscrição</button>
            </div>
          </form>
        </div>
        <div style={{
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <p>*Campos obrigatórios</p>
          <p>Dúvidas? Entre em <Link to="/contato" style={{
            textDecoration: 'underline'
          }}>contato</Link> conosco.</p>
        </div>
      </div>
    </section>

    {/* What to Expect */}
    <section style={{
      backgroundColor: 'var(--light-gray)'
    }}>
      <div className="container">
        <div className="section-title">
          <h2>O que esperar após a inscrição</h2>
        </div>
        <div className="steps-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.5rem'
        }}>
          <div className="step-card" style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '1.5rem',
            boxShadow: 'var(--shadow)'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              marginRight: '1.5rem'
            }}>1</div>
            <div>
              <h3>Confirmação</h3>
              <p>Você receberá um e-mail de confirmação da sua inscrição em até 24 horas.</p>
            </div>
          </div>
          <div className="step-card" style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '1.5rem',
            boxShadow: 'var(--shadow)'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              marginRight: '1.5rem'
            }}>2</div>
            <div>
              <h3>Boas-vindas</h3>
              <p>Nossa equipe entrará em contato para dar as boas-vindas e fornecer informações detalhadas sobre as atividades escolhidas.</p>
            </div>
          </div>
          <div className="step-card" style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '1.5rem',
            boxShadow: 'var(--shadow)'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              marginRight: '1.5rem'
            }}>3</div>
            <div>
              <h3>Participação</h3>
              <p>Você poderá começar a participar das atividades conforme o calendário regular ou eventos especiais.</p>
            </div>
          </div>
          <div className="step-card" style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '1.5rem',
            boxShadow: 'var(--shadow)'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              marginRight: '1.5rem'
            }}>4</div>
            <div>
              <h3>Acompanhamento</h3>
              <p>Periodicamente, solicitaremos feedback sobre sua experiência para garantir que estamos atendendo suas expectativas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">Programa <span>SER</span></div>
            <p>Promovendo bem-estar e qualidade de vida para a comunidade universitária desde 2025.</p>
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
  </div>;
};

export default Inscricao;
