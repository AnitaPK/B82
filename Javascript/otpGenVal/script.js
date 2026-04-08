btnElemet = document.querySelector('#generateOTP')
resultElement = document.querySelector("#result11")
inputOneElmt = document.querySelector("#inputOne")
inputTwoElmt = document.querySelector("#inputTwo")
inputThreeElmt = document.querySelector("#inputThree")
inputFourElmt = document.querySelector("#inputFour")
function genOTP(){
    n1 = Math.floor((Math.random() *9000) +1000 )
    console.log(n1)
    alert("Your otp is "+ n1)
}
btnElemet.addEventListener('click', genOTP)
function toNextInput(ipNext){
    console.log(ipNext)
    document.getElementById(ipNext).focus()
}
userOTP = ''
function showResult(){
    userOTP = inputOneElmt.value + inputTwoElmt.value +inputThreeElmt.value +inputFourElmt.value
    // for(i = 1; i<=4; i++){
    //     userOTP +=
    // }
    if(userOTP == n1){
        alert("OTP Correct")
    }else{
        alert("Incorrect OTP")
    }

}

resultElement.addEventListener("click", showResult)
