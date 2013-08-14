// source: http://stackoverflow.com/a/15555947
function calcAge(dateString) {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000));
}

$( "#generate_email_form" ).submit(function(e) {
  e.preventDefault();
  var firstname = $("#generate_email_form").find('input[placeholder="firstname"]').val();
  var one = $("#generate_email_form").find('input[placeholder="1"]').val();
  var two = $("#generate_email_form").find('input[placeholder="2"]').val();
  var three = $("#generate_email_form").find('input[placeholder="3"]').val();

  if (firstname == "cesar" && one == "s" && two == "v" && three == "s") {
    $( "#generated_succesful_email" ).text(firstname + one + two + three + "@gmail.com");
    $( "#generated_wrong_email" ).text("");
  } else {
    $( "#generated_succesful_email" ).text("");
    $( "#generated_wrong_email" ).text("You made some mistake. Please, read again the rule and try again.");
  }
});