// !text()
// function getText() {
//   let text = $("p").text();
//   alert(text);
// }

// function setText() {
//   $("p").text(" Text Append");
// }

// ! html()
// function getHTML() {
//   let el = $(".main").html();
//   alert(el);
// }

// function setHTML() {
//   $(".setter").html(
//     "<button class='btn btn-danger'>Hello AMigo</button> <h6>Okay HTML ADDED </h6>"
//   );
// }

// !attr()

// function getAttr() {
//   alert($("a").attr("href"));
//   jqatt;
// }
// // to set single attribute
// function setAttr() {
//   $("img").attr(
//     "src",
//     "https://images.pexels.com/photos/8753482/pexels-photo-8753482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   );
// }
// function removeAttr() {
//   $("img").removeAttr("src");
// }

// function setAttrMul() {
//   $("img").attr({
//     width: 500,
//     height: 600,
//     alt: "Every one love desert",
//   });
// }

// !val() || prop() => to get the propert from the specific element

// function getValue() {
//   alert($("#email").val());
// }
// function setValue() {
//   $("#area").val("Hello finally value has been set");
// }

// !appendData() prependData()

// function appendData1() {
//   $("#appendEl p").append(' <a href="#">read more...</a>');
// }
// function prependData1() {
//   $("#prependEl p").prepend("<strong>Note:</strong> ");
// }
// //! support multiple arguments
// $(document).ready(function(){
//     var newHeading = "<h1>Important Note:</h1>";
//     var newParagraph = document.createElement("p");
//     newParagraph.innerHTML = "<em>Lorem Ipsum is dummy text...</em>";
//     var newImage = $('<img src="https://images.pexels.com/photos/8753482/pexels-photo-8753482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Symbol">');
//     $("body").append(newHeading, newParagraph, newImage);
// });


//! empty(), remove(), unwrap() etc. to remove existing

// function emptyContainer(){
//     $("#contempty").empty();
// }

// function removeContainer(){
//     $("#containerRemove").remove();
// }
// function unwrapContainer(){
// $("#containerUnwrap button").unwrap();
// }

// !css

function getCss(){
    alert($(".manipulation h1").css("background-color"));
    setCss();
    addClass()
}

function setCss(){
    $(".manipulation p").css({
        color:"orange",
        fontSize:32,
        backgroundColor:"black"
    })
}

function addClass(){
    $("#btnClass").addClass("btn-danger");
}