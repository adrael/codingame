const W = parseInt(readline());
const H = parseInt(readline());
const T = readline().split('');

let result = '';

for (let i = 0; i < H; ++i) {
    const ROW = readline();

    T.forEach(letter => {
        result += ROW.substr(((parseInt(letter, 36) - 9 || 27) - 1) * W, W);
    });

    result += '\n';
}

print(result);