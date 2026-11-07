import type { DemoId } from "../data";

export default function DapurWork({
  onOpen,
}: {
  onOpen: (id: DemoId) => void;
}) {
  return (
    <article className="work" data-cats="fnb catalog">
      <div className="work-vis">
        <div className="frame">
          <div className="frame-bar">
            <div className="dots">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <span>dapurrasanusantara.com</span>
            <div style={{ width: "20px" }}></div>
          </div>
          <div className="frame-body">
            <div className="frame-head">
              <div>
                <small>Kuliner Indonesia</small>
                <h4>Dapur Rasa Nusantara</h4>
              </div>
              <span className="badge-live">LIVE</span>
            </div>
            <div className="menu-grid">
              <div className="menu-item">
                <div className="ph">Rendang</div>
                <b>Rendang Padang</b>
                <span>Rp 45.000</span>
              </div>
              <div className="menu-item">
                <div className="ph">Sate</div>
                <b>Sate Madura</b>
                <span>Rp 30.000</span>
              </div>
            </div>
            <div className="frame-cta">Order via WhatsApp →</div>
          </div>
        </div>
      </div>
      <div className="work-info">
        <div>
          <div className="work-meta">
            <span className="chip-live">Live Client Work</span>
            <span className="chip-dim">Website / Digital Catalog</span>
          </div>
          <h3>Dapur Rasa Nusantara</h3>
          <p>
            Platform digital lengkap untuk bisnis kuliner otentik: katalog menu
            dinamis, keranjang belanja interaktif, dan format pesanan WhatsApp
            otomatis.
          </p>
          <ul className="feat">
            <li>Katalog produk dengan tab kategori</li>
            <li>Keranjang belanja interaktif</li>
            <li>Checkout langsung via WhatsApp</li>
          </ul>
        </div>
        <button className="link-arrow" onClick={() => onOpen("dapur")}>
          Test Interactive Demo →
        </button>
      </div>
    </article>
  );
}
