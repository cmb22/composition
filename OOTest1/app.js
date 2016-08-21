/*function x() {
    p = 1;

    return {
        say: function () {
        console.log(p);
    }
    };

};

var test = new x();
test.say();
*/

"use strict";

const barker = (state) => ({
    bark: () => console.log('Woof, I am ' + state.name)
});

const driver = (state) => ({
    drive: () => {
    state.position = state.position + state.speed;
    console.log('i drive too ', state.position);
}
});

const killer = (state) => ({
    kill: () => console.log('I kill')
})
const murderRobotDog = (name)  => {
    let state = {
        name,
        speed: 100,
        position: 10
    }
    return Object.assign(
        {},
        barker(state),
        driver(state),
        killer(state)
    )
}
const bruno =  murderRobotDog('bruno')
bruno.bark() // "Woof, I am Bruno"
bruno.kill();
bruno.drive();
console.log(bruno);






//foo.call(bar, 1, 2, 3); // results in a = 1, b = 2, c = 3
