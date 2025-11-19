const buttons = document.querySelectorAll(
  "#button1, #button2, #button3, #button4",
);

buttons.forEach((button, index) => {
  let letter = "A";
  button.addEventListener("click", () => {
    // update the letter
    if (letter == "Z") {
      letter = "A";
    } else {
      letter = String.fromCharCode(letter.charCodeAt(0) + 1);
    }

    // update the text content of the clicked button
    button.textContent = letter;
  });
});

document.getElementById("cardihnfoscheck").addEventListener("click", (e) => {
  if (!noerror()) {
    document.getElementById("missinginfo").style.display = "block";
  } else {
    document.getElementById("question8div").innerHTML =
      '<img src="Img/goku supreme.jpg" alt=""/>';
  }
});
function noerror() {
  if (document.getElementById("cardpickerid").value.length == 0) return false;
  if (document.getElementById("question8cardnumber").value.length != 16)
    return false;
  if (document.getElementById("question8cvv").value.length != 3) return false;
  if (document.getElementById("expirationpicker").value.length != 5)
    return false;
  if (document.getElementById("question8name").value.length <= 2) return false;
  return true;
}
