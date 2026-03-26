const number = [1,2,3,4,5]
const name = ["A","b","C","d"]

// const emp = [1, "John","Pune","HR",9876543211] 
// emp[1]

const fruits = ["Apple","Banana","Mango"]

console.log(typeof(fruits))

console.log(fruits[2])
console.log(fruits)
fruits[2] = "Raw Mango"
console.log(fruits)

fruits[3] = 'Chickoo'
console.log(fruits)

// fruits[10] = "Grapes"
// console.log(fruits)

// for add element 
// push  unshift

fruits.push("Grapes")
console.log(fruits)


fruits.unshift("Orange")
console.log(fruits)

//for remove element
// pop shift
fruits.pop()
console.log(fruits)
fruits.shift()
console.log(fruits)

// slice    splice

const subFruits = fruits.slice(1,3)
console.log(subFruits,"subFruits")

fruits.splice(2, 1)
console.log(fruits)

fruits.splice(0,0, "Pinapple","Kiwi")
console.log(fruits)

fruits.splice(3,1,"DragonFruit")
console.log(fruits)


for(let i=0; i<fruits.length; i++){
    console.log("I Like to Eat", fruits[i].toUpperCase())
}

// for in  for of 

for(let index in fruits){
    console.log("I love to eat ", fruits[index])
}

for (let value of fruits){
    console.log("I want to buy ", value)
}

// forEach(). map().  //return all elements 

fruits.map((f,i)=>{
    console.log(f,i)
})

for(i=0;i<number.length;i++){
    console.log(number[i]**2)
}

number.map((n)=>console.log(n**2))
console.log("_______________________")
// indexOf(). rerturn index Number

dragonIndex =fruits.indexOf("DragonFruit")
console.log(dragonIndex)
console.log(fruits)

fruits.splice(dragonIndex,1)
console.log(fruits)



// filter()  returns some elements in array 

endsEFruit = fruits.filter((fruit, i) => fruit.endsWith("ple"))
console.log(endsEFruit)
// find() return single element from array 

startWithA = fruits.find((f,i)=>f.startsWith("A"))
console.log(startWithA)

// sort() //return all elements 
console.log(fruits.sort())

//includes() //return boolean value
console.log(fruits.includes("Apple"))

sum = 0
for(let i=0;i<number.length;i++){
    sum+=number[i]
}

// reduce() // new value return 
totalSum = number.reduce((numSum,v)=> {
    console.log(v,"vNum" )
    console.log(numSum,"numSum")
   return v+numSum
}, 100)
console.log(totalSum)


// some()  

numGREATER3=number.some((v)=> v>3)
console.log(numGREATER3)

// every()
numGThree = number.every((v)=>v>3)
console.log(numGThree)


// concat()

arr = [2,3,4]
arr1 = [5,6,7,8]
arrayNum =arr.concat(arr1, [11,12,13])
console.log(arrayNum)
