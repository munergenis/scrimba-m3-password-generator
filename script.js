const btnGenerate = document.querySelector("#btn-generate")
const pass1El = document.querySelector("#password-1")
const pass2El = document.querySelector("#password-2")
const copied1 = document.querySelector("#copied-1")
const copied2 = document.querySelector("#copied-2")
const passLengthEl = document.querySelector("#pass-length")

const Characters = [
  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
];

let passLength = 15
let pass1 = getRandomPassword()
let pass2 = getRandomPassword()
renderPasswords()

// Event listeners
btnGenerate.addEventListener("click", () => {
  passLength = passLengthEl.value
  getNewPasswords()
  renderPasswords()
})

pass1El.addEventListener("click", () => {
  navigator.clipboard.writeText(pass1)
  copied1.classList.remove("copied-fade-out")
  setTimeout(() => {
    copied1.classList.add("copied-fade-out")
  }, 2000)
})

pass2El.addEventListener("click", () => {
  navigator.clipboard.writeText(pass2)
  copied2.classList.remove("copied-fade-out")
  setTimeout(() => {
    copied2.classList.add("copied-fade-out")
  }, 2000)
})

// Functions
function getNewPasswords() {
  pass1 = getRandomPassword()
  pass2 = getRandomPassword()
}

function renderPasswords() {
  pass1El.textContent = pass1
  pass2El.textContent = pass2
}

function getRandomPassword() {
  let pass = ""
  for (let i = 0; i < passLength; i++) {
    let array = getRandomArray()
    let index = getRandomIndex(Characters[array].length)
    pass += Characters[array][index]
  }
  return pass
}

function getRandomArray() {
  return Math.floor(Math.random() * 4)
}

function getRandomIndex(length) {
  return Math.floor(Math.random() * length)
}