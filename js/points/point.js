import "../math/utils.js";
import Traveller from "../GameMechanics/GMechanics/traveller.js";

class Point {
    constructor(canvas, x, y) {
        this.canvas = canvas;
        this.index = this.getIndex();
        this.travellers = []; 
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
        this.generateRandomTravellers();
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

    generateRandomTravellers() {
        if(GetRandomTrueFalse()){
            this.travellers.push(new Traveller(this.canvas.getContext('2d'), this.x, this.y, this.travellers.length));
        }
        setTimeout(() => {
            this.generateRandomTravellers();
        }, getRandomArbitrary(2000, 4000));
    }
}

export default Point;