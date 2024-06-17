// This file is expected to be loaded after the other scripts.
const myConsole = new MyConsole();

window.addEventListener("keydown", (event) => {
    myConsole.onKeyDown(event.key);
});

window.addEventListener("keyup", (event) => {
    myConsole.onKeyUp(event.key);
});
