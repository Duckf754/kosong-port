import { useEffect, useRef, useState } from "react";
import {
  cartTotal,
  changeQuantity,
  demos,
  formatRupiah,
  orderMessage,
  whatsappLink,
} from "../data";
import type { CartItem, DemoId } from "../data";

export default function DemoModal({
  demoId,
  onClose,
}: {
  demoId: DemoId;
  onClose: () => void;
}) {
  const demo = demos[demoId];
  const [category, setCategory] = useState(demo.categories[0].id);
  const [cart, setCart] = useState<CartItem[]>([]);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current!;
    const overflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = overflow;
      previousFocus?.focus();
    };
  }, []);
  const href = whatsappLink(orderMessage(demo.title, cart));
  return (
    <dialog
      ref={dialog}
      className="modal"
      aria-labelledby="demo-title"
      aria-describedby="demo-notice"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal-box">
        <div className="modal-bar">
          <b id="demo-title">
            <i />
            Interactive Demo — {demo.title}
          </b>
          <button aria-label="Tutup demo" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="modal-body">
          <div>
            <div className="cat-tabs" role="group" aria-label="Kategori menu">
              {demo.categories.map((item) => (
                <button
                  key={item.id}
                  className={category === item.id ? "on" : ""}
                  aria-pressed={category === item.id}
                  onClick={() => setCategory(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div>
              {demo.menu
                .filter((item) => item.cat === category)
                .map((item) => (
                  <div className="d-item" key={item.id}>
                    <div>
                      <b>{item.name}</b>
                      <p>{item.desc}</p>
                      <span className="pr">{formatRupiah(item.price)}</span>
                    </div>
                    <button
                      aria-label={`Tambah ${item.name}`}
                      onClick={() =>
                        setCart((current) => changeQuantity(current, item, 1))
                      }
                    >
                      + Tambah
                    </button>
                  </div>
                ))}
            </div>
            <p className="config-hint" id="demo-notice">
              Simulasi portofolio, bukan pemesanan sungguhan. Pesan demo dikirim
              ke studio, bukan restoran.
            </p>
          </div>
          <div className="cart">
            <h5>Simulasi Keranjang</h5>
            <div aria-live="polite">
              {cart.length ? (
                cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <div>
                      <b>{item.name}</b>
                      <span className="sub">
                        {formatRupiah(item.price * item.qty)}
                      </span>
                    </div>
                    <div className="qty">
                      <button
                        aria-label={`Kurangi ${item.name}`}
                        onClick={() =>
                          setCart((current) =>
                            changeQuantity(current, item, -1),
                          )
                        }
                      >
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button
                        aria-label={`Tambah jumlah ${item.name}`}
                        onClick={() =>
                          setCart((current) => changeQuantity(current, item, 1))
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="cart-empty">
                  Keranjang kosong.
                  <br />
                  Tambahkan menu di sebelah kiri.
                </p>
              )}
            </div>
            <div className="cart-total" aria-live="polite">
              <span>Total Bayar</span>
              <b>{formatRupiah(cartTotal(cart))}</b>
            </div>
            {cart.length > 0 && href ? (
              <a href={href} target="_blank" rel="noopener noreferrer">
                ➤ Checkout Demo via WhatsApp
              </a>
            ) : (
              <button disabled>
                {cart.length
                  ? "WhatsApp Belum Dikonfigurasi"
                  : "Pilih Menu Dahulu"}
              </button>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
}
