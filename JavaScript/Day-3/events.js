function test(event) {
  console.log(event);
}

function upperCase(e) {
  console.log(e);
  if (e && e.target.value) {
    console.log(e);
  }
}

function make(e) {
  console.log(e);
}

// !Another approach of setting the js events
// document.getElementById("new").onclick = function (event) {
//     console.log(event);
//   }
// document.getElementById("new").onmouseleave = function (event) {
//     console.log(event, "mouse hover");
//   }

// set the click even's on nested events
// document.querySelectorAll(".child").forEach((e)=>{
//     e.onclick = function (event) {
//         console.log(event);
//       }
// })

// Global object event
window.onload = function (event) {
  // alert(event)
  let el = document.createElement("h1");
  el.classList.add("header");
  el.style.color = "orange";
  el.style.fontSize = "32px";
  el.style.textAlign = "center";
  el.innerText = "Welcome";
  let ell = document.getElementsByClassName("container");
  ell[0].prepend(el);
};

const elDiv = document.getElementById("parent");
// 1st approach
// elDiv.addEventListener("click",function(event){
//     console.log(event);
// })
// 2nd Approach

// elDiv.addEventListener("click", eventCall);
// function eventCall(event) {
//   console.log(event);
// }
// Global object window resize events
window.addEventListener("resize", function (event) {
  document.getElementById("demo").innerHTML = `width changed ${event.target.innerWidth}`;
});
