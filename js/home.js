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
  menuLink.setAttribute("href", "pages/product.html");
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

// Discounts Section //

const discountsRow = document.querySelector(".discounts__row");

function getDiscountCard({images, discount, price, name, description, id}) {
  return `
    <div class="discounts__card">
      <a href="pages/product.html">
        <div class="discounts__card__pic">
            <img
              class="discounts__card__img"
              src="${images[0]}"
              alt="Product 1"
            />
            <div class="discounts__card__percent">
              <p>-${discount}%</p>
            </div>
            <button class="discounts__card__favourite__btn">
              <img src="images/home/heart-icon.svg" alt="Heart" />
            </button>
        </div>
      </a>
      <div class="discounts__card__info">
        <div class="discounts__card__payment">
          <div class="discounts__card__credit">
            <h4>${price} ₽</h4>
            <p>C картой</p>
          </div>
          <div class="discounts__card__cash">
            <h3>${price + 6} ₽</h3>
            <p>Обычная</p>
          </div>
      </div>
        <p class="discounts__card__desc card__1">
          ${name}
        </p>
        <p class="discounts__card__desc card__1">
          ${description}
        </p>
      <div class="discounts__card__rating">
        <img src="images/home/star.svg" alt="Star" />
        <img src="images/home/star.svg" alt="Star" />
        <img src="images/home/start-gray.svg" alt="Star" />
        <img src="images/home/start-gray.svg" alt="Star" />
        <img src="images/home/start-gray.svg" alt="Star" />
      </div>
      <button
        onClick="addToCart(${id})"
        class="discounts__card__button"
        >
          B корзину
      </button>
    </div>
  </div>
  `;
}

let discountsCard = products.filter((pr) => pr.discount).slice(-4);

discountsCard.map((el) => {
  let card = getDiscountCard(el);
  discountsRow.innerHTML += card;
})


// New Products Section //

const newProductsRow = document.querySelector(".products__row");

let newCard = products.filter((pr) => pr).slice(-4);

function getNewCard({ images, discount, price, name, description, id }) {
  return `
   <div class="products__card">
      <a href="pages/product.html">
        <div class="products__card__pic">
          <img
            class="products__card__img"
            src="${images[0]}"
            alt="Product 1"
            />
        <button class="products__card__favourite__btn">
          <img src="images/home/heart-icon.svg" alt="Heart" />
        </button>
      <a/>
      </div>
         <div class="products__card__info">
           <div class="products__card__price">
             <h4>${price} ₽</h4>
           </div>
           <p class="products__card__desc card__1">
            ${name}
           </p>
           <p class="products__card__desc card__1">
            ${description}
           </p>
           <div class="products__card__rating">
             <img src="images/home/star.svg" alt="Star" />
             <img src="images/home/star.svg" alt="Star" />
             <img src="images/home/start-gray.svg" alt="Star" />
             <img src="images/home/start-gray.svg" alt="Star" />
             <img src="images/home/start-gray.svg" alt="Star" />
           </div>
           <button
            onClick="addToCart(${id})"
            class="products__card__button"
            >
              B корзину
           </button>
        </div>
     </div>`;
}


newCard.map((el) => {
  let card = getNewCard(el);
  newProductsRow.innerHTML += card;
});

// Favourites Section //

const purchasedProductsRow = document.querySelector(".purchases .products__row");

let purchasedCard = products.sort((a, b) => a.rating - b.rating).slice(-4);

function getPurchasedCard({images, discount, price, name, description, id}) {
  return `
  <div class="products__card">
              <a href="pages/product.html">
                <div class="products__card__pic">
                  <img
                    class="products__card__img"
                    src="${images[0]}"
                    alt="Product 1"
                  />
                  <button class="products__card__favourite__btn">
                    <img src="images/home/heart-icon.svg" alt="Heart" />
                  </button>
                </div>
              </a>
              <div class="products__card__info">
                <div class="products__card__price">
                  <h4>${price} ₽</h4>
                </div>
                <p class="products__card__desc card__1">
                  ${name}
                </p>
                <p class="products__card__desc card__1">
                  ${description}
                </p>
                <div class="products__card__rating">
                  <img src="images/home/star.svg" alt="Star" />
                  <img src="images/home/star.svg" alt="Star" />
                  <img src="images/home/star.svg" alt="Star" />
                  <img src="images/home/star.svg" alt="Star" />
                  <img src="images/home/star.svg" alt="Star" />
                </div>
                <button
                  onClick="addToCart(${id})"
                  class="products__card__button"
                >
                  B корзину
                </button>
              </div>
            </div>
  `;
}

purchasedCard.map((el) => {
  let purchased__card = getPurchasedCard(el);
  purchasedProductsRow.innerHTML += purchased__card;
})

addToCart();