document.addEventListener("DOMContentLoaded", function() {
    const numBubbles = 50; 
    for (let i = 0; i < numBubbles; i++) {
        createBubble();
    }
});

function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    
    const xPos = Math.random() * window.innerWidth;
    const yPos = Math.random() * window.innerHeight;
    const size = Math.random() * 20 + 10; 

    bubble.style.left = xPos + "px";
    bubble.style.top = yPos + "px";
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    const randomColor = generateRandomColor();
    bubble.style.backgroundColor = randomColor;

    document.querySelector(".bubbles").appendChild(bubble);
}

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    
    return "rgba(" + r + "," + g + "," + b + ",0.6)"; // Alpha value set to 0.6 for semi-transparency
}
