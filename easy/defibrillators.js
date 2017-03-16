const factory = (LON, LAT) => ({ LON: LON, LAT: LAT });
const distance = (fA, fB) => Math.sqrt(Math.pow(fA.LON - fB.LON,2) + Math.pow(fA.LAT - fB.LAT,2));
const cleanCoord = coord => parseFloat(coord.replace(',', '.'));

const LON = readline();
const LAT = readline();
const N = parseInt(readline());
const dyingPeopleInNeedOfHelp = factory(cleanCoord(LON), cleanCoord(LAT));

let closest = Infinity;
let nearestDefib = '';

for (var i = 0; i < N; i++) {
    const DEFIB = readline().split(';'); // [ ID, NAME, ADDRESS, PHONE, LON, LAT ]
    const DPOS = factory(cleanCoord(DEFIB[4]), cleanCoord(DEFIB[5]));
    const dist = distance(DPOS, dyingPeopleInNeedOfHelp);

    if (dist < closest) {
        closest = dist;
        nearestDefib = DEFIB[1];
    }
}

print(nearestDefib);