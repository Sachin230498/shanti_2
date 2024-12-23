


let loginData = localStorage.getItem("loginData")

let cred =document.getElementById("cred")
let main =document.getElementById("main")
let data = JSON.parse(localStorage.getItem("resta_data"))


display(data)



let cartArr = JSON.parse(localStorage.getItem("cartData")) || [];

// console.log(cartArr)

if(loginData != null  ){
    cred.innerHTML = "";

    let name = document.createElement("h3")
    name.innerText = loginData;
    let cart = document.createElement("button")
    cart.addEventListener("click",cartpage)
    cart.innerHTML = "CART"
    let logout  = document.createElement("button")
    logout.innerText= "Logout"
    logout.addEventListener("click", logoutfun)

    cred.append(name,cart,logout)
}

function logoutfun(){
    // console.log("logout")
    localStorage.removeItem("loginData")
      window.location.href = "../html/login.html";

}


 function cartpage(){


            window.location.href = "../html/cart.html";
    }



function display(data){
     data.map(function(el,index){
        // console.log(el)

        let div = document.createElement("div")
        let name = document.createElement("h1")
        name.innerText = "Dish Name"+" " + el.name;
        let price = document.createElement("h3")
        price.innerText = "Price - "+ " "+ el.price;
        let img = document.createElement("img")
        img.src = el.img;

        let cartbtn = document.createElement("button")
        cartbtn.addEventListener("click",function(){
            addCart(el)
        })
        cartbtn.innerText = "Add To Cart"

        let buybtn = document.createElement("button")
        buybtn.innerText = "Buy Now"


        div.append(img,name,price,cartbtn,buybtn)

        main.append(div)
     })
}

function addCart(data) {
  let cart_flag = false;

  // Iterate through cartArr and check for a duplicate
  cartArr.map(function (el) {
    if (data.idCategory === el.idCategory) {
      cart_flag = true; 
    }
  });

  // Act based on the flag
  if (cart_flag) {
    alert("Product is already added");
  } else {
    alert("Product is added");
    cartArr.push(data); // Add the new product to the cart
    localStorage.setItem("cartData", JSON.stringify(cartArr)); // Update localStorage
  }
}
















