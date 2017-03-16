const N = parseInt(readline());
const Q = parseInt(readline());

let map = {
    UNKNOWN: 'UNKNOWN'
};
let result = '';

for (let i = 0; i < N; ++i) {
    var inputs = readline().split(' ');
    map[inputs[0].toLowerCase()] = inputs[1]; // file extension : MIME type
}

for (let j = 0; j < Q; ++j) {
    let fname = readline();
    fname = (/\./g.test(fname) ? fname.split('.') : 'UNKNOWN');
    result += (map[fname[fname.length - 1].toLowerCase()] || 'UNKNOWN') + '\n';
}

print(result);