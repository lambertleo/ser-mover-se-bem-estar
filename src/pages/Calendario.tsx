
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Calendario = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1499377193864-82682aefed04")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1>Calendário de Atividades</h1>
          <p>Confira a programação semanal e os eventos especiais</p>
        </div>
      </section>

      {/* Calendar Section */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2>Programação Regular</h2>
            <p>Atividades oferecidas semanalmente</p>
          </div>
          
          <div className="calendar-container">
            <div className="calendar-placeholder">
              <div className="calendar-month">Junho 2025</div>
              <div className="calendar-grid">
                <div className="calendar-day header">Dom</div>
                <div className="calendar-day header">Seg</div>
                <div className="calendar-day header">Ter</div>
                <div className="calendar-day header">Qua</div>
                <div className="calendar-day header">Qui</div>
                <div className="calendar-day header">Sex</div>
                <div className="calendar-day header">Sáb</div>
                
                <div className="calendar-day">28</div>
                <div className="calendar-day">29</div>
                <div className="calendar-day">30</div>
                <div className="calendar-day">31</div>
                <div className="calendar-day">1</div>
                <div className="calendar-day">2</div>
                <div className="calendar-day">3</div>
                
                <div className="calendar-day">4</div>
                <div className="calendar-day event">5</div>
                <div className="calendar-day">6</div>
                <div className="calendar-day event">7</div>
                <div className="calendar-day">8</div>
                <div className="calendar-day event">9</div>
                <div className="calendar-day">10</div>
                
                <div className="calendar-day">11</div>
                <div className="calendar-day event">12</div>
                <div className="calendar-day">13</div>
                <div className="calendar-day event">14</div>
                <div className="calendar-day today">15</div>
                <div className="calendar-day event">16</div>
                <div className="calendar-day">17</div>
                
                <div className="calendar-day">18</div>
                <div className="calendar-day event">19</div>
                <div className="calendar-day">20</div>
                <div className="calendar-day event">21</div>
                <div className="calendar-day">22</div>
                <div className="calendar-day event">23</div>
                <div className="calendar-day">24</div>
                
                <div className="calendar-day">25</div>
                <div className="calendar-day event">26</div>
                <div className="calendar-day">27</div>
                <div className="calendar-day event">28</div>
                <div className="calendar-day">29</div>
                <div className="calendar-day">30</div>
                <div className="calendar-day">1</div>
              </div>
            </div>
          </div>
          
          <div className="text-center" style={{ margin: '2rem 0' }}>
            <a href="#" className="btn btn-outlined">Baixar Calendário Completo (PDF)</a>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Horários Semanais</h2>
            <p>Confira os horários das atividades regulares</p>
          </div>
          
          <div className="schedule-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr',
            gap: '1rem'
          }}>
            <div className="schedule-day">
              <h3>Segunda-feira</h3>
              <div className="schedule-items">
                <div className="schedule-item">
                  <div className="schedule-time">8h - 9h</div>
                  <div className="schedule-activity">Yoga (Sala Multiuso)</div>
                </div>
                <div className="schedule-item">
                  <div className="schedule-time">12h - 13h</div>
                  <div className="schedule-activity">Alongamento (Gramado)</div>
                </div>
                <div className="schedule-item">
                  <div className="schedule-time">17h - 18h</div>
                  <div className="schedule-activity">Corrida (Pista de Atletismo)</div>
                </div>
              </div>
            </div>
            
            <div className="schedule-day">
              <h3>Terça-feira</h3>
              <div className="schedule-items">
                <div className="schedule-item">
                  <div className="schedule-time">9h - 10h</div>
                  <div className="schedule-activity">Jogos de Tabuleiro (Sala de Convivência)</div>
                </div>
                <div className="schedule-item">
                  <div className="schedule-time">14h - 15h</div>
                  <div className="schedule-activity">Dança (Sala de Dança)</div>
                </div>
              </div>
            </div>
            
            <div className="schedule-day">
              <h3>Quarta-feira</h3>
              <div className="schedule-items">
                <div className="schedule-item">
                  <div className="schedule-time">8h - 9h</div>
                  <div className="schedule-activity">Yoga (Sala Multiuso)</div>
                </div>
                <div className="schedule-item">
                  <div className="schedule-time">12h - 13h</div>
                  <div className="schedule-activity">Caminhada (Parque)</div>
                </div>
                <div className="schedule-item">
                  <div className="schedule-time">16h - 17h</div>
                  <div className="schedule-activity">Jogos (Quadra)</div>
                </div>
              </div>
            </div>
            
            <div className="schedule-day">
              <h3>Quinta-feira</h3>
              <div className="schedule-items">
                <div className="schedule-item">
                  <div className="schedule-time">10h - 11h</div>
                  <div className="schedule-activity">Alongamento (Gramado)</div>
                </div>
                <div className="schedule-item">
                  <div className="schedule-time">15h - 16h</div>
                  <div className="schedule-activity">Dança (Sala de Dança)</div>
                </div>
              </div>
            </div>
            
            <div className="schedule-day">
              <h3>Sexta-feira</h3>
              <div className="schedule-items">
                <div className="schedule-item">
                  <div className="schedule-time">8h - 9h</div>
                  <div className="schedule-activity">Yoga (Sala Multiuso)</div>
                </div>
                <div className="schedule-item">
                  <div className="schedule-time">12h - 13h</div>
                  <div className="schedule-activity">Caminhada (Parque)</div>
                </div>
                <div className="schedule-item">
                  <div className="schedule-time">17h - 18h</div>
                  <div className="schedule-activity">Corrida (Pista de Atletismo)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2>Eventos Especiais</h2>
            <p>Marque na sua agenda</p>
          </div>
          
          <div className="calendar-events">
            <div className="calendar-event">
              <div className="event-date">18 de Junho, 2025 • 14:00 - 17:00</div>
              <div className="event-title">Workshop: Mindfulness para o dia a dia</div>
              <p>Aprenda técnicas práticas de mindfulness que podem ser incorporadas à sua rotina diária. Com Maria Santos, instrutora certificada. Local: Auditório Central.</p>
            </div>
            
            <div className="calendar-event">
              <div className="event-date">22 de Junho, 2025 • 9:00 - 12:00</div>
              <div className="event-title">Caminhada Ecológica</div>
              <p>Caminhada pelo Parque Ecológico com atividades de conexão com a natureza e conscientização ambiental. Ponto de encontro: Entrada principal do campus.</p>
            </div>
            
            <div className="calendar-event">
              <div className="event-date">1 de Julho, 2025 • 18:00 - 20:00</div>
              <div className="event-title">Roda de Conversa: Bem-estar na Universidade</div>
              <p>Discussão sobre desafios e estratégias para manter o equilíbrio durante a vida acadêmica. Com participação de psicólogos e estudantes. Local: Centro de Vivência.</p>
            </div>
            
            <div className="calendar-event">
              <div className="event-date">10 de Julho, 2025 • 15:00 - 18:00</div>
              <div className="event-title">Festival de Jogos Cooperativos</div>
              <p>Tarde de jogos e atividades que estimulam a cooperação, trabalho em equipe e conexão social. Local: Gramado Central.</p>
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <p>Para mais informações sobre eventos especiais, entre em <Link to="/contato" style={{ textDecoration: 'underline' }}>contato</Link> com a nossa equipe.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white' }}>Não perca nenhuma atividade!</h2>
          <p>Inscreva-se para receber lembretes sobre as atividades do seu interesse</p>
          <Link to="/inscricao" className="btn btn-secondary">Quero Participar</Link>
        </div>
      </section>
    </Layout>
  );
};

export default Calendario;
