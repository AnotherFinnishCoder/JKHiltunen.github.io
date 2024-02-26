// script.js

// Function to generate a random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Button click event
document.getElementById('changeColorButton').addEventListener('click', function () {
    // Get the color
    const newColor = getRandomColor();

    // Change the background color of the div
    document.getElementById('colorChangeDiv').style.backgroundColor = newColor;
});
