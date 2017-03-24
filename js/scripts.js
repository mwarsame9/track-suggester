$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var name = $("input.name").val();
    var age = parseFloat($("input#age").val());
    var experience = $("input#experience").val();
    var work = $("input#work").val();
    var company = $("input#company").val();
    // var result = $("#track-result").val();

    if (age >= 35) {
      $("#Java").show();
    }
    else if (age < 35 && age > 25) {
      $("#PHP").show();
    }
    else if (age < 25) {
      $("#Ruby").show();
    }
    else {
      alert("Please enter a valid age.")
    }

    // $("#track-result").show();

    event.preventDefault();
  });
});
