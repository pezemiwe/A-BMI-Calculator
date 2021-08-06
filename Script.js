let age = document.getElementById("age");
let reset = document.getElementById("reset");
let button = document.getElementById("calculate");

const calcBmi = () => {
  let height = document.getElementById("height").value.trim();
  let weight = document.getElementById("weight").value.trim();
  let bmi = parseFloat(weight) / parseFloat(height ** 2);
  let result = bmi.toFixed(2);
  if (isNaN(result)) {
    result = "0.00";
  }
  document.getElementById("bmi").innerHTML = result;
  healthCheck(Number(result));
};

// const resultCheck = () => {
//     let bodyIndex = document.getElementById("bmi");
//     if (bodyIndex.isNaN() == true) {

//     }
//     return bodyIndex.innerHTML = "0.00";
// };

const healthCheck = (bodyIndex) => {
  //   let bodyIndex = document.getElementById("bmi").innerText;
  let parent = document.getElementById("parent");
  if (bodyIndex < 18) {
    document.querySelector(".square").style.background = "hsl(236, 65%, 63%)";
    parent.classList.add("healthya");
    parent.classList.remove("healthyb");
    parent.classList.remove("healthyc");
    parent.classList.remove("healthyd");
  } else if (bodyIndex === 18.5 || bodyIndex < 25) {
    document.querySelector(".square").style.background = "green";
    parent.classList.add("healthyb");
    parent.classList.remove("healthya");
    parent.classList.remove("healthyc");
    parent.classList.remove("healthyd");
  } else if (bodyIndex === 25.0 || bodyIndex < 30) {
      
    parent.classList.add("healthyc");
    document.querySelector(".square").style.backgroundColor = "orange";
    parent.classList.remove("healthya");
    parent.classList.remove("healthyb");
    parent.classList.remove("healthyd");
    
  } else if (bodyIndex >= 30) {
    document.querySelector(".square").style.backgroundColor = "red";
    parent.classList.add("healthyd");
    parent.classList.remove("healthya");
    parent.classList.remove("healthyb");
    parent.classList.remove("healthyc");
  } else {
    document.querySelector(".square").style.backgroundColor ="hsl(255, 80%, 80%)";
    parent.classList.remove("healthya");
    parent.classList.remove("healthyb");
    parent.classList.remove("healthyc");
    parent.classList.remove("healthyd");
  }
};

button.addEventListener("click", function () {
  calcBmi();
  //    resultCheck();
});

reset.addEventListener("click", function () {
  let parent = document.getElementById("parent");
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("bmi").innerHTML = "0.00";
  document.getElementById("age").value = "";
  parent.classList.remove("healthya");
  parent.classList.remove("healthyb");
  parent.classList.remove("healthyc");
  parent.classList.remove("healthyd");
  document.querySelector(".square").style.backgroundColor ="hsl(255, 80%, 80%)";
});
