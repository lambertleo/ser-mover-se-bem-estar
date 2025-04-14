
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Inscricao = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1434030216411-0b793f4b4173")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1>Inscrição</h1>
          <p>Junte-se ao Programa SER e comece sua jornada de bem-estar</p>
        </div>
      </section>

      {/* Registration Info */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2>Como Participar</h2>
            <p>Preencha o formulário abaixo para se inscrever nas atividades</p>
          </div>
          <div className="registration-info">
            <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'var(--light-gray)', padding: '2rem', borderRadius: '10px', marginBottom: '2rem' }}>
              <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Informações Importantes</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                <li>A participação nas atividades é <strong>gratuita</strong> para toda a comunidade universitária.</li>
                <li>Você pode se inscrever em <strong>quantas atividades desejar</strong>, de acordo com sua disponibilidade.</li>
                <li>As inscrições ficam <strong>permanentemente abertas</strong> durante todo o semestre letivo.</li>
                <li>Para algumas atividades, pode haver <strong>limite de vagas</strong>. Nesse caso, haverá formação de lista de espera.</li>
                <li>Não é necessário ter experiência prévia em nenhuma das atividades. Todas são <strong>adaptadas para iniciantes</strong>.</li>
                <li>Em caso de dúvidas, entre em contato pelo email <strong>programaser@universidade.edu.br</strong>.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="form-container">
            <form>
              <div className="form-group">
                <label htmlFor="nome">Nome Completo*</label>
                <input type="text" id="nome" name="nome" required placeholder="Seu nome completo" />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail Institucional*</label>
                <input type="email" id="email" name="email" required placeholder="seu.email@universidade.edu.br" />
              </div>
              <div className="form-group">
                <label htmlFor="tel">Telefone</label>
                <input type="tel" id="tel" name="telefone" placeholder="(00) 00000-0000" />
              </div>
              <div className="form-group">
                <label htmlFor="vinculo">Vínculo com a Universidade*</label>
                <select id="vinculo" name="vinculo" required>
                  <option value="">Selecione uma opção</option>
                  <option value="estudante-grad">Estudante de Graduação</option>
                  <option value="estudante-pos">Estudante de Pós-Graduação</option>
                  <option value="professor">Professor(a)</option>
                  <option value="tecnico">Técnico(a) Administrativo(a)</option>
                  <option value="terceirizado">Funcionário(a) Terceirizado(a)</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="curso">Curso/Departamento</label>
                <input type="text" id="curso" name="curso" placeholder="Seu curso ou departamento" />
              </div>
              <div className="form-group">
                <label>Atividades de Interesse*</label>
                <div style={{ marginTop: '0.5rem' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <input type="checkbox" id="yoga" name="atividades" value="yoga" />
                    <label htmlFor="yoga" style={{ display: 'inline', marginLeft: '0.5rem' }}>Yoga</label>
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <input type="checkbox" id="alongamento" name="atividades" value="alongamento" />
                    <label htmlFor="alongamento" style={{ display: 'inline', marginLeft: '0.5rem' }}>Alongamento</label>
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <input type="checkbox" id="corrida" name="atividades" value="corrida" />
                    <label htmlFor="corrida" style={{ display: 'inline', marginLeft: '0.5rem' }}>Corrida</label>
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <input type="checkbox" id="caminhada" name="atividades" value="caminhada" />
                    <label htmlFor="caminhada" style={{ display: 'inline', marginLeft: '0.5rem' }}>Caminhada</label>
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <input type="checkbox" id="jogos" name="atividades" value="jogos" />
                    <label htmlFor="jogos" style={{ display: 'inline', marginLeft: '0.5rem' }}>Jogos</label>
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <input type="checkbox" id="tabuleiro" name="atividades" value="tabuleiro" />
                    <label htmlFor="tabuleiro" style={{ display: 'inline', marginLeft: '0.5rem' }}>Jogos de Tabuleiro</label>
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <input type="checkbox" id="danca" name="atividades" value="danca" />
                    <label htmlFor="danca" style={{ display: 'inline', marginLeft: '0.5rem' }}>Dança</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="disponibilidade">Disponibilidade de Horários</label>
                <textarea id="disponibilidade" name="disponibilidade" rows={3} placeholder="Informe os dias e horários em que você tem disponibilidade"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="motivos">Motivos para Participar</label>
                <textarea id="motivos" name="motivos" rows={3} placeholder="Conte-nos por que você quer participar do Programa SER"></textarea>
              </div>
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <input type="checkbox" id="concordo" name="concordo" required />
                <label htmlFor="concordo" style={{ display: 'inline', marginLeft: '0.5rem' }}>Concordo com a política de privacidade e com o uso dos meus dados para fins de participação no programa*</label>
              </div>
              <div className="form-submit">
                <button type="submit" className="btn">Enviar Inscrição</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Registration FAQ */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2>Perguntas Frequentes</h2>
            <p>Dúvidas comuns sobre o processo de inscrição</p>
          </div>
          <div className="faq-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr',
            gap: '1.5rem'
          }}>
            <div className="faq-item">
              <h3>Quando começo a participar após me inscrever?</h3>
              <p>Após o envio do formulário, você receberá um e-mail de confirmação em até 48 horas com informações detalhadas sobre as atividades, incluindo locais e materiais necessários. Você já pode começar a participar na semana seguinte à sua inscrição.</p>
            </div>
            <div className="faq-item">
              <h3>Posso cancelar ou alterar minha inscrição?</h3>
              <p>Sim! Você pode alterar sua inscrição a qualquer momento, adicionando ou removendo atividades. Basta enviar um e-mail para programaser@universidade.edu.br informando as alterações desejadas.</p>
            </div>
            <div className="faq-item">
              <h3>Preciso me inscrever novamente a cada semestre?</h3>
              <p>Sim. Para garantir a organização das turmas e a qualidade das atividades, as inscrições são renovadas a cada início de semestre. Você receberá um aviso por e-mail quando o período de renovação estiver aberto.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Inscricao;
