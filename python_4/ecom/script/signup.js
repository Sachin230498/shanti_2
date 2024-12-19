let form = document.querySelector("form")

form.addEventListener("submit", getData)


// let username = document.getElementById("username")
// let email = document.getElementById("email")
// let password = document.getElementById("password")


// console.log(username.value,email,password)

let signup_arr =JSON.parse(localStorage.getItem("signupData")) || [] ;

function getData(){
    event.preventDefault()
  
 let obj = {
    username: form.username.value,
    email:form.email.value,
    password:form.password.value
 
 }

signup_arr.push(obj)

localStorage.setItem("signupData", JSON.stringify(signup_arr))

alert("Singup successfully")
window.location.href = "../html/login.html";
 

}


// console.log()