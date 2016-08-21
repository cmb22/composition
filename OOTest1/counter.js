function count(x) {
    var state = x;
    if (state > 0) {
        state++;
        console.log(state);
    }
    else {
        state = 1;
        console.log(state);
    }
    return state;
}

var x = count(1);
x();