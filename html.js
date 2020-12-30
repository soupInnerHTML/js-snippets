let buffer = []
class Format {

    static get div() {
        let inner = (...sub) => `<div>${sub.join``}</div>`
        buffer.unshift(inner)
        return inner
    }
    static get h1() {
        let inner = (...sub) => `<h1>${sub.join``}</h1>`
        buffer.unshift(inner)
        return inner
    }
    static get p() {
        let inner = (...sub) => `<p>${sub.join``}</p>`
        buffer.unshift(inner)
        return inner
    }
    static get span() {
        let inner = (...sub) => `<span>${sub.join``}</span>`
        buffer.unshift(inner)
        return inner
    }
}

Function.prototype.h1 = ((...n) => {
    // buffer.unshift(Format.h1)
    function observer(...n) {
        return this(...n)
    }
    return observer.bind(buffer[0])
})()
Function.prototype.p = function (...n) {
    buffer.unshift([Format.p, n])
    return buffer
}
Function.prototype.span = function (...n) {
    buffer.unshift([Format.span, n])
    return buffer
}
Function.prototype.div = function (...n) {
    buffer.unshift([Format.div, n])
    return buffer
}

