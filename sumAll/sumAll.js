const sumAll = function(begin, end) {
    if (begin < 0 || end < 0) return 'ERROR';
    if (!Number.isInteger(begin) || !Number.isInteger(end)) return 'ERROR';

    let sum = 0;
    for (i = Math.min(...arguments); i <= Math.max(...arguments); i++) {
        sum+=i;
    }
    return sum;
}

module.exports = sumAll
