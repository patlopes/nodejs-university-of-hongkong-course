 const rect = require('./retangle');

function solveRect(l, b) {
    console.log("Solving for retangle with l = " + l + " and b = " + b)

    rect(l, b, (err, retangle) => {
        if (err) {
            console.log("ERROR: ", err.message);
        }
        else {
            console.log("The area of the retangle with l = " + l +
                " and b = " + b + " is " + retangle.area())
            console.log("The perimeter of the retangle with l = " + l +
                " and b = " + b + " is " + retangle.perimeter())
        }
    });
    console.log("This statment is after de call to rect")
}

solveRect(2, 4)
solveRect(3, 5)