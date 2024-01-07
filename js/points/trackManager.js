import Track  from "./track.js";

class TrackManager {
    constructor(context, canvas) {
        this.canvas = canvas;
        this.tracks = [];
        this.context = context;
    }
    addTrack(p1, p2) {
        if (p1 === undefined || p2 === undefined) {
            console.log("p1 and p2 must be defined");
            
        }
        else if (p1.x===p2.x && p1.y===p2.y) {
            console.log("p1 and p2 must be different");
        }
        else{
            let track = new Track(p1, p2, this.context, this.canvas);
            this.tracks.push(track);
        }
    }
    drawTracks() {
        this.tracks.forEach(track => {
            this.context.strokeStyle = track.color;
            this.context.lineWidth = 3;
            this.context.beginPath();
            this.context.moveTo(track.p1.x, track.p1.y);
            this.context.lineTo(track.p2.x, track.p2.y);
            this.context.stroke();
            this.context.closePath();
        });
    }
}
export default TrackManager;