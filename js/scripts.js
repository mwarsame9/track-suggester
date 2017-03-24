$(document).ready(function() {
  $("#trackForm").submit(function(event) {
    var age = parseFloat($("input#age").val());
    var gender = $("input#gender").val();
    var experience = $("input#experience").val();
    var work = $("input#work").val();
    var company = $("input#company").val();


    if (age > 35) {
      $("#Java").show();
      $("#PHP").hide();
      $("#Ruby").hide();
    }
    else if (age > 25 && age <35) {
      $("#PHP").show();
      $("#Java").hide();
      $("#Ruby").hide();
    }
    else if (age < 25) {
      $("#Ruby").show();
      $("#Java").hide();
      $("#PHP").hide();
    }
    else {
      alert("Please enter a valid age.")
    }

    event.preventDefault();
  });
});
