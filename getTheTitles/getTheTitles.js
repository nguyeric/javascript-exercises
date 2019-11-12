const getTheTitles = function (books) {
    /* let titles = [];

    books.forEach(element => {
        titles.push(element.title);
    });

    return titles; */

    return books.map(element => element.title);
}

module.exports = getTheTitles;
