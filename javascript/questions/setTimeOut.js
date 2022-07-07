// it becomes a sync so even if you set time out to zero it will still execute after them

var x = 10;
var y = 20;
var z = 30;


setTimeout(function () {
    console.log(x);

}, 0);

console.log(y);
console.log(z);

/*output : 20
30
10*/ 