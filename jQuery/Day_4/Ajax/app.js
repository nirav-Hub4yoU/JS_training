let currentData = [];
let currentSelectionId = 0;
let getDataBYid = {};
$(document).ready(function () {
  $("#myForm").submit(function (e) {
    e.preventDefault();
    if (validateForm()) {
      if (currentSelectionId) {
        updateData();
      } else {
        postData();
      }
      $("#myForm").trigger("reset");
    }
  });

  // Need to call on dom load
  getData();

  //** Add validation for the all the form field*/
  function validateForm() {
    let isValid = true;

    // Reset errors
    $(".error").text("");

    // Validate Name
    let name = $("#name").val().trim();
    if (name === "") {
      $("#nameError").text("Name is required");
      isValid = false;
    }

    // Validate Email
    let email = $("#email").val().trim();
    if (email === "") {
      $("#emailError").text("Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      $("#emailError").text("Invalid email format");
      isValid = false;
    }

    // // Validate Terms
    // if (!$("#terms").is(":checked")) {
    //   $("#termsError").text("Please accept terms");
    //   isValid = false;
    // }
    // // Validate Message
    // let message = $("#message").val().trim();
    // if (message === "") {
    //   $("#messageError").text("Message is required");
    //   isValid = false;
    // }

    return isValid;
  }

  function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

function patchData(id) {
  getDataBYid = currentData.find((f) => f.id == id);
  if (getDataBYid) {
    currentSelectionId = getDataBYid.id;
    $("#name").val(getDataBYid.name);
    $("#email").val(getDataBYid.email);
    $("#terms").prop("checked", getDataBYid.terms);
    $("#message").val(getDataBYid.message);
  }
}

function removeData(id) {
  getDataBYid = currentData.find((f) => f.id == id);
  currentSelectionId = id;
  deleteRecord(id);
}

// ! get the actual data from the form
function getFormData() {
  return {
    name: $("#name").val(),
    email: $("#email").val(),
    terms: $("#terms").is(":checked"),
    message: $("#message").val(),
  };
}

function getData() {
  $.ajax({
    type: "GET",
    url: "https://65de0daedccfcd562f562a9d.mockapi.io/api/crud/dummyData",
    dataType: "json",
    beforeSend: function (e) {
      $("#content").hide();
      $("#loader").show();
    },
    complete: function (e) {
      $("#loader").hide();
      $("#content").show();
    },
    success: function (response) {
      console.log(response);
      // Need to reset the DOM when the API is called again
      $("#dummyData").html("");
      if (response && response.length > 0) {
        currentData = response;
        let htmlString = "";
        for (let i = 0; i < response.length; i++) {
          htmlString += `      <div class="data" >
  <p class="text name">Name => ${response[i].name}</p>
  <p class="text email">Email => ${response[i].email}</p>
  <p class="text message">Message => ${response[i].message}</p>
  <p class="text terms">Accepted Terms => ${response[i].terms}</p>
  <button class="btn btn-success" onclick=patchData(${response[i].id})>update</button>
  <button class="btn btn-danger" onclick=removeData(${response[i].id})>Delete</button>
</div>`;
        }
        $("#dummyData").append(htmlString);
      } else {
        $("#dummyData").append("No record found");
      }
    },
    error: function (err) {
      console.log(err);
    },
  });
}

function deleteRecord(id) {
  $.ajax({
    type: "DELETE",
    url: `https://65de0daedccfcd562f562a9d.mockapi.io/api/crud/dummyData/${id}`,
    dataType: "json",
    beforeSend: function (e) {
      $("#content").hide();

      $("#loader").show();
    },
    complete: function (e) {
      $("#loader").hide();
      $("#content").show();
    },
    success: function (response) {
      getData();
      currentSelectionId = 0;
      getDataBYid = {};
    },
    error: function (err) {
      console.log(err);
    },
  });
}

function postData() {
  let formData = getFormData();
  $.ajax({
    type: "POST",
    url: "https://65de0daedccfcd562f562a9d.mockapi.io/api/crud/dummyData",
    data: formData,
    dataType: "json",
    beforeSend: function (e) {
      $("#content").hide();

      $("#loader").show();
    },
    complete: function (e) {
      $("#loader").hide();
      $("#content").show();
    },
    success: function (response) {
      getData();
      currentSelectionId = 0;
      getDataBYid = {};
    },
    error: function (err) {
      console.error(err.status);
    },
  });
}

function updateData() {
  let formData = getFormData();
  $.ajax({
    type: "PUT",
    url: `https://65de0daedccfcd562f562a9d.mockapi.io/api/crud/dummyData/${currentSelectionId}`,
    data: formData,
    dataType: "json",
    beforeSend: function (e) {
      $("#content").hide();

      $("#loader").show();
    },
    complete: function (e) {
      $("#loader").hide();
      $("#content").show();
    },
    success: function (response) {
      getData();
      currentSelectionId = 0;
      getDataBYid = {};
      console.log(response);
    },
    error: function (err) {
      console.log(err);
    },
  });
}

//! AJAX = Asynchronous JavaScript And XML.
// !AJAX is not a programming language.
// !AJAX just uses a combination of:
// A browser built-in XMLHttpRequest object (to request data from a web server)
// JavaScript and HTML DOM (to display or use the data)
// => jQuery AJax Method GET POST PUT DELETE LOAD
// Cross-browser support
// Simple methods to use
// Ability to Load JSON, XML, HTML
// =>Another popular method XMLHttpRequest ,latest one =>  fetch(supported by modern browser)
// Modern Browsers (Fetch API)
// - You can do work in simpler way

// Raw format
$.ajax({
  type: "method",
  url: "url",
  data: "data",
  dataType: "dataType",
  beforeSend: function (e) {},
  complete: function (e) {},
  success: function (response) {},
  error: function (err) {},
});
