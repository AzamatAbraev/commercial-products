const menuColumn = document.querySelector(".nav__column");

const menu = [
  {
    name: "Молоко, сыр, яйцо",
  },
  {
    name: "Напитки",
  },
  {
    name: "Бакалея",
  },
  {
    name: "Непродовольственные товары",
  },
  {
    name: "Хлеб",
  },
  {
    name: "Кондитерские изделия",
  },
  {
    name: "Здоровое питание",
  },
  {
    name: "Детское питание",
  },
  {
    name: "Фрукты и овощи",
  },
  {
    name: "Чай, кофе",
  },
  {
    name: "Зоотовары",
  },
  {
    name: "Мясо, птица, колбаса",
  },
  {
    name: "Замороженные продукты",
  },
];

function getLinks(el) {
  let menuLink = document.createElement("a");
  menuLink.className = "nav__link";
  menuLink.setAttribute("href", "./product.html");
  menuLink.innerHTML = el.name;
  return menuLink;
}

menu.map((el) => {
  let column = getLinks(el);
  menuColumn.append(column);
});

const subHeader = document.querySelector(".sub__header");

function toggle() {
  subHeader.classList.toggle("hidden");
}

let navBtn = document.querySelector(".nav__categories__btn");
let footerBtn = document.querySelector(".footer__btn");

navBtn.addEventListener("click", toggle);
footerBtn.addEventListener("click", toggle);

