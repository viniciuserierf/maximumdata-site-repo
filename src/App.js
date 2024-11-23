import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <img src="/logo.png" alt="Maximum Data" className="animated-logo" />

        <div className="cta-container">
          <a href="#about" className="sliding-button">
            SUA SOLUÇÃO EM DADOS ESTÁ AQUI
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>Sobre Nós</h2>
        <p>
          Na Maximum Data, acreditamos no poder dos dados para transformar
          negócios. Oferecemos soluções personalizadas e tecnologias inovadoras
          para ajudar empresas a alcançar seus objetivos e tomar decisões mais
          inteligentes.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Entre em Contato</h2>
        <div className="form-container">
          <form>
            <input type="text" name="name" placeholder="Seu Nome" required />
            <input
              type="email"
              name="email"
              placeholder="Seu E-mail"
              required
            />
            <textarea
              name="message"
              placeholder="Sua Mensagem"
              rows="5"
              required
            ></textarea>
            <button type="submit">Enviar Mensagem</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
