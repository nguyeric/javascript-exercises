const fibonacci = function(index) {
    if (index < 0)
        return "OOPS";
    else if (index == 0)
        return 0;

    let arr = [0, 1];

    
    for (let i = 2; i <= index; i++) {
        arr = [arr[1], arr[0] + arr[1]];
    }
    return arr[1];
}

module.exports = fibonacci
