const passwordBox = document.getElementById("password")
const length = 8;
const generate = document.querySelector(".btn")
let img = document.querySelector("img")

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const symbol = "@!$%^&*()_+~#=-/.,'{}:;[]<>?`"
const number = "0123456789"
const allChars = upperCase + lowerCase + number + symbol


const generatePassword = () =>{
    let password = ""
    password+= upperCase[Math.floor(Math.random() * upperCase.length)]
    password+= lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password+= symbol[Math.floor(Math.random() * symbol.length)]
    password+= number[Math.floor(Math.random() * number.length)]

    
    while(length > password.length){
        password+=allChars[Math.floor(Math.random() * allChars.length)]
    }

    passwordBox.value = password
}

img.addEventListener("click", ()=> {
    let copyText = document.getElementById("password")
    copyText.select()

    // Access the system clipboard by using navigator.clipboard
    navigator.clipboard.writeText(copyText.value)
    alert("Copied to the clipboard!", copyText.value);
    copyText.value = ""
})

generate.addEventListener("click", ()=>{
    generatePassword()
})
