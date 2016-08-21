"use stict";

/*
var Person = (function() {
    var nameSymbol = Symbol('name');
    function Person(name) {
        this[nameSymbol] = name;
    }​
    Person.prototype.getName = function() {
        return this[nameSymbol];
    };​
    return Person;
}());

    */

'use strict';
/*
var Person = (function() {
    var PRVname;
        function Person(name) {
            PRVname = name;
        }
    Person.prototype.getName = function () {
        console.log(PRVname);
    };
    Person.prototype.setName = function (name) {
        PRVname = name;
    };
    return Person;
})();

var p1 = new Person('tom1');
p1.getName()

var p2 = new Person('tom2');
p2.setName('george')
p2.getName()


*/
function test(x) {
  var a = Array.prototype.slice.call(arguments).toString();

  var b = function() {
        var c = 'Arguments were: ';
        for (var i=0; i < a.length; i++) {
            if(a.charAt(i) != ',' && i != a.length-1) {
                c += a.charAt(i) +' ' ;
            }
            if (i === a.length-1 ) {
                c += '& ' + a.charAt(i);
            }
        }
      return c;
    };
    //b();
    //console.log(a.length)
    console.log(b())
}

test(1,2,3,4,5)

let array1 = ['a','b','c']

let arrayresult = array1.map(x => x.toUpperCase())

console.log(arrayresult);

var someString = '123456789';


var iterator = someString[Symbol.iterator]();
console.log(iterator.next())

let str1 = '';
for (var x of someString){
    str1 += x + ' ';
}
console.log(str1)



/*
function iter(x, arr)
{
    if (arr  === undefined || arr === null) {
        var arr = [];
    }
    let result = arr;
    let r  = x.next()
        if (r.done) {
            return result
        }
        else if (!r.done) {
            result.push(r.value*1 +1)
        return iter(x, result);
    }
}

console.log(iter(iterator))
*/
//console.log(iterator.next().value,iterator.next().value, iterator.next().value)