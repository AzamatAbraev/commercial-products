const favCount = document.querySelector(".favourite-count");

let cartFavMainJson = localStorage.getItem("favCart");

let cartMainFav = JSON.parse(cartFavMainJson) || [];

favCount.textContent = cartMainFav.length;

function getFavCount() {
  favCount.textContent = cartMainFav.length;
}

function addFavouritesCart(id) {
  let favProduct = products.find((pr) => pr.id === id);
  let checkFav = cartFav.find((pr) => pr.id === id);

  if (checkFav) {
    cartFav = cartFav.map((pr) => {
      if (pr.id === id) {
        pr.quantity++;
      }
      return pr;
    });
  } else {
    favProduct.quantity = 1;
    cartMainFav.push(favProduct);
  }

  localStorage.setItem("favCart", JSON.stringify(cartMainFav));
  getFavCount();
}

addFavouritesCart();
