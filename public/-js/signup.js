$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var nameInput = $("input#name-input-signup");
  var emailInput = $("input#email-input-signup");
  var phoneNumberInput = $("input#phoneNumber-input-signup")
  var passwordInput = $("input#password-input-signup");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      phoneNumber: phoneNumberInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.name || !userData.email || !userData.phoneNumber || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.name, userData.email, userData.phoneNumber, userData.password);
    nameInput.val("");
    emailInput.val("");
    phoneNumberInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(name, email, phoneNumber, password) {
    $.post("/api/signup", {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      password: password
    })
      .then(function(data) {
        window.location.replace("/dashboard");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
