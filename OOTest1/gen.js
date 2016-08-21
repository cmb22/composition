/**
 * Created by chrisblyth on 12.08.16.
 */
"use strict"


function* GenSetup() {

   var x =  'elephant';
    console.log('here2 ', x);
   var y = yield 2;
    console.log('y ', y);
   var z = yield 3;

    console.log(x,y,z);
}

var gen = function(GenSetup) {

    var myGen = GenSetup();
    myGen.next();
    myGen.next('1');
    //myGen.next();

    function handle(yielded) {
        if (!yielded.done) {
            console.log('got here');
            return handle(myGen.next(data));
        }
        else
            return;
    }
    handle(myGen.next());
}

 gen(GenSetup);


/*
function* sequence()
{
    var i = 0;
   do
        yield ++i;
   while (i < 10);
}

for (var j of sequence())
//var j = sequence().next().value;
    console.log(j)
*/



/*var storeX = sequence();
let result = () => storeX.next().value;
console.log(result());
console.log(result());
*/

var a = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryl­lium",
    "h"

];

var a2 = (a.filter(s => s.length < 7)).map(s => s.toLowerCase()) ;
console.log(a2);

//console.log((a2.length > 1) ? a2 : "hello");






// var obj = {  val: 1, name: 'chris', house: 'yes', cat: ' no'};


/*
Object.keys(obj).forEach(function(key) {
    console.log(obj[key]);
});



for (var item in obj) {
    console.log(obj[item]);
}
    */

//var objw = Iterator(obj);
