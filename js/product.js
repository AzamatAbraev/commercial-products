const categoryTitle = document.querySelector(".category__title");

const categoryRow = document.querySelector(".category__row");

let categoryCartArr = [];

function addToCategory(id) {
  let productCategory = products.find((pr) => pr.id === id);
  let res = productCategory.category;
  categoryCartArr = products.map((pr) => {
    if (pr.category === res) {
      categoryCartArr.push(pr);
    }
  });
  localStorage.setItem("categoryCart", categoryCartArr);
}

addToCategory();