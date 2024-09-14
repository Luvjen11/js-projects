const heart = document.querySelector("body");

heart.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span"); //creates a span each time mouse moves
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";

    heart.appendChild(spanEl);
})