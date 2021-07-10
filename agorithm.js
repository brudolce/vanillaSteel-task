export const minNumberOfSquares = (n) => {
    console.time('Algo Execution Time');
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
    console.timeEnd('Algo Execution Time');
    return squares
}