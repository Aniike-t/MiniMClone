class Track {
    constructor(p1, p2, ctx, canvas, TrackColor) {
        this.ctx = ctx;
        this.p1 = p1;
        this.p2 = p2;
        this.color = TrackColor;
        this.canvas = canvas;
    }
}

export default Track;