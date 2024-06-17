function handleKeyPress(key) {
    if (trackedKeys["Control"] && trackedKeys["c"]) {
        nextLine();
    }
    if (key == "Enter") {
        const parsed = parseCommands(typeHere.textContent);
        nextLine();
        // handle commands
    }
    else if (key.length != 1) {
        return;
    }
    else if (/^[a-zA-Z0-9\W\S_]*/.test(key)) {
        typeHere.textContent += key;
    }
}

function nextLine() {
    const currentLine = typeHere.textContent;
    typeHere.textContent = "";
    const div = document.createElement('div');
    div.setAttribute('class', 'prompt-cmd');
    const prompt = document.createElement('p');
    prompt.textContent = PROMPT;
    const last = document.createElement('p');
    last.textContent = currentLine;
    div.appendChild(prompt);
    div.appendChild(last);
    mainContainer.insertBefore(div, initialPrompt);
}

function parseCommands(content) {
    // TODO: this is a very lazy parse and doesn't allow any strings, just basic commands
    return content.split(" ");
}

