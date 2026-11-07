import CloseIcon from "./CloseIcon";
import { useEffect, useRef, useState } from "react";
import { navigation } from "../data";

export default function Header() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 40);
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const background = [
      ...document.querySelectorAll<HTMLElement>("main, footer"),
    ];
    background.forEach((element) => {
      element.inert = true;
    });
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key !== "Tab") return;
      const controls = [
        ...header.current!.querySelectorAll<HTMLElement>("a, button"),
      ].filter((el) => el.getClientRects().length);
      const first = controls[0],
        last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", keydown);
    return () => {
      document.body.style.overflow = overflow;
      background.forEach((element) => {
        element.inert = false;
      });
      document.removeEventListener("keydown", keydown);
    };
  }, [open]);
  return (
    <header
      ref={header}
      id="nav"
      className={`${scrolled ? "scrolled" : ""}${open ? " menu-open" : ""}`}
    >
      <div className="nav-in">
        <a
          className="brand"
          href="#top"
          aria-label="KIVO Studio — kembali ke atas"
          onClick={() => setOpen(false)}
        >
          <svg
            className="mark"
            viewBox="0 0 500 500"
            fill="none"
            aria-hidden="true"
          >
            <g
              stroke="#FF6B1A"
              strokeWidth="34"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <path d="M110 80V420" />
              <path d="M110 250L250 90H320" />
              <path d="M110 250L330 420" />
              <path d="M230 220L320 420L410 180" />
            </g>
          </svg>
          <div>
            <div className="brand-name">KIVO</div>
            <div className="brand-sub">STUDIO</div>
          </div>
        </a>
        <nav className="nav-links" aria-label="Navigasi utama">
          {navigation.slice(0, 4).map((item, index) => (
            <a key={item.id} href={`#${item.id}`}>
              <b>0{index + 1}</b>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <div className="status">
            <i />
            OPEN FOR PROJECTS
          </div>
          <a className="btn btn-accent" href="#contact">
            Let's Talk →
          </a>
        </div>
        <button
          ref={toggle}
          className="burger"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : "≡"}
        </button>
      </div>
      {open && (
        <div className="m-menu open" id="mobile-menu">
          <nav aria-label="Navigasi mobile">
            {navigation.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  setOpen(false);
                  toggle.current?.focus();
                }}
              >
                <b>0{index + 1}</b>
                {item.mobile}
                <span>→</span>
              </a>
            ))}
          </nav>
          <div className="mono">
            <p>Bikin bisnis lebih gampang online.</p>
            <p>@kivo.digital · Open for projects</p>
          </div>
        </div>
      )}
    </header>
  );
}
