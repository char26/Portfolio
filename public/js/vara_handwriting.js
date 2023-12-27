let fontSize = 102;
if (window.screen.width > 700) fontSize = 62;
else if (window.screen.width < 1200) fontSize = 95;

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