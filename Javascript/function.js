function functionName(){}

// simple function without Parameter 

function greet(){
    console.log("Hello world")
}

greet()

function greetTOUser(){
    console.log("Hello Amitabh")
}

greetTOUser()


// function with parameter 

function greetTomultiUser(uName){
    console.log('hello', uName)
}

greetTomultiUser('Virat')

function greetMulUserMultiPara(fName,lName){
    console.log("Hello",fName, lName)
}

greetMulUserMultiPara('SuryaKumar',"Yadav")

function add(x,y){
    z = x+y 
    console.log(z)
}

add(2,4)

// simple function in JS 
function addition(a,b){
    return a+b
}
n1 = addition(2,7)
console.log(n1)

add5And6 = () => 5+6 //arrow function 

console.log(add5And6())

additionArraow = (p,q)=> p+q //arrow function with parameter

add9A3 = additionArraow(9,3)
console.log(add9A3)

calculator = (n1,n2) =>{ // arrow function with return keyword
    const nadd = n1+n2
    const sub = n1-n2
    const mul = n1*n2
    const div= n1/n2
    console.log(nadd,sub,mul,div)
    return 'DONE'
}

res = calculator(11,9)
console.log(typeof(res))

// (function(){})
// (()=>{}) 
//anonymous function 

// self Invoked anonymous functions 
// (()=>console.log("hello anonymous function"))()
// (function () {console.log("first hello")})()

// callback function 
// means function as a parameter

// Create a function to calculate the factorial of a number.
// 5! 11! 500! 
// 1*2*3*4*5 
let fact = 1

function factorial(n){
    for(i=1;i<=n;i++){
        // fact = fact *i 
        fact *= i
    }
    return fact
}

console.log(factorial(5))

fact = 1
const factoriaal = (n) => {
    for(i = n; i>=1; i--){
        fact *=i
    }
    return fact
}
console.log(factoriaal(5))
console.log("---------------")
console.log(typeof(fact))
fact = 'ADITYA'
console.log(typeof(fact))

// Implement a function that finds the largest of three numbers.

function findLargest(a,b,c){
    if(a!=b && b !=c && a!=c){
    if(a>b && a>c){
        console.log(a,"A is Largest")
    }else if(b>a && b>c){
        console.log(b,"B is Largest")
    }else{
        console.log(c,"C is Largest")
    }
}
}

findLargest(34,89,89)

function findLargest1(a, b, c) {
    let max = (a > b) ? a : b;
    max = (max > c) ? max : c;
    return max;
}
console.log(findLargest1(10, 25, 15)); 


function findLargestNested(a,b,c){
    if(a>=b){
        if(a>=c){
            console.log("A is greater")
        }else{
            console.log("C is greater")
        }
    }else{
        if(b>=c){
            console.log("B is greater")
        }else{
            console.log("C is greater")
        }
    }
}
 
// Create a function to calculate the area and perimeter of a rectangle.



// Implement a function to determine if a given year is a leap year.


// Write a function to generate a multiplication table for a number. 



// Create a function to reverse a number without using inbuilt functions and no conversion also 
