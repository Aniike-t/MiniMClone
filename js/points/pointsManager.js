import Point from './point.js';


class PointManager {
    constructor(context, canvas) {
        this.canvas = canvas;
        this.points = [];
        this.context = context;
    }
    addRandomPoint() {
        let point = new Point(this.canvas);

        if (checkRandomIsCorrect(point, this.points)) {
            this.points.push(point);
        } else {
            console.log('Point already exists');
        }//check if the point is already in the array

    }


    //Check if the point is hovered
    getMouseOverPoint(mouseX, mouseY) {
        // Iterate through points to check if the mouse is over any point
        for (let i = 0; i < this.points.length; i++) {
            const point = this.points[i];
            // Check if mouse coordinates are within the circular boundary of the point
            const distance = Math.sqrt((mouseX - point.x) ** 2 + (mouseY - point.y) ** 2);
            if (distance <= point.radius) {
                return point; // Return the first point found under the mouse
            }
        }
        return null; // Return null if no point is found under the mouse
    }

    getPoints() {
        return this.points;
    }



    drawPoints() {
        this.points.forEach(point => {
            this.context.fillStyle = 'red';
            this.context.beginPath();
            this.context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
            this.context.fill();
            this.context.closePath();
        });
    }
}

export default PointManager;