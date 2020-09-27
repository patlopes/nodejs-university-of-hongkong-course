let rect = require('./retangle');

function solveRect(l,b) {
    console.log("Solving for retangle with l = " + l + " and b = " + b)

    if (l <= 0 || b <=0 ){
        console.log("Tetangle dimensions should be greater than 0")
    }
    else {
        console.log("The area of the retangle is " + rect.area(l,b))
        console.log("The perimiter of the retangle is " + rect.perimeter(l,b))  
    }
}

solveRect(2,4)
solveRect(3,5)