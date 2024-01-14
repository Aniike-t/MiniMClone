// main.js

import PointManager from './points/pointsManager';
import TempPoint from './points/tempPoint';
import Mouse from './mouse';
import TrackManager from './points/trackManager';
import SceneDraw from './points/sceneDraw';
import TempTrack from './points/temp/tempTrack';

// Initialize variables
let TrackColor = "blue";
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
const pointManager = new PointManager(context, canvas);
const trackManager = new TrackManager(context, canvas, TrackColor);
const tempPoint = new TempPoint(-10, -10, context);
const tempTrack = new TempTrack(context);
const overPoint = new TempPoint(-10, -10, context);
const sceneDraw = new SceneDraw(context, canvas, pointManager, trackManager, tempPoint, tempTrack, overPoint);


canvas.width = 800;
canvas.height = 600;

// Create a single instance of TempPoint

Mouse(canvas, context, pointManager, tempPoint, tempTrack, overPoint, trackManager);



pointManager.addPoint(100, 100);
pointManager.addPoint(200, 200);
trackManager.addTrack(pointManager.getRandomPoint(), pointManager.getRandomPoint());



// Game loop
function gameLoop() {

  // Update game logic here

  context.restore();
  context.clearRect(0, 0, canvas.width, canvas.height);
  sceneDraw.draw();
  sceneDraw.drawStatic();
  context.save();
  requestAnimationFrame(gameLoop);
}

window.AddPoint = function() {
  pointManager.addRandomPoint();
}

window.AddTrack = function() {
  trackManager.addTrack(pointManager.getRandomPoint(), pointManager.getRandomPoint());
}

window.ChangeLine = function(color) {
  TrackColor = color;
  trackManager.updateColor(TrackColor);
}

sceneDraw.drawStatic();
context.save();
// Start the game loop
gameLoop();




