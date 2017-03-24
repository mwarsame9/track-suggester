$(document).ready(function() {
  $("#trackForm").submit(function(event) {
    var age = parseFloat($("input#age").val());
    var gender = $("input#gender").val();
    var experience = $("input#experience").val();
    var work = $("input#work").val();
    var company = $("input#company").val();


    if (age > 35) {
      $("#Java").show();
    }
    else if (age > 25 && age <35) {
      $("#PHP").show();
    }
    else if (age < 25) {
      $("#Ruby").show();
    }
    else {
      alert("Please enter a valid age.")
    }



    event.preventDefault();
  });
});
