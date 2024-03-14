//! Reference : https://www.tutorialsteacher.com/jquery/jquery-ajax-method

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
    console.log('tests');

}
