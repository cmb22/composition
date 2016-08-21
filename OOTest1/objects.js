/**
 * Created by chrisblyth on 16.08.16.
 */
"use strict"


/*
let obj1 = { a: 1, b: 2, c: 3 };

for (let x in obj1)
    console.log(obj1[x]);


 var obj = {  val: 1, name: 'chris', house: 'yes', cat: ' no'};



// Object.keys(obj).forEach( (key) => console.log(obj[key]) );


 for (var item in obj) {
 console.log(obj[item]);
 }


//var objw = Iterator(obj);
*/



function X() {
    let Uname = '';
    return {
        setName: (name) => {Uname = name;},
        getName: () => console.log(Uname)
    }
   // console.log(this.string);
}

let y = new X();
let z = new X();
y.setName('tom1')
y.getName();
z.setName('tom2')
z.getName();
y.getName();
//console.log(y.name);

/*
let WaitaWhile = new Promise(function(resolve, reject) {
    setTimeout(resolve, 2000)
}).then(function() {
            console.log('finished')
        })

var p = new Promise((resolve, reject) => reject(7));
p.then((val) => console.log('resolved ', val),
    (val) => console.log('rejected')); // 5
*/

function delay(interval, msg, counter) {
    var count = counter;
    if (isNaN(count)) {
        count = 0;
    }
    return new Promise(function (resolve, reject) {
       setTimeout(resolve, interval);
    })
        .then(function() {
            console.log(msg[count]);
        })
        .then( function() {
           if( count < msg.length-1) {
               count++;
               return delay(interval, msg, count )
           }

        });

}

//delay(2000, ['Waited 2 seconds', '...', 'waited some more']);

(test1.name)