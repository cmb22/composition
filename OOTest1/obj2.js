/**
 * Created by chrisblyth on 18.08.16.
 */

"use strict"

function MyObj(inname, inmessage) {
    let name = inname;
    let message = inmessage.toString();
return {
    getName: function () {
        return name
    },
    setName: function (newname) {
        name = newname;
    }
}
}


/*MyObj.prototype.getName = function() {
    return name;
}*/

var test1 = new MyObj('tom','hello');
console.log(test1.getName());

var test2 = new MyObj('tom2','hello');
test2.setName('tom changed')
console.log(test2.getName());