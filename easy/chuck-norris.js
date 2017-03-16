let M = readline();
let m = '';

M.split('').map((c, i, a) => {
        const x = c.charCodeAt().toString(2);
        return (x.length < 7 ? '0'.repeat(7 - x.length) : '') + x;
    })
    .join('')
    .replace(/(1+|0+)/g, '$1 ')
    .split(' ')
    .forEach(group => {
        if (group.trim().length <= 0)
            return;

        m += ' 0' + (group.indexOf('0') !== -1 ? '0 ' : ' ') + '0'.repeat(group.length);
    });

print(m.trim());