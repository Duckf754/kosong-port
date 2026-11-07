export default function Services() {
  return (
    <section id="services" className="sec-pad">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="kicker">// 01 — Services</span>
            <h2 className="sec-title">What We Do</h2>
          </div>
          <p className="sec-desc">
            Solusi digital yang dirancang untuk membantu bisnis tampil lebih
            profesional dan mudah dijangkau pelanggan.
          </p>
        </div>
        <div className="svc-grid">
          <div className="svc">
            <div className="svc-top">
              <span className="svc-num">01</span>
              <span className="svc-ico">▢</span>
            </div>
            <div>
              <h3>Menu Digital</h3>
              <p>
                Menu digital yang bikin informasi produk F&amp;B dan kafe mudah
                diakses pelanggan. Cepat, rapi, dan responsif.
              </p>
            </div>
            <div className="svc-foot">
              <span>QR Compatible</span>
              <span className="arr">→</span>
            </div>
          </div>
          <div className="svc">
            <div className="svc-top">
              <span className="svc-num">02</span>
              <span className="svc-ico">≡</span>
            </div>
            <div>
              <h3>Product Catalog</h3>
              <p>
                Katalog produk digital yang terorganisir untuk retail, fashion,
                dan kerajinan — menampilkan daftar barang dengan jelas.
              </p>
            </div>
            <div className="svc-foot">
              <span>Search &amp; Filter</span>
              <span className="arr">→</span>
            </div>
          </div>
          <div className="svc">
            <div className="svc-top">
              <span className="svc-num">03</span>
              <span className="svc-ico">◎</span>
            </div>
            <div>
              <h3>Landing Page</h3>
              <p>
                Landing page profesional yang memperkenalkan, mempromosikan, dan
                membangun kepercayaan terhadap brand bisnis Anda.
              </p>
            </div>
            <div className="svc-foot">
              <span>SEO Ready</span>
              <span className="arr">→</span>
            </div>
          </div>
          <div className="svc flag">
            <div className="svc-tag">FLAGSHIP</div>
            <div className="svc-top">
              <span className="svc-num">04</span>
              <span className="svc-ico" style={{ color: "var(--accent)" }}>
                ⚡
              </span>
            </div>
            <div>
              <h3>KIVO Business</h3>
              <p>
                Solusi terintegrasi: landing page custom, katalog produk
                dinamis, dan pemesanan instan lewat WhatsApp — dalam satu
                website.
              </p>
            </div>
            <div className="svc-foot" style={{ color: "var(--accent)" }}>
              <span>All-in-One Suite</span>
              <span className="arr">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
