import { useState } from "react";
import "./landing.css";

const builds = [
  { name: "CineWall", type: "Web app", image: "cinewall", url: "https://watch.aitoyz.in/", description: "Turn your laptops into one synchronized video wall." },
  { name: "Mapplock", type: "Android app", image: "mapplock", url: "https://maps.aitoyz.in/", description: "A private photo vault and app lock disguised as a map." },
  { name: "Oplus", type: "AI tool", image: "oplus", url: "https://games.aitoyz.in/", description: "Turn text into playable games and interactive stories." },
  { name: "Yourel", type: "Search engine", image: "yourel", url: "https://search.aitoyz.in/", description: "Find independent websites and tools across hosting platforms." },
  { name: "EUvsIN", type: "AI tool", image: "euvsin", url: "https://shop.aitoyz.in/", description: "Look up Indian food products and make sense of their ingredients." },
];

const services = [
  ["AI tools", "Build an AI assistant, automate a workflow, or add AI to your product."],
  ["Web development", "Launch a responsive website, landing page, or web app."],
  ["App development", "Design and build a mobile app around what your users need to do."],
];

const questions = [
  ["Can we start with just an idea?", "Yes. Tell us what you want to build and who will use it. We can help define a first version."],
  ["Can you work on an existing product?", "Yes. Share what you have and what you want to add or improve."],
  ["Do you build both websites and apps?", "Yes. We build marketing sites, web apps, and mobile apps."],
  ["Can you build an AI feature?", "Yes. Tell us where AI could help and what data or tools it would need to work with."],
  ["What should I include in my enquiry?", "Send a brief with your goal, timeline, budget range, and any examples you like."],
];

const email = "mailto:hello@aitoyz.in?subject=Aitoyz%20project%20enquiry";
const screenshot = (image: string) => import.meta.env.BASE_URL + "builds/" + image + ".webp";

export default function Index() {
  const [selected, setSelected] = useState(0);
  const current = builds[selected];

  return (
    <div className="aitoyz-landing" id="top">
      <a className="skip" href="#main">Skip to content</a>
      <header className="topbar">
        <a className="wordmark" href="#top"><span aria-hidden="true">✦</span> Aitoyz</a>
        <nav aria-label="Main navigation">
          <a href="#builds">Builds</a>
          <a href="#services">Services</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="nav-contact" href="#contact">Get in touch ↗</a>
      </header>

      <main id="main">
        <section className="screen hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">✦ AI, web &amp; app development</p>
            <h1 id="hero-title">Bring an idea.<em>Build it with Aitoyz.</em></h1>
            <p>We design and develop AI tools, websites, and mobile apps. Explore our products and see what we can build together.</p>
            <div className="actions">
              <a className="button" href="#builds">Explore our builds ↓</a>
              <a className="button light" href="#contact">Start a project ↗</a>
            </div>
          </div>

          <div className="hero-scene">
          <div className="glass">
            <div className="glass-top" aria-hidden="true"><span>✦ Aitoyz</span><span>•••</span></div>
            <div className="shelf">
              <div className="shelf-top"><strong>Product library</strong><span aria-hidden="true">◫</span></div>
              <div className="shelf-categories" aria-label="Filter the showcase">
                <a href="#builds" onClick={() => setSelected(0)}>All builds</a>
                <a href="#builds" onClick={() => setSelected(2)}>AI tools</a>
                <a href="#builds" onClick={() => setSelected(3)}>Web apps</a>
                <a href="#builds" onClick={() => setSelected(1)}>Android</a>
              </div>
              <div className="shelf-grid">
                {builds.map((build, index) => (
                  <a href="#builds" key={build.image} onClick={() => setSelected(index)}>
                    <img src={screenshot(build.image)} alt="" width="960" height="435" />
                    <span>{build.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="phone">
            <div className="phone-top" aria-hidden="true"><span>✦</span><span>•••</span></div>
            <strong>Our builds</strong>
            <div className="phone-grid">
              {builds.slice(0, 4).map((build, index) => (
                <a href="#builds" key={build.image} onClick={() => setSelected(index)}>
                  <img src={screenshot(build.image)} alt="" width="960" height="435" />
                  <span>{build.name}</span>
                </a>
              ))}
            </div>
          </div>
          </div>
        </section>

        <section className="screen builds" id="builds" aria-labelledby="builds-title">
          <div className="wrap">
            <h2 id="builds-title">See what we’ve built.</h2>
            <p className="section-lede">Explore the live products behind Aitoyz.</p>
            <div className="product-picker" role="group" aria-label="Choose a build">
              {builds.map((build, index) => (
                <button key={build.image} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}>{build.name}</button>
              ))}
            </div>
            <article className="project" aria-live="polite">
              <div className="project-meta">
                <div><h3>{current.name}</h3><p>{current.description}</p></div>
                <a className="button" href={current.url}>Open {current.name} ↗</a>
              </div>
              <a className="project-image" href={current.url} aria-label={"Open " + current.name}>
                <img src={screenshot(current.image)} alt={current.name + " website screenshot"} width="960" height="435" />
              </a>
            </article>
          </div>
        </section>

        <section className="screen services" id="services" aria-labelledby="services-title">
          <div className="wrap">
            <h2 id="services-title">What we can<br />build for you.</h2>
            <div className="service-grid">
              {services.map(([title, description], index) => (
                <article key={title}><span aria-hidden="true">{["✦", "↗", "▣"][index]}</span><h3>{title}</h3><p>{description}</p></article>
              ))}
            </div>
            <div className="actions"><a className="button" href="#contact">Discuss your project ↗</a></div>
          </div>
        </section>

        <section className="screen faq" id="faq" aria-labelledby="faq-title">
          <div className="wrap">
            <h2 id="faq-title">Frequently asked<br />questions.</h2>
            <p className="section-lede">What to know before starting a project with Aitoyz.</p>
            <div className="questions">
              {questions.map(([question, answer]) => (
                <details key={question}><summary>{question}</summary><p>{answer}</p></details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="screen footer" id="contact" aria-labelledby="contact-title">
        <div className="wrap footer-content">
          <div className="footer-intro">
            <a className="wordmark" href="#top"><span aria-hidden="true">✦</span> Aitoyz</a>
            <h2 id="contact-title">Bring an idea.<em>Build it with Aitoyz.</em></h2>
            <p>AI tools, websites, and mobile apps.</p>
            <a className="button light" href={email}>Start a project ↗</a>
          </div>
          <nav aria-label="Footer navigation">
            <h3>Menu</h3><a href="#top">Home</a><a href="#builds">Builds</a><a href="#services">Services</a><a href="#faq">FAQ</a>
          </nav>
          <nav aria-label="Contact links">
            <h3>Contact</h3><a href={email}>hello@aitoyz.in</a><a href="https://www.linkedin.com/in/aryan686/">LinkedIn ↗</a><a href="https://github.com/AryanETH">GitHub ↗</a>
          </nav>
          <nav aria-label="Product links">
            <h3>Our builds</h3>
            {builds.map((build) => <a href={build.url} key={build.image}>{build.name} ↗</a>)}
          </nav>
        </div>
        <div className="footer-wordmark" aria-hidden="true">Aitoyz</div>
      </footer>
    </div>
  );
}
