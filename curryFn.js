let sum = (a, b, c) => a + b + c

let curry = fn => {
  let args = fn.length
  let calls = []
  
  return inner = (call) => {
    calls.push(call)
    if(args > 1) {
      --args
      return inner.bind(call)
    }
    else {
      return fn(...calls)
    }
    
  }
}

let curried = curry(sum)

console.log(curried(3)(2)(1))