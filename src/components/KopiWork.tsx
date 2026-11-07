import type { DemoId } from "../data";

export default function KopiWork({ onOpen }: { onOpen: (id: DemoId) => void }) {
  return (
    <article className="work" data-cats="fnb concept">
      <div className="work-vis">
        <div className="phone">
          <div className="phone-head">
            <span>KOPI SENJA</span>
            <span>09:41</span>
          </div>
          <div className="p-item">
            <div>
              <b>Es Kopi Aren Signature</b>
              <small>Espresso, gula aren, susu segar</small>
            </div>
            <span className="pr">22K</span>
          </div>
          <div className="p-item">
            <div>
              <b>Manual Brew Gayo</b>
              <small>Fruity notes, clean finish</small>
            </div>
            <span className="pr">28K</span>
          </div>
          <div className="p-item">
            <div>
              <b>Croissant Butter</b>
              <small>Pastry butter Prancis</small>
            </div>
            <span className="pr">18K</span>
          </div>
        </div>
      </div>
      <div className="work-info">
        <div>
          <div className="work-meta">
            <span className="chip-dim">Concept Demo</span>
            <span className="chip-dim">Web Design / Digital Menu</span>
          </div>
          <h3>Kopi Senja Experience</h3>
          <p>
            Konsep pengalaman digital modern untuk coffee shop dan kafe artisan:
            menggantikan menu kertas dengan scan QR dan navigasi kategori
            instan.
          </p>
          <ul className="feat">
            <li>Akses mobile instan via QR</li>
            <li>Filter berdasarkan biji &amp; tasting notes</li>
          </ul>
        </div>
        <button className="link-arrow" onClick={() => onOpen("kopi")}>
          View Menu Demo →
        </button>
      </div>
    </article>
  );
}
