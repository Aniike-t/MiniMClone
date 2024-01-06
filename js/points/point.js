
import { getRandomArbitrary, getRandom } from '../math/utils.js';

// point.js

import { initPointer, Sprite } from 'kontra';

// Call initPointer to enable pointer events
initPointer();

class Point extends Sprite {
  constructor(canvas) {
    super();
    this.canvas = canvas;
    // Set the sprite properties
    this.color = 'red';
    this.radius = 5; // Radius of the circular shape
    this.width = this.radius * 2;
    this.height = this.radius * 2;

    // Set event handlers
    this.onDown = this.handleDown.bind(this);
    this.onUp = this.handleUp.bind(this);
    this.onOver = this.handleOver.bind(this);
    this.onOut = this.handleOut.bind(this);

    // Explicitly define getIndex method
    this.getIndex = this.getIndex.bind(this);

    // Initialize properties
    this.index = this.getIndex();
    this.x = this.randomX();
    this.y = this.randomY();
  }

  getIndex() {
    return getRandom(1000);
  }

  randomX() {
    return getRandom(this.canvas.width);
  }

  randomY() {
    return getRandom(this.canvas.height);
  }

  handleDown() {
    // Handle onDown event
    console.log(`Point ${this.index} clicked.`);
  }

  handleUp() {
    // Handle onUp event
    console.log(`Point ${this.index} released.`);
  }

  handleOver() {
    // Handle onOver event
    console.log(`Pointer over Point ${this.index}.`);
  }

  handleOut() {
    // Handle onOut event
    console.log(`Pointer out of Point ${this.index}.`);
  }
}

export default Point;
