const removeFromArray = function(array, ...args) {
    let arr = array;
    let newArr = [];
    
    for (i = 0; i < arr.length; i++) {
        if(!args.includes(arr[i])) newArr.push(arr[i]);
    }

    console.log(newArr);
    return newArr;
}

module.exports = removeFromArray
