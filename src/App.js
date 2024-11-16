import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
            <img src="/logo.png" alt="Maximum Data" className="animated-logo" />
         
          <a href="#contact" className="cta-button">SUA SOLUÇÃO EM DADOS ESTA AQUI</a>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="contact-section">
        <ContactForm />
      </section>
    </div>
  );
}

export default App;
