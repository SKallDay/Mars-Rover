module.exports =  class Grid {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  gridLimits(rover) {
    if (rover.xCordinate > this.width || rover.yCordinate < this.width) {
      return 'out of bounds';
    }
  }

  sendCommands(rover, commands) {
    commands.split('').forEach(command => {
      rover.command(command);
    });
  }

  getFinalPosition(rover) {
    return rover.getPosition();
  }
}

