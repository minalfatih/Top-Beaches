// create elements to index.html file without modify it

let header = document.querySelector("header");
let nav = document.createElement("nav");
nav.className = "nav";
header.appendChild(nav);
let navbar = document.createElement("ul");
navbar.className = "navbar";
nav.appendChild(navbar);
let arrLink = ["Home", "Book", "Login"];

let item = [];
for (let i = 0; i < arrLink.length; i++) {
  let navItem = document.createElement("li");
  navItem.className = "nav-item";
  let navLink = document.createElement("a");
  navLink.href = "#";
  navLink.className = "nav-link";
  navLink.textContent = arrLink[i];
  navItem.appendChild(navLink);
  item.push(navItem);
}
item.forEach((item) => {
  navbar.appendChild(item);
});

let head = document.querySelector("h1");
let remove = document.createElement("div");
let removeIcon = document.createElement("i");
removeIcon.className = "fa-solid fa-remove";
remove.appendChild(removeIcon);
head.appendChild(remove);
remove.onclick = function () {
  this.parentElement.remove();
};
window.onload = function () {
  setTimeout(function () {
    head.classList.add("active");
  }, 1000);
};

let box = Array.from(document.querySelectorAll("section ul li"));
let img = [
  "Whitehaven_Beach",
  "Grace_Bay",
  "Baia_do_Sancho",
  "Navagio_Beach",
  "Playa_Paraiso",
  "Anse_Source",
  "Seven_Mile_Beach",
  "Bora_Bora",
  "Lanikai_Beach",
  "Pink_Sands_Beach",
];

for (let i = 0; i < box.length; i++) {
  box[i].style.cssText = `background-image: url(./images/${img[i]}.jpg);`;
  let span = document.createElement("span");
  span.textContent = "5";
  let iconStar = document.createElement("i");
  iconStar.className = "fa-solid fa-star";
  span.appendChild(iconStar);
  box[i].appendChild(span);
}

let info = Array.from(document.querySelectorAll("h3"));
info.forEach((info) => {
  let iconLocation = document.createElement("i");
  iconLocation.className = "fa-solid fa-location-dot";
  info.appendChild(iconLocation);
});
