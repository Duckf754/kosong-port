export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div>
            <div className="brand">
              <svg className="mark" viewBox="0 0 500 500" fill="none">
                <g stroke="#FF6B1A" strokeWidth="34" strokeLinecap="square">
                  <path d="M 110,80 L 110,420" />
                  <path d="M 110,250 L 250,90 L 320,90" />
                  <path d="M 110,250 L 330,420" />
                  <path d="M 230,220 L 320,420 L 410,180" />
                </g>
              </svg>
              <div>
                <div className="brand-name">KIVO</div>
                <div className="brand-sub">STUDIO</div>
              </div>
            </div>
            <p>Bikin bisnis lebih gampang online.</p>
          </div>
          <div className="foot-links">
            <a href="#services">Services</a>
            <a href="#works">Works</a>
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="foot-bot">
          <span>© 2026 KIVO Digital Studio. All rights reserved.</span>
          <span>Design &amp; Code by KIVO</span>
        </div>
      </div>
    </footer>
  );
}
