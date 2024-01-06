


function getRandom(boundary){
    return getRandomArbitrary(0, boundary);
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function checkRandomIsCorrect(p, points){
    let isCorrect = true;
    for(let i = 0; i < points.length; i++){
        
        if(p.x === points[i].x && p.y === points[i].y){
            isCorrect = false;
            console.log("Point already exists");
            console.log(p.x, points[i].x, p.y, points[i].y);
        }

    }
    console.log("isCorrect");
    return isCorrect;
}

export {getRandom, getRandomArbitrary, checkRandomIsCorrect};