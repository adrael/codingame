while (true) {
    let h = 0, j = 0;
    for (let i = 0; i < 8; ++i) {
        var mH = parseInt(readline());
        if (mH > h) {
            h = mH;
            j = i;
        }
    }
    print(j);
}