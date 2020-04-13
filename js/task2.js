console.log("Завдання 2");
console.log("Трикутник Паскаля");
printPascalTriangle(10, 4);

function printPascalTriangle(iterationLength, numberSpace) {
    let previousLine = [1];
    let currentLine = [];

    console.log("|0|" + getBlankLine((iterationLength) * numberSpace) + previousLine[0]); //print first line
    for (let i = 1; i < iterationLength; i++) {
        for (let k = 0; k < previousLine.length + 1; k++) {
            currentLine.push(getArrayItemOrZero(previousLine, k - 1) + getArrayItemOrZero(previousLine, k))
        }
        let line = '|' + i + '|' + getBlankLine((iterationLength - i) * numberSpace); //print starting white space and line number
        currentLine.forEach(number => {
            line += number += getBlankLine(numberSpace * 2 - number.toString().length + 1);
        });
        console.log(line);
        previousLine = currentLine;
        currentLine = [];
    }
}

function getArrayItemOrZero(array, index) {
    if (index < 0 || index > array.length - 1) {
        return 0
    } else {
        return array[index];
    }
}

function getBlankLine(length) {
    return new Array(length).join(' ')
}