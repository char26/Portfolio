let fontSize = 72;
if (window.screen.width > 700) fontSize = 32;
else if (window.screen.width < 1200) fontSize = 65;

let vara = new Vara(
    "#text-animation-container",
    "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json",
    [
        {
            text: "Hello, I'm Charlie",
            duration: 3000
        }
    ],
    {
        strokeWidth: 2,
        color: "#fff",
        fontSize: fontSize,
        textAlign: "center"
    }
);