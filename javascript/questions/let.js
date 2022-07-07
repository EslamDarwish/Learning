/* "Let" helps to create immediate block level local scope. 
**
Are variables with let keyword hoisted? 
Yes,but not initialized ,no default value assigned
**
What is temporal dead zone ?
TDZ it's a period or it's a state of a variable where variables are
named in memory but they are not initialized with any value.
**
What difference between var and let ? 
1-scope:
(var->scoped to immediate function body)
(let->scoped to immediate enclosing block)
2-variable initialization:
(var->initialized as undefined )
(let->initialized as nothing )
*/

function Test() {
    let x = 10;
    if (x == 10) {
        let x = 2;
        console.log(x);
    }
    console.log(x);

}
Test();

// //hoisting
// console.log(y); //did hoisted as undefined
// console.log (x) //did hoisted ,but you will get ref error;
// //dead zone of x
// let x=1;
// var y = 10;


//diff
function Test2(){
    if(1==1){
    console. log (x); //undefined
    console. log (y); //ref error
    let y = 10;
    var x =10;
    }
    console.log(x);//10
    console. log (y) //is not defined;
    
}
Test2();