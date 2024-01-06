class Track {
    constructor(p1, p2, ctx, canvas) {
        this.ctx = ctx;
        this.context = context;
        this.p1 = p1;
        this.p2 = p2;

    }
    draw({ width = 2, color = "black", dash = [] } = {}) {
        this.ctx.beginPath()
        this.ctx.strokeStyle = color
        this.ctx.lineWidth = width
        this.ctx.setLineDash(dash)
        this.ctx.moveTo(this.p1.x, this.p1.y)
        this.ctx.lineTo(this.p2.x, this.p2.y)
        this.ctx.stroke();
        this.ctx.setLineDash([])
    }
}