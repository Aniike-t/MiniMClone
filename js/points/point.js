import "../math/utils.js";

class Point {
    constructor(canvas) {
        this.canvas = canvas;
        this.index = this.getIndex();
        this.x = this.randomX();
        this.y = this.randomY();
        this.radius = 5; // Radius of the circular shape
        
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