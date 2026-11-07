export type DemoId = "dapur" | "kopi";
export type Category = { id: string; label: string };
export type MenuItem = {
  id: number;
  cat: string;
  name: string;
  price: number;
  desc: string;
};
export type CartItem = MenuItem & { qty: number };
export const services = [
  "Menu Digital",
  "Product Catalog",
  "Landing Page",
  "KIVO Business",
];
export const navigation = [
  { id: "services", label: "Services", mobile: "What We Do" },
  { id: "works", label: "Works", mobile: "Selected Works" },
  { id: "about", label: "About", mobile: "About Studio" },
  { id: "process", label: "Process", mobile: "How We Work" },
  { id: "contact", label: "Contact", mobile: "Contact Us" },
];
export const demos: Record<
  DemoId,
  { title: string; categories: Category[]; menu: MenuItem[] }
> = {
  dapur: {
    title: "Dapur Rasa Nusantara",
    categories: [
      { id: "makanan", label: "Makanan Utama" },
      { id: "minuman", label: "Minuman Segar" },
    ],
    menu: [
      {
        id: 1,
        cat: "makanan",
        name: "Rendang Sapi Daging Empuk",
        price: 45000,
        desc: "Daging sapi pilihan dimasak 8 jam dengan rempah khas Minang.",
      },
      {
        id: 2,
        cat: "makanan",
        name: "Ayam Goreng Lengkuas",
        price: 28000,
        desc: "Ayam bumbu kuning bertabur serundeng lengkuas gurih.",
      },
      {
        id: 3,
        cat: "minuman",
        name: "Es Teh Manis Solo",
        price: 8000,
        desc: "Seduhan teh berkualitas tinggi khas Solo.",
      },
      {
        id: 4,
        cat: "minuman",
        name: "Es Cendol Dawet Ayu",
        price: 15000,
        desc: "Cendol kenyal dengan santan segar dan gula aren murni.",
      },
    ],
  },
  kopi: {
    title: "Kopi Senja Experience",
    categories: [
      { id: "kopi", label: "Kopi" },
      { id: "pastry", label: "Pastry" },
    ],
    menu: [
      {
        id: 1,
        cat: "kopi",
        name: "Es Kopi Aren Signature",
        price: 22000,
        desc: "Espresso, gula aren, susu segar.",
      },
      {
        id: 2,
        cat: "kopi",
        name: "Manual Brew Gayo",
        price: 28000,
        desc: "Fruity notes, clean finish.",
      },
      {
        id: 3,
        cat: "pastry",
        name: "Croissant Butter",
        price: 18000,
        desc: "Pastry butter Prancis.",
      },
    ],
  },
};
export const formatRupiah = (amount: number) =>
  `Rp ${amount.toLocaleString("id-ID")}`;

// A public contact number, not a credential. Never use the attachment's example number.
const configuredNumber = (import.meta.env.VITE_WHATSAPP_NUMBER ?? "").trim();
export const whatsappNumber =
  /^[1-9]\d{7,14}$/.test(configuredNumber) &&
  configuredNumber !== "6281234567890"
    ? configuredNumber
    : "";
export const whatsappLink = (message: string, number = whatsappNumber) =>
  number
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : undefined;
export function consultationMessage(
  name: string,
  business: string,
  service: string,
  note: string,
) {
  return `Halo KIVO Digital Studio!\n\nSaya *${name.trim() || "Calon Klien"}* dari *${business.trim() || "Bisnis Saya"}*.\nSaya tertarik dengan layanan: *${service}*.\n\n${note.trim() ? `Catatan: "${note.trim()}"` : "Bisa minta informasi lebih lanjut dan konsultasi singkat?"}`;
}
export const cartTotal = (cart: CartItem[]) =>
  cart.reduce((sum, item) => sum + item.price * item.qty, 0);
export function changeQuantity(
  cart: CartItem[],
  item: MenuItem,
  delta: number,
): CartItem[] {
  const existing = cart.find((entry) => entry.id === item.id);
  if (!existing) return delta > 0 ? [...cart, { ...item, qty: delta }] : cart;
  return cart
    .map((entry) =>
      entry.id === item.id ? { ...entry, qty: entry.qty + delta } : entry,
    )
    .filter((entry) => entry.qty > 0);
}
export const orderMessage = (title: string, cart: CartItem[]) =>
  `*Simulasi Pesanan — ${title}*\n\n${cart.map((item) => `• ${item.name} x${item.qty} = ${formatRupiah(item.price * item.qty)}`).join("\n")}\n\n*Total: ${formatRupiah(cartTotal(cart))}*\n\nIni demo portofolio, bukan pesanan sungguhan.`;
