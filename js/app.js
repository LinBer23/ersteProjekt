document.addEventListener('DOMContentLoaded', () => {
    const appWrapper = document.getElementById('appWrapper');
    const mainSection = document.getElementById('mainSection');
    const appButton = document.getElementById('appButton');
    const appPopUp = document.getElementById('appPopup');
    const userName = document.getElementById('userName');

    appButton.addEventListener('click', () => {
        appPopUp.style.setProperty('display', 'block');
        appPopUp.innerHTML = `
                <header>
                    <button id="closeButton">
                        <iconify-icon icon="ph:x"></iconify-icon>
                    </button>
                </header>
                <first-screen>
                    <h3>Hallo ${userName.innerHTML}!</h3>
                    <p>
                        Danke für die Aktivierung meiner KI,
                        wie kann ich dir behilflich sein?
                    </p>
                    <img src="https://media.giphy.com/media/Ai0FCXmNLpfhQNs0af/giphy-downsized-large.gif" />
                </first-screen>
                <footer>
                    <button id="left-button">Geh weg!</button>
                    <button id="right-button">Sag was cooles.</button>
                </footer>
            `;

        const closeButton = document.getElementById('closeButton');
        const footerLeftButton = document.getElementById('left-button');
        const footerRightButton = document.getElementById('right-button');

        closeButton.addEventListener('click', () => {
            appPopUp.style.setProperty('display', 'none');
        });

        footerLeftButton.addEventListener('click', () => {
            appWrapper.style.setProperty('background-size', 'cover');
            mainSection.style.setProperty('font-size', '5vw');
            mainSection.style.setProperty('text-shadow', '0 0 30px #FF0000');

            appPopUp.style.setProperty('display', 'none');
            appWrapper.style.setProperty(
                'background-image',
                'url("https://media.giphy.com/media/10zxDv7Hv5RF9C/giphy.gif")'
            );

            mainSection.innerHTML = '';
            let counter = 5;
            setInterval(() => {
                appWrapper.style.setProperty('animation', 'shake-animation 1s ease infinite');
                mainSection.innerHTML = `
                <div>
                    <h1>Dein PC zerstört sich in ${counter}</h1>
                </div>`;

                counter--;
                if (counter < 0) {
                    location.reload();
                }
            }, 1000);
        });

        footerRightButton.addEventListener('click', () => {
            appPopUp.style.setProperty('display', 'none');
            mainSection.innerHTML = `
            <img src="https://media.giphy.com/media/l3vQY9AQCSP3WtLBS/giphy.gif" style="width: 100%"/>
            `;
        });
    });
});
