/**
 * Created by chrisblyth on 12.04.16.
 */


var peopleFactory = function(name,age,state) {

    var temp = {};
    temp.age = age;
    temp.name =  name;
    temp.state = state;

    return {
        print: function () {
            console.log(temp.name, temp.age, temp.state);
        }
    }

}


var p1 = peopleFactory('tom',19,'qld');
p1.age = 2;
p1.print();

var p2 = peopleFactory('jane',29,'dmf');
p2.print();
//console.log(p1.age);
p1.print();