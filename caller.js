let caller = arr => {
    arr.forEach(item => {
        if (Array.isArray(item)) {
            caller(item)
        }
        else {
            console.log(item)
        }
    })
}

// caller([1, 2, [3, 4, [5, 6, [7, 8]]]])

Array.prototype.diff = function (arr) {
    return this.filter(el => !arr.includes(el))
}

let arr = [[]]
console.log(arr.diff([[]]))
// console.log([void (0)])