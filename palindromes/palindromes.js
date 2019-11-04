const palindromes = function(string) {
    /* let reverse = string.split("").reverse().join("");
    console.log(reverse);
    if (string == reverse) return true;
    return false; */

    let stringArr = string.split("");
    let cleanString = [];
    
    stringArr.forEach(char => {
        if (char.toLowerCase() != char.toUpperCase())
            cleanString.push(char.toLowerCase());
    })

    return (cleanString.join("") == cleanString.reverse().join(""));
}

module.exports = palindromes
