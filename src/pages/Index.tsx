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
            <p>We build AI tools, websites, and mobile apps.</p>
            <div className="actions">
              <a className="button" href="#builds">Explore our builds ↓</a>
              <a className="button light" href="#contact">Start a project ↗</a>
            </div>
          </div>

          <div className="glass">
            <div className="glass-top" aria-hidden="true"><span>✦ Aitoyz</span><span>•••</span></div>
            <div className="shelf">
              <div className="shelf-top"><strong>Built by Aitoyz</strong><span aria-hidden="true">◫</span></div>
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
        </section>

        <section className="screen builds" id="builds" aria-labelledby="builds-title">
          <div className="wrap">
            <h2 id="builds-title">See what we’ve built.</h2>
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
            <h2 id="services-title">What we can<em>build for you.</em></h2>
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
            <h2 id="faq-title">Frequently asked<em>questions.</em></h2>
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
          <h2 id="contact-title">Have something<em>in mind?</em></h2>
          <div className="actions">
            <a className="button accent" href={email}>Email hello@aitoyz.in ↗</a>
            <a className="button light" href="https://www.linkedin.com/in/aryan686/">LinkedIn ↗</a>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#builds">Builds</a><a href="#services">Services</a><a href="#faq">FAQ</a><a href="#top">Back to top ↑</a>
          </nav>
        </div>
        <div className="footer-wordmark" aria-hidden="true">Aitoyz</div>
      </footer>
    </div>
  );
}
