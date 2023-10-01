function typeMessage(message, elementId, delay) {
    var element = document.getElementById(elementId);
    var index = 0;

    function addChar() {
        if (index < message.length) {
            var currentText = element.textContent; // Utilisez textContent pour conserver les espaces
            currentText += message[index];
            element.textContent = currentText;
            index++;
            setTimeout(addChar, delay);
        }
    }

    addChar();
}



function authenticate() {
    var enteredPassword = document.getElementById("mdp").value;
    var correctPassword = "a' OR 1=1";

    if (enteredPassword === correctPassword) {
        document.getElementById("message-text").innerText = ""; // Effacez le texte existant

        typeMessage("Authentification réussie ! Chargement de la banque du mal...", "message-text", 50);

        setTimeout(function () {
            window.location.href = "transi.html";
        }, 5000);
    } else {
        document.getElementById("message-text").innerText = ""; // Effacez le texte existant

        typeMessage("Mot de passe incorrect!", "message-text", 50);
    }
}



window.addEventListener('load', function () {
    const divpagev = document.getElementById('leheader');
    divpagev.style.opacity = '1';
});

