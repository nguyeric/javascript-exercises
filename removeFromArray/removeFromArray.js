const removeFromArray = function(arr, remove) {
    let newArr = arr;
    for (i = 1; i < arguments.length; i++) {
        for(j = 0; j < arr.length; j++) {
            if (arr[j] == arguments[i]) newArr.splice(j,1);
        }
    }
    return newArr;
}

module.exports = removeFromArray
