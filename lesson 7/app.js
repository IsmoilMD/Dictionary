const word = document.querySelector(".veriphone")
const form = document.querySelector("#main-form")
const definitionPlace = document.querySelector(".box")
const spellingPlace = document.querySelector(".box1")
const spellingAudio = document.querySelector("#play")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  definitionPlace.innerHTML = ""
  spellingPlace.innerHTML = ""
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`)
 .then(response => response.json())
 .then(number => {
  number.forEach(() => {
    const definitionItem = Object.values(number[0].meanings)[0].definitions[0].definition
    const definitionArea = document.createElement("div")
    definitionArea.innerText = definitionItem
definitionPlace.appendChild(definitionArea)
const spellingItem = Object.values(number[0].phonetic)
const spellingArea = document.createElement("div")
spellingArea.innerText = spellingItem
spellingPlace.appendChild(spellingArea)
spellingAudio.src = number[0].phonetics[0].audio
  });
  console.log(number[0].phonetics[0].audio)
 })
})
