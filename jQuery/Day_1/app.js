$(document).ready(function () {
  // $("p").append(" hello buddy")
  // $('#myDiv1,#myDiv2').append(" - Multiple elements by ids selected"); => combining selectors
  // // Select single element
  // $("p").append(" Day One");
  // // select Multiple HTML elements
  // console.log($("p,h1,img").append("We are living the dream")); => combining selectors
  // // id selector
  // $("#hello").append("Text appended successfully")
  // // Finds all <div> elements with id=main
  // $("div#main").append("leave the demo ")
  // Class selector
  // // Updates to all the elements have matching classes
  // $(".parent").append("Parent class selector");
  // // Select multiple classes at a time
  // $(".sec,.side").append("aside and Side bar");
  // $(":input").val("Set value")
  // $('#demo1').val("using Id")
  // // Attribute selector  [attribute=value]
  // $('[class]').append(" - This div element has at least one css class");
  // $('[id]').append(" - This div element has id");
  // $('[id=main]').append(" - Specific id 123");
  // // Child and Descendant Selectors
  // $("div h1").append("Hello Child Decendent Selectors")
  // $("div .new").append("Hello Child Decendent Selectors")
  // useful methods such as children() and find()
  // $("ul").children().addClass("highlight");
  // $("ul").find("li").addClass("highlight")

  // $("h6").css("color","orange");
  // using Object we can pass the multiple style
  $("h6").css({
    color:"red",
    backgroundColor:"yellow"
  });
}); 

// let el = document.createElement("textarea");
// el.setAttribute("id","area");
// el.setAttribute("cols","25");
// el.setAttribute("rows","10");
// el.classList.add("text","area");
// el.value = "Hello I am Default value here";
// $("h6").before(el)
//
// console.log($("#new"));

//! Difference between window.onload and $(document).ready
// $(document).ready() => when the full DOM hierarchy is loaded

// window.onload = > when entire window is loaded including DOM, images, css and other required resources

// window.onload = function () {
//   alert('window loaded');
// };

// $(document).ready(function () {
//   alert('document loaded');
// });
