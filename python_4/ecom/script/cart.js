let loginData = localStorage.getItem("loginData");
let total = document.getElementById("total")

let cartArr = JSON.parse(localStorage.getItem("cartData"));

display(cartArr)
let cred = document.getElementById("cred");


if (loginData != null) {
  cred.innerHTML = "";

  let name = document.createElement("h3");
  name.innerText = loginData;

  let logout = document.createElement("button");
  logout.innerText = "Logout";
//   logout.addEventListener("click", logoutfun);

  cred.append(name, logout);
}




function display(data) {
let cart_total = 0;
  data.map(function (el, index) {
    // console.log(el)
      cart_total = cart_total + el.price
      total.innerText = cart_total
    // total.innerText = cart_total + el.price
   
    let div = document.createElement("div");
    let name = document.createElement("h1");
    name.innerText = "Dish Name" + " " + el.name;
    let price = document.createElement("h3");
    price.innerText = "Price - " + " " + el.price;
    let img = document.createElement("img");
    img.src = el.img;

    let remove = document.createElement("button");``
   
    remove.innerText = "Remove";

    let buybtn = document.createElement("button");
    buybtn.innerText = "Buy Now";

    div.append(img, name, price, remove, buybtn);

    main.append(div);
  });
}
