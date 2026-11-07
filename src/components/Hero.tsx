export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="meta-strip">
          <div className="live">
            <i></i>INDEX — DIGITAL SOLUTIONS STUDIO
          </div>
          <div>EST. 2026 — BASED IN INDONESIA</div>
          <div className="r">
            FOCUS: <b>MENU · CATALOG · LANDING</b>
          </div>
        </div>
        <h1 id="hero-title">
          Make Your Business
          <br />
          <span className="serif">Ready for Digital.</span>
        </h1>
        <p className="lead">
          KIVO membantu bisnis membangun kehadiran digital yang lebih
          profesional, terstruktur, dan mudah diakses pelanggan.
        </p>
        <div className="cta-row">
          <a href="#works" className="btn btn-accent">
            Explore Our Work →
          </a>
          <a href="#contact" className="btn btn-line">
            Let's Talk ↗
          </a>
        </div>
      </div>
    </section>
  );
}
