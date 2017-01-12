/*
Understanding closures
- Preserves a copy of the outer function's variables
*/

function fullName(firstName) {
    
    function lastName(lastName) {
        return "This should be the full name " + firstName + " " + lastName;
    }
    
    return lastName;
}

var a = fullName("Michael");
console.log(a("Jackson"));

var b = fullName("George");
console.log(b("Jackson"));


/*
1. Decide the constant to be added or multiplied
2. Decide whether the final o[peration is to be addition or multiplication
*/

function test(num) {
    
    return {
        multiplier: function(array) {
            var newArray = array.map(function(val) {
                return val * num;
                });
            return newArray;
                
        },
      
        adder: function(array) {
            var newArray = array.map(function(val) {
                return val + num;
            });
            return newArray;
        }
    };
}

var a = 12;

var b = [1, 2,3, 4, 5, 6, 7, 8, 9];

var c = test(a);
var d = c.multiplier(b);
var e = c.adder(b);

console.log(d);
console.log(e);
