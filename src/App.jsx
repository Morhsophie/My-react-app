import Header from '../header.jsx';
import './App.css';
import heroArtwork from './assets/hero.png';

const services = [
  {
    number: '01',
    icon: '↗',
    title: 'Web Development',
    description:
      'Fast, responsive and beautiful websites that turn visitors into customers.',
    tags: 'WEBSITES & WEB APPS',
  },
  {
    number: '02',
    icon: '⌘',
    title: 'Software Solutions',
    description:
      'Smart digital tools that simplify your work and solve real business problems.',
    tags: 'CUSTOM SOFTWARE',
  },
  {
    number: '03',
    icon: '◌',
    title: 'UI/UX Design',
    description:
      'Thoughtful, user-friendly designs that make every digital interaction feel easy.',
    tags: 'DESIGN & EXPERIENCE',
  },
];

const projects = [
  {
    number: '01',
    type: 'WEB APPLICATION',
    name: 'Finora Finance',
    description: 'A cleaner way to manage your money.',
    theme: 'ground',
    mark: 'F.',
  },
  {
    number: '02',
    type: 'DIGITAL MARKETPLACE',
    name: 'Harvest Hub',
    description: 'Connecting producers with new opportunities.',
    theme: 'sunday',
    mark: 'H.',
  },
];

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> YOUR DIGITAL GROWTH PARTNER</p>
            <h1>
              We turn big ideas
              <br />
              into digital <span>reality.</span>
            </h1>
            <p className="hero-description">
              We design beautiful websites, build powerful software, and create
              digital experiences that help businesses grow.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore our work <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#services">
                What we do
              </a>
            </div>
            <div className="hero-note">
              <span className="note-mark" aria-hidden="true">✳</span>
              <p><strong>Ideas meet innovation.</strong><br />We build for what's next.</p>
            </div>
          </div>

          <div className="hero-visual" aria-label="Abstract layered artwork">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="artwork-frame">
              <div className="frame-topline">
                <span>✳ nexalabs</span>
                <span aria-hidden="true">● ● ●</span>
              </div>
              <img src={heroArtwork} alt="Three translucent layers stacked into a sculptural form" />
              <div className="frame-caption">
                <h3>Built for the future.</h3>
                <p>Creative thinking. Smart technology.</p>
                <span className="creativity-label">CREATIVITY <strong>100%</strong></span>
              </div>
            </div>
            <div className="floating-label label-top">
              <span className="label-dot" /> Creative ideas
            </div>
            <div className="floating-label label-bottom">
              <span className="label-spark" aria-hidden="true">✦</span> Digital solutions
            </div>
            <span className="visual-index">01 / DESIGN</span>
          </div>
        </section>

        <section className="services section-wrap" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2>Good ideas deserve<br /><span>great execution.</span></h2>
            </div>
            <p className="section-intro">
              From the first sketch to the final product, we help you bring your
              vision to life.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-meta">
                  <span className="service-icon" aria-hidden="true">{service.icon}</span>
                  <span>{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-foot">
                  <span>{service.tags}</span>
                  <a href="#contact" aria-label={`Ask us about ${service.title}`}>↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="work section-wrap" id="projects">
          <div className="section-heading work-heading">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Small details.<br /><span>Big impact.</span></h2>
            </div>
            <p className="section-intro">
              A few concept projects showing how thoughtful design and technology
              can work together.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.theme}`} key={project.number}>
                <div className="project-art">
                  <div className="project-meta"><span>{project.number} / 02</span><span>{project.type}</span></div>
                  <div className="project-art-center">
                    <span className="project-mark">{project.mark}</span>
                  </div>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </div>
                <div className="project-copy">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <span className="project-open" aria-hidden="true">↗</span>
                </div>
              </article>
            ))}
          </div>
          <p className="project-note"><span aria-hidden="true">✳</span> These are concept projects created for demonstration.</p>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-content">
            <p className="eyebrow">HAVE AN IDEA?</p>
            <h2>Let's build something<br /><span>remarkable.</span></h2>
            <a className="button button-light" href="mailto:hello@nexa.example">
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-decoration" aria-hidden="true">
            <span className="contact-star">✳</span>
            <span className="contact-ring" />
            <span className="contact-small-star">✦</span>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="footer-brand" href="#home" aria-label="Sophias Nexa home">Sophias Nexa<span>.</span></a>
        <p>Creative minds. Meaningful technology.</p>
        <span>© 2026 Sophias Nexa. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
