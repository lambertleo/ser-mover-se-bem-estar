import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Depoimentos = () => {
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
            <li><Link to="/depoimentos" className="active">Depoimentos</Link></li>
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
          <li><Link to="/calendario">Calendário</Link></li>
          <li><Link to="/depoimentos" className="active">Depoimentos</Link></li>
          <li><Link to="/inscricao">Inscrição</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </div>
      <div className="overlay"></div>
    </header>

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
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" alt="Ana Paula Silva" />
                      <AvatarFallback>AP</AvatarFallback>
                    </Avatar>
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
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" alt="Carlos Eduardo Mendes" />
                      <AvatarFallback>CM</AvatarFallback>
                    </Avatar>
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
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6" alt="Matheus Oliveira" />
                      <AvatarFallback>MO</AvatarFallback>
                    </Avatar>
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
    <section style={{
      backgroundColor: 'var(--light-gray)'
    }}>
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
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="Juliana Campos" />
                  <AvatarFallback>JC</AvatarFallback>
                </Avatar>
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
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" alt="Roberto Almeida" />
                  <AvatarFallback>RA</AvatarFallback>
                </Avatar>
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

    {/* Share Your Experience */}
    <section style={{
      backgroundColor: 'var(--primary)',
      color: 'white'
    }}>
      <div className="container">
        <div className="section-title">
          <h2 style={{
            color: 'white'
          }}>Compartilhe Sua Experiência</h2>
          <p>Conte-nos como o Programa SER impactou sua vida</p>
        </div>
        <div className="share-experience" style={{
          textAlign: 'center'
        }}>
          <p>Você também participa do Programa SER ou do Projeto Mover-se? Gostaríamos de ouvir sua história!</p>
          <p>Envie seu depoimento para <strong>depoimentos@programaser.edu.br</strong> ou compartilhe nas redes sociais usando a hashtag <strong>#ProgramaSER</strong>.</p>
          <div style={{
            marginTop: '2rem'
          }}>
            <Link to="/contato" className="btn btn-secondary">Enviar Depoimento</Link>
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

export default Depoimentos;
