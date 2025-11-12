// 🧠 Quiz Form Submission
const submitButton = document.getElementById("submitButton");
const form = document.getElementById("quiz-container");

if (submitButton) {
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const question1Input = document.getElementById("question1Input");
    const question2Input = document.getElementById("question2Input");
    const question3Input = document.getElementById("question3Input");
    const question4Input = document.getElementById("question4Input");
    const question6Input = document.getElementById("question6Input");
    const question7Input = document.getElementById("question7Input");

    const question5button1 = document.getElementById("button1");
    const question5button2 = document.getElementById("button2");
    const question5button3 = document.getElementById("button3");
    const question5button4 = document.getElementById("button4");
    const question5answer =
      question5button1.innerText +
      question5button2.innerText +
      question5button3.innerText +
      question5button4.innerText;

    let score = 0;

    // checks values
    if (question1Input?.value.trim().toLowerCase() === "3") {
      score++;
    }
    if (question2currentlypicked === "mikal") {
      score++;
    }
    if (question3Input?.value.trim() === "69") {
      score++;
    }
    if (question3Input?.value.trim() === '6 7') {
      score--;
    }
    if (question4Input?.value.trim().toLowerCase() === "khevin511") {
      score++;
    }
    if (question5answer?.trim() === "GYAT") {
      score++;
    }
    if (question6Input?.value.trim().toLowerCase() === "skibidi toilet") {
      score++;
    }
    if (question7Input?.value.trim().toLowerCase() === "b") {
      score++;
    }

    alert(`Your score is: ${score}/7`);
  });
}
