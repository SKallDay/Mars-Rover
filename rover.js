module.exports =  class Rover {
  constructor(xCordinate, yCordinate, direction) {
    this.xCordinate = xCordinate;
    this.yCordinate = yCordinate;
    this.direction = direction;
  }

  command(command) {
    if(command === 'M') {
      this.move()
    } else if (command === 'L' || command === 'R') {
      this.turn(command);
    }
  }

  move() {
    switch (this.direction) {
      case 'N':
        this.yCordinate += 1;
        break;
      case 'E':
        this.xCordinate += 1;
        break;
      case 'S':
        this.yCordinate -= 1;
        break;
      case 'W':
        this.xCordinate -= 1;
        break;
      default:
        break;
    }
  }

  turn(command) {
    const turns = {L: -1, R: 1}
    const directionDictionary = { N: 0, E: 1, S: 2, W: 3 };
    let directionAsInt = directionDictionary[this.direction];
    let direction = (4 + ((directionAsInt + turns[command]) % 4)) % 4;
    let directionAsString = this.getDirectionAsString(direction);
    this.direction = directionAsString;
    }

  getDirectionAsString(direction) {
    let directionAsString = '';

    if (direction === 0) {
      directionAsString = 'N';
    } else if (direction === 1) {
      directionAsString = 'E';
    } else if (direction === 2) {
      directionAsString = 'S';
    } else if (direction === 3) {
      directionAsString = 'W';
    }
    return directionAsString;
  }

  getPosition() {
    return [this.xCordinate, this.yCordinate, this.direction].join(' ');
  }
}

