let categoryCartJson = localStorage.getItem("categoryCart");

let categoryCartArr = JSON.parse(categoryCartJson) || [];

function addToCategory(id) {
  categoryCartArr = [];
  let productCategory = products.find((pr) => pr.id === id);
  let res = productCategory.category;
  let mapping = products.map((pr) => {
    if (pr.category === res) {
      categoryCartArr.push(pr);
    }
  })
  localStorage.setItem("categoryCart", JSON.stringify(categoryCartArr));
}

addToCategory();

