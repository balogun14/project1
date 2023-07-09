const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirmPassword");

//show input message
function showError(input, message) {
  const formcontrol = input.parentElement;
  formcontrol.className = "form-control error";
  const small = formcontrol.querySelector("small");
  small.innerText = message;
}

//show success outline
function showSuccess(input) {
  const formcontrol = input.parentElement;
  formcontrol.className = "form-control success";
}
//check email
function isValidEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//event listners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value == "") {
    showError(username, "username is required");
  } else {
    showSuccess(username);
  }
  if (email.value == "") {
    showError(email, "Email is required");
  }else if(!isValidEmail(email.value)){
    showError(email, "Email is not valid");

  } 
  else {
    showSuccess(email);
  }
  if (password.value == "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }
  if (password2.value == "") {
    showError(password2, "Password does not match");
  } else {
    showSuccess(password2);
  }
});
