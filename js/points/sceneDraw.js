class SceneDraw{
    constructor(context, canvas, pointManager, trackManager, tempPoint){
        this.canvas = canvas;
        this.context = context;
        this.pointManager = pointManager;
        this.trackManager = trackManager;
        this.tempPoint = tempPoint;
        
    }
    draw(){
        
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.tempPoint.draw();
        this.trackManager.drawTracks();
        this.pointManager.drawPoints();
        
    }
}

export default SceneDraw;