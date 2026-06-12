
function toggleJoinEvent(button, eventName) {
    const chatButton = button ? button.nextElementSibling : null;
    if (!button) return;
    const joining = !button.classList.contains('joined');
    button.classList.toggle('joined', joining);
    button.innerText = joining ? 'Du bist dabei' : 'Ich bin dabei!';
    button.classList.toggle('btn-primary', !joining);
    button.classList.toggle('btn-secondary', joining);
    if (chatButton) chatButton.style.display = joining ? 'inline-flex' : 'none';
    showToast(joining ? 'Teilnahme bestÃ¤tigt: ' + eventName : 'Teilnahme entfernt');
}
