const removeFromArray = function(array, ...args) {
    let set = new Set()
    args.map(x => set.add(x))

    return array.filter(x => !set.has(x))
}

module.exports = removeFromArray
