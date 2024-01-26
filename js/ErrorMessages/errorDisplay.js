class ErrorDisplay {
    constructor() {
        this.errorDisplay = document.getElementById('errorBox');
        this.timespan = 1500;
        this.message = 'temp';
    }

    displayError(message) {
        this.errorDisplay.innerHTML = message;
        this.errorDisplay.style.display = 'block';
    }

    ErrorRemover() {
        setTimeout(() => {
            console.log("ErrorRemover called");
            this.errorDisplay.style.display = 'none';
        }, this.timespan);
    }
}

export default ErrorDisplay;