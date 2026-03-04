const farImage = document.getElementById("farImage");
        const toggleBtn = document.getElementById("toggleMode");

        const gifs = {
            night: [
                "media/nuit plan baie.gif",
                "media/nuit plan ciel.gif",
                "media/nuit plan feu.gif"
            ],
            day: [
                "media/jour plan baie.gif",
                "media/jour plan ciel.gif",
                "media/jour plan feu.gif"
            ]
        };

        let mode = "night";
        let index = 0;

        // clic sur image → vue suivante
        farImage.addEventListener("click", () => {
            index = (index + 1) % 3;
            updateImage();
        });

        // switch jour/nuit
        toggleBtn.addEventListener("click", () => {
            if (mode === "night") {
                mode = "day";
                toggleBtn.textContent = "MODE NUIT";
            } else {
                mode = "night";
                toggleBtn.textContent = "MODE JOUR";
            }
            updateImage();
        });

        function updateImage() {
            farImage.style.opacity = 0;

            setTimeout(() => {
                farImage.style.backgroundImage = `url('${gifs[mode][index]}')`;
                farImage.style.opacity = 1;
            }, 250);
        }