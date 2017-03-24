$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var name = $("input#name").val();
    var age = $("input#age").val();
    var experience = $("input#experience").val();
    var work = $("input#work").val();
    var company = $("input#company").val();
    var result = $("#track-result").val();

    if (company === 'large' && work === mobile) {
        result = "Java";
    }

    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    $("#track-result").show();

    event.preventDefault();
  });
});
