const heart = document.querySelector("body");

heart.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span"); //creates a span each time mouse moves
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random()*100; 
    spanEl.style.width = size + "px"; /* to change the size of hearts*/
    spanEl.style.height = size + "px"; /* to change the size of hearts*/
    heart.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
})