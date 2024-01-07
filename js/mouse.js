function Mouse(canvas, context, pointManager, tempPoint) {
  // Attach the contextmenu event listener to your element (e.g., canvas)
  canvas.addEventListener('contextmenu', handleContextMenu);
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mousemove', handleMouseMove);

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
      const mouseX = e.clientX - canvas.getBoundingClientRect().left;
      const mouseY = e.clientY - canvas.getBoundingClientRect().top;
      
      // Check if the mouse is over any point
      if (isMouseOverPoint(mouseX, mouseY, pointManager.getPoints(), tempPoint, context, canvas)) {
          console.log('Mouse is over a point');
      } else {
          console.log('Mouse is not over a point');
      }
  }
}

export default Mouse;
