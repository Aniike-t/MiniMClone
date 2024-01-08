class SceneDraw{
    constructor(context, canvas, pointManager, trackManager, tempPoint, tempTrack){
        this.canvas = canvas;
        this.context = context;
        this.pointManager = pointManager;
        this.trackManager = trackManager;
        this.tempPoint = tempPoint;
        this.tempTrack = tempTrack;
        this.color = "blue"
    }

    drawStatic(){
        this.trackManager.drawTracks();
        this.pointManager.drawPoints();
        this.context.save();
    }

    draw() {
        this.context.restore();
        if (this.tempTrack.willDraw && this.tempPoint.checkSelection()) {
            this.tempTrack.drawTempTrack();
            this.color = "yellow";
        }else{
            this.tempTrack.willDraw = false;
            this.color = "blue";
        
        }
        this.tempPoint.draw({ color: this.color });
         // Draw the temporary point
        this.context.save();
    }

}

export default SceneDraw;