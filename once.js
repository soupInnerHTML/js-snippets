function* createGenerator() {
    yield 1
}

let gen = createGenerator()

let once = fn => gen.next().value && fn;


console.log(once(12222))
console.log(once(1222))
console.log(once(122))
console.log(once(12))
console.log(once(1))
