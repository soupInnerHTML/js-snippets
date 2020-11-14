let stringToTranslate = window.getSelection().toString();
let translateCase = chars => [...chars].map(char => char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase()).join``

let clearTranslateFromInput = string => {
    window.getSelection().baseNode.data = translateCase(string);
    return [...window.getSelection().anchorNode.childNodes].map(e => e.value = translateCase(string))
}

clearTranslateFromInput(stringToTranslate)