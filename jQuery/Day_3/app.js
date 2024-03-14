$(document).ready(function () {
    // Submit change blur are the form events
  $("#myForm").submit(function (e) {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      //** On form submit using this we can reset the formData */
      //   **  inside trigger pass the form events*/
      $("#myForm").trigger("reset");
    }
  });

//   $("#myForm").change(function (e) {
//     e.preventDefault();
//     validateForm();
//   });

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

    // Validate techStack
    let techStack = $("#techStack").val();
    if (techStack === "") {
      $("#techStackError").text("techStack is required");
      isValid = false;
    }

    // Validate Terms
    if (!$("#terms").is(":checked")) {
      $("#termsError").text("Please accept terms");
      isValid = false;
    }

    // Validate Country
    let country = $("#country").val();
    if (country === "") {
      $("#countryError").text("Country is required");
      isValid = false;
    }

    // Validate Message
    let message = $("#message").val().trim();
    if (message === "") {
      $("#messageError").text("Message is required");
      isValid = false;
    }

    return isValid;
  }

  function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
