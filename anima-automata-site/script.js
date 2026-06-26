const saved = localStorage.getItem("anima-lang");
if (saved) document.body.dataset.lang = saved;
document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    document.body.dataset.lang = button.dataset.lang;
    localStorage.setItem("anima-lang", button.dataset.lang);
  });
});
