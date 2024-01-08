



function Mouse(canvas, context, pointManager, tempPoint, tempTrack, sceneDraw) {
  let mouseX = 0;
  let mouseY = 0;
  let btnA = false;
  // Attach the contextmenu event listener to your element (e.g., canvas)
  canvas.addEventListener('contextmenu', handleContextMenu);
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('keydown', handleKeyDown);

  function handleMouseDown(e) {
      if (e.button === 2) {
          // Right-click
          tempPoint.disSelect();
      }
  }

  function handleContextMenu(event) {
      event.preventDefault(); // Prevent the default context menu
      // Add your custom context menu logic here if needed
  }

  function handleMouseMove(e) {
      mouseX = e.clientX - canvas.getBoundingClientRect().left;
      mouseY = e.clientY - canvas.getBoundingClientRect().top;
      if(!tempPoint.checkSelection()){
        isMouseOverPoint(mouseX, mouseY, pointManager.getPoints(), tempPoint, context, canvas)
        
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