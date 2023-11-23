import { linksArray } from "./data.js";

const app = document.getElementById("app");

const renderNav = () => {
  app.innerHTML += `<div id="navWrapper">
    <a id="school-and-logo-link-wrap" href="/home.html">
    <div id="logo-and-school-container">
        <div id="school-logo-container">
          <img src="./images/school_logo.png" />
        </div>
        <p id="school-name">Raccoon City School District</p>
      </div>
    </a>
    <ul id="vertical-menu">
    ${linksArray
      .map((link) => `
    <li><button id="${link.url}Link" class="btn btn-link navbar-link-item">${link.name}</button></li>`).join(" ")}
    </ul>
    </div>
  <div class="separator">
  </div>`;
};

export {renderNav}

