import React from 'react';
import { Link } from 'react-router-dom';
const Sobre = () => {
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
              <li><Link to="/sobre" className="active">Sobre</Link></li>
              <li><Link to="/moverse">Mover-se</Link></li>
              <li><Link to="/calendario">Calendário</Link></li>
              <li><Link to="/depoimentos">Depoimentos</Link></li>
              <li><Link to="/inscricao">Inscrição</Link></li>
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
            <li><Link to="/sobre" className="active">Sobre</Link></li>
            <li><Link to="/moverse">Mover-se</Link></li>
            <li><Link to="/calendario">Calendário</Link></li>
            <li><Link to="/depoimentos">Depoimentos</Link></li>
            <li><Link to="/inscricao">Inscrição</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>
        <div className="overlay"></div>
      </header>

      {/* Page Header */}
      <section className="page-header" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1501854140801-50d01698950b")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '4rem 0',
      textAlign: 'center'
    }}>
        <div className="container">
          <h1>Sobre o Programa SER</h1>
          <p>Conheça nossa missão, visão e valores</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-title">
            <h2>Nossa História</h2>
          </div>
          <div className="about-content">
            <p>O Programa SER (Saúde, Equilíbrio e Resiliência) nasceu em 2020, durante o período de isolamento social provocado pela pandemia, como uma resposta aos desafios de saúde mental enfrentados pela comunidade universitária.</p>
            <p>Inicialmente concebido como um projeto virtual para oferecer suporte emocional aos estudantes, o programa evoluiu para uma iniciativa abrangente que integra diferentes abordagens para promover o bem-estar integral.</p>
            <p>Em 2022, lançamos o Projeto Mover-se, com foco específico em atividades que estimulam o movimento corporal e a consciência corporal como ferramentas de promoção de saúde física e mental.</p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="mvv-section" style={{
      backgroundColor: 'var(--light-gray)'
    }}>
        <div className="container">
          <div className="mvv-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem'
        }}>
            <div className="card">
              <div className="card-content">
                <h3>Missão</h3>
                <p>Promover o bem-estar integral da comunidade universitária através de práticas que integram corpo, mente e emoções, contribuindo para uma experiência acadêmica mais saudável e equilibrada.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3>Visão</h3>
                <p>Ser referência em programas de promoção de saúde mental no ambiente universitário, criando uma cultura institucional que valoriza o autocuidado e o desenvolvimento humano em todas as suas dimensões.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3>Valores</h3>
                <ul style={{
                listStyleType: 'disc',
                paddingLeft: '1.5rem'
              }}>
                  <li>Integralidade: compreensão do ser humano em suas múltiplas dimensões</li>
                  <li>Acolhimento: criação de espaços seguros e inclusivos</li>
                  <li>Autonomia: estímulo ao protagonismo e autocuidado</li>
                  <li>Coletividade: valorização das relações e do suporte mútuo</li>
                  <li>Ciência: práticas baseadas em evidências científicas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="objectives-section">
        <div className="container">
          <div className="section-title">
            <h2>Nossos Objetivos</h2>
          </div>
          <div className="objectives-content">
            <div className="objective-item" style={{
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '1.5rem'
          }}>
              <div style={{
              marginRight: '1rem',
              fontSize: '2rem',
              color: 'var(--primary)'
            }}>1.</div>
              <div>
                <h3>Promover saúde mental</h3>
                <p>Oferecer recursos e práticas que ajudem a comunidade universitária a lidar com o estresse, ansiedade e outros desafios emocionais, prevenindo adoecimento psíquico.</p>
              </div>
            </div>
            <div className="objective-item" style={{
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '1.5rem'
          }}>
              <div style={{
              marginRight: '1rem',
              fontSize: '2rem',
              color: 'var(--primary)'
            }}>2.</div>
              <div>
                <h3>Incentivar o movimento</h3>
                <p>Estimular a prática regular de atividades físicas e corporais como ferramenta de promoção de saúde integral e redução do sedentarismo.</p>
              </div>
            </div>
            <div className="objective-item" style={{
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '1.5rem'
          }}>
              <div style={{
              marginRight: '1rem',
              fontSize: '2rem',
              color: 'var(--primary)'
            }}>3.</div>
              <div>
                <h3>Fortalecer vínculos</h3>
                <p>Criar espaços de interação e conexão social que contribuam para o senso de pertencimento e redução da solidão no ambiente universitário.</p>
              </div>
            </div>
            <div className="objective-item" style={{
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '1.5rem'
          }}>
              <div style={{
              marginRight: '1rem',
              fontSize: '2rem',
              color: 'var(--primary)'
            }}>4.</div>
              <div>
                <h3>Desenvolver habilidades</h3>
                <p>Capacitar os participantes com ferramentas práticas de autocuidado e autoconhecimento que possam ser integradas à rotina diária.</p>
              </div>
            </div>
            <div className="objective-item" style={{
            display: 'flex',
            alignItems: 'flex-start'
          }}>
              <div style={{
              marginRight: '1rem',
              fontSize: '2rem',
              color: 'var(--primary)'
            }}>5.</div>
              <div>
                <h3>Transformar a cultura</h3>
                <p>Contribuir para uma cultura institucional que valorize o equilíbrio entre vida acadêmica e bem-estar pessoal, reconhecendo que ambos são complementares e não antagônicos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section" style={{
      backgroundColor: 'var(--primary)',
      color: 'white'
    }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{
            color: 'white'
          }}>Nosso Impacto</h2>
          </div>
          <div className="impact-stats" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
          textAlign: 'center'
        }}>
            <div className="impact-item">
              <div style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>+500</div>
              <p>Participantes desde 2025</p>
            </div>
            <div className="impact-item">
              <div style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>12</div>
              <p>Atividades oferecidas regularmente</p>
            </div>
            <div className="impact-item">
              <div style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>85%</div>
              <p>Relatam melhora no bem-estar geral</p>
            </div>
            <div className="impact-item">
              <div style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>90%</div>
              <p>Recomendam o programa para colegas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container text-center">
          <h2>Faça parte dessa jornada de transformação</h2>
          <p>Junte-se a nós e descubra como pequenas mudanças podem trazer grandes benefícios para sua saúde e bem-estar</p>
          <Link to="/inscricao" className="btn">Quero Participar</Link>
        </div>
      </section>

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
    </div>;
};
export default Sobre;