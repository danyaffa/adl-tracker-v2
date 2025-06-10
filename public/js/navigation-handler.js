// js/navigation-handler.js
function loadPage(pageFile) {
  const app = document.getElementById('app');
  fetch(`pages/${pageFile}`)
    .then(res => res.text())
    .then(html => {
      app.innerHTML = html;
    });
}
