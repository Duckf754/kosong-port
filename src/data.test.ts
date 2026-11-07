import { describe, expect, it } from "vitest";
import {
  cartTotal,
  changeQuantity,
  consultationMessage,
  demos,
  orderMessage,
  whatsappLink,
} from "./data";

describe("cart and WhatsApp formatting", () => {
  it("adds, increments, decrements, and removes without mutating the input", () => {
    const item = demos.dapur.menu[0];
    const first = changeQuantity([], item, 1);
    const second = changeQuantity(first, item, 1);
    expect(first[0].qty).toBe(1);
    expect(cartTotal(second)).toBe(90000);
    expect(changeQuantity(second, item, -1)[0].qty).toBe(1);
    expect(changeQuantity(first, item, -1)).toEqual([]);
    expect(changeQuantity([], item, -1)).toEqual([]);
  });
  it("formats and encodes special characters as text, not markup", () => {
    const message = consultationMessage(
      " Budi & Rina ",
      "Kopi #1",
      "Landing Page",
      "<script>alert(1)</script>",
    );
    const url = new URL(whatsappLink(message, "6281199988877")!);
    expect(url.searchParams.get("text")).toBe(message);
    expect(message).toContain("*Budi & Rina* dari *Kopi #1*");
    expect(message).toContain('Catatan: "<script>alert(1)</script>"');
  });
  it("uses sensible defaults for empty or whitespace-only inputs", () => {
    const message = consultationMessage("  ", "", "Menu Digital", " ");
    expect(message).toContain("*Calon Klien* dari *Bisnis Saya*");
    expect(message).toContain("konsultasi singkat?");
  });
  it("does not generate a URL without a configured number", () => {
    expect(whatsappLink("test", "")).toBeUndefined();
  });
  it("labels checkout as a simulation and totals multiple categories", () => {
    const cart = [
      { ...demos.dapur.menu[0], qty: 2 },
      { ...demos.dapur.menu[2], qty: 1 },
    ];
    const message = orderMessage(demos.dapur.title, cart);
    expect(message).toContain("*Total: Rp 98.000*");
    expect(message).toContain("bukan pesanan sungguhan");
  });
});
