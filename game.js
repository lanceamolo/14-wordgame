import { commonWords } from "./constants.js"

console.log(commonWords)

let allowedWords = commonWords.filter((i) => i.length >= 3)
console.log(allowedWords)

const chosenWord = allowedWords[Math.floor(Math.random() * allowedWords.length)]
console.log(chosenWord)

const answerArr = []
for (let i = 0; i < chosenWord.length; i++) {
  answerArr[i] = "_"
}
console.log(answerArr)

let currentWord = []
const hideLetters = (word) => {
  for (let i = 0; i < chosenWord.length; i++) {
    return (currentWord = currentWord + "_")
  }
}

const youLose = false
if (userTurns === 0) {
  return (youLose = true)
}

const startGame = document.querySelector("#startGame")
const restartGame = document.querySelector("#restartGame")
const blankArea = document.querySelector("#blankArea")
const userTurnNumber = document.querySelector("#userTurnText")

// make a start button to begin the game
startGame.addEventListener("click", () => {
  blankArea.innerHTML = answerArr.join("")
})

// restart game with button
restartGame.addEventListener("click", () => {
  window.location.reload()
})

// make a button to guess a letter
const guessButton = document.getElementById("guessButton")
console.log(guessButton)

let userTurns = 8
userTurnNumber.innerHTML = "You're on turn #" + userTurns
let usedLetterArr = []

// have the guess button take the letter input and insert it into the blankArea if its correct and into the usedLetters area regardless + decrement turns
guessButton.addEventListener("click", function (e) {
  e.preventDefault()
  userTurns = userTurns - 1
  userTurnNumber.innerHTML = "You're on turn #" + userTurns

  // end game here if turns hit 0
  const youLose = false
  if (userTurns === 0) {
    userTurnNumber.innerHTML = "YOU LOSE! Restart to try again."
    youLose = true
  }

  const letterInput = document.getElementById("letterInput")
  const userInput = letterInput.value

  const usedLetters = document.getElementById("usedLetters")

  if (userInput.length == 0) {
    alert("You need to insert a letter")
  } else {
    //take correct letter and replace underscore in blankArea with it
    let currentArr = []
    const guess = (word, letter) => {
      for (let j = 0; j < word.length; j++) {
        if (word[j] === letter) {
          currentArr = answerArr[j] = letter
        }
      }
    }

    guess(chosenWord, userInput)

    //take guessed letter and fill it into usedLetters area

    usedLetterArr = usedLetterArr + userInput
    usedLetters.innerHTML = usedLetterArr

    console.log(currentArr)
    console.log(answerArr)
    userTurnNumber.innerHTML = "You're on turn #" + userTurns
    blankArea.innerHTML = answerArr.join("")
    letterInput.value = ""

    if (answerArr.join("") === chosenWord) {
      userTurnNumber.innerHTML = "You WIN!"
    }
  }
})
