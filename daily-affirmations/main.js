const containerEl = document.querySelector(".container");

const affirmations = ["capable of greatness", "in control of my destiny", " enough, just as I am", "surrounded by abundance", "free from fear and doubt", "worthy of love and respect"];

let affirmationsIndex = 0;
let character = 0;

display();

function display() {
    character++;
    containerEl.innerHTML = `
    <h1>I am ${affirmations[affirmationsIndex].slice(0, character)}</h1>
    `;
    if (character === affirmations[affirmationsIndex].length) {
        affirmationsIndex++
        character = 0;
    }

    if (affirmationsIndex === affirmations.length) {
        affirmationsIndex = 0;
    }
    setTimeout(display, 175)
}