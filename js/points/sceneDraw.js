class SceneDraw{
    constructor(context, canvas, pointManager, trackManager, tempPoint, tempTrack, overPoint){
        this.canvas = canvas;
        this.context = context;
        this.pointManager = pointManager;
        this.trackManager = trackManager;
        this.tempPoint = tempPoint;
        this.tempTrack = tempTrack;
        this.color = "blue"
        this.overPoint = overPoint;
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
            this.checkPointsOverTempTrack();
            if(this.overPoint.tempPointPosX() === -10 && this.overPoint.tempPointPosY() === -10){

            }
        }else{
            this.tempTrack.willDraw = false;
            this.color = "blue";
            if(this.overPoint.tempPointPosX() === -10 && this.overPoint.tempPointPosY() === -10){

            }
        }
        this.tempPoint.draw({ color: this.color });
         // Draw the temporary point
        this.context.save();
        
    }
    checkPointsOverTempTrack(){
        if(!this.overPoint.selected)
        this.tempTrack.checkPassingPoint(this.pointManager.getPoints(), this.overPoint);
        else{
            this.overPoint.draw({color: "black"})
        }
    }

}

export default SceneDraw;