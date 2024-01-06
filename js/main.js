// main.js

import PointManager from './points/pointsManager';
import TempPoint from './points/tempPoint';

// Initialize variables
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
const pointManager = new PointManager(context, canvas);
let frameCount = 0;
canvas.width = 800;
canvas.height = 600;

// Create a single instance of TempPoint
const tempPoint = new TempPoint(-10, -10, context);

// Event listener for mousemove
canvas.addEventListener('mousemove', function (e) {
  const mouseX = e.clientX - canvas.getBoundingClientRect().left;
  const mouseY = e.clientY - canvas.getBoundingClientRect().top;
  // Check if the mouse is over any point
  if(isMouseOverPoint(mouseX, mouseY, pointManager.getPoints(), tempPoint, context, canvas)){
    console.log('Mouse is over a point');
  }
  else{
    console.log('Mouse is not over a point');
  }
});

let randomNumberBetween200and400 = 0;

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
  pointManager.drawPoints();
  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();




