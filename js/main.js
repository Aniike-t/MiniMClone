// main.js
import kontra from 'kontra';
import { pointerOver ,getPointer, initPointer, init, GameLoop } from 'kontra';
import Point from './points/point';
import PointManager from './points/pointsManager';
import screenProperties from './screen_config/screenProperties';
import { getRandomArbitrary, getRandom } from './math/utils.js';


init();
initPointer();
// Initialize Kontra
let { canvas, context } = init();


const pointManager = new PointManager(context, canvas);
let frameCount = 0;
canvas.width = 800;
canvas.height = 600;








let randomNumberBetween200and400 = 0;
// Game loop
let loop = GameLoop({
  update: function () {
    // Update game logic here

  
    // Add a random point every second
    if (frameCount === randomNumberBetween200and400) {
      frameCount = 0;
      randomNumberBetween200and400 = getRandomArbitrary(200, 400)
      console.log(randomNumberBetween200and400);
      pointManager.addRandomPoint(context, canvas);
      console.log('Pointer position:', pointerX, pointerY);
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
