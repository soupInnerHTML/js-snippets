function add(n, state = 0) {
    let inner = (arg) => add.apply(add, [arg, state + n]);

    inner.toString = () => state + n
    return inner

}


console.log(+add(1)(2)(3))