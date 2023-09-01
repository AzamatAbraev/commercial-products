const allProductsRow = document.querySelector(".products__row");
const productsCountNumber = document.querySelector(".home__count__number");
const searchInput = document.querySelector(".search__input");
const pagination = document.querySelector(".pagination");
const pageLink = document.querySelector(".page__btn");

let search = "";

let activePage = 1;

function getCard(el) {
  return `
   <div class="products__card">
      <a href="./product.html">
        <div class="products__card__pic">
          <img
            class="products__card__img"
            src="${el.images[0]}"
            alt="Product 1"
            />
        <a class="products__card__favourite__btn">
          <img src="../images/home/heart-icon.svg" alt="Heart" />
        </a>
        </div>
         <div class="products__card__info">
           <div class="products__card__price">
             <h4>${el.price} ₽</h4>
           </div>
           <p class="products__card__desc card__1">
            ${el.name}
           </p>
           <p class="products__card__desc card__2">
            ${el.description}
           </p>
           <div class="products__card__rating">
             <img src="../images/home/star.svg" alt="Star" />
             <img src="../images/home/star.svg" alt="Star" />
             <img src="../images/home/start-gray.svg" alt="Star" />
             <img src="../images/home/start-gray.svg" alt="Star" />
             <img src="../images/home/start-gray.svg" alt="Star" />
           </div>
           <button
            onclick="location.href='./cart.html'"
            class="products__card__button"
            >
              B корзину
           </button>
         </div>
       </a>
     </div>`;
}

function getProducts() {
  let results = products.filter((el) => el.name.toLowerCase().includes(search));

  let pages = Math.ceil(results.length / 8);

  if (pages > 1) {
    pagination.innerHTML = `
    <li class="page__item ${activePage <= 2 ? "disabled" : ""}">
      <button onclick="getPage('--')" class="page__btn">
        <img src="../images/products/double-previous.svg"
      </button>
    </li>`;

    pagination.innerHTML += `
    <li class="page__item ${activePage === 1 ? "disabled" : ""}">
      <button onclick="getPage('-')" class="page__btn">
        <img src="../images/products/previous.svg"
      </button>
    </li>`;

    for (let i = 1; i <= pages; i++) {
      pagination.innerHTML += `
        <li class="page__item ${i === activePage ? "active" : ""}">
          <button onclick="getPage(${i})" class="page__btn">${i}</button>
        </li>`;
    }

    pagination.innerHTML += `
      <li class="page__item ${activePage === (pages) ? "disabled" : ""}">
        <button onclick="getPage('+')" class="page__btn">
          <img src="../images/products/next.svg">
        </button>
      </li>`;
      pagination.innerHTML += `
      <li class="page__item ${activePage === (pages) ? "disabled" : ""}">
        <button onclick="getPage('++')" class="page__btn">
          <img src="../images/products/double-next.svg">
        </button>
      </li>`;
  } else {
    pagination.innerHTML = "";
  }

  let start = (activePage - 1) * 8;
  let end = activePage * 8;

  let pagesResults = results.slice(start, end);

  allProductsRow.innerHTML = "";
  pagesResults.map((el) => {
    allProductsRow.innerHTML += getCard(el);
  });

  productsCountNumber.textContent = results.length;
}

getProducts();

searchInput.addEventListener("keyup", function () {
  activePage = 1;
  search = this.value.trim().toLowerCase();
  getProducts();
});

function getPage(page) {
  if (page === "+") {
    activePage++;
  } else if (page === "++") {
    activePage += 2;
  } else if (page === "-") {
    activePage--;
  } else if (page === "--") {
    activePage -= 2;
  } else {
    activePage = page;
  }
  getProducts();
}