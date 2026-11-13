import "./landing.css";

export default function Index() {
  return (
    <div className="aitoyz-landing">
    <a href="#main" className="skip">Skip to content</a>
    <header className="nav">
      <a className="brand" href="#home">
        <span className="mark" aria-hidden="true">?</span>Aitoyz</a>
        <nav className="navlinks" aria-label="Main navigation">
          <a href="#builds">Builds</a>
          <a href="#services">Services</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="navcta" href="#contact">Get in touch ?</a>
      </header>
      <main id="main">
        <section className="screen hero" id="home" aria-labelledby="hero-title">
          <div className="wrap">
            <p className="eyebrow">? AI, web &amp; app development</p>
            <h1 id="hero-title">Bring an idea.<em>Build it with Aitoyz.</em>
          </h1>
          <p className="lede">We build AI tools, websites, and mobile apps. Explore what we've shipped and tell us what you want to make.</p>
          <div className="actions">
            <a className="button" href="#builds">Explore our builds </a>
            <a className="button light" href="#contact">Start a project ?</a>
          </div>
          <div className="window">
            <div className="bar">
              <span className="dots" aria-hidden="true">? ? ?</span>
              <strong>Built by Aitoyz</strong>
              <span>Product library</span>
            </div>
            <div className="shelf">
              <a className="tile" href="#cinewall">
                <strong>CineWall ?</strong>
                <small>Browser app</small>
              </a>
              <a className="tile" href="#mapplock">
                <strong>Mapplock ?</strong>
                <small>Android app</small>
              </a>
              <a className="tile" href="#ingredient-checker">
                <strong>Ingredient checker ?</strong>
                <small>AI tool</small>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="screen work" id="builds" aria-labelledby="builds-title">
        <div className="wrap">
          <h2 id="builds-title">Built by Aitoyz.<em>Ready to explore.</em>
        </h2>
        <div className="grid">
          <article className="card" id="cinewall">
            <div className="visual cine" aria-hidden="true">
              <div className="screens">
                <i>
                </i>
                <i>
                </i>
                <i>
                </i>
              </div>
            </div>
            <h3>CineWall</h3>
            <p>Turn multiple laptops into a synchronized video wall in your browser.</p>
            <a className="cardlink" href="https://www.sideprojectors.com/project/105245/cinewall">See CineWall ?</a>
          </article>
          <article className="card" id="mapplock">
            <div className="visual map" aria-hidden="true">
              <div className="pin">
                <i>
                </i>
              </div>
            </div>
            <h3>Mapplock</h3>
            <p>An Android app lock and photo vault that uses map coordinates.</p>
            <a className="cardlink" href="https://play.google.com/store/apps/details?id=com.aitoyz.mapplock">Open on Google Play ?</a>
          </article>
          <article className="card" id="ingredient-checker">
            <div className="visual ingredient" aria-hidden="true">
              <div className="scan">Ingredient list<i>
              </i>
              <i>
              </i>
              <i>
              </i>
            </div>
          </div>
          <h3>EUvsIN Ingredient Checker</h3>
          <p>A tool that uses AI to help you understand food ingredient lists.</p>
          <a className="cardlink" href="mailto:hello@aitoyz.in?subject=AI%20Ingredient%20Checker">Ask about this build ?</a>
        </article>
      </div>
      <p className="more-builds">
        <a href="https://games.aitoyz.in">Oplus ↗</a>
        <a href="https://search.aitoyz.in">Yourel ↗</a>
        <a href="https://maps.aitoyz.in">Maplix ↗</a>
        <a href="https://food.aitoyz.in">SwapEat ↗</a>
      </p>
    </div>
    </section>
    <section className="screen services" id="services" aria-labelledby="services-title">
    <div className="wrap">
      <h2 id="services-title">What we build.</h2>
      <div className="grid">
        <article className="card">
          <span className="symbol" aria-hidden="true">?</span>
          <h3>AI tools</h3>
          <p>Turn a repetitive task into an AI-assisted workflow or build AI features into your product.</p>
        </article>
        <article className="card">
          <span className="symbol" aria-hidden="true">?</span>
          <h3>Web development</h3>
          <p>Launch a responsive website, a landing page, or a web app people can use in their browser.</p>
        </article>
        <article className="card">
          <span className="symbol" aria-hidden="true">?</span>
          <h3>App development</h3>
          <p>Prototype and build a mobile app around the tasks your users need to do.</p>
        </article>
      </div>
      <div className="actions">
        <a className="button" href="#contact">Tell us what you need ?</a>
      </div>
    </div>
    </section>
    <section className="screen faq" id="faq" aria-labelledby="faq-title">
    <div className="wrap">
      <h2 id="faq-title">A few common<em>questions.</em>
    </h2>
    <div className="questions">
      <details>
        <summary>Can we start with just an idea?</summary>
        <p>Yes. Share the problem, who it affects, and what you want users to be able to do. We can discuss what belongs in the first version.</p>
      </details>
      <details>
        <summary>Can you add AI to an existing product?</summary>
        <p>Yes. Tell us how the product works today and where you'd like AI to help so we can discuss what the integration would involve.</p>
      </details>
      <details>
        <summary>What should I include in a project enquiry?</summary>
        <p>Send a short brief with your goal, any examples you like, and your target timeline. Include a budget range if you have one.</p>
      </details>
    </div>
    </div>
    </section>
    <section className="screen contact" id="contact" aria-labelledby="contact-title">
    <div className="wrap">
    <h2 id="contact-title">What do you<em>want to build?</em>
    </h2>
    <p className="lede">Tell us what you have in mind and what you'd like the first version to do.</p>
    <div className="actions">
    <a className="button" href="mailto:hello@aitoyz.in?subject=Aitoyz%20project%20enquiry">Email hello@aitoyz.in ?</a>
    <a className="button light" href="https://www.linkedin.com/in/aryan686/">Contact on LinkedIn ?</a>
    </div>
    </div>
    <footer className="footer">
    <a className="brand" href="#home">
    <span className="mark" aria-hidden="true">?</span>Aitoyz</a>
    <div className="footerlinks">
      <a href="#builds">Builds</a>
      <a href="#home">Back to top </a>
    </div>
    </footer>
    </section>
    </main>
    </div>
  );
}
