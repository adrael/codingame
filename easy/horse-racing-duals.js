const sort = (a, b) => a - b;

print([...Array(parseInt(readline()))]
        .fill()
        .map(() => parseInt(readline()))
        .sort(sort)
        .map((val, idx, arr)=> arr[idx + 1] - val)
        .sort(sort)[1]);