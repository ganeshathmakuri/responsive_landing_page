import { useState } from 'react';
import './App.css';

const benefits = [
  {
    icon: '☀',
    title: 'Easy to care for',
    description: 'Good-looking plants that are happy to grow at your pace.',
  },
  {
    icon: '♧',
    title: 'Thoughtfully grown',
    description: 'Each plant is hand-picked from growers we know and trust.',
  },
  {
    icon: '♡',
    title: 'Delivered with care',
    description: 'Carefully packed and ready to make itself at home.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <nav className="navbar navbar-expand-lg site-nav" aria-label="Main navigation">
        <div className="container">
          <a className="navbar-brand brand-mark" href="#home" onClick={closeMenu}>
            <span className="brand-leaf" aria-hidden="true">✳</span>
            fern &amp; found
          </a>
          <button
            className="navbar-toggler menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`}>
            <div className="navbar-nav ms-auto align-items-lg-center">
              <a className="nav-link" href="#plants" onClick={closeMenu}>Our plants</a>
              <a className="nav-link" href="#about" onClick={closeMenu}>Why plants?</a>
              <a className="nav-link nav-cta" href="#plants" onClick={closeMenu}>Find your plant <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero-section" id="home">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 hero-copy">
                <p className="eyebrow"><span /> A little more green, every day</p>
                <h1>Make room<br />for <em>something</em><br />growing.</h1>
                <p className="hero-description">
                  Easygoing houseplants for the spaces you call home. Pick a favorite, and we’ll help it thrive.
                </p>
                <div className="hero-actions">
                  <a className="button-primary" href="#plants">Shop houseplants <span aria-hidden="true">→</span></a>
                  <span className="delivery-note"><span aria-hidden="true">✳</span> Free delivery over $50</span>
                </div>
                <div className="customer-note">
                  <div className="avatar-stack" aria-hidden="true">
                    <span>J</span><span>M</span><span>A</span>
                  </div>
                  <p><strong>4.9/5</strong> from plant people like you</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-art">
                  <img
                    className="hero-image"
                    src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=85"
                    alt="Sunlight falling across a collection of leafy houseplants"
                  />
                  <div className="image-caption">
                    <span className="caption-dot" />
                    <span><strong>Meet your new favorite</strong><br />The easygoing Monstera</span>
                    <a href="#plants" aria-label="Explore the Monstera">↗</a>
                  </div>
                  <span className="hero-sparkle sparkle-one" aria-hidden="true">✳</span>
                  <span className="hero-sparkle sparkle-two" aria-hidden="true">✳</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>GOOD THINGS GROW HERE</span>
            <span aria-hidden="true">↓</span>
            <span>SCROLL TO GET ROOTED</span>
          </div>
        </section>

        <section className="benefits-section" id="about">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow"><span /> Plant parenthood, made simple</p>
              <h2>A happier home starts <em>with a little green.</em></h2>
            </div>
            <div className="row g-4">
              {benefits.map((benefit, index) => (
                <div className="col-md-4" key={benefit.title}>
                  <article className="benefit-card">
                    <span className={`benefit-icon benefit-icon-${index + 1}`} aria-hidden="true">{benefit.icon}</span>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="shop-section" id="plants">
          <div className="container shop-banner">
            <div>
              <p className="eyebrow"><span /> Your next favorite is waiting</p>
              <h2>Let’s find your<br /><em>kind of green.</em></h2>
            </div>
            <a className="button-light" href="mailto:hello@fernandfound.com?subject=Help%20me%20find%20a%20plant">Get a plant recommendation <span aria-hidden="true">→</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2">
          <a className="brand-mark footer-brand" href="#home"><span className="brand-leaf" aria-hidden="true">✳</span> fern &amp; found</a>
          <p>Good things grow with a little care. © 2025 Fern &amp; Found</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
