readline(); // Drop the number of temperatures
let temp = { v: Infinity, n: false };

readline().split(' ').forEach(tmp => {
    let x = parseInt(tmp);
    let isNegative = (x < 0);
    
    x = Math.abs(x);
    if (x < temp.v) {
        temp.v = x
        temp.n = isNegative;
    } else if (x === temp.v && !isNegative && temp.n) {
        temp.n = false;
    }
});

print(temp.v === Infinity ? 0 : (temp.n ? -temp.v : temp.v));