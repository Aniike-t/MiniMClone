import "../math/utils.js";

class Point {
    constructor(canvas, x, y) {
        this.canvas = canvas;
        this.index = this.getIndex();
        
        if (x !== undefined && y !== undefined) {
            // If x and y are provided, use them
            this.x = x;
            this.y = y;
        } else {
            // If x and y are not provided, generate random values
            this.x = this.randomX();
            this.y = this.randomY();
        }

        this.radius = 10; // Radius of the circular shape
        this.shape = this.getRandomShape(); // Shape of the point
    }

    getRandomShape(){
        const shapes= ['circle', 'square', 'triangle'];
        return shapes[getRandom(3)];
    }

    getIndex() {
        // Implement your logic to get the index
        // For now, let's return a random index as an example
        return getRandom(1000);
    }



    randomX() {
        return getRandom(this.canvas.width);
    }

    randomY() {
        return getRandom(this.canvas.height);
    }
}

export default Point;