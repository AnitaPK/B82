console.log("Start")
for (i = 0; i <= 10; i++) {
    console.log(i)
}
console.log("End")

function print1_10() {
    for (i = 0; i <= 10; i++) {
        console.log(i)
    }
}
console.log("**************")
console.log("Start")
print1_10()
console.log("End")

console.log("using set time out**************")

console.log("Start")
setTimeout(print1_10, 5000)
console.log("End")
