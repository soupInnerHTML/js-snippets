let stringToTranslate = window.getSelection().toString();
let isEn = stringToTranslate.match(/[a-zA-z]/g)
let isRu = stringToTranslate.match(/[а-яА-я]/g)
let alpha = [
    `qwertyuiop[]asdfghjkl;'zxcvbnm,./QWERTYUIOP{}ASDFGHJKL:"ZXCVBNM<>?`,
    `йцукенгшщзхъфывапролджэячсмитьбю.ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ,`,
]

let indexOfSomeChar = (index, char) => alpha[index].indexOf(char)
let translateChars = (string, rootIndex, ruOrEn = -(rootIndex - 1)) => (
    [...string].map(char => indexOfSomeChar(ruOrEn, char) >= 0 ? alpha[rootIndex][indexOfSomeChar(ruOrEn, char)] : char).join``
)

let clearTranslateFromInput = index => {
    window.getSelection().baseNode.data = translateChars(stringToTranslate, index);
    [...window.getSelection().anchorNode.childNodes].map(e => e.value = translateChars(stringToTranslate, index))
}

if (isEn) {
    clearTranslateFromInput(1)
    // console.log(window.getSelection())
}

if (isRu) {
    clearTranslateFromInput(0)
    // console.log(window.getSelection())
}

