// This file is expected to be loaded after the other scripts.
const PROMPT = "charlie@portfolio:~$";

const mainContainer = document.getElementById("main-container");
const initialPrompt = document.getElementById("cursor");
const typeHere = document.getElementById("type-here");
let trackedKeys = {};



window.addEventListener("keydown", (event) => {
    trackedKeys[event.key] = true;
    handleKeyPress(event.key);

});

window.addEventListener("keyup", (event) => {
    trackedKeys[event.key] = false;
});
