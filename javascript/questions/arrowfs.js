/*

*/

// const profile = {
//     firstName: '',
//     lastName: '',
//     setName: function (name) {
//         let splitName =function(n) {
//             let nameArray = n.split(" ");
//             this.firstName = nameArray[0];
//             this.lastName = nameArray[1];
//         }
//         splitName(name);
//     }
// }
// profile.setName('john doe');
// console.log(profile.firstName)  //firstName not defined;
// console.log(profile.lastName);

const Modifiedprofile = {
    firstName: '',
    lastName: '',
    setName: function (name) {
        let splitName =(n)=> {
            let nameArray = n.split(" ");
            this.firstName = nameArray[0];
            this.lastName = nameArray[1];
        }
        splitName(name);
    }
}
Modifiedprofile.setName('john doe');
console.log(Modifiedprofile.firstName); //ohn
console.log(Modifiedprofile.lastName);//doe
