function afactorial(length) {
  return Array
    .from({length}, (_, i) => i + 1)
    .reduce((acc, current) => acc * current, 1)
}

function rfactorial(length) {
  return length > 1 ? length * rfactorial(length - 1) : 1
}

console.log(afactorial(5), rfactorial(5))
