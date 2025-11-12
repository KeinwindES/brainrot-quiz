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
