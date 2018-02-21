$(document).ready(function() {
  $(".button2").click(function(event) {
    var emailInput = $("input#email").val()


    event.preventDefault();
    alert(emailInput + "you've successfully subscribed")
    $(".button2").html("subscribed!")

  });
});
