// public/js/navigation-handler.js
document.addEventListener("click", function (e) {
  const target = e.target.closest("[data-load]");
  if (target) {
    const page = target.getAttribute("data-load");
    fetch("pages/" + page)
      .then((res) => res.text())
      .then((html) => {
        document.getElementById("app").innerHTML = html;
      });
  }
});
