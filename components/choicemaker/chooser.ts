console.log("Chooser is loaded up");
let choiceList: string[] = [];
let deleteButtons = document.getElementsByClassName("button-delete-choice");
const addChoiceButton = document.getElementById("add-choice");
const choiceMadeText = document.getElementById("choice-made");

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", deleteChoice);
}

// makeAChoiceButton.addEventListener("click", makeChoice);
addChoiceButton.addEventListener("click", addChoice);

function chooser() {
  console.log("let the choosing begin!");
}

function updateChoiceList() {
  let choiceList: string[] = [];
  let choiceListOnPage = document.getElementsByClassName("choice-text");
  for (let i = 0; i < choiceListOnPage.length; i++) {
    // Recast the text element from the DOM because it doesn't have a value attribute.
    let recastTextBox = <HTMLInputElement>choiceListOnPage[i];
    choiceList.push(recastTextBox.value);
  }
  return choiceList;
}

function deleteChoice() {
  this.parentElement.remove();
}

function addChoice() {
  let choiceList = document.getElementById("choice-list");
  let newChoice = document.createElement("li");
  newChoice.setAttribute("class", "choice-bar");
  choiceList.append(newChoice);

  let newBut = document.createElement("a");
  // newBut.setAttribute("type", "button");
  newBut.setAttribute(
    "class",
    "button-standard button-choice button-delete-choice"
  );
  const buttonBin = '<i class="fa fa-trash" aria-hidden="true"></i>';
  newBut.innerHTML = buttonBin;
  newBut.addEventListener("click", deleteChoice);
  newBut.style.marginRight = "5px";
  newChoice.appendChild(newBut);

  let texty = document.createElement("input");
  texty.setAttribute("type", "text");
  texty.setAttribute("class", "choice-text");
  newChoice.appendChild(texty);
}

function makeChoice() {
  choiceList = updateChoiceList();
  const randomChoice =
    choiceList[Math.floor(Math.random() * choiceList.length)];
  choiceMadeText.innerText = randomChoice;
}
