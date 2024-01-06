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
            console.log("Point already exists");
            console.log(p.x, points[i].x, p.y, points[i].y);
        }

    }
    console.log("isCorrect");
    return isCorrect;
}

function isMouseOverPoint(mouseX, mouseY, points, tempPoint, context, canvas) {
    for (let i = 0; i < points.length; i++) {
        const point = points[i];

        // Check if mouse coordinates are within the circular boundary of the point
        const distance = Math.sqrt((mouseX - point.x) ** 2 + (mouseY - point.y) ** 2);

        if (distance <= point.radius) {
            console.log('Mouse is over a point:', point);
            tempPoint.updatePosition(point.x, point.y);
            tempPoint.draw();
            return true;
        }
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    return false;
}