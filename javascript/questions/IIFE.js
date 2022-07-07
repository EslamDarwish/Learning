//immediately invoked function expressions
// its an anonymous function invoked immediately and any kind of vars created inside is local to it
//what is name collision? collision happens when same name functions and vars are declared in the same context
//IIFE solves name collision problem because the function doesn't have function name
(function () {
    var y = 10
    console.log("I am IIFE and I will execute once");
})();
console.log(y); //variable is local to function only
