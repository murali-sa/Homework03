var incButton = document.getElementById("increment");

var decButton = document.getElementById("decrement");

var eCounter = document.getElementById("count");
//
// set maximum and minimum password length
//
var pwdMaxlength = 16;
var pwdMinlength = 8;
//
// minimum password length
//
var currentCount = 8;
eCounter.textContent = currentCount;
//
// increase or decrease the password length
// change color to red if max or min reached
//
incButton.addEventListener("click", function() {
  if (currentCount < pwdMaxlength) {
    currentCount++;
    eCounter.style.color = "black";
    eCounter.textContent = currentCount;
  } else {
    eCounter.style.color = "red";
    eCounter.textContent = currentCount;
  }
});

decButton.addEventListener("click", function() {
    if (currentCount > pwdMinlength) {
      currentCount--;
      eCounter.style.color = "black";
      eCounter.textContent = currentCount;
    } else {
      eCounter.style.color = "red";
      eCounter.textContent = currentCount;
    }

  });