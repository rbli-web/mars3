import Navigo from "navigo";
import Mustache from "mustache";
import 'bootstrap/scss/bootstrap.scss';

const nav = `
        <ul>
          <li><a href="/" data-navigo>Home</a></li>
          <li><a href="/about" data-navigo>About navigo</a></li>
          <li><a href="/links" data-navigo>Links</a></li>
        </ul>
      `;
 
function renderHello() {
        fetch('mustache/home.mst')
        .then(response => response.text())
        .then(template => {
            Mustache.parse(template);
            var output = Mustache.render(template, {name: 'Cameron'});
            return document.getElementById('app').innerHTML = output;
        }).catch(error => console.log('Unable to get the template: ', error.message));
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
  .on("*", renderHello)
  .resolve();