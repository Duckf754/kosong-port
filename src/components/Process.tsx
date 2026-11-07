export default function Process() {
  return (
    <section
      id="process"
      className="sec-pad"
      style={{ background: "var(--bg-deep)" }}
    >
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="kicker">// 04 — Workflow</span>
            <h2 className="sec-title">How We Work</h2>
          </div>
        </div>
        <div className="proc">
          <div className="step">
            <b>01</b>
            <h3>Discover</h3>
            <p>
              Memahami bisnis, target audiens, struktur menu/katalog, dan tujuan
              utama website.
            </p>
            <small>Output: Brief &amp; Sitemap</small>
          </div>
          <div className="step">
            <b>02</b>
            <h3>Design</h3>
            <p>
              Mengembangkan identitas visual, pengalaman pengguna, tipografi,
              dan layout responsif.
            </p>
            <small>Output: Design Preview</small>
          </div>
          <div className="step">
            <b>03</b>
            <h3>Build</h3>
            <p>
              Mengubah desain yang disetujui menjadi kode yang cepat dan
              fungsional, terintegrasi link order WhatsApp.
            </p>
            <small>Output: Production Code</small>
          </div>
          <div className="step">
            <b>04</b>
            <h3>Deliver</h3>
            <p>
              Review, optimasi performa, deploy online, dan panduan pengelolaan
              katalog untuk klien.
            </p>
            <small>Output: Live Launch &amp; Support</small>
          </div>
        </div>
      </div>
    </section>
  );
}
