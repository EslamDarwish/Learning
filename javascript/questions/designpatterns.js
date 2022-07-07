//Design patterns are a time tested architecture solutions
//which most used design pattern in js 

/*is Module pattern  or revealing module pattern
1- it helps you to create self-contained independent components reduce coupling and well structure code 
2- provide encapsulation and abstraction
*/

/*module pattern = IIFE + enclosures
IIFE-> create  logical namespaces 
enclosures -> help to implemented a good encapsulation
*/

var customerNameSpace = (function () {
    //this is now exposed
    function Customer() {
    }
    //this is not
    function CustomerData() {
    }
    return {Customer}
}
)()

var cust =  new customerNameSpace.Customer(); // this will work
// var notwork = new customerNameSpace.CustomerData(); // this won't work

var providerNameSpace = (function () {
    function Provider() {
    }
}
)()