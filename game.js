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

// let currentWord = []
// const hideLetters = (word) => {
//   for (let i = 0; i < chosenWord.length; i++) {
//     return (currentWord = currentWord + "_")
//   }
// }

// document.querySelector("#answerDiv").innerHTML = answerArray

let userTurns = 8
const youLose = false
if (userTurns === 0) {
  return (youLose = true)
}
console.log(`You're on turn #${userTurns}`)

let userInput = prompt("Guess a letter")
if (userInput !== undefined) {
  userTurns = userTurns - 1
}

let currentArr = []
const guess = (word, letter) => {
  for (let j = 0; j < word.length; j++) {
    if (word[j] === letter) {
      currentArr = answerArr[j] = letter
    }
  }
}

guess(chosenWord, userInput)
console.log(answerArr)
console.log(`You're on turn #${userTurns}`)
