let loginData = localStorage.getItem("loginData")
let cred =document.getElementById("cred")
let main =document.getElementById("main")
let data = JSON.parse(localStorage.getItem("resta_data"))
display(data)
//  console.log(data)


if(loginData != null  ){
    cred.innerHTML = "";

    let name = document.createElement("h3")
    name.innerText = loginData;
    let cart = document.createElement("button")
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
        cartbtn.innerText = "Add To Cart"

        let buybtn = document.createElement("button")
        buybtn.innerText = "Buy Now"


        div.append(img,name,price,cartbtn,buybtn)

        main.append(div)
     })
}











