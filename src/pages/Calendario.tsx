
import React from 'react';
import { Link } from 'react-router-dom';

const Calendario = () => {
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
              <li><Link to="/">Início</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/moverse">Mover-se</Link></li>
              <li><Link to="/calendario" className="active">Calendário</Link></li>
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
            <li><Link to="/moverse">Mover-se</Link></li>
            <li><Link to="/calendario" className="active">Calendário</Link></li>
            <li><Link to="/depoimentos">Depoimentos</Link></li>
            <li><Link to="/inscricao">Inscrição</Link></li>
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
          <h1>Calendário de Atividades</h1>
          <p>Acompanhe nossa programação e não perca nenhuma atividade</p>
        </div>
      </section>

      {/* Calendar Section */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2>Programação Mensal</h2>
            <p>Abril 2025</p>
          </div>
          <div className="calendar-container">
            <div className="calendar-placeholder">
              <div className="calendar-month">Abril 2025</div>
              <div className="calendar-grid">
                <div className="calendar-day header">Dom</div>
                <div className="calendar-day header">Seg</div>
                <div className="calendar-day header">Ter</div>
                <div className="calendar-day header">Qua</div>
                <div className="calendar-day header">Qui</div>
                <div className="calendar-day header">Sex</div>
                <div className="calendar-day header">Sáb</div>
                
                <div className="calendar-day"></div>
                <div className="calendar-day">1</div>
                <div className="calendar-day">2</div>
                <div className="calendar-day">3</div>
                <div className="calendar-day">4</div>
                <div className="calendar-day">5</div>
                <div className="calendar-day">6</div>
                
                <div className="calendar-day">7</div>
                <div className="calendar-day event">8</div>
                <div className="calendar-day">9</div>
                <div className="calendar-day event">10</div>
                <div className="calendar-day">11</div>
                <div className="calendar-day event">12</div>
                <div className="calendar-day">13</div>
                
                <div className="calendar-day today">14</div>
                <div className="calendar-day event">15</div>
                <div className="calendar-day">16</div>
                <div className="calendar-day event">17</div>
                <div className="calendar-day">18</div>
                <div className="calendar-day event">19</div>
                <div className="calendar-day">20</div>
                
                <div className="calendar-day">21</div>
                <div className="calendar-day event">22</div>
                <div className="calendar-day">23</div>
                <div className="calendar-day event">24</div>
                <div className="calendar-day">25</div>
                <div className="calendar-day event">26</div>
                <div className="calendar-day">27</div>
                
                <div className="calendar-day">28</div>
                <div className="calendar-day event">29</div>
                <div className="calendar-day">30</div>
                <div className="calendar-day"></div>
                <div className="calendar-day"></div>
                <div className="calendar-day"></div>
                <div className="calendar-day"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Próximos Eventos</h2>
          </div>
          <div className="calendar-events">
            <div className="calendar-event">
              <div className="event-date">15 de Abril, 2025 • 10:00 - 11:30</div>
              <div className="event-title">Yoga ao Ar Livre</div>
              <p>Prática de yoga no gramado central do campus. Traga seu tapete ou toalha.</p>
              <p><strong>Local:</strong> Gramado Central</p>
            </div>
            <div className="calendar-event">
              <div className="event-date">17 de Abril, 2025 • 18:00 - 19:30</div>
              <div className="event-title">Corrida para Iniciantes</div>
              <p>Treino de corrida com foco em técnica e respiração para quem está começando.</p>
              <p><strong>Local:</strong> Pista de Atletismo</p>
            </div>
            <div className="calendar-event">
              <div className="event-date">19 de Abril, 2025 • 09:00 - 11:00</div>
              <div className="event-title">Torneio de Jogos de Tabuleiro</div>
              <p>Encontro para jogar xadrez, damas e outros jogos de estratégia.</p>
              <p><strong>Local:</strong> Centro de Convivência</p>
            </div>
            <div className="calendar-event">
              <div className="event-date">22 de Abril, 2025 • 17:00 - 18:30</div>
              <div className="event-title">Aula de Dança - Forró</div>
              <p>Aprenda os passos básicos de forró em uma aula divertida e energética.</p>
              <p><strong>Local:</strong> Sala Multiuso - Bloco B</p>
            </div>
            <div className="calendar-event">
              <div className="event-date">24 de Abril, 2025 • 07:30 - 09:00</div>
              <div className="event-title">Caminhada Ecológica</div>
              <p>Caminhada pelo bosque do campus com momentos de conexão com a natureza.</p>
              <p><strong>Local:</strong> Entrada do Bosque</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities by Day */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2>Atividades Semanais Regulares</h2>
            <p>Confira nossa programação fixa</p>
          </div>
          <div className="weekly-activities">
            <div className="weekly-day" style={{ marginBottom: '2rem' }}>
              <h3 style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.5rem', borderRadius: '5px' }}>Segunda-feira</h3>
              <div className="weekly-events" style={{ marginTop: '1rem' }}>
                <div className="weekly-event" style={{ marginBottom: '1rem', padding: '0.5rem 0', borderBottom: '1px solid var(--light-gray)' }}>
                  <div style={{ fontWeight: 'bold' }}>07:30 - 08:30</div>
                  <div>Yoga - Sala Multiuso</div>
                </div>
                <div className="weekly-event" style={{ marginBottom: '1rem', padding: '0.5rem 0', borderBottom: '1px solid var(--light-gray)' }}>
                  <div style={{ fontWeight: 'bold' }}>12:30 - 13:30</div>
                  <div>Alongamento - Gramado Central</div>
                </div>
                <div className="weekly-event" style={{ padding: '0.5rem 0' }}>
                  <div style={{ fontWeight: 'bold' }}>17:30 - 19:00</div>
                  <div>Corrida - Pista de Atletismo</div>
                </div>
              </div>
            </div>
            
            <div className="weekly-day" style={{ marginBottom: '2rem' }}>
              <h3 style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.5rem', borderRadius: '5px' }}>Terça-feira</h3>
              <div className="weekly-events" style={{ marginTop: '1rem' }}>
                <div className="weekly-event" style={{ marginBottom: '1rem', padding: '0.5rem 0', borderBottom: '1px solid var(--light-gray)' }}>
                  <div style={{ fontWeight: 'bold' }}>08:00 - 09:30</div>
                  <div>Caminhada - Entrada do Bosque</div>
                </div>
                <div className="weekly-event" style={{ padding: '0.5rem 0' }}>
                  <div style={{ fontWeight: 'bold' }}>18:00 - 20:00</div>
                  <div>Jogos de Tabuleiro - Centro de Convivência</div>
                </div>
              </div>
            </div>
            
            <div className="weekly-day" style={{ marginBottom: '2rem' }}>
              <h3 style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.5rem', borderRadius: '5px' }}>Quarta-feira</h3>
              <div className="weekly-events" style={{ marginTop: '1rem' }}>
                <div className="weekly-event" style={{ marginBottom: '1rem', padding: '0.5rem 0', borderBottom: '1px solid var(--light-gray)' }}>
                  <div style={{ fontWeight: 'bold' }}>07:30 - 08:30</div>
                  <div>Yoga - Sala Multiuso</div>
                </div>
                <div className="weekly-event" style={{ marginBottom: '1rem', padding: '0.5rem 0', borderBottom: '1px solid var(--light-gray)' }}>
                  <div style={{ fontWeight: 'bold' }}>12:30 - 13:30</div>
                  <div>Dança - Sala Multiuso</div>
                </div>
                <div className="weekly-event" style={{ padding: '0.5rem 0' }}>
                  <div style={{ fontWeight: 'bold' }}>17:30 - 19:00</div>
                  <div>Jogos Coletivos - Quadra Poliesportiva</div>
                </div>
              </div>
            </div>
            
            <div className="weekly-day" style={{ marginBottom: '2rem' }}>
              <h3 style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.5rem', borderRadius: '5px' }}>Quinta-feira</h3>
              <div className="weekly-events" style={{ marginTop: '1rem' }}>
                <div className="weekly-event" style={{ marginBottom: '1rem', padding: '0.5rem 0', borderBottom: '1px solid var(--light-gray)' }}>
                  <div style={{ fontWeight: 'bold' }}>08:00 - 09:30</div>
                  <div>Caminhada - Entrada do Bosque</div>
                </div>
                <div className="weekly-event" style={{ padding: '0.5rem 0' }}>
                  <div style={{ fontWeight: 'bold' }}>17:30 - 19:00</div>
                  <div>Corrida - Pista de Atletismo</div>
                </div>
              </div>
            </div>
            
            <div className="weekly-day" style={{ marginBottom: '2rem' }}>
              <h3 style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.5rem', borderRadius: '5px' }}>Sexta-feira</h3>
              <div className="weekly-events" style={{ marginTop: '1rem' }}>
                <div className="weekly-event" style={{ marginBottom: '1rem', padding: '0.5rem 0', borderBottom: '1px solid var(--light-gray)' }}>
                  <div style={{ fontWeight: 'bold' }}>07:30 - 08:30</div>
                  <div>Yoga - Sala Multiuso</div>
                </div>
                <div className="weekly-event" style={{ marginBottom: '1rem', padding: '0.5rem 0', borderBottom: '1px solid var(--light-gray)' }}>
                  <div style={{ fontWeight: 'bold' }}>12:30 - 13:30</div>
                  <div>Alongamento - Gramado Central</div>
                </div>
                <div className="weekly-event" style={{ padding: '0.5rem 0' }}>
                  <div style={{ fontWeight: 'bold' }}>17:30 - 19:00</div>
                  <div>Dança - Sala Multiuso</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white' }}>Encontre a atividade ideal para você</h2>
          <p>Inscreva-se e comece sua jornada de bem-estar agora mesmo</p>
          <Link to="/inscricao" className="btn btn-secondary">Quero Participar</Link>
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
    </div>
  );
};

export default Calendario;
