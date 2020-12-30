Function.prototype.customBind = function(context, ...args) {
  let fn = this
  let bind = {
    ...context,
    fn
  }

  return () => bind.fn(...args)
}

function getVal (...val) {
  return [...val, this.this]
} 

let callee = getVal.customBind({this: 0}, 1, 2, 3)

console.log(callee())