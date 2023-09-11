const favTotalCount = document.querySelector(".favourite-count");

let favHeaderJson = localStorage.getItem("favCart");

let favHeader = JSON.parse(favHeaderJson) || [];

favTotalCount.textContent = favHeader.length;

function getFavTotal() {
  favTotalCount.textContent = favHeader.length;
}

getFavTotal();