
/*javascript hoisting is a mechanism where variables and function
declaration are moved to the top of the scope.*/

console.log(y); // undefined but javascript move the declaration to the top
var y = 10; // hoisting doesn't move the init values only it removes the declaration until exec of this line


// now y become =10