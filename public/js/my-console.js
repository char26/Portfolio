class MyConsole {
    PROMPT = "charlie@portfolio:~$";
    VALID_PROJECTS = ["gink"]; // TODO: add others
    mainContainer = document.getElementById("main-container");
    initialPrompt = document.getElementById("cursor");
    typeHere = document.getElementById("type-here");
    constructor() {
        this.trackedKeys = {};
        this.createMessage("Welcome to my portfolio! Check out the commands below, or bring them back with -h or --help.");
        this.printHelp();
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
            this.nextLine();
        }
        if (key == "Enter") {
            const parsed = this.parseCommands(this.typeHere.textContent);
            this.nextLine();
            this.handleCommands(parsed);
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
        let [func, ...args] = (" " + content).split(' ');
        args = Object.fromEntries(args.map(arg => arg.split('=')));
        return args;
    }

    handleCommands(parsedCommands) {
        // TODO: super lazy, just want to get the concept up
        const keys = Object.keys(parsedCommands);
        if (keys.length > 1) {
            this.createMessage("ERROR: too many arguments.");
            return;
        }
        if (!parsedCommands) return;
        else if (keys.includes("-h") || keys.includes("--help")) {
            this.printHelp();
        }
        else if (parsedCommands["projects"]) {
            if (parsedCommands["projects"] == "all") {
                for (const projectName of this.VALID_PROJECTS) {
                    this.printProject(projectName);
                }
            }
            else if (!this.VALID_PROJECTS.includes(parsedCommands["projects"])) {
                this.createMessage("ERROR: not a valid project.");
            }
            this.printProject(parsedCommands["projects"]);
        }
        else if (keys.includes("github")) {
            window.open("https://github.com/char26");
        }
        else if (keys.includes("linked-in")) {
            window.open("https://www.linkedin.com/in/charles-alders-842bbb226/");
        }
        else if (keys.includes("clear")) {
            this.clear();
        }
        else if (keys.includes("bio")) {
            this.createMessage("TODO: bio");
        }
        else {
            this.createMessage("ERROR: unknown command.");
        }
    }

    printHelp() {
        this.createMessage(`
            commands:
            bio <-------------------------------------------> get to know me!
            github <--------------------------------------> opens a new tab to my GitHub profile.
            linked-in <-----------------------------------> opens a new tab to my LinkedIn profile.
            projects=all <-------------------------------> list all projects and their descriptions
            projects=x [options: gink] <----------> list the description of a specific project
            clear <-----------------------------------------> clear the console
            `, true);
    }

    printProject(projectName) {
        switch (projectName) {
            case "gink":
                this.createMessage("Gink: This is a project and i did it");
                break;
        }
    }

    createMessage(text, isHtml = false) {
        const div = document.createElement('div');
        div.setAttribute('class', 'prompt-cmd');
        const output = document.createElement('p');
        isHtml ? output.innerText = text : output.innerHTML = text;
        div.appendChild(output);
        this.mainContainer.insertBefore(div, this.initialPrompt);
    }

    clear() {
        this.mainContainer.innerHTML = `
        <div id="cursor" class="prompt-cmd">
            <p id="prompt">charlie@portfolio:~$</p>
            <p id="type-here"></p>
        </div>`;
        this.initialPrompt = document.getElementById("cursor");
        this.typeHere = document.getElementById("type-here");
    }
}
