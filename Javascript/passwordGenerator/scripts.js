lengthElemet = document.querySelector("#length")
resultElmt = document.querySelector("#result")
togglePasswordElmt = document.querySelector("#togglePassword")
includeNumbersElmt = document.querySelector("#includeNumbers")

strengthBarElmt = document.querySelector("#strengthBar")

let generatedPassword = ''

let str = ''
let characters = "abcdefghijklmnopqrstuvwxyz"

Caps = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
const specialChars = '@!#$%&*?'
const excludChar = 'IlLOo0'



function createPass(lll) {
    console.log(lll, typeof(lll))
    str = ''
    //   const  PlusChar = characters.concat(nums)
    //   console.log(PlusChar)
    if(includeNumbersElmt.checked ){
        characters+="0123456789"
    }

    


    for (i = 0; i < lll; i++) {
        const randomNum = Math.floor(Math.random() * characters.length)
        console.log(randomNum)
        console.log(characters.charAt(randomNum))
        // str += characters.charAt(randomNum)

        str += characters[randomNum]
    }
    console.log(str,"In create pass")
    return str
}

function generatePassword() {
     resultElmt.value =  ''
    const len = Number(lengthElemet.value)

    const generatedPassword = createPass(len)
    console.log(generatedPassword, "generatedPassword")
    resultElmt.value = generatedPassword

    if (generatedPassword.length < 6) {

        strengthBarElmt.classList.remove('w-50', 'bg-warning')
        strengthBarElmt.classList.add("w-25", "bg-danger")
        strengthBarElmt.textContent = "weak"
    } else if (generatedPassword.length >= 6 && generatedPassword.length < 8) {
        strengthBarElmt.classList.remove('w-25', 'bg-danger')

        strengthBarElmt.classList.add("w-50", "bg-warning")
        strengthBarElmt.textContent = "good"
    }

}


function togglePasswordVisibility() {
    resultElmt.setAttribute("type", "password")
    if (togglePasswordElmt.checked) {
        resultElmt.setAttribute('type', 'text')
    }
}

