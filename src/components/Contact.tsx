import { useState } from "react";
import { consultationMessage, services, whatsappLink } from "../data";

export default function Contact() {
  const [service, setService] = useState(services[0]);
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [note, setNote] = useState("");
  const href = whatsappLink(consultationMessage(name, business, service, note));
  return (
    <section id="contact" className="sec-pad">
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <span className="kicker">// 05 — Get in Touch</span>
            <h2>Have a Business to Bring Online?</h2>
            <p className="body">
              Mulai konsultasi gratis mengenai kebutuhan Menu Digital, Catalog,
              atau Website Anda. Tanpa komitmen.
            </p>
            <div className="c-lines">
              <div>
                <i>IG</i>@kivo.digital
              </div>
              <div>
                <i>WA</i>Respon &lt; 1 jam di jam kerja
              </div>
              <div>
                <i>LOC</i>Indonesia — remote friendly
              </div>
            </div>
          </div>
          <div className="builder">
            <h3>Start a Conversation</h3>
            <p className="hint">
              Pilih kebutuhan layanan — kami buatkan format pesan WhatsApp
              instan:
            </p>
            <div className="fld">
              <span className="kicker" id="service-label">
                Pilih Layanan
              </span>
              <div
                className="pill-grid"
                role="group"
                aria-labelledby="service-label"
              >
                {services.map((item) => (
                  <button
                    key={item}
                    className={`pill${service === item ? " on" : ""}`}
                    aria-pressed={service === item}
                    onClick={() => setService(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="fld in-row">
              <div>
                <label htmlFor="contact-name">Nama Anda</label>
                <input
                  id="contact-name"
                  autoComplete="name"
                  placeholder="Contoh: Budi"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="contact-business">Nama Bisnis / Brand</label>
                <input
                  id="contact-business"
                  autoComplete="organization"
                  placeholder="Contoh: Kopi Harapan"
                  value={business}
                  onChange={(event) => setBusiness(event.target.value)}
                />
              </div>
            </div>
            <div className="fld">
              <label htmlFor="contact-note">Catatan Tambahan (Opsional)</label>
              <textarea
                id="contact-note"
                placeholder="Tuliskan pertanyaan atau detail singkat bisnis Anda..."
                value={note}
                onChange={(event) => setNote(event.target.value)}
              />
            </div>
            {href ? (
              <a
                className="btn btn-accent wa-btn"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                ➤ Kirim via WhatsApp
              </a>
            ) : (
              <>
                <button
                  className="btn btn-accent wa-btn"
                  disabled
                  aria-describedby="wa-config"
                >
                  ➤ Kirim via WhatsApp
                </button>
                <p className="config-hint" id="wa-config">
                  WhatsApp belum diaktifkan. Nomor kontak studio perlu
                  dikonfigurasi sebelum pesan dapat dikirim.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
