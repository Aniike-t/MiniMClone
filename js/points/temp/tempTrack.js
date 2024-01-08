class TempTrack {
    constructor(context) {
        this.context = context;
        this.willDraw = false;
        this.x1 = -10;
        this.y1 = -10;
        this.x2 = -10;
        this.y2 = -10;
    }

    tempDraw(mouseX, mouseY, tempPointX, tempPointY) {
        this.x1 = mouseX;
        this.y1 = mouseY;
        this.x2 = tempPointX;
        this.y2 = tempPointY;

        this.drawTempTrack();
    }

    drawTempTrack() {
        // Clear the canvas before drawing the temporary track
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

        this.context.strokeStyle = "yellow";
        this.context.lineWidth = 3;
        this.context.beginPath();
        this.context.moveTo(this.x1, this.y1);
        this.context.lineTo(this.x2, this.y2);
        this.context.stroke();
        this.context.closePath();
    }

    select() {
        this.drawTempTrack(); // Draw the temporary track on selection
        this.willDraw = !this.willDraw;
    }
}

export default TempTrack;
