// JavaScript has three kind of popup boxes: Alert box, Confirm box, and Prompt box.

function alertDemo() {
  alert("Hey Buddy Wake Up it's 4:10 only 😜");
}

let promptBtn = document.getElementById("promptBtn");
promptBtn.onclick = function promptBox() {
  //! prompt(title, [default]);
  let a = prompt(
    "Hello You have made so far last lecture of js",
    "default value"
  );
  let el = document.querySelector("#prompt");
  if (a) {
    let child = document.createElement("h6");
    child.innerText = a;
    child.style.color = "orange";
    child.style.backgroundColor = "grey";
    child.setAttribute("id", "prompt-text");
    child.classList.add("text", "prompt-text");
    el.append(child);
  } else {
    let childTextEl = document.getElementById("prompt-text");
    if (childTextEl) el.removeChild(childTextEl);
  }
};

let confirmBtn = document.getElementById("confirm");
confirmBtn.addEventListener("click", confirmDemo);

function confirmDemo() {
  let result = confirm("Hey Buddy It was nice meeting you all");
}
