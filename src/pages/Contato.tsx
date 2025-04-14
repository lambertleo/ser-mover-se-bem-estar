
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Contato = () => {
  return (
    <Layout>
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
          <h1>Contato</h1>
          <p>Estamos à disposição para atender você</p>
        </div>
      </section>

      {/* Contact Info */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2>Informações de Contato</h2>
            <p>Entre em contato por um dos canais abaixo</p>
          </div>
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>E-mail</h3>
              <p>programaser@universidade.edu.br</p>
              <p>moverse@universidade.edu.br</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>Redes Sociais</h3>
              <p>Instagram: @programaser</p>
              <p>Facebook: /programaser</p>
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
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Localização</h3>
              <p>Centro de Vivência, Sala 101</p>
              <p>Campus Universitário</p>
              <p>Segunda a Sexta, 8h às 18h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Envie uma Mensagem</h2>
            <p>Preencha o formulário abaixo para enviar sua mensagem</p>
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
                <label htmlFor="assunto">Assunto*</label>
                <select id="assunto" name="assunto" required>
                  <option value="">Selecione uma opção</option>
                  <option value="duvida">Dúvida sobre as atividades</option>
                  <option value="inscricao">Informações sobre inscrição</option>
                  <option value="depoimento">Enviar depoimento</option>
                  <option value="sugestao">Sugestão ou comentário</option>
                  <option value="parceria">Proposta de parceria</option>
                  <option value="outro">Outro assunto</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="mensagem">Mensagem*</label>
                <textarea id="mensagem" name="mensagem" rows={6} required placeholder="Escreva sua mensagem aqui"></textarea>
              </div>
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <input type="checkbox" id="concordo" name="concordo" required />
                <label htmlFor="concordo" style={{ display: 'inline', marginLeft: '0.5rem' }}>Concordo com o armazenamento e processamento das informações enviadas*</label>
              </div>
              <div className="form-submit">
                <button type="submit" className="btn">Enviar Mensagem</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2>Perguntas Frequentes</h2>
            <p>Respostas para as dúvidas mais comuns</p>
          </div>
          <div className="faq-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr',
            gap: '1.5rem'
          }}>
            <div className="faq-item">
              <h3>Preciso pagar para participar das atividades?</h3>
              <p>Não. Todas as atividades do Programa SER e do Projeto Mover-se são gratuitas para a comunidade universitária.</p>
            </div>
            <div className="faq-item">
              <h3>É necessário ter experiência prévia nas atividades?</h3>
              <p>Não é necessário. Todas as atividades são adaptadas para diferentes níveis de experiência, incluindo iniciantes.</p>
            </div>
            <div className="faq-item">
              <h3>Posso participar de mais de uma atividade?</h3>
              <p>Sim! Você pode participar de quantas atividades desejar, desde que haja compatibilidade de horários.</p>
            </div>
            <div className="faq-item">
              <h3>Preciso levar materiais específicos para as atividades?</h3>
              <p>Para a maioria das atividades, não é necessário levar materiais. Para yoga, recomendamos trazer seu próprio tapete, mas temos alguns disponíveis para empréstimo.</p>
            </div>
            <div className="faq-item">
              <h3>Posso começar a participar a qualquer momento?</h3>
              <p>Sim. As inscrições ficam abertas continuamente, e você pode começar a participar a qualquer momento do semestre.</p>
            </div>
            <div className="faq-item">
              <h3>Se eu faltar algumas sessões, serei desligado do programa?</h3>
              <p>Não. Entendemos que os compromissos acadêmicos são prioridade. A participação é livre e você pode frequentar conforme sua disponibilidade.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p>Não encontrou resposta para sua dúvida? <Link to="/contato" style={{ textDecoration: 'underline' }}>Entre em contato</Link> conosco.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
