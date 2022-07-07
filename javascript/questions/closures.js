// Closures are functions inside function and it makes a normal function stateful.
// is to create self contained code or function and self contained state so you avoid global vars
// expose only what you want

function SimpleFunction() {
    var x = 0;
    return x++
}
function ClosureFunction() {
    var x = 0;

    function Increment() {
        x++
         console.log(x);
    }
    
    return {
        Increment
    }
    

}
console.log(SimpleFunction());
console.log(SimpleFunction());
var ref = ClosureFunction();
ref.Increment();
ref.Increment();
ref.Increment();
ref.Increment();

