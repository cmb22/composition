function Counter(start) {
    var count = start;
    return {
        increment: function() {
            count++;
        },

        get: function() {
            console.log(count);
            return count;
        }
    }
}

var x = Counter(0);

x.increment();
x.increment();
x.get();
x.increment();
x.increment();
x.get();