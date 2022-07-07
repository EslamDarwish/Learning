/* You can modify const only if its an object */

const x= [1,2];
const y=1;
//y=2; // can't do this
x.push(3);
//x=x //can't do this also ;
console.log(x);
console.log(y);