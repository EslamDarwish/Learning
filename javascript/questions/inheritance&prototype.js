/*
How can we do inheritance in Javascript ?
its object based not a class inheritance; 
Javascript uses object inheritance or prototypical
inheritance. Inheritance is done using Prototype object.

What is prototype in Javascript?
Every JavaScript object has a Prototype object.
It's an inbuilt object provided by JavaScript.
) 
Explain Prototype chaining?
it works as a link list (it checks for availability first in the first item then go up to prototype object and so one till it finds it or throw an exception
*/

//inheritance 
function Employee() {
    this.Name = ""
    this.DoWork = function () {
        alert("Basic work");
    }
    this.Attendance = function () {
        // alert("Attendance needed");
    }
}

function Manager() {
    this.Cabin = "";
    this.DoWork = function () {
        // alert("Manages team");
    }
}

var emp = new Employee();
//inheritance manager is a child of emp
Manager.prototype = emp;
var man= new Manager();
man.Name = "Shiv";
man.Attendance () ;// from emp
man.DoWork ();//from manager because it exist or top the existing dowork

