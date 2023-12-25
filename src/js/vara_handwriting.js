let fontSize = 72;
if (window.screen.width > 700) fontSize = 32;
else if (window.screen.width < 1200) fontSize = 57;

let vara = new Vara(
    "#text-animation-container",
    "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json",
    [
        {
            text: "Hello, I'm Charlie",
            y: 500,
            x: 30,
            fromCurrentPosition: { y: false },
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