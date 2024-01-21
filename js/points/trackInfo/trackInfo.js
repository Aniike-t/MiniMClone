class TrackInfo{
    constructor(){
        this.trackPath = [];
        this.CollectionOfTracks = [];
        this.TrackPoints = [];
    }
    addTrack(track){
        if(this.extractIndex(track)){
            return true;
        }
        else{
            return false;
        }
    }
    ConsoleLog(){
        console.log(this.TrackPoints);
    }

    extractIndex(track){
        if(this.TrackPoints.length == 0){
            this.TrackPoints.push(track.p1);
            this.TrackPoints.push(track.p2);
            this.CollectionOfTracks.push(track);
            console.log(this.TrackPoints);
            return true;
        }else if(this.endPointChecking(track.p1,track.p2)){
            this.CollectionOfTracks.push(track);
            console.log(this.TrackPoints);
            return true;
        }
        else{
            console.log(this.TrackPoints);
            return false;
        }
    }

    endPointChecking(p1, p2) {
        if (p1  === this.TrackPoints[0] ) {
            this.addInStart(p2);
            console.log("add1")
            return true;
        } else if (p1  === this.TrackPoints[this.TrackPoints.length - 1] ) {
            this.addInEnd(p2);
            console.log("add2")
            return true;
        } else if (p2  === this.TrackPoints[0] ) {
            this.addInStart(p1);
            console.log("add3")
            return true;
        } else if (p2  === this.TrackPoints[this.TrackPoints.length - 1] ) {
            this.addInEnd(p1);
            console.log("add4")
            return true;
        }
        else{
            return false;
        }

    }
    
    addInStart(p) {
        this.TrackPoints.unshift(p);
        console.log(this.TrackPoints);  
    }
    
    addInEnd(p) {
        this.TrackPoints.push(p);
        console.log(this.TrackPoints);
    }
}
export default TrackInfo;