//! Reference : https://www.tutorialsteacher.com/jquery/jquery-ajax-method

//! AJAX = Asynchronous JavaScript And XML.
// !AJAX is not a programming language.
// !AJAX just uses a combination of:
// A browser built-in XMLHttpRequest object (to request data from a web server)
// JavaScript and HTML DOM (to display or use the data)
// => jQuery AJax Method GET POST PUT DELETE LOAD
// => XMLHttpRequest , fetch
// Modern Browsers (Fetch API)
// - You can do work in simpler way
// error url => https://dummy.restapiexample.com/api/v1/employees

$(document).ready(function () {
    // $.ajax({
    //     type: "GET",
    //     url: "https://65de0daedccfcd562f562a9d.mockapi.io/api/crud/dummyData",
    //     // data: "data", //=> POST data
    //     dataType: "json",
    //     beforeSend: function () {
    //         $("#dis").show();
    //     },
    //     success: function (response) {
    //         console.log(response);
    //         //   appendData(response);
    //         $("#dis").hide();
    //     },
    //     error: function (err) {
    //         console.log(err);
    //         $("#dis").hide();

    //     },
    //     complete: function (e) {

    //     }
    // });

    // function appendData(data) {
    //     let htmlSting = "";
    //     for (let i = 0; i < data.length; i++) {
    //         htmlSting += `<div class="block">
    //             <p>${data[i].name}</p>
    //             <p>${data[i].department}</p>
    //         <p>${data[i].city}</p>
    //             <img src=${data[i].avatar} alt="avatar" >
    //         </div>`;
    //     }
    //     $(".container").append(htmlSting);
    // }

    //!  Ajax load method
    // loadFromTemplate();
});

// function loadFromTemplate() {
//     $("#loadTxt").load("/test.txt", function (response, status) {
//         console.log(response, status);
//     });
// }

// $(document).ready(function () {
//   $("#dummy").click(function (e) {
//     e.preventDefault();
//     $.ajax({
//       type: "GET",
//       url: "https://dummy.restapiexample.com/api/v1/employees",
//       dataType: "json",
//       beforeSend: function () {
//         $("#main-loader").show();
//       },
//       success: function (response) {
//         console.log(response);
//       },
//       error: function (errorMessage) {
//         // error callback
//         console.log(errorMessage.responseJSON);
//         $("p").append("Error: " + errorMessage.responseJSON.message);
//       },
//       complete: function () {
//         $("#main-loader").hide();
//       },
//     });
//   });
//   $.ajax({
//     type: "post",
//     url: "https://dummyjson.com/products/add",
//     data: body,
//     dataType: "json",
//     success: function (response) {
//       console.log(response);
//     },
//   });
// });

//! referance =>  https://javascript.info/xmlhttprequest
function getAPO() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dummyjson.com/products");
    xhr.onreadystatechange = function (e) {

    }
    xhr.send();
    xhr.onload = function () {
        console.log(xhr);
    };
    xhr.onprogress = function (event) {
        console.log(event);
    };
    xhr.onerror = function () {
        alert("opppss failed");
    };
}

// Referance => https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
// error url => https://dummy.restapiexample.com/api/v1/employees

//** demonstrate async operation

function fetchAPI() {
    // fetch("https://dummy.restapiexample.com/api/v1/employees")
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         console.log(data);
    //     }).catch(e => {
    //         alert(e)
    //     });

    const call = fetch("https://dummy.restapiexample.com/api/v1/employees");
    // const data = call.json();
    console.log(call);
}
