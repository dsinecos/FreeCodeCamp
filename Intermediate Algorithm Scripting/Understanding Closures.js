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
