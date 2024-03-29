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

    addPoint(x, y) {
        
        let point = new Point(this.canvas, x, y);
        this.points.push(point);

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

    getRandomPoint(){
        return this.points[getRandom(this.points.length)];
    }

    drawPoints() {
        this.points.forEach(point => {
            if(point.shape === 'circle'){
                this.context.fillStyle = 'grey';
                this.context.beginPath();
                this.context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
                this.context.fill();
                this.context.closePath();
            }
            else if(point.shape === 'square'){
                this.context.fillStyle = 'grey';
                this.context.beginPath();
                this.context.fillRect(point.x - point.radius, point.y - point.radius, point.radius*2, point.radius*2);
                this.context.closePath();
            }
            else if(point.shape === 'triangle'){
                this.context.fillStyle = 'grey';
                this.context.beginPath();
                this.context.moveTo(point.x, point.y - point.radius);
                this.context.lineTo(point.x - point.radius, point.y + point.radius);
                this.context.lineTo(point.x + point.radius, point.y + point.radius);
                this.context.fill();
                this.context.closePath();
            }
            point.travellers.forEach(traveller => {
                traveller.draw();
            });

        });
    }
    getPoint(x,y){
        return getPointAtXY(x,y,this.points);
    }
}

export default PointManager;