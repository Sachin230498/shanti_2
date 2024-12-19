let signup_data = JSON.parse(localStorage.getItem("signupData"));
let form = document.querySelector("form");
form.addEventListener("submit", getData);

function getData() {
  event.preventDefault();

  let login_obj = {
    email: form.email.value,
    password: form.password.value,
  };

  //  console.log(obj)

  let flag = false;

  signup_data.forEach(function (el, index) {
    // console.log(el)
    if (login_obj.email == el.email) {
      if (login_obj.password == el.password) {
        localStorage.setItem("loginData", el.username)
        flag = true;
      } else {
        flag = "wrong";
      }
    }
  });

  if (flag == true) {
    //   console.log("login");
    alert("login");
    window.location.href = "../html/index.html";
  } else if (flag == "wrong") {
    //   console.log("wrong password");
    alert("wrong password");
  } else {
    //   console.log("wrong credetial");
    alert("wrong credetial");
  }
}
