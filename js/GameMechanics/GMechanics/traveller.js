class Traveller{
    constructor(context, x, y, dist){
        this.x = x + 14*(dist+1);
        this.y = y - 14;
        this.context = context;
        this.index = getRandom(1000000);
        this.radius = 5;
        this.color = "grey";
    }

    draw(){
        this.context.fillStyle = this.color;
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.context.fill();
        this.context.closePath();
    }
}

export default Traveller;