console.time('Execution Time');
const n = 132729610
// const n = 31



const minNumberOfSquares = (n) => {
    let squares = 0;
    let spaceLeft = n
    let nextSquare;

    while (spaceLeft > 0) {
        if (spaceLeft < 4) {
            squares += spaceLeft
            break;
        }
        nextSquare = Math.floor(Math.pow(spaceLeft, 0.5))
        spaceLeft -= Math.pow(nextSquare, 2)
        squares += 1
    }
    return squares
}

console.log('n: ', n, '\nminNumberOfSquares: ', minNumberOfSquares(n), '\n')
console.timeEnd('Execution Time');