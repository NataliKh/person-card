const LS_KEY = "favorite-members";
const getFavs = () => {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || "[]"); }
  catch { return []; }
};
const setFavs = (ids) => localStorage.setItem(LS_KEY, JSON.stringify(ids));
const toggleFav = (id) => {
  const favs = new Set(getFavs());
  favs.has(id) ? favs.delete(id) : favs.add(id);
  setFavs([...favs]);
};

function initHearts() {
  document.querySelectorAll(".fav-btn[data-id]").forEach((btn) => {
    const id = btn.dataset.id;
    const active = getFavs().includes(id);
    btn.classList.toggle("active", active);
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); e.preventDefault();
      toggleFav(id);
      btn.classList.toggle("active");
      if (document.body.dataset.page === "favorites") filterFavorites();
    });
  });
}

function initCardLinks() {
  document.querySelectorAll(".card[data-href]").forEach((el) => {
    el.addEventListener("click", () => { location.href = el.dataset.href; });
  });
}

function filterFavorites() {
  const favs = new Set(getFavs());
  document.querySelectorAll(".card[data-id]").forEach((card) => {
    card.style.display = favs.has(card.dataset.id) ? "" : "none";
  });
  const empty = document.getElementById("emptyFavs");
  if (empty) empty.style.display = favs.size ? "none" : "";
}

function initSliders() {
  document.querySelectorAll(".slider").forEach((root) => {
    const track = root.querySelector(".track");
    const prev = root.querySelector(".prev");
    const next = root.querySelector(".next");
    if (!track || !prev || !next) return;
    const step = () => Math.min(track.clientWidth * 0.85, 600);
    prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
    next.addEventListener("click", () => track.scrollBy({ left: +step(), behavior: "smooth" }));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHearts();
  initCardLinks();
  initSliders();
  if (document.body.dataset.page === "favorites") filterFavorites();
});
