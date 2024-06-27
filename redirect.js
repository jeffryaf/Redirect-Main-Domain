const domainElement = document.getElementById('domain-animation');
const oldDomain = 'JeffryAF.com';
const newDomain = 'JeffryATF.com';
let currentText = oldDomain;
let index = oldDomain.length;

function deleteCharacter() {
    if (index >= 0) {
        currentText = currentText.substring(0, index);
        domainElement.textContent = currentText;
        index--;
        setTimeout(deleteCharacter, 25); // Increased speed of deletion
    } else {
        typeNewDomain();
    }
}

let newIndex = 0;
function typeNewDomain() {
    if (newIndex < newDomain.length) {
        currentText += newDomain[newIndex];
        domainElement.textContent = currentText;
        newIndex++;
        setTimeout(typeNewDomain, 25); // Increased speed of typing
    } else {
        // Redirect after the full domain has been typed
        setTimeout(() => window.location.href = 'https://jeffryatf.com', 2000);
    }
}

// Start deletion after 1 second
setTimeout(deleteCharacter, 1500);
