import Track  from "./track.js";

class TrackManager {
    constructor(context, canvas, TrackColor, RedTrack, BlueTrack) {
        this.canvas = canvas;
        this.tracks = [];
        this.context = context;
        this.TrackColor = TrackColor;
        this.RedTrack = RedTrack;
        this.BlueTrack = BlueTrack;
    }
    updateColor(color) {
        this.TrackColor = color;
    }
    
    addTrack(p1, p2) {
        if (p1 === undefined || p2 === undefined) {
            return;    
        }
        
        else if ((p1.x===p2.x && p1.y===p2.y) || existTrack(new Track(p1, p2, this.context, this.canvas, this.TrackColor),this.tracks)) {
            return;
        }
        else{
            
            let track = new Track(p1, p2, this.context, this.canvas, this.TrackColor);

            if(this.TrackColor === "red" && this.RedTrack.addTrack(track)){
                this.tracks.push(track);
                console.log(this.tracks);   
                this.RedTrack.ConsoleLog();
            }
            else if(this.TrackColor === "blue" && this.BlueTrack.addTrack(track)){
                this.tracks.push(track);
                console.log(this.tracks);
                this.BlueTrack.ConsoleLog();
            }
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