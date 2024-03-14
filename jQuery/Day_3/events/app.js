$(document).ready(function() {
  // Focus event
  $('#name').focus(function() {
      $('#nameMessage').text('Please enter your name');
  });

  // Blur event
  $('#name').blur(function() {
      var name = $(this).val().trim();
      if (name === '') {
          $('#nameMessage').text('Name cannot be empty, blur Event');
      } else {
          $('#nameMessage').text('');
      }
  });

  // Keydown event
  $('#name').keydown(function(event) {
    $('#nameMessage').text('key down events');
  });

  // Keyup event
  $('#name').keyup(function(event) {
    $('#nameMessage').text('key uP events');

  });

  // Change event
  $('#name').change(function() {
    console.log("change");
      $('#nameMessage').text('value change event');
  });

  $(".redContainer").click(function (e) { 
    $(".redContainer").animate({
      width:"250px",
      height:"250px"
    },3000)
  });


  // Submit event
  $('#myForm').submit(function(event) {
      event.preventDefault(); // Prevent default form submission
      var name = $('#name').val().trim();
      if (name === '') {
          $('#nameMessage').text('Please enter your name');
      } else {
          alert('Form submitted successfully! Name: ' + name);
      }
  });
});
