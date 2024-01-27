function Mouse(canvas, context, pointManager, tempPoint, tempTrack, overPoint, trackManager ) {
    let mouseX = 0;
    let mouseY = 0;
    let btnA = false;
    let buttonDepot = false;


    const BGimage = new Image();
    BGimage.src = "/BG1main.png";
    // Attach the contextmenu event listener to your element (e.g., canvas)
    canvas.addEventListener('contextmenu', handleContextMenu);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('wheel', handleScroll, { passive: false });

    function handleMouseDown(e) {     
        if (e.button === 2) {
            // Right-click
            console.log("Right Click");
            tempPoint.disSelect();
        } else if (e.button === 0 && overPoint.selected) {
            trackManager.addTrack(
                pointManager.getPoint(
                    Math.floor(tempPoint.tempPointPosX()),
                    Math.floor(tempPoint.tempPointPosY())
                ),
                pointManager.getPoint(
                    Math.floor(overPoint.tempPointPosX()),
                    Math.floor(overPoint.tempPointPosY())
                )
            );
            tempPoint.updatePosition(
                overPoint.tempPointPosX(),
                overPoint.tempPointPosY()
            );
            tempPoint.selected = true;
            if (overPoint.tempPointPosX() === -10 && overPoint.tempPointPosY() === -10) {
                console.log("handleMouseDown is -10 -10");
            }
        }
        
    }

    function handleScroll(event) {
        if (event.ctrlKey) {
            event.preventDefault(); // Prevent the default zoom action
        }
    }

    function handleContextMenu(event) {
        event.preventDefault(); // Prevent the default context menu
        // Add your custom context menu logic here if needed
    }

    function handleMouseMove(e) {
        mouseX = e.clientX - canvas.getBoundingClientRect().left;
        mouseY = e.clientY - canvas.getBoundingClientRect().top;        

        if (!tempPoint.checkSelection()) {
            isMouseOverPoint(mouseX, mouseY, pointManager.getPoints(), tempPoint, context, canvas)
            if (overPoint.tempPointPosX() === -10 && overPoint.tempPointPosY() === -10) {

            }
        }
        if (tempPoint.checkSelection()) {
            tempTrack.checkPassingPoint(pointManager.getPoints(), overPoint);
            if (overPoint.tempPointPosX() === -10 && overPoint.tempPointPosY() === -10) {

            }
        }

        tempTrack.tempDraw(mouseX, mouseY, tempPoint.tempPointPosX(), tempPoint.tempPointPosY())
    }
    function handleKeyDown(e) {
        if (e.key.toLowerCase() === 'a') {
            tempTrack.select();
            btnA = !btnA; // Toggle the state
        }
    }
}

export default Mouse;