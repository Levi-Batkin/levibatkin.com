(() => {
  const links = window.LEVI_LINKS || {};
  document.querySelectorAll("[data-link]").forEach(a => {
    const url = links[a.dataset.link];
    if (url) a.href = url;
    else { a.removeAttribute("href"); a.classList.add("link-pending"); a.setAttribute("aria-label", a.textContent.trim() + " link to be configured"); }
  });

  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false");
  }));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    });
  }, {threshold: .12});
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  const bar = document.getElementById("progressBar");
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (max > 0 ? scrollY / max * 100 : 0) + "%";
  };
  addEventListener("scroll", updateProgress, {passive:true});
  updateProgress();
  document.getElementById("year").textContent = new Date().getFullYear();
})();