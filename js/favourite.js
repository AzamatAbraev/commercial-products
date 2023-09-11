const favRow = document.querySelector(".favourites__cart");

let favCartCardJSON = localStorage.getItem("favCart");

let favCartCard = JSON.parse(favCartCardJSON) || [];

function getFavouriteCard({ id, images, name, price, description }) {
  return `
   <div class="products__card">
      <div>
        <div class="products__card__pic">
          <img
            class="products__card__img"
            src="${images[0]}"
            alt="Product 1"
            />
        <button class="products__card__favourite__btn liked-btn">
          <img class="liked-img"  src="../images/home/heart-icon-2.svg" alt="Heart" />
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
           <button onClick="deleteFavProduct(${id})"
            class="delete-btn"
            >
              Удалить
           </button>
        </div>
     </div>`;
}

function getFavProducts() {
  favRow.innerHTML = "";
  favCartCard.map((el) => {
    favRow.innerHTML += getFavouriteCard(el);
  });
}

getFavProducts();

function deleteFavProduct(id) {
  let product = favCartCard.find((pr) => pr.id === id);

  if (product.quantity >= 1 && product.quantity <= 100) {
      let confirmed = confirm(
        "Are you sure that you want to delete the product?"
      );
      if (confirmed) {
        favCartCard = favCartCard.filter((pr) => pr.id !== id);
      }
  }

  localStorage.setItem("favCart", JSON.stringify(favCartCard));
  getFavProducts();
}

deleteFavProduct();
