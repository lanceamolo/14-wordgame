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

let userTurns = 8
const youLose = false
if (userTurns === 0) {
  return (youLose = true)
}
// console.log(`You're on turn #${userTurns}`)

const startGame = document.querySelector("#startGame")
startGame.addEventListener("click", () => {
  document.querySelector("#blankArea").innerHTML = answerArr.join("")
})

const guessButton = document.getElementById("guessButton")

guessButton.addEventListener("click", function (e) {
  e.preventDefault()
  const letterInput = document.getElementById("letterInput")
  const userInput = letterInput.value

  if (userInput.length == 0) {
    alert("You need to insert a letter")
  } else {
    let currentArr = []
    const guess = (word, letter) => {
      for (let j = 0; j < word.length; j++) {
        if (word[j] === letter) {
          currentArr = answerArr[j] = letter
        }
      }
    }
    guess(chosenWord, userInput)
    console.log(currentArr)
    console.log(answerArr)
    document.querySelector("#blankArea").innerHTML = answerArr.join("")
    letterInput.value = ""
  }
})

// if (userInput !== undefined) {
//   userTurns = userTurns - 1
// }
