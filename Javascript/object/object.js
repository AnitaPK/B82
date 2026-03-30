// OOPs 

// Object -> instance of class 

// class ->blueprint 


student = {}
console.log(typeof(student))

stud = ['anjali','rahul','tina']

studAnjali = {
    name:"Anjali",
    year:2,
    contact:"9876543211",
    subjects:["Maths","English","Marathi"]
}
console.log(studAnjali.name)

console.log(studAnjali["year"])
studAnjali.year = 3 
console.log(studAnjali)

studAnjali.lastName = "Sharma" 
console.log(studAnjali)

// delete studAnjali.contact 

studAnjali.address = {
    city:"Manali",
    state:"Himachal Pradesh",
    Pincode:123445
}

console.log(studAnjali.address.state)
console.log(studAnjali["address"].state)

studAnjali.subjects.forEach((sub)=>{
    console.log(sub)
})

studAnjali.getFullName = ()=>{
    return studAnjali.name + " " + studAnjali.lastName
}

console.log(studAnjali.getFullName())


// this  refers to object  

for (x in studAnjali){
    console.log(x)
    console.log(studAnjali[x])
}

// for(v of studAnjali){
//     console.log(v)
// }
console.log("____________________")
console.log(Object.keys(studAnjali))
console.log("____________________")

console.log(Object.values(studAnjali))
console.log("____________________")

console.log(Object.entries(studAnjali))

const strAnjali = JSON.stringify(studAnjali)
console.log(strAnjali, typeof(strAnjali))

newObjAnjali = JSON.parse(strAnjali)
console.log(newObjAnjali, typeof(newObjAnjali))
