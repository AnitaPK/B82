function countVowels() {
    str = document.getElementById("inputPara").value

    vowels = 'aeiouAEIOU'
    let countVowel = 0
    for (i = 0; i < str.length; i++) {

        if (vowels.includes(str.charAt(i))) {
            countVowel++
        }
    }
    document.getElementById("result1").textContent = 
    'Vowel count : ' + countVowel

}

function longestWord(){
    str = document.getElementById("inputPara").value
    let longestWord = ''

    let strArray = str.split(" ")
    for(i=0; i<strArray.length; i++){
        console.log(strArray[i], longestWord)
        if(strArray[i].length > longestWord.length){
            longestWord = strArray[i]
        }
    }
    document.getElementById("result1").textContent = 
            longestWord
}

// str = 'I am Learning HTML'
// after split -> ["I", "am", "Learning","Javascript"]
//     i   strArray[i]     strArray[i] > longestWord.length   longestWord
// 1st 0.   "I".            1> 0                               "I"
// 2nd.1.    "am"           2>1                                "am"
// 3rd 2.   "Learning".     8>2                                "Learning"
// 4th 3.   "HTML"          4>8
