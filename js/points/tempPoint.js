class TempPoint {
    constructor(x, y, context) {
        this.x = x;
        this.y = y;
        this.context = context;
        this.selected = false;
        
    }
    checkSelection(x, y){
        if(x === -10 && y === -10){
            this.selected = false;
        }
        else{
            this.selected = true;
        }
    }
    updatePosition(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log(this.x, this.y);
        this.context.fillStyle = "black";
        this.context.beginPath();
        this.context.arc(this.x, this.y, 10, 0, Math.PI * 2);
        this.context.fill();
        this.context.closePath();
    }
    disSelect(){
        this.selected = false;
        this.updatePosition(-10, -10);
    }
}
export default TempPoint;