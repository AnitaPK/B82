cName = "Wisdom Sprouts"

cName1 = 'Scalefull Technologies' 

description = `IT Training 

Hub` 


console.log(typeof(cName))

console.log(cName.length)

console.log(cName.toUpperCase())

console.log(cName.toLowerCase())


str1 = 'Wisdom'

str2 = 'Sprouts'


str3 =str1+ " " +str2 
console.log(str3)

str4 = str1.concat(" ", str2," ", description)

console.log(str4)

// Search 
// .indexOf(), .lastIndexOf(), .includes(), .startsWith(), .endsWith().

console.log(cName.indexOf('Sprouts'))
console.log(cName.indexOf('s'))

console.log(cName.lastIndexOf('s'), "Last index of s")

console.log("Includes", cName.includes('dfghjkl'))
console.log("Includes", cName.toLowerCase().includes('sprouts'))

console.log("Starts with",cName.startsWith('Wisdom'))

console.log("Ends with",cName.endsWith('outs'))



// Extracting Substrings
// .slice(), .substring(), .substr() (deprecated but still works).

console.log("slice",cName.slice(4,6))

console.log("substring",cName.substring(2))

// please find difference beetween them



// Trimming Strings
// .trim(), .trimStart(), .trimEnd().

email = '      ghjk@hj.hjk                     '
console.log(email.length)
console.log(email.trim().length)
console.log(email.trimStart().length)
console.log(email.trimEnd().length)



// Replacing Substrings
// .replace() and .replaceAll().
tOne = "mistakes  Mistakes Mistakes are proof that you are trying trying trying"  //growing 

console.log(tOne)
tTwo = tOne.replace("trying","growing")
console.log(tTwo)
tThree = tOne.replaceAll("trying","growing")
console.log(tThree)


// Splitting Strings
// .split() to convert a string into an array.

fruits = 'Apple Banana Mango'
fruitArray = fruits.split(' ')
console.log(fruitArray)


console.log(cName.charAt(0))

for(let i= 0 ; i<cName.length; i++){
    console.log(i, " ::::::  ", cName.charAt(i))
}

// Write a program to count the number of vowels in a given string.
// Check if a string is a palindrome.
// Extract the first word of a sentence.
// Replace all spaces in a string with hyphens (-).
tHyphen = tOne.replaceAll(' ' , '-')
console.log(tHyphen)
// Split a string into an array of words.
// Convert the first letter of each word in a string to uppercase.

tOneArr = tOne.split(" ")
newArray = []
for(i=0;i<tOneArr.length; i++){
    tempWord = tOneArr[i].charAt(0).toUpperCase()+tOneArr[i].substring(1)
    newArray.push(tempWord)
}
console.log(newArray.join(" "))


// Reverse the characters in a string manually (without built-in functions).
// Count the number of occurrences of a specific character in a string.
// Remove all non-alphanumeric characters from a string.
// Check if a string starts and ends with the same character.
