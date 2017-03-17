const inputs = readline().split(' ');
const W = parseInt(inputs[ 0 ]); // width of the building.
const H = parseInt(inputs[ 1 ]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over. -- DON'T CARE

const position = readline().split(' ');
let X0 = parseInt(position[ 0 ]); // Batman X
let Y0 = parseInt(position[ 1 ]); // Batman Y

let minX = 0;
let minY = 0;

let maxX = W;
let maxY = H;

while (true) {
    const bombDir = readline();

    maxX = (bombDir.indexOf('L') !== -1 ? (X0 - 1) : maxX);
    minX = (bombDir.indexOf('R') !== -1 ? (X0 + 1) : minX);

    maxY = (bombDir.indexOf('U') !== -1 ? (Y0 - 1) : maxY);
    minY = (bombDir.indexOf('D') !== -1 ? (Y0 + 1) : minY);

    X0 = Math.floor(((maxX - minX) / 2) + minX);
    Y0 = Math.floor(((maxY - minY) / 2) + minY);

    print(X0 + ' ' + Y0);
}