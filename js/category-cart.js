const categoryTitle = document.querySelector(".category__title");

const categoryRow = document.querySelector(".category__row");

let getCategoryJson = localStorage.getItem("categoryCart");
let getCategory = JSON.parse(getCategoryJson) || [];

function getCategoryCard({ id, images, name, price, description }) {
  return `
   <div class="products__card">
      <div>
        <div class="products__card__pic">
          <img
            class="products__card__img"
            src="${images[0]}"
            alt="Product 1"
            />
        <button onClick="addFavouritesCart(${id})" class="favourite__btn">
          <img class="liked-img favourite__btn__img"  src="../images/home/heart-icon.svg" alt="Heart" />
        </button>
      <div/>
      </div>
         <div class="products__card__info">
           <div class="products__card__price">
             <h4>${price} ₽</h4>
           </div>
           <p class="products__card__desc card__1">
            ${name}
           </p>
           <p class="products__card__desc card__2">
            ${description}
           </p>
           <div class="products__card__rating">
             <img src="../images/home/star.svg" alt="Star" />
             <img src="../images/home/star.svg" alt="Star" />
             <img src="../images/home/star.svg" alt="Star" />
             <img src="../images/home/star.svg" alt="Star" />
             <img src="../images/home/star.svg" alt="Star" />
           </div>
           <button
            onClick="addToCart(${id})"
            class="add-btn"
            >
              B корзину
           </button>
        </div>
     </div>`;
}

function getCategoryProducts() {
  categoryRow.innerHTML = "";
  getCategory.map((pr) => {
    categoryRow.innerHTML += getCategoryCard(pr);
    categoryTitle.textContent = pr.category;
  })
}


getCategoryProducts();
