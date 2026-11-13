import { useEffect, useState } from "react";
import { AppWindow, Code2, MapPin, MessageCircle, Sparkles } from "lucide-react";
import "./landing.css";
import DeviceStatus from "./DeviceStatus";

const builds = [
  { name: "CineWall", type: "Web app", image: "cinewall", url: "https://watch.aitoyz.in/", description: "Turn your laptops into one synchronized video wall." },
  { name: "Mapplock", type: "Android app", image: "mapplock", url: "https://maps.aitoyz.in/", description: "A private photo vault and app lock disguised as a map." },
  { name: "Oplus", type: "AI tool", image: "oplus", url: "https://games.aitoyz.in/", description: "Turn text into playable games and interactive stories." },
  { name: "Yourel", type: "Search engine", image: "yourel", url: "https://search.aitoyz.in/", description: "Find independent websites and tools across hosting platforms." },
  { name: "EUvsIN", type: "AI tool", image: "euvsin", url: "https://shop.aitoyz.in/", description: "Look up Indian food products and make sense of their ingredients." },
];

const plans = [
  { name: "Google Maps listing setup", price: "₹500", text: "Help creating or claiming an eligible Google Business Profile.", icon: MapPin },
  { name: "Website landing page", price: "₹2,000", text: "A mobile-friendly one-page website with a clear way to contact you.", icon: AppWindow },
  { name: "Full web app", price: "Let’s discuss", text: "Custom web apps, mobile apps, and AI tools quoted after we discuss your requirements.", icon: Code2 },
];

const questions = [
  ["Can we start with just an idea?", "Yes. Tell us what you want to build and who will use it. We can help define a first version."],
  ["Can you work on an existing product?", "Yes. Share what you have and what you want to add or improve."],
  ["Do you build both websites and apps?", "Yes. We build marketing sites, web apps, and mobile apps."],
  ["Can you build an AI feature?", "Yes. Tell us where AI could help and what data or tools it would need to work with."],
  ["What should I include in my enquiry?", "Send a brief with your goal, timeline, budget range, and any examples you like."],
];

const email = "mailto:hello@aitoyz.in?subject=Aitoyz%20project%20enquiry";
const whatsapp = "https://wa.me/916260976807?text=";
const contact = whatsapp + encodeURIComponent("Hi Aitoyz! I’d like to discuss a project.");
const linkedin = "https://www.linkedin.com/company/133763976/";
const chatgpt = "https://chatgpt.com/?q=" + encodeURIComponent(
  "Visit https://aitoyz.in/ and explain what Aitoyz does, how it could help a small business, what its published prices cover, and how to contact it. Cite the site. If you cannot open it, say so and explain that Aitoyz offers website landing pages, web and mobile app development, AI tools, and Google Business Profile setup help.",
);
const offerEnds = Date.parse("2026-11-14T08:37:32.376Z");
const brand = (name: string) => import.meta.env.BASE_URL + name;
const screenshot = (image: string) => import.meta.env.BASE_URL + "builds/" + image + ".webp";

export default function Index() {
  const [selected, setSelected] = useState(0);
  const [auto, setAuto] = useState(true);
  const [live, setLive] = useState(false);
  const [now, setNow] = useState(Date.now);
  const remaining = Math.max(0, Math.ceil((offerEnds - now) / 1000));
  const countdown = [Math.floor(remaining / 3600), Math.floor(remaining / 60) % 60, remaining % 60]
    .map((part) => String(part).padStart(2, "0")).join(":");
  const current = builds[selected];

  useEffect(() => {
    if (Date.now() >= offerEnds) return;
    const timer = window.setInterval(() => {
      const time = Date.now();
      setNow(time);
      if (time >= offerEnds) window.clearInterval(timer);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!auto || live || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setSelected((index) => (index + 1) % builds.length);
    }, 9000);
    return () => window.clearInterval(timer);
  }, [auto, live]);

  function chooseBuild(index: number) {
    setSelected(index);
    setAuto(false);
    setLive(false);
  }

  return (
    <div className="aitoyz-landing" id="top">
      <a className="skip" href="#main">Skip to content</a>
      <header className="topbar">
        <a className="wordmark" href="#top"><img src={brand("aitoyz-wordmark.webp")} alt="Aitoyz" width="108" height="38" /></a>
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
            <h1 id="hero-title">Website development.<em>Built around your business.</em></h1>
            <p>Launch a ₹2,000 landing page, build a custom web or mobile app, or get help putting your business on Google Maps.</p>
            <div className="actions">
              <a className="button" href="#services">See pricing ↓</a>
              <a className="button light" href={contact}>WhatsApp us ↗</a>
            </div>
          </div>

          <div className="hero-landscape" aria-hidden="true" />
          <div className="hero-scene">
          <div className="glass">
            <div className="glass-top"><span aria-hidden="true">✦ Aitoyz</span><DeviceStatus /></div>
            <div className="shelf">
              <div className="shelf-top"><strong>Product library</strong><span aria-hidden="true">◫</span></div>
              <div className="shelf-categories" aria-label="Filter the showcase">
                <a href="#builds" onClick={() => chooseBuild(0)}>All builds</a>
                <a href="#builds" onClick={() => chooseBuild(2)}>AI tools</a>
                <a href="#builds" onClick={() => chooseBuild(3)}>Web apps</a>
                <a href="#builds" onClick={() => chooseBuild(1)}>Android</a>
              </div>
              <div className="shelf-grid">
                {builds.map((build, index) => (
                  <a href="#builds" key={build.image} onClick={() => chooseBuild(index)}>
                    <img src={screenshot(build.image)} alt="" width="960" height="435" />
                    <span className="product-label"><img src={brand("builds/" + build.image + "-logo.webp")} width="16" height="16" alt="" />{build.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="phone">
            <div className="phone-top"><span aria-hidden="true">✦</span><DeviceStatus /></div>
            <strong>Our builds</strong>
            <div className="phone-grid">
              {builds.slice(0, 4).map((build, index) => (
                <a href="#builds" key={build.image} onClick={() => chooseBuild(index)}>
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
                <button key={build.image} type="button" aria-pressed={selected === index} onClick={() => chooseBuild(index)}>{build.name}</button>
              ))}
            </div>
            <article className="project">
              <div className="project-meta">
                <div><h3>{current.name}</h3><p>{current.description}</p></div>
                <a className="button" href={current.url}>Open {current.name} ↗</a>
              </div>
              <div className="preview-controls">
                <button type="button" aria-pressed={live} onClick={() => setLive(!live)}>{live ? "Show cached preview" : "Load live site"}</button>
                <button type="button" disabled={live} onClick={() => setAuto(!auto)}>{auto ? "Pause rotation" : "Resume rotation"}</button>
              </div>
              {live ? (
                <iframe className="live-preview" src={current.url} title={current.name + " live site"} loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms" referrerPolicy="no-referrer" />
              ) : (
                <a className="project-image" href={current.url} aria-label={"Open " + current.name}>
                  <img src={screenshot(current.image)} alt={current.name + " website screenshot"} width="960" height="435" loading="lazy" />
                </a>
              )}
            </article>
          </div>
        </section>

        <section className="screen services" id="services" aria-labelledby="services-title">
          <div className="wrap">
            <h2 id="services-title">Website and app pricing.</h2>
            {remaining > 0 && (
              <aside className="maps-offer" aria-label="Google Maps setup offer">
                <MapPin aria-hidden="true" />
                <div>
                  <h3>Free Google Maps setup</h3>
                  <p>Claim Aitoyz’s setup help for an eligible business before this offer ends.</p>
                  <p className="offer-clock">Ends in <span aria-label="Hours, minutes, seconds">{countdown}</span></p>
                </div>
                <a className="button" href={whatsapp + encodeURIComponent("Hi Aitoyz! I’d like to claim the free Google Maps setup offer.")}>Claim on WhatsApp ↗</a>
              </aside>
            )}
            <div className="service-grid">
              {plans.map(({ name, price, text, icon: Icon }) => (
                <article key={name}>
                  <span aria-hidden="true"><Icon size={19} /></span><h3>{name}</h3>
                  <p className="plan-price">{price}</p><p>{text}</p>
                </article>
              ))}
            </div>
            <p className="pricing-note">Google Business Profile is free. ₹500 is Aitoyz’s regular setup service fee. Google handles eligibility and verification.</p>
            <div className="actions"><a className="button" href={contact}>Discuss on WhatsApp ↗</a></div>
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

      <a className="ask-chatgpt" href={chatgpt} target="_blank" rel="noopener noreferrer">
        <span className="ask-icon"><MessageCircle size={19} aria-hidden="true" /><Sparkles size={10} aria-hidden="true" /></span>
        Ask ChatGPT about Aitoyz ↗
      </a>

      <footer className="screen footer" id="contact" aria-labelledby="contact-title">
        <div className="wrap footer-content">
          <div className="footer-intro">
            <a className="wordmark" href="#top"><img src={brand("aitoyz-wordmark.webp")} alt="Aitoyz" width="108" height="38" /></a>
            <h2 id="contact-title">Bring an idea.<em>Build it with Aitoyz.</em></h2>
            <p>AI tools, websites, and mobile apps.</p>
            <a className="button light" href={contact}>WhatsApp us ↗</a>
          </div>
          <nav aria-label="Footer navigation">
            <h3>Menu</h3><a href="#top">Home</a><a href="#builds">Builds</a><a href="#services">Services</a><a href="#faq">FAQ</a>
          </nav>
          <nav aria-label="Contact links">
            <h3>Contact</h3><a href={email}>hello@aitoyz.in</a><a href={linkedin}>LinkedIn ↗</a><a href={contact}>WhatsApp ↗</a>
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
