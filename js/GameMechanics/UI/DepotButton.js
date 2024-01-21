class DepotButton {
    constructor(context, canvas) {
        this.canvas = canvas;
        this.context = context;
        this.isClicked = false;
        this.svgImage = new Image();
        this.svgImage.src = "/DepotButtonUnclicked.png";
        this.svgImage.onload = () => this.drawDepotButton();
        this.clicked = false;
    }

    drawDepotButton() {
        // Draw the button with an image inside
        const buttonWidth = 65;
        const buttonHeight = 50;
        const x = (this.canvas.width - buttonWidth) / 2;
        const y = this.canvas.height - buttonHeight - 10;

        this.context.fillStyle = "white";
        this.context.fillRect(x, y, buttonWidth, buttonHeight);

        // Draw the image inside the button
        this.context.drawImage(this.svgImage, x + 5, y + 5, buttonWidth - 10, buttonHeight - 10);
    }

    isMouseOverDepotButton(x, y) {
        const buttonWidth = 65;
        const buttonHeight = 50;
        const buttonX = (this.canvas.width - buttonWidth) / 2;
        const buttonY = this.canvas.height - buttonHeight - 10;

        const isButton = x >= buttonX && x <= buttonX + buttonWidth && y >= buttonY && y <= buttonY + buttonHeight;
        if (isButton) {
            this.changeImage(this.svgImage.src, "/DepotButtonClicked.png");
            this.clicked = true;
            return true;
        }else{
            this.changeImage(this.svgImage.src, "/DepotButtonUnclicked.png");
            this.clicked = false;
            return false;
        }
    }

    changeImage(src, newSrc) {
        if (src !== newSrc) {
            this.svgImage.src = newSrc;
        }
    }
}

export default DepotButton;
