var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position

while (true) {
    var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    var direction = '';
    var NorS = (lightY - initialTY);
    if (NorS > 0) {
        direction += 'S';
        ++initialTY;
    } else if (NorS < 0) {
        direction += 'N';
        --initialTY;
    }
    
    var EorW = (lightX - initialTX);
    if (EorW > 0) {
        direction += 'E';
        ++initialTX;
    } else if (EorW < 0) {
        direction += 'W';
        --initialTX;
    }

    print(direction);
}