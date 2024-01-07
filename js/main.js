// main.js

import PointManager from './points/pointsManager';
import TempPoint from './points/tempPoint';
import Mouse from './mouse';
import TrackManager from './points/trackManager';
import SceneDraw from './points/sceneDraw';

// Initialize variables
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
const pointManager = new PointManager(context, canvas);
const trackManager = new TrackManager(context, canvas);
const tempPoint = new TempPoint(-10, -10, context);
const sceneDraw = new SceneDraw(context, canvas, pointManager, trackManager, tempPoint);

let frameCount = 0;
let framesPerSecond = 0;
canvas.width = 800;
canvas.height = 600;

// Create a single instance of TempPoint

Mouse(canvas, context, pointManager, tempPoint);


let randomNumberBetween200and400 = 0;

pointManager.addPoint(100, 100);
pointManager.addPoint(200, 200);
trackManager.addTrack(pointManager.getRandomPoint(), pointManager.getRandomPoint());



// Game loop
function gameLoop() {

  // Update game logic here
  // Add a random point every second
  if (frameCount === randomNumberBetween200and400) {
    frameCount = 0;
    randomNumberBetween200and400 = getRandomArbitrary(200, 400);
    pointManager.addRandomPoint(context, canvas);
    console.log(pointManager.getPoints());
  }
  frameCount++;
  // Render points


  sceneDraw.draw();

  
  
  requestAnimationFrame(gameLoop);
}

window.AddPoint = function() {
  pointManager.addRandomPoint();
}

window.AddTrack = function() {
  trackManager.addTrack(pointManager.getRandomPoint(), pointManager.getRandomPoint());
}

// Start the game loop
gameLoop();




