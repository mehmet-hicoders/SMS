import { linksArray } from "./data.js";

const app = document.getElementById("app");

const renderNav = () => {
  app.innerHTML += `<nav class="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
  <div id="name-logo-wrapper">
      <a class="navbar-brand" href="/home.html">
          <img src="./images/school_logo.png" alt="School Logo">
          Raccoon City School District
      </a>
  </div>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
      <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
          ${linksArray.map(link => `
              <li class="nav-item">
                  <button id="${link.url}" class="btn btn-link custom-button ${link.status}">${link.name}</button>
              </li>
          `).join("")}
      </div>
  </div>
</nav>
`;
};

export { renderNav };
