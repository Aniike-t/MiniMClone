class Depot{
    constructor(x, y, context) {
        this.x = x;
        this.y = y;
        this.context = context;
        this.selected = false;
        this.radius = 10;
        this.color = "green";
        this.connected = false;
    }

    ChangeColor(color){
        this.color = color;
    }

    UpdatePosition(x, y) {
        this.x = x;
        this.y = y;
    }

    UpdateConnection(){
        this.connected = true;
    }
    
    draw() {
        this.context.fillStyle = this.color;
        this.context.beginPath();
        this.roundedRect(this.x, this.y, this.width, this.height, this.radius);
        this.context.fill();
        this.context.closePath();
    }

    // Helper function to draw a rounded rectangle
    roundedRect(x, y, width, height, radius) {
        this.context.moveTo(x + radius, y);
        this.context.arcTo(x + width, y, x + width, y + height, radius);
        this.context.arcTo(x + width, y + height, x, y + height, radius);
        this.context.arcTo(x, y + height, x, y, radius);
        this.context.arcTo(x, y, x + width, y, radius);
    } 
}