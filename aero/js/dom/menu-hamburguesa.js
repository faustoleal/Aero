const d = document;

export default function hamburgerMenu(menuBtn, navMenu) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`)) {
      d.querySelector(navMenu).classList.toggle("nav-menu_visible");
    }
  });
}
