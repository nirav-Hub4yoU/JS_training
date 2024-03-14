// console.log(document);
// // Mehtod to get Elements from DOM
// document.getElementById("demo").innerText = "text";
// let el = document.getElementsByClassName("append-text");
// for (let i = 0; i < el.length; i++) {
//   el[i].innerHTML = "Text added";
// }
// // console.log(el);
// // Get all the matching element from the dom
// const listQuery = document.querySelectorAll(".append-text");
// // It will on get the single element which is first in the dom will get it ;
// const firstOne = document.querySelector(".append-text");
// console.log(firstOne);
// console.log(listQuery);

// console.log(document.querySelectorAll("span"));

// // Never use Document write it will override while dom content
// // setTimeout(() => {
// //     document.write("Okay")
// // }, 2000);

// //! Add Attributes
// // let head = document.getElementById("demo");
// // console.log(head);
// // head.setAttribute("width","300");
// // console.log(head.classList);
// // head.classList.add("new","multiple","dom-iteraction");
// // head.classList.remove("new");

// // ! set css

// let head = document.getElementById("demo");
// head.style.color = "yellow";

// let appendEl = document.getElementById("main");
// appendEl.innerHTML = `    <h1>Hello appended</h1>
// <span>Js session</span>`;
// let newEl = document.createElement("search");
// newEl.classList.add("search","result-bar");
// newEl.setAttribute("id","searchBar");
// appendEl.append(newEl);
// // appendEl.pre

// let app = document.querySelector('#app');

// let langs = ['CSS','JavaScript','TypeScript'];

// let nodes = langs.map(lang => {
//     let li = document.createElement('li');
//     li.textContent = lang;
//     return li;
// });

// app.append(...nodes);


 // NodeList example
 const paragraphs = document.querySelectorAll('p');
 console.log(paragraphs); // NodeList(3) [p, p, p]
 // The NodeList won't update if you add or remove paragraphs from the DOM
 document.getElementById('node-diff').appendChild(document.createElement('p'));
 console.log(paragraphs); // NodeList(3) [p, p, p]

 // HTMLCollection example
 const paragraphsHTMLCollection = document.getElementsByTagName('p');
 console.log(paragraphsHTMLCollection); // HTMLCollection(4) [p, p, p, p]
 // The HTMLCollection updates automatically
 document.getElementById('node-diff').appendChild(document.createElement('p'));
 console.log(paragraphsHTMLCollection); // HTMLCollection(5) [p, p, p, p, p]