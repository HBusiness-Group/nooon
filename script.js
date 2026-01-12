(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menu mobile
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // WhatsApp NOOON
  const WHATS_NUMBER = "5584987885959";
  const DEFAULT_MSG = "Olá! Quero conhecer a maquininha e a conta digital da NOOON.";

  const ctaWhats = document.getElementById("ctaWhats");
  if (ctaWhats) {
    ctaWhats.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(
        `https://wa.me/${encodeURIComponent(WHATS_NUMBER)}?text=${encodeURIComponent(DEFAULT_MSG)}`,
        "_blank",
        "noopener,noreferrer"
      );
    });
  }

  // Form -> WhatsApp
  const form = document.getElementById("leadForm");
  const toast = document.getElementById("toast");

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.style.display = "block";
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => (toast.style.display = "none"), 3500);
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);

      const nome = String(data.get("nome") || "").trim();
      const whatsapp = String(data.get("whatsapp") || "").trim();
      const negocio = String(data.get("negocio") || "").trim();

      const msg =
        `Olá! Meu nome é ${nome}. Meu WhatsApp é ${whatsapp}. ` +
        `Meu negócio: ${negocio}. Quero a maquininha e a conta digital da NOOON.`;

      showToast("Perfeito! Abrindo WhatsApp…");
      window.open(
        `https://wa.me/${encodeURIComponent(WHATS_NUMBER)}?text=${encodeURIComponent(msg)}`,
        "_blank",
        "noopener,noreferrer"
      );
      form.reset();
    });
  }

  // FAQ: apenas um aberto
  const faq = document.getElementById("faq");
  if (faq) {
    const items = Array.from(faq.querySelectorAll("details"));
    items.forEach((d) => {
      d.addEventListener("toggle", () => {
        if (d.open) items.forEach((o) => (o !== d ? (o.open = false) : null));
      });
    });
  }
})();
