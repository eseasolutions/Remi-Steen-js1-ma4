//Question 1

const form = document.querySelector("#contactForm");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");

function validateForm () {
  event.preventDefault();
  if (checkLength(lastName.value.trim() , 5)) {
    lastNameError.style.display = "none"; 
  } else {
    lastNameError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);


function checkLength (val, len) {
if (val.trim().length >= len) {
  return true;
} else {
  return false;
}
}