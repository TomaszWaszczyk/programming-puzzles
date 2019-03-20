Array.prototype.map = function (fun, thisArg) {
    if(typeof fun !== 'function') {
        throw new Error("The first argument must be of type function");
    }
    var arr = [];
    thisArg = (thisArg) ? thisArg : this;

    thisArg.forEach(function(element) {
        arr[arr.length] = fun.call(thisArgs, element);
    });

    return arr;
};