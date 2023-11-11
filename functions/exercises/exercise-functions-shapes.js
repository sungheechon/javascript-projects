

let singleCharacter = "$";

function makeLine(size) {
    let strLine = '';

    for (i = 0; i < size; i++) {
        strLine += singleCharacter;
    }
    return strLine;
}

console.log(makeLine(5));

console.log("----------"); //// create line to read the printed output easier


function makeSquare(size) {
    let strSquare = ""; //accumulator

    for (let i = 0; i < size; i++) {
        strSquare += makeLine(size);
        if (i < size - 1) {
            strSquare += "\n";
        }
    }
    return strSquare;
}
console.log(makeSquare(5));

console.log("----------"); //// create line to read the printed output easier


function makeRectangle(width, height) {
    let strRectangle = "";
    for (let i = 0; i < height; i++) {
        strRectangle += (makeLine(width)) + "\n";
    }
    return strRectangle.slice(0, -1);
}

console.log(makeRectangle(5, 3));

console.log("----------"); //// create line to read the printed output easier

function makeDownwardStairs(height) {
    let strDownwardStairs = "";
    for (let i = 1; i <= height; i++) {
        strDownwardStairs += makeLine(i) + "\n";
    } return strDownwardStairs.slice(0, -1);
}

console.log(makeDownwardStairs(5));

console.log("----------"); //// create line to read the printed output easier


function makeSpace(size) {
    let strSpace = '';

    for (i = 0; i < size; i++) {
        strSpace += " ";
    }
    return strSpace;
}

function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = "";
    spaceLine = (makeSpace(numSpaces))+(makeLine(numChars))+(makeSpace(numSpaces));
    return spaceLine;
}

console.log(makeSpaceLine(3, 5));

console.log("----------"); //// create line to read the printed output easier

function makeIsoscelesTriangle(height) {
    let isoscelesTriangle = "";
    for (let i = 0; i < height; i++) {
        isoscelesTriangle += makeSpaceLine(height - i -1, 2 * i + 1) + "\n";
    }
    return isoscelesTriangle.slice(0, -1);
}
console.log(makeIsoscelesTriangle(5));

console.log("----------"); //// create line to read the printed output easier

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

function makeDiamond(height) {
    let diamond = "";
    diamond = makeIsoscelesTriangle(height) + "\n" + reverse(makeIsoscelesTriangle(height));
    return diamond;
}

console.log(makeDiamond(5));