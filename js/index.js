var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productcategory = document.getElementById("productcategory");
var productDescribtion = document.getElementById("productDescribtion");
var productImg = document.getElementById("productImg");
var productlist = [];
if ("list" !== null) {
  productlist = JSON.parse(localStorage.getItem("list"));
  displayProducts(productlist);
}

function createproduct() {
  var products = {
    name: productName.value,
    price: productPrice.value,
    category: productcategory.value,
    describtion: productDescribtion.value,
    image: productImg.src,
  };
  productlist.push(products);

  displayProducts(productlist);
  localStorage.setItem("list", JSON.stringify(productlist));
  clearForm();
}

function displayProducts(list) {
  var container = "";
  for (var i = 0; i < list.length; i++) {
    container += `<tr>
        <td>${list[i].name}</td>
        <td>${list[i].price}</td>
        <td>${list[i].category}</td>
        <td>${list[i].describtion}</td>
        <td><img src="images/ben-garratt.jpg" alt=${list[i].name}></td>
      </tr>`;
  }
  document.getElementById("data").innerHTML = container;
}

function clearForm() {
  productName.value = "";
  productPrice.value = "";
  productcategory.value = "";
  productDescribtion.value = "";
  // productImg=
}
