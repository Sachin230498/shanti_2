let form = document.querySelector("form");
let tbody = document.querySelector("tbody");

let arr = JSON.parse(localStorage.getItem("data")) || [];
// console.log(arr)
display(arr);
form.addEventListener("submit", formData);

function formData() {
  event.preventDefault();
  let name = form.task.value;
  let pre = form.priority.value;
  // console.log(name,pre)
  let obj = {
    name: name,
    priority: pre,
  };
  arr.push(obj);
  localStorage.setItem("data", JSON.stringify(arr));

  display(arr);
}

function display(data) {
  tbody.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i])
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = data[i].name;
    let col2 = document.createElement("td");
    col2.innerText = data[i].priority;
    if (data[i].priority == "High") {
      col2.style.backgroundColor = "red";
    } else {
      col2.style.backgroundColor = "green";
    }
    let col3 = document.createElement("td");
    col3.innerText = "DELETE";
    col3.addEventListener("click", function () {
      delfun(i);
    });

    col3.style.backgroundColor = "red";
    col3.style.color = "white";
    row.append(col1, col2, col3);
    tbody.append(row);
  }
}

console.log(arr);

function delfun(index) {
  // console.log("hello delete")
  arr.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(arr));
  display(arr)
  // console.log(arr);
}

// arr method splice(index, no of el you want to delete, no of el you want to replace or add)

// let arr2 = [5,7,3,5,8]

// let a = arr2.splice(0, 1, 78,95,66 )

// console.log(a)

// console.log(arr2)