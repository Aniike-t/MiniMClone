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

        this.context.fill();
        this.context.closePath();
    }
}