import Navigo from "navigo";
import Mustache from "mustache";
import "bootstrap/scss/bootstrap.scss";
import "rbli-bootstrap/scss/rbli.scss";
import "~src/scss/app.scss";

const nav = `
<header class="pb-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
        <span class="fs-4">Jumbotron example</span>
      </a>
    </header>
        <ul>
          <li><a href="/" data-navigo>Home</a></li>
          <li><a href="/about" data-navigo>About navigo</a></li>
          <li><a href="/links" data-navigo>Links</a></li>
        </ul>
      `;

      const HomeView = `
      ${nav}
      {{title}} is an {{role}}
            `;
 
function renderHome() {
  var view = {
    title: "Joe",
    role: "Administrator"
  };
  var output = Mustache.render(HomeView, view);
  document.getElementById('app').innerHTML = output; 
}

function renderAboutPage() {
  document.getElementById("app").innerHTML = `
    <h1>About</h1>
    <hr />
    ${nav}
  `;
}

function renderLinksPage() {
  document.getElementById("app").innerHTML = `
    <h1>Links</h1>
    <hr />
    ${nav}
  `;
}

const router = new Navigo("/");

router
  .on("/about", renderAboutPage)
  .on("/links", renderLinksPage)
  .on("*", renderHome)
  .resolve();