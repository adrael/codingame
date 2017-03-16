const width = parseInt(readline()); // the number of cells on the X axis
const height = parseInt(readline()); // the number of cells on the Y axis

let map = [];

const findRN = (index, line, position) => {
    switch (line[index]) {
        case '0':
            return index + ' ' + position;
        case '.':
            return findRN(index + 1, line, position);
        default:
            return '-1 -1';
    }
};

const findDN = (index, position) => {
    if (index >= map.length) {
        return '-1 -1';
    }

    switch (map[index][position].value) {
        case '0':
            return position + ' ' + index;
        case '.':
            return findDN(index + 1, position);
        default:
            return '-1 -1';
    }
};

for (let i = 0; i < height; ++i) {
    map.push([]);

    // On the first run of each line, we can compute the right neighbor for each cell
    readline()
        .split('')
        .map((cell, index, line) => {
            map[i].push({
                value: cell,
                coords: index + ' ' + i,
                rightNeighbor: findRN(index + 1, line, i)
            });
        });
}

map.forEach((line, y) => {
    // On the second run, we can compute the neighbor beneath each cell
    line.forEach((cell, x) => {
        if (cell.value === '.')
            return;

        print(cell.coords + ' ' + cell.rightNeighbor + ' ' + findDN(y + 1, x));
    });
});