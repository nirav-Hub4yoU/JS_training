//! Reference : https://www.tutorialsteacher.com/jquery/jquery-ajax-method

// error url => https://dummy.restapiexample.com/api/v1/employees

$(document).ready(function () {
  //!  Ajax load method
  // loadFromTemplate();
});

// function loadFromTemplate() {
//     $("#loadTxt").load("/test.txt", function (response, status) {
//         console.log(response, status);
//     });
// }

//! XMLHttpRequest is a built-in browser object that allows to make HTTP requests in JavaScript.
//! it can operate on any data, not only in XML format.
function getXMLRequest() {
  // demonstrate async and sync
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dummyjson.com/products");
  xhr.onreadystatechange = function (e) {};
  xhr.send();
  xhr.onload = function (e) {
    alert("hello new");
    $("#make").text("loaded");
    console.log(this.responseText);
    console.log(xhr);
  };
  xhr.onerror = function () {
    alert("opppss failed");
  };
  alert("hello");
}

// Try catch
function getXMLRequestSYNC() {
  // demonstrate async and sync
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dummyjson.com/products", false);
  try {
    xhr.send();
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      alert(xhr.response);
    }
  } catch (err) {
    // instead of onerror
    alert("Request failed");
  }
}

function postXMLRequest() {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://65de0daedccfcd562f562a9d.mockapi.io/api/crud/dummyData"
  );
  let data = {
    name: "phime",
    emial: "cake@order.com",
    terms: true,
    message: "order the cake asap!",
  };
  xhr.send(JSON.stringify(data));
  xhr.onload = function (e) {
    console.log(this.responseText);
    console.log(e);
  };
}

// Referance => https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
// error url => https://dummy.restapiexample.com/api/v1/employees

function fetchAPI() {
  const getData = fetch("https://dummy.restapiexample.com/api/v1/employees");
  getData
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.error(error))
    .finally((e) => alert(e));
  console.error("error", getData);
}

async function fetchAsyncAwait() {
  const getData = await fetch(
    "https://dummy.restapiexample.com/api/v1/employees"
  );
  const result = await getData.json();
  console.log(result);
  alert("hello");
}

async function postDataByFetch() {
  const dummyData = {
    name: "meow",
    message: "okay ",
    terms: false,
    email: "meow@gmail.com",
  };
  const postData = await fetch(
    "https://65de0daedccfcd562f562a9d.mockapi.io/api/crud/dummyData",
    {
      method: "POST",
      body: JSON.stringify(dummyData),
    }
  );
  const result = await postData.json();
  console.log(result);
}

//! using async await = > A typical fetch request consists of two await calls:
// let response = await fetch(url, options); // resolves with response headers
// let result = await response.json(); // read body as json

// !Or, without await:
// fetch(url, options)
//   .then(response => response.json())
//   .then(result => /* process result */)

//!Response properties:
// response.status – HTTP code of the response,
// response.ok – true if the status is 200-299.

//! Methods to get response body:
// response.text() – return the response as text,
// response.json() – parse the response as JSON object,

//! Fetch options so far:
// method – HTTP-method,
// headers – an object with request headers (not any header is allowed),
// body – the data to send (request body) as string, FormData, BufferSource, Blob or UrlSearchParams object.
