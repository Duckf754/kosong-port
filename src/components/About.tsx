export default function About() {
  return (
    <section id="about" className="sec-pad">
      <div className="wrap">
        <span className="kicker">// 03 — About Studio</span>
        <div className="about-grid" style={{ marginTop: "20px" }}>
          <div>
            <h2>
              Small Studio.
              <br />
              <span className="serif">Thoughtful Digital Solutions.</span>
            </h2>
            <p className="body">
              KIVO adalah digital solutions studio yang berfokus membantu UMKM
              dan bisnis lokal berkembang melalui solusi digital yang praktis,
              fungsional, dan dirancang dengan perhatian terhadap detail.
            </p>
            <blockquote>
              "Pengalaman digital yang baik tidak harus rumit — harus memudahkan
              bisnis ditemukan, dipahami, dan dihubungi."
            </blockquote>
          </div>
          <div>
            <div className="panel">
              <h4>Our Philosophy</h4>
              <p>
                UMKM tidak membutuhkan website yang rumit atau berlebihan. Yang
                dibutuhkan adalah solusi jernih yang mempercepat transaksi dan
                membangun rasa percaya.
              </p>
            </div>
            <div className="panel">
              <h4>Core Technical Stack</h4>
              <div className="stack">
                <span>React</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
                <span>WhatsApp Commerce</span>
                <span>Mobile-First</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
