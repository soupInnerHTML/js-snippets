let a = n => n + 1
let b = n => n + 2
let c = n => n + 3

let _compose = (...fn) => arg => fn.reduce( (_a, _b) => _b(_a), arg)

function compose (...fn) {
    return arg => fn.reduce( (callStack, current) => current(callStack), arg)
}

let composed = compose(a, b, c)
console.log(composed(12))


// TODO f1(f2(f3(arg))) -> compose(f1, f2, f3)(arg)