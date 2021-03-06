var x = 3,
    obj = { x: 5 };
obj.fn = (function() {
    console.log('this指的是' + this.x);
    this.x *= ++x;
    return function(y) {
        this.x *= (++x) + y;
        console.log(x);
    }
})();

var fn = obj.fn;
obj.fn(6);
fn(4);
console.log(obj.x, x);