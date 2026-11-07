import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

// Tests intentionally leave the public contact number unset.
describe("KIVO portfolio", () => {
  it("renders every supplied section and filters the portfolio", async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Make Your Business",
    );
    for (const id of ["services", "works", "about", "process", "contact"])
      expect(document.getElementById(id)).toBeInTheDocument();
    const results = document.getElementById("portfolio-results")!;
    expect(results.querySelectorAll("article")).toHaveLength(2);
    await user.click(screen.getByRole("button", { name: "Catalog" }));
    expect(results.querySelectorAll("article")).toHaveLength(1);
    expect(
      within(results).getByRole("heading", {
        name: "Dapur Rasa Nusantara",
        level: 3,
      }),
    ).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Concept" }));
    expect(
      within(results).getByRole("heading", { name: "Kopi Senja Experience" }),
    ).toBeInTheDocument();
    expect(
      within(results).queryByRole("heading", {
        name: "Dapur Rasa Nusantara",
        level: 3,
      }),
    ).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "F&B" }));
    expect(results.querySelectorAll("article")).toHaveLength(2);
    await user.click(screen.getByRole("button", { name: "All Works" }));
    expect(results.querySelectorAll("article")).toHaveLength(2);
  });
  it("supports categories, cart quantities, removal, and dialog reset", async () => {
    const user = userEvent.setup();
    render(<App />);
    const opener = screen.getByRole("button", {
      name: "Test Interactive Demo →",
    });
    await user.click(opener);
    const dialog = screen.getByRole("dialog");
    expect(document.body.style.overflow).toBe("hidden");
    await user.click(
      within(dialog).getByRole("button", {
        name: "Tambah Rendang Sapi Daging Empuk",
      }),
    );
    await user.click(
      within(dialog).getByRole("button", {
        name: "Tambah jumlah Rendang Sapi Daging Empuk",
      }),
    );
    expect(within(dialog).getAllByText("Rp 90.000")).toHaveLength(2);
    await user.click(
      within(dialog).getByRole("button", { name: "Minuman Segar" }),
    );
    await user.click(
      within(dialog).getByRole("button", { name: "Tambah Es Teh Manis Solo" }),
    );
    expect(within(dialog).getByText("Rp 98.000")).toBeInTheDocument();
    await user.click(
      within(dialog).getByRole("button", { name: "Kurangi Es Teh Manis Solo" }),
    );
    expect(
      within(dialog).queryByRole("button", {
        name: "Kurangi Es Teh Manis Solo",
      }),
    ).not.toBeInTheDocument();
    await user.click(
      within(dialog).getByRole("button", { name: "Tutup demo" }),
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("");
    expect(opener).toHaveFocus();
    await user.click(opener);
    expect(screen.getByText(/Keranjang kosong\./)).toBeInTheDocument();
  });
  it("shows the coffee demo, not the restaurant menu, and closes on cancel/backdrop", async () => {
    const user = userEvent.setup();
    render(<App />);
    const opener = screen.getByRole("button", { name: "View Menu Demo →" });
    await user.click(opener);
    let dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAccessibleName(
      "Interactive Demo — Kopi Senja Experience",
    );
    expect(
      within(dialog).queryByText("Rendang Sapi Daging Empuk"),
    ).not.toBeInTheDocument();
    await user.click(within(dialog).getByRole("button", { name: "Pastry" }));
    await user.click(
      within(dialog).getByRole("button", { name: "Tambah Croissant Butter" }),
    );
    expect(within(dialog).getAllByText("Rp 18.000")).toHaveLength(3);
    fireEvent(dialog, new Event("cancel", { bubbles: true, cancelable: true }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    await user.click(opener);
    dialog = screen.getByRole("dialog");
    await user.click(dialog);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
  it("updates contact service and inputs but never sends to a placeholder", async () => {
    const user = userEvent.setup();
    render(<App />);
    const services = screen.getByRole("group", { name: "Pilih Layanan" });
    await user.click(
      within(services).getByRole("button", { name: "KIVO Business" }),
    );
    expect(
      within(services).getByRole("button", { name: "KIVO Business" }),
    ).toHaveAttribute("aria-pressed", "true");
    await user.type(screen.getByLabelText("Nama Anda"), "Budi");
    await user.type(
      screen.getByLabelText("Nama Bisnis / Brand"),
      "Kopi Harapan",
    );
    await user.type(
      screen.getByLabelText("Catatan Tambahan (Opsional)"),
      "Butuh katalog",
    );
    expect(
      screen.getByRole("button", { name: "➤ Kirim via WhatsApp" }),
    ).toBeDisabled();
    expect(
      document.querySelector('a[href*="6281234567890"]'),
    ).not.toBeInTheDocument();
  });
  it("closes mobile navigation on section selection and Escape", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole("button", { name: "Buka menu" }));
    expect(screen.getByRole("button", { name: "Tutup menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(document.body.style.overflow).toBe("hidden");
    await user.click(
      within(
        screen.getByRole("navigation", { name: "Navigasi mobile" }),
      ).getByRole("link", { name: /Selected Works/ }),
    );
    expect(
      screen.queryByRole("navigation", { name: "Navigasi mobile" }),
    ).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Buka menu" }));
    await user.keyboard("{Escape}");
    expect(
      screen.queryByRole("navigation", { name: "Navigasi mobile" }),
    ).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("");
  });
});
