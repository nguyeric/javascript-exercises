const caesar = function(string, shift) {
    let encryption = string.split("");
    let charCode;
    shift = shift % 26;

    for (let i = 0; i < string.length; i++) {
        charCode = string.charCodeAt(i)
        if (charCode >= 65 && charCode <= 90) {
            if (charCode + shift > 90)
                encryption[i] = String.fromCharCode(charCode + shift - 26);
            else if (charCode + shift < 65)
                encryption[i] = String.fromCharCode(charCode + shift + 26);
            else
                encryption[i] = String.fromCharCode(charCode + shift);
        }
        if (charCode >= 97 && charCode <= 122) {
            if (charCode + shift > 122)
                encryption[i] = String.fromCharCode(charCode + shift - 26);
            else if (charCode + shift < 97)
                encryption[i] = String.fromCharCode(charCode + shift + 26);
            else
                encryption[i] = String.fromCharCode(charCode + shift);
        }
    }

    console.log(encryption);
    return encryption.join("");
}

module.exports = caesar
