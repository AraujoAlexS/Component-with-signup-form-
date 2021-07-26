const form = document.getElementById("form");

function checkInputField(inputValue) {
  if (inputValue.length < 1) {
    return false;
  }
  return true;
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function displayErrorMessage(input) {
  const inputField = document.querySelectorAll(input);
  let count = 0;
  inputField.forEach((i) => {
    if (!checkInputField(i.children[0].value)) {
      count += 1;
      i.children[0].style.border = "2px solid hsl(0, 100%, 74%)";
      i.children[1].style.display = "block";
      i.children[2].style.display = "block";
    }
  });
  if (count === 0) {
    location.reload();
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  displayErrorMessage(".input-field");
});
