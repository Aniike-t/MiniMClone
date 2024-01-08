class TempPoint {
    constructor(x, y, context) {
        this.x = x;
        this.y = y;
        this.context = context;
        this.selected = false;
        
    }
    checkSelection(){
        if(this.x === -10 && this.y === -10){
            this.selected = false;
            return false;
        }
        else{
            this.selected = true;
            return true;
        }
    }
    updatePosition(x, y) {
        this.x = x;
        this.y = y;
    }
    draw({color="green"}={}) {
        this.context.fillStyle = color;
        this.context.beginPath();
        this.context.arc(this.x, this.y, 10, 0, Math.PI * 2);
        this.context.fill();
        this.context.closePath();
    }
    disSelect(){
        this.selected = false;
        this.updatePosition(-10, -10);
    }
    tempPointPosX(){
        return this.x;
    }
    tempPointPosY(){
        return this.y;
    }
}
export default TempPoint;