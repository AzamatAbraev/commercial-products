const cartTotal = document.querySelector(".cart-count");
const cartRow = document.querySelector(".cart__container");

let cartJson = localStorage.getItem("cart");

let cart = JSON.parse(cartJson) || [];

function getTotalCart() {
  cartTotal.textContent = cart.length;
}

getTotalCart();

function getCartCard({ id, images, name, price, description, quantity }) {
  return `
    <div class="cart__card">
      <div class="cart__card__img">
       <img src="${images[0]}" alt="">
      </div>
      <div class="cart__card__content">
        <h3>${name}</h3>
        <p>${price} $</p>
        <p>${description}</p>
        <div class="cart__card__buttons">
          <button onClick="decreaseQuantity(${id})" class="remove__btn">-</button>
          <span class="cart-quantity">${quantity}</span>
          <button onClick="increaseQuantity(${id})" class="add__btn">+</button>
       </div>
      </div>
    </div>
  `;
}

function getCartProducts() {
  cartRow.innerHTML = "";
  cart.map((pr) => {
    cartRow.innerHTML += getCartCard(pr);
  }); 
}

getCartProducts();

function increaseQuantity(id) {
  cart = cart.map((pr) => {
    if (pr.id === id) {
      pr.quantity++;
    }
    return pr;
  });
  getCartProducts();
  localStorage.setItem("cart", JSON.stringify(cart));
}

function decreaseQuantity(id) {
  let product = cart.find((pr) => pr.id === id);

  if (product.quantity === 1) {
    let shouldDelete = confirm(
      "Do you want to remove the product from the cart"
    );
    if (shouldDelete) {
      cart = cart.filter((pr) => pr.id !== id);
    }
  } else {
    cart = cart.map((pr) => {
      if (pr.id === id) {
        pr.quantity--;
      }
      return pr;
    });
  }
  getCartProducts();
  localStorage.setItem("cart", JSON.stringify(cart));
}

