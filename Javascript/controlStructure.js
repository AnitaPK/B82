//  Arithmetic Operators 

//  x+y 
//  x-y 
//  x*y 
//  x/y 
//  x%y  returns remainder


//  Comparison Operators
// x = 5 
// y = 5 
// z = '5' 
// p = 8
// x == y    //true
// x == z //true
// x === z  //false

// x != p  //true

//  x > p //false
//  x < p //true 
//  x>=y //true 
//  x <= z //true

//  x !== y  //false 
//  5 !== 5 

//  x != z 
//  5 != '5' //true 

//  x !== z 
//  5 !== '5'  //true

//  <==
//  >==


//   Logical Operators 

// && and 
// || or 
// ! 

// (!isAdmin){

// }

// x= 5
// y=5
// (x == 5 &&   y == 10)

// (x <=10 && y<=10)
// 0       0            0
// 0       1            0
// 1       0            0
// 1       1            1 


// 0       0         0   
// 0       1         1  
// 1       0         1  
// 1       1         1 




//   Assignment Operators 

// =       x = 10
// ++     x++   11
// --    x--   10
// =+5.   x=+5   x = x+5. 
// =-5.   x=-5.   x= x-5
// *5.   x=*5.   x= x*5
// /5     x=/5.   x= x/5
// %5.    x=55.   x= x%5

//    Operator Precedence




age = 20

isAdmin = true
isIndian = false
name1 = 'Hello World'

if (age >= 18) {
    console.log('can vote')
}

if (age >= 18 && isIndian) {
    console.log("Can vote")
} else {
    console.log("Can't vote")
}

//  0. - 100 

//  0-34. fail 
//  35-50 C 
//  51-60 C+ 
//  61-70 B 
//  71-80 B+ 
//  81- 90 A 
//  91-100 A+ 


// marks = 0 -  100 
marks = -5
if (marks >= 0 && marks <= 100) {
    if (marks >= 0 && marks < 35) {
        console.log("Fail")
    } else if (marks >= 35 && marks <= 50) {
        console.log("C")
    } else if (marks >= 51 && marks <= 60) {
        console.log("C+")
    } else if (marks >= 61 && marks <= 70) {
        console.log("B")
    } else if (marks >= 71 && marks <= 80) {
        console.log("B+")
    } else if (marks >= 81 && marks <= 90) {
        console.log("A")
    } else {
        console.log("A+")
    }
} else {
    console.log("Invalid ")
}


// exp.  > 5.      Kunda Pedha
// sal. > 200000   KajuKatali 

// exp < 5.    Sonpapadi  

// sal < 200000 GulbJamun 

exp = 8 ; sal = 4000
if(exp >= 5 ){
    console.log("Kunda Pedha")
    if(sal >= 200000){
        console.log("KajuKatali")
    }else{
        console.log("GulbJamun")
    }
}else{
    console.log("Sonpapadi")
    if( sal >= 200000){
        console.log("KajuKatali")
    }else{
        console.log("GulbJamun ")
    }
}

// emp 1.   5. 9000000.  Kunda Pedha   KajuKatali 
// emp 2    9 70000     Kunda Pedha.  GulbJamun
// emp 3.   2 40000.   Sonpapadi  GulbJamun
// emp 4.   1 1000000 Sonpapadi KajuKatali

console.log(Date() )

today = new Date()
console.log(today)

// day = today.getDay()

// date = today.getDate()

// hrs = today.getHours()

// console.log(day,date,hrs)


// day 0-6 
// month 0-11 
day = 10
switch(day){
    case 0:
        console.log("Sunday")
        break
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    default:
        console.log("Invalid")
}
// 19 
// 13 

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


// for(initialization ; condition; increament/decreament) {

// }

for( i=1; i<=10;i++){
    n = 7*i
    console.log("7 * " ,i, "= ", n)
}
// console.log(i)
//        i               n 
// 1st    1               7*1 = 7
// 2nd.   2.              7*2 = 14
// 3rd.   3.              7*3 = 21
// 4th.   4.              7* 4 = 28
// 5th    5               7* 5 = 35
// 6th.    6.             7 * 6 = 42
// 7th.    7              7*7 = 49
// 8th     8.             7*8 = 56
// 9th.    9.             7 *9 = 63
// 10      10             7*10 = 70
// 11      11. 


j = 11 
while(j<=20){
    console.log(7 * j)
    j++
}

z = 21
do{
console.log(7 * z)
z++
}while(z<=3)


for( i=1; i<=10;i++){
    if(i == 5){
        break
    }
    n = 9*i
    console.log("9 * " ,i, "= ", n)

}
console.log("-------------------------")
for( i=1; i<=10;i++){
    if(i == 5){
        continue
    }
    n = 9*i
    console.log("9 * " ,i, "= ", n)
}


num = 8997 

if(num%2 == 0){
    console.log("Even")
}else{
    console.log("Odd")
}