const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "./been_portfolio/pages/404.html",
  "/": "./been_portfolio/pages/home.html",
  "/profile": "./been_portfolio/pages/profile.html",
  "/works": "./been_portfolio/pages/works.html",
  "/contact": "./been_portfolio/pages/contact.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
