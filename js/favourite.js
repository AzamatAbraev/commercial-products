const favRow = document.querySelector(".favourites__cart");

let cartFavJson = localStorage.getItem("favCart");

let cartFav = JSON.parse(cartFavJson);

function getFavouriteCard({ id, images, name, price, description }) {
  return `
   <div class="products__card">
      <a>
        <div class="products__card__pic">
          <img
            class="products__card__img"
            src="${images[0]}"
            alt="Product 1"
            />
        <button class="products__card__favourite__btn">
          <img src="../images/home/heart-icon.svg" alt="Heart" />
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
            class="products__card__button"
            >
              B корзину
           </button>
        </div>
     </div>`;
}

function getFavProducts(pr) {
  favRow.innerHTML = "";
  cartFav.map((pr) => {
    favRow.innerHTML += getFavouriteCard(pr);
  })
}

getFavProducts();
