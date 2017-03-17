const inputs = readline().split(' ');
const nbFloors = parseInt(inputs[0]); // number of floors
const width = parseInt(inputs[1]); // width of the area
const nbRounds = parseInt(inputs[2]); // maximum number of rounds
const exitFloor = parseInt(inputs[3]); // floor on which the exit is found
const exitPos = parseInt(inputs[4]); // position of the exit on its floor
const nbTotalClones = parseInt(inputs[5]); // number of generated clones
const nbAdditionalElevators = parseInt(inputs[6]); // ignore (always zero)
const nbElevators = parseInt(inputs[7]); // number of elevators

let elevators =[];
elevators[exitFloor] = exitPos;

for (let i = 0; i < nbElevators; ++i) {
    const inputs = readline().split(' ');
    elevators[parseInt(inputs[0])] = parseInt(inputs[1]); // Position of the elevators on each floor
}

while (true) {
    const inputs = readline().split(' ');
    const cloneFloor = parseInt(inputs[0]); // floor of the leading clone
    const clonePos = parseInt(inputs[1]); // position of the leading clone on its floor
    const d = inputs[2]; // direction of the leading clone: LEFT or RIGHT

    if (elevators[cloneFloor] > clonePos && d === 'LEFT' || elevators[cloneFloor] < clonePos && d === 'RIGHT') {
        print('BLOCK');
    } else {
        print('WAIT');
    }
}