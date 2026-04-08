// Task 1: Print a Square of Asterisks
// Write a function printSquare(n) that prints a square of n x n asterisks.
// Example for n = 5

function printSquare(n){
    for(let i = 1; i<=n; i++){
        line = ''
        for(let j=1; j<=n;j++){
            line = line + "* "
        }
            console.log(line)
    }
    
}
printSquare(5)


//       i             j           line  ''
// 1.    1             1            '*' 
//                     2            "**"
//                     3            '***'
//                     4            '****'
//                     5            '*****'
//                     6
//       2  line = ''  1            '*' 
//                     2            "**"
//                     3            '***'
//                     4            '****'
//                     5            '*****'
//                     6
        // 3 line = ''  1            '*' 
//                     2            "**"
//                     3            '***'
//                     4            '****'
//                     5            '*****'
//                     6
        // 4 line = ''    1            '*' 
//                     2            "**"
//                     3            '***'
//                     4            '****'
//                     5            '*****'
//                     6
        // 5 line = ''    1            '*' 
//                     2            "**"
//                     3            '***'
//                     4            '****'
//                     5            '*****'
//                     6
        // 6


function printTriangle(n){
    for(let i = 1; i<=n; i++){
        line = ''
        for(let j=1; j<=i;j++){
            line = line + "* "
        }
            console.log(line)
    }
}
printTriangle(5)


function printReverseTriangle(n){
    for(let i = 1; i<=n; i++){
        line = ''
        for(let j=1; j<=n-i;j++){
            line = line + "* "
    }
            console.log(line)
}
}
printReverseTriangle(5)


// `
//            *
//          * * *
//        * * * * *
//      * * * * * * *
//    * * * * * * * * *
// `

function printEqTriangle(n){
    for(let i = 1; i<=n; i++){
        line = ''
        for(let j=1; j<=n-i;j++){
            line = line + " "
        }
        for(let k=1 ; k<= i; k++){
            line = line+"* "
        }
            console.log(line)
}
}
printEqTriangle(5)

function printEq11Triangle(n){
    for(let i = 1; i<=n; i++){
        line = ''
        for(let j=1; j<=n-i;j++){
            line = line + "  "
        }
        for(let k=1 ; k<= 2*i-1; k++){
            line = line+"* "
        }
            console.log(line)
}
}
printEq11Triangle(5)

function printEqHHTriangle(n){
    for(let i = 1; i<=n; i++){
        line = ''
        for(let j=1; j<=n-i;j++){
            line = line + "  "
        }
        for(let k=1 ; k<= 2*i-1; k++){
            if(k==1 || k== 2*i-1 || i==n){
            line = line+"* "
            }else{
                line = line+"  "
            }
        }
            console.log(line)
}
}
printEqHHTriangle(5)
function printDiamond(n){
    for(let i = 1; i<=n; i++){
        line = ''
        for(let j=1; j<=n-i;j++){
            line = line + "  "
        }
        for(let k=1 ; k<= 2*i-1; k++){
            line = line+"* "
        }
            console.log(line)
}
for(let i = n-1; i>=1; i--){
        line = ''
        for(let j=1; j<=n-i;j++){
            line = line + "  "
        }
        for(let k=1 ; k<= 2*i-1; k++){
            line = line+"* "
        }
            console.log(line)
}
}
printDiamond(5)


function printEqTrianglenum(n){
    for(let i = 1; i<=n; i++){
        line = ''
        for(let j=1; j<=n-i;j++){
            line = line + " "
        }
        for(let k=1 ; k<= i; k++){
            line = line+i+" "
        }
            console.log(line)
}
}
printEqTrianglenum(5)

function printEq11TriangleNum(n){
    for(let i = 1; i<=n; i++){
        line = ''
        for(let j=1; j<=n-i;j++){
            line = line + "  "
        }
        for(let k=1 ; k<= 2*i-1; k++){
            line = line+i+" "
        }
            console.log(line)
}
}
printEq11TriangleNum(5)