const repeatString = function(stringRepeated, timesRepeated) {
    let finalString = '';
    if (timesRepeated < 0) return "ERROR";
    for (i = 0; i < timesRepeated; i++) {
        finalString += stringRepeated;
    }
    return finalString;
}

module.exports = repeatString
