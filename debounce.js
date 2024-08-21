function debounce(func, wait) {
  let timeout;

  return function(...args) {
    if(timeout) {
      return null
    }
    else {
      timeout = setTimeout(() => {
        func(...args)
        timeout = null
      }, wait)
    }
  };
}

function callTest(...args) {
  console.log(this, args)
}

const dCallTest = debounce(callTest.bind({test: 'test'}, 'test'), 200)

dCallTest()
dCallTest()
dCallTest()

setTimeout(() => dCallTest(), 1000)
