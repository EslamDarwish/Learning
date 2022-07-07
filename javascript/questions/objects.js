/* ways of creating js objects are 
1-literal
2-object.create
3-constructor
4-class es6
*/

//1.literal
var pat = { "name": "", "address": "" };
//if you want to add functions
pat.Admit = function () { alert("Iam") }

// 2. object . create you can create from existing obj
var patnew = Object.create(pat);
patnew.age = 10;

// 3. constructor
function Patient() {
    this.name = "";
    this.address = "";
    this.Admit = function () { }
}
var pat1 = new Patient();

//4. class es6
class PatientClass {
    constructor(name, address) {
        this.name = "";
        this.address = "";

    }
}
var p = new PatientClass();

