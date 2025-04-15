import React from 'react';
import { Link } from 'react-router-dom';
const Moverse = () => {
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
              <li><Link to="/moverse" className="active">Mover-se</Link></li>
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
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/moverse" className="active">Mover-se</Link></li>
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
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1615729947596-a598e5de0ab3")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '4rem 0',
      textAlign: 'center'
    }}>
        <div className="container">
          <h1>Projeto Mover-se</h1>
          <p>Atividades que promovem saúde através do movimento</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="intro-section">
        <div className="container">
          <div className="section-title">
            <h2>Por que Mover-se?</h2>
          </div>
          <div className="intro-content">
            <p>O Projeto Mover-se parte do princípio de que corpo e mente são indissociáveis, e que o movimento é uma ferramenta poderosa para promover saúde integral.</p>
            <p>Inspirados por evidências científicas que demonstram os benefícios da atividade física para a saúde mental, desenvolvemos um programa diversificado que atende diferentes interesses e necessidades.</p>
            <p>Mais do que exercício físico, as atividades do Mover-se são oportunidades de conexão: consigo mesmo, com o próprio corpo, com outras pessoas e com o ambiente.</p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities-section" style={{
      backgroundColor: 'var(--light-gray)'
    }}>
        <div className="container">
          <div className="section-title">
            <h2>Nossas Atividades</h2>
            <p>Conheça as práticas oferecidas</p>
          </div>
          <div className="activities-grid">
            <div className="activity-card yoga">
              <div className="activity-icon">🧘</div>
              <h3>Yoga</h3>
              <p>Prática milenar que integra posições físicas, técnicas respiratórias e meditação, promovendo equilíbrio entre corpo e mente. Ideal para reduzir estresse e ansiedade.</p>
              <p><strong>Frequência:</strong> 3x por semana</p>
            </div>
            <div className="activity-card alongamento">
              <div className="activity-icon">🤸</div>
              <h3>Alongamento</h3>
              <p>Sessões focadas em aumentar a flexibilidade, aliviar tensões musculares e melhorar a postura. Perfeito para quem passa muitas horas sentado estudando.</p>
              <p><strong>Frequência:</strong> 2x por semana</p>
            </div>
            <div className="activity-card corrida">
              <div className="activity-icon">🏃</div>
              <h3>Corrida</h3>
              <p>Treinos em grupo com diferentes níveis de intensidade, adaptados para iniciantes e praticantes experientes. Excelente para melhorar o condicionamento cardiovascular.</p>
              <p><strong>Frequência:</strong> 2x por semana</p>
            </div>
            <div className="activity-card caminhada">
              <div className="activity-icon">🚶</div>
              <h3>Caminhada</h3>
              <p>Percursos planejados dentro e fora do campus, combinando atividade física leve com contato com a natureza. Acessível para todos os níveis de condicionamento.</p>
              <p><strong>Frequência:</strong> 3x por semana</p>
            </div>
            <div className="activity-card jogos">
              <div className="activity-icon">🏐</div>
              <h3>Jogos</h3>
              <p>Atividades recreativas como vôlei, basquete e futsal, com ênfase na diversão e na socialização, não na competição. Promove cooperação e trabalho em equipe.</p>
              <p><strong>Frequência:</strong> 2x por semana</p>
            </div>
            <div className="activity-card tabuleiro">
              <div className="activity-icon">♟️</div>
              <h3>Jogos de Tabuleiro</h3>
              <p>Encontros para praticar xadrez, damas e outros jogos que estimulam o raciocínio lógico, a concentração e a sociabilidade. Exercícios para a mente.</p>
              <p><strong>Frequência:</strong> 1x por semana</p>
            </div>
            <div className="activity-card danca">
              <div className="activity-icon">💃</div>
              <h3>Dança</h3>
              <p>Aulas de diferentes estilos (forró, samba, contemporâneo) que combinam expressão corporal, ritmo e socialização. Uma forma alegre de se movimentar.</p>
              <p><strong>Frequência:</strong> 2x por semana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-title">
            <h2>Benefícios do Movimento</h2>
          </div>
          <div className="benefits-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.5rem'
        }}>
            <div className="card">
              <div className="card-content">
                <h3>Benefícios Físicos</h3>
                <ul style={{
                listStyleType: 'disc',
                paddingLeft: '1.5rem'
              }}>
                  <li>Melhora do condicionamento cardiovascular</li>
                  <li>Fortalecimento muscular</li>
                  <li>Aumento da flexibilidade</li>
                  <li>Melhora da postura</li>
                  <li>Redução de dores musculares</li>
                  <li>Estímulo ao sistema imunológico</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3>Benefícios Mentais</h3>
                <ul style={{
                listStyleType: 'disc',
                paddingLeft: '1.5rem'
              }}>
                  <li>Redução do estresse e ansiedade</li>
                  <li>Melhora do humor</li>
                  <li>Aumento da concentração</li>
                  <li>Melhora da qualidade do sono</li>
                  <li>Estímulo à criatividade</li>
                  <li>Prevenção de burnout</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h3>Benefícios Sociais</h3>
                <ul style={{
                listStyleType: 'disc',
                paddingLeft: '1.5rem'
              }}>
                  <li>Fortalecimento de vínculos</li>
                  <li>Desenvolvimento de habilidades sociais</li>
                  <li>Senso de pertencimento</li>
                  <li>Formação de rede de apoio</li>
                  <li>Redução da sensação de solidão</li>
                  <li>Criação de hábitos saudáveis em grupo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial-section" style={{
      backgroundColor: 'var(--primary)',
      color: 'white'
    }}>
        <div className="container">
          <div className="testimonial-card" style={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          textAlign: 'center'
        }}>
            <div className="testimonial-content">
              <p style={{
              fontSize: '1.5rem',
              fontStyle: 'italic'
            }}>"O movimento é uma medicina para criar mudanças físicas, emocionais e mentais."</p>
              <div className="testimonial-author" style={{
              justifyContent: 'center',
              marginTop: '1rem'
            }}>
                <div>
                  <div className="testimonial-name">Carol Welch</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="how-to-participate">
        <div className="container">
          <div className="section-title">
            <h2>Como Participar</h2>
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
                <h3>Inscreva-se</h3>
                <p>Preencha o formulário de inscrição indicando quais atividades são de seu interesse.</p>
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
                <h3>Receba Confirmação</h3>
                <p>Você receberá um e-mail com a confirmação da inscrição e informações sobre as atividades.</p>
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
                <h3>Participe</h3>
                <p>Compareça às atividades escolhidas nos horários e locais indicados. Não é necessário levar materiais específicos.</p>
              </div>
            </div>
          </div>
          <div className="text-center" style={{
          marginTop: '2rem'
        }}>
            <Link to="/inscricao" className="btn">Quero me Inscrever</Link>
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
export default Moverse;