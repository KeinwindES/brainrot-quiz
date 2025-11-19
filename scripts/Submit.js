const submitButton = document.getElementById("submitButton");
const form = document.getElementById("quiz-container");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const question1Input = document.getElementById("question1Input");
  const question2Input = document.getElementById("question2Input");
  const question3Input = document.getElementById("question3Input");
  const question4Input = document.getElementById("question4Input");
  const question6Input = document.getElementById("question6Input");
  const question7Input = document.getElementById("question7Input");
  const question9Input = document.getElementById("question9Input");

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
    console.log("1ST ITS WORKING");
  }
  if (question2currentlypicked === "mikal") {
    score++;
    console.log("2ND ITS WORKING");
  }
  if (question3Input?.value.trim() === "6 7") {
    score++;
    console.log("3RD ITS WORKING");
  }
  if (question4Input?.value.trim().toLowerCase() === "khevin511") {
    score++;
    console.log("4TH ITS WORKING");
  }
  if (question5answer?.trim() === "GYAT") {
    score++;
    console.log("5TH ITS WORKING");
  }
  if (question6Input?.value.trim().toLowerCase() === "skibidi toilet") {
    score++;
    console.log("6TH ITS WORKING");
  }
  if (question7Input?.checked) {
    score++;
    console.log("7TH ITS WORKING");
  }
  [...document.querySelectorAll(".question7wrong")].forEach((e) => {
    if (e?.checked) {
      score--;
      console.log("7TH ITS WORKING");
    }
  });
  if (hasAnsweredQuestion8 === true) {
    score++;
    console.log("8TH ITS WORKING");
  }

  if (question9Input?.value === "Sigma") {
    score++;
    console.log("9TH ITS WORKING");
  }

  document.getElementById("scoredisplay").innerText = `${score}/9`;
  if (score != 10) {
    vts.play();
  }
});
