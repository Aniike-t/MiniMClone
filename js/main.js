// main.js

import { init, GameLoop } from 'kontra';
import Point from './points/point';
import PointManager from './points/pointsManager';
import screenProperties from './screen_config/screenProperties';

// Initialize Kontra
let { canvas, context } = init();

const pointManager = new PointManager(context, canvas);
let frameCount = 0;
canvas.width = 800;
canvas.height = 600;


// Event listener for mousemove
canvas.addEventListener('mousemove', function (e) {
  const mouseX = e.clientX - canvas.getBoundingClientRect().left;
  const mouseY = e.clientY - canvas.getBoundingClientRect().top;
  console.log(mouseX, mouseY);
  // Check if the mouse is over any point
  isMouseOverPoint(mouseX, mouseY, pointManager.getPoints());
});


let randomNumberBetween200and400 =0;
// Game loop
let loop = GameLoop({
  update: function () {
    // Update game logic here



    // Check if the mouse is over any point continuously
    //isMouseOverPoint(mouseX, mouseY, pointManager.getPoints())

    // Add a random point every second
    if (frameCount  === randomNumberBetween200and400) {
      frameCount = 0;
      randomNumberBetween200and400 = getRandomArbitrary(200,400)
      console.log(randomNumberBetween200and400);
      pointManager.addRandomPoint(context, canvas);
    }
    console.log(frameCount);

    frameCount++;
  },
  render: function () {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Render points
    pointManager.drawPoints();
  }
});





// Start the game loop
loop.start();
