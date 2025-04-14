
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Programa SER & Projeto Mover-se</h1>
          <p>Promovendo bem-estar, saúde mental e qualidade de vida para a comunidade universitária através do movimento e da conexão.</p>
          <Link to="/inscricao" className="btn">Quero Participar</Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro">
        <div className="container">
          <div className="section-title">
            <h2>Bem-vindo ao Programa SER</h2>
            <p>Transformando vidas através do bem-estar integral</p>
          </div>
          <div className="intro-content">
            <p>O Programa SER é uma iniciativa da Universidade Federal que visa promover o bem-estar e a saúde mental da comunidade acadêmica através de práticas integrativas e complementares.</p>
            <p>Nosso objetivo é criar um ambiente universitário que valorize o desenvolvimento humano em todas as suas dimensões: física, mental, emocional e social.</p>
            <p>Através do Projeto Mover-se, oferecemos diversas atividades que estimulam o movimento corporal, a conexão social e o autoconhecimento.</p>
            <div className="text-center mt-4">
              <Link to="/sobre" className="btn btn-outlined">Conheça nossa missão</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Highlight */}
      <section className="activities-highlight" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Projeto Mover-se</h2>
            <p>Atividades para corpo e mente</p>
          </div>
          <div className="activities-grid">
            <div className="card">
              <div className="card-content">
                <div className="card-icon">🧘</div>
                <h3>Yoga e Meditação</h3>
                <p>Práticas que promovem equilíbrio, flexibilidade e consciência corporal, reduzindo o estresse e ansiedade.</p>
                <Link to="/moverse" className="btn btn-sm">Saiba mais</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="card-icon">🏃</div>
                <h3>Corrida e Caminhada</h3>
                <p>Atividades ao ar livre que melhoram o condicionamento físico e estimulam a produção de endorfina.</p>
                <Link to="/moverse" className="btn btn-sm">Saiba mais</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="card-icon">🎮</div>
                <h3>Jogos e Recreação</h3>
                <p>Momentos de diversão e interação social que promovem o bem-estar e fortalecem vínculos.</p>
                <Link to="/moverse" className="btn btn-sm">Saiba mais</Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/moverse" className="btn">Ver todas as atividades</Link>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="testimonial-preview">
        <div className="container">
          <div className="section-title">
            <h2>O que dizem nossos participantes</h2>
            <p>Experiências transformadoras</p>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Participar do Projeto Mover-se mudou completamente minha experiência universitária. As práticas de yoga me ajudaram a lidar com a ansiedade durante as provas e aprendi a valorizar momentos de autocuidado."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar"></div>
                <div>
                  <div className="testimonial-name">Ana Paula Silva</div>
                  <div className="testimonial-role">Estudante de Psicologia</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/depoimentos" className="btn btn-outlined">Ver todos os depoimentos</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white' }}>Faça parte dessa transformação</h2>
          <p>Inscreva-se hoje mesmo e comece sua jornada de bem-estar</p>
          <Link to="/inscricao" className="btn btn-secondary">Quero Participar</Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
