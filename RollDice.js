// 🎲 Dice Roll
const rollDiceButton = document.getElementById("rollDiceButton");
const diceResult = document.getElementById("diceResult");

let question2currentlypicked = "";
if (rollDiceButton && diceResult) {
  rollDiceButton.addEventListener("click", () => {
    const gyatOwners = ["kai cenat", "mikal", "adin ross", "pakawata"];
    const randomNumber = Math.floor(Math.random() * gyatOwners.length);
    diceResult.textContent = `The gyat owner is: ${gyatOwners[randomNumber]}`;
    question2currentlypicked = gyatOwners[randomNumber];
  });
}
