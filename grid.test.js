const Grid = require('./grid');
const Rover = require('./rover');

test('creates grid width', () => {
  let grid = new Grid(1, 2);
  expect(grid.width).toBe(1);
  expect(grid.height).toBe(2);
});

test('intialized rover', () => {
  let rover = new Rover(0, 0, "N");
  expect(rover.xCordinate).toBe(0);
  expect(rover.yCordinate).toBe(0);
  expect(rover.direction).toBe("N");
});

test('set grid limit', () => {
  let grid = new Grid(5, 5);
  expect(grid.width).toBe(5);
  expect(grid.height).toBe(5);
  let rover = new Rover(6, 6);
  expect(grid.gridLimits(rover)).toBe('out of bounds');
});

test('get Rover position', () => {
  let rover = new Rover(4, 3, "S");
  expect(rover.getPosition()).toBe('4 3 S');
});

test('Rover can move', () => {
  let rover = new Rover(4, 3, "N");
  let rover2 = new Rover(4, 3, "S");
  rover.command("M");
  expect(rover.getPosition()).toBe('4 4 N');
  rover2.command("M");
  expect(rover2.getPosition()).toBe('4 2 S');
});

test('Rover can turn right', () => {
  let rover = new Rover(4, 3, "N");
  rover.command("R");
  expect(rover.getPosition()).toBe('4 3 E');
});

test('Rover can turn left', () => {
  let rover = new Rover(4, 3, "N");
  rover.command("L");
  expect(rover.getPosition()).toBe('4 3 W');
});


test('Rover can turn and move', () => {
  let grid = new Grid(5, 5);
  let rover = new Rover(0, 0, "N");
  grid.sendCommands(rover, "MRMMLM")
  expect(rover.getPosition()).toBe('2 2 N');
});

test('Rover can turn and move', () => {
  let grid = new Grid(5, 5);
  let rover = new Rover(0, 0, "N");
  grid.sendCommands(rover, "RMMLML")
  let rover2 = new Rover(0, 0, "N");
  grid.sendCommands(rover2, "MMMMM")
  expect(grid.getFinalPosition(rover)).toBe('2 1 W');
  expect(grid.getFinalPosition(rover2)).toBe('0 5 N');
});