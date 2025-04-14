
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Depoimentos = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1518495973542-4542c06a5843")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1>Depoimentos</h1>
          <p>Conheça as histórias e experiências dos nossos participantes</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2>O que dizem nossos participantes</h2>
            <p>Histórias reais de transformação e bem-estar</p>
          </div>
          <div className="testimonials-container">
            <div className="testimonials">
              <div className="testimonial">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p>"Participar do Projeto Mover-se mudou completamente minha experiência universitária. As práticas de yoga me ajudaram a lidar com a ansiedade durante as provas e aprendi a valorizar momentos de autocuidado. Agora consigo equilibrar melhor os estudos com atividades que promovem meu bem-estar."</p>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar"></div>
                      <div>
                        <div className="testimonial-name">Ana Paula Silva</div>
                        <div className="testimonial-role">Estudante de Psicologia</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p>"Como professor, eu via muitos alunos sobrecarregados e com dificuldades para lidar com a pressão acadêmica. Desde que comecei a participar do Programa SER e incentivar meus alunos a fazer o mesmo, percebi uma melhora significativa no clima em sala de aula e no rendimento geral. É uma iniciativa que beneficia toda a comunidade."</p>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar"></div>
                      <div>
                        <div className="testimonial-name">Carlos Eduardo Mendes</div>
                        <div className="testimonial-role">Professor de Engenharia</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p>"Entrei na universidade muito tímido e com dificuldade para fazer amigos. As atividades coletivas do Projeto Mover-se foram uma porta de entrada para conhecer pessoas com interesses similares aos meus. Nas corridas semanais, encontrei um grupo de apoio que vai além da atividade física. Formamos uma verdadeira comunidade."</p>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar"></div>
                      <div>
                        <div className="testimonial-name">Matheus Oliveira</div>
                        <div className="testimonial-role">Estudante de Ciência da Computação</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="testimonials-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr',
            gap: '2rem'
          }}>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Desde que comecei a participar das aulas de dança do Programa SER, minha semana ganhou mais cor. É um momento em que posso esquecer das preocupações e simplesmente me divertir. Além do benefício físico, a dança melhorou minha autoconfiança e expressão corporal, o que acabou refletindo positivamente em apresentações acadêmicas."</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar"></div>
                  <div>
                    <div className="testimonial-name">Juliana Campos</div>
                    <div className="testimonial-role">Estudante de Arquitetura</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Como funcionário administrativo, passo muitas horas sentado. As sessões de alongamento do Projeto Mover-se no horário do almoço têm sido essenciais para aliviar dores nas costas e melhorar minha postura. É um investimento de 30 minutos que melhora significativamente o resto do meu dia. A universidade demonstra cuidado com os servidores ao oferecer essa oportunidade."</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar"></div>
                  <div>
                    <div className="testimonial-name">Roberto Almeida</div>
                    <div className="testimonial-role">Secretário Administrativo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial (Placeholder) */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2>Depoimentos em Vídeo</h2>
          </div>
          <div className="video-testimonial" style={{ 
            backgroundColor: 'var(--dark)',
            borderRadius: '10px',
            overflow: 'hidden',
            position: 'relative',
            paddingTop: '56.25%', /* 16:9 Aspect Ratio */
            marginBottom: '2rem'
          }}>
            <div style={{ 
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              textAlign: 'center',
              padding: '1rem'
            }}>
              <div>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>▶️</div>
                <h3>Depoimento em Vídeo</h3>
                <p>Assista ao depoimento completo de nossos participantes</p>
              </div>
            </div>
          </div>
          <div className="video-description" style={{ textAlign: 'center' }}>
            <p>Neste vídeo, participantes do Programa SER compartilham como as atividades impactaram positivamente suas vidas universitárias e pessoais.</p>
          </div>
        </div>
      </section>

      {/* Share Your Experience */}
      <section style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: 'white' }}>Compartilhe Sua Experiência</h2>
            <p>Conte-nos como o Programa SER impactou sua vida</p>
          </div>
          <div className="share-experience" style={{ textAlign: 'center' }}>
            <p>Você também participa do Programa SER ou do Projeto Mover-se? Gostaríamos de ouvir sua história!</p>
            <p>Envie seu depoimento para <strong>depoimentos@programaser.edu.br</strong> ou compartilhe nas redes sociais usando a hashtag <strong>#ProgramaSER</strong>.</p>
            <div style={{ marginTop: '2rem' }}>
              <Link to="/contato" className="btn btn-secondary">Enviar Depoimento</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Depoimentos;
