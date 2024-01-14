function getRandom(boundary) {
    return getRandomArbitrary(0, boundary);
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function checkRandomIsCorrect(p, points) {
    let isCorrect = true;
    for (let i = 0; i < points.length; i++) {

        if (p.x === points[i].x && p.y === points[i].y) {
            isCorrect = false;
        }

    }
    return isCorrect;
}

function isMouseOverPoint(mouseX, mouseY, points, tempPoint, context, canvas) {
    for (let i = 0; i < points.length; i++) {
        const point = points[i];

        // Check if mouse coordinates are within the circular boundary of the point
        const distance = Math.sqrt((mouseX - point.x) ** 2 + (mouseY - point.y) ** 2);

        if (distance <= point.radius) {
            console.log("Temp point selected")
            tempPoint.updatePosition(point.x, point.y);
            tempPoint.draw();
            console.log(tempPoint.x, tempPoint.y)
            return true;
        }
    }
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    return false;
}

function notOP(a){
    if(a == false){
        return true;
    }else{
        return false;
    }
}

function existTrack(track, tracks){
    for (let i = 0; i < tracks.length; i++) {
        const currentTrack = tracks[i];
        if (
            (currentTrack.p1 === track.p1 && currentTrack.p2 === track.p2 && currentTrack.TrackColor === track.TrackColor) ||
            (currentTrack.p1 === track.p2 && currentTrack.p2 === track.p1 && currentTrack.TrackColor === track.TrackColor)
        ) {
            return true;
        }
    }
    return false;
}

function calculateSlope(x1, y1, x2, y2) {
    const slope = (y2 - y1) / (x2 - x1);
    return parseFloat(slope.toFixed(1));
}

function isDistanceLessThan(x, y, a, b, distance) {
    console.log(x,y,a,b,distance);
    const squaredDistance = (x - a)**2 + (y - b)**2;
    console.log(squaredDistance);
    return squaredDistance < distance;  // 5^2 = 25
}

function getPointAtXY(x,y,points){
    console.log("hiiiiiiiiiiiiiiiiiiiiiiiiii")
    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        if(point.x == x && point.y == y){
            return point;
        }
    }
    return null;
}