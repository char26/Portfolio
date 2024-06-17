class MyConsole {
    PROMPT = "charlie@portfolio:~$";
    mainContainer = document.getElementById("main-container");
    initialPrompt = document.getElementById("cursor");
    typeHere = document.getElementById("type-here");
    constructor() {
        this.trackedKeys = {};
    }

    onKeyDown(key) {
        this.trackedKeys[key] = true;
        this.handleKeyPress(key);
    }

    onKeyUp(key) {
        this.trackedKeys[key] = false;
    }

    handleKeyPress(key) {
        if (this.trackedKeys["Control"] && this.trackedKeys["c"]) {
            nextLine();
        }
        if (key == "Enter") {
            const parsed = this.parseCommands(this.typeHere.textContent);
            this.handleCommands(parsed);
            this.nextLine();
        }
        else if (key == "Backspace") {
            if (this.typeHere.textContent.length > 0)
                this.typeHere.textContent = this.typeHere.textContent.slice(0, this.typeHere.textContent.length - 1);
        }
        else if (key.length != 1) {
            return;
        }
        else if (/^[a-zA-Z0-9\W\S_]*/.test(key)) {
            this.typeHere.textContent += key;
        }
    }

    nextLine() {
        const currentLine = this.typeHere.textContent;
        this.typeHere.textContent = "";
        const div = document.createElement('div');
        div.setAttribute('class', 'prompt-cmd');
        const prompt = document.createElement('p');
        prompt.textContent = this.PROMPT;
        const last = document.createElement('p');
        last.textContent = currentLine;
        div.appendChild(prompt);
        div.appendChild(last);
        this.mainContainer.insertBefore(div, this.initialPrompt);
    }

    parseCommands(content) {
        // TODO: super lazy, just want to get the concept up
        return content.split(" ");
    }

    handleCommands(parsedCommands) {
        // TODO: super lazy, just want to get the concept up
        if (!parsedCommands) return;
        else if (parsedCommands.includes("-h") || parsedCommands.includes("--help")) {
            const div = document.createElement('div');
            div.setAttribute('class', 'prompt-cmd');
            const output = document.createElement('p');
            output.textContent = `
            Lots of help


            Stuff goes here
            `;
            div.appendChild(output);
            this.mainContainer.insertBefore(div, this.initialPrompt);
        }
    }
}
