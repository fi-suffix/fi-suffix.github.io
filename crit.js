// Smooth scroll untuk navigasi
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Validasi form kontak
document.querySelector("form")?.addEventListener("submit", function (e) {
  const pesan = document.getElementById("pesan");
  if (pesan.value.length < 20 || pesan.value.length > 1000) {
    alert("Pesan minimal 20 karakter dan maksimal 1000 karakter!");
    pesan.focus();
    e.preventDefault();
    return false;
  }
  alert("Terima kasih! Pesan Anda telah terkirim.");
});
