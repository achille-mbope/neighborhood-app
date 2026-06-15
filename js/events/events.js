
function eventTranslate(key, fallback, replacements = {}) {
    const value = typeof t === 'function' ? t(key) : fallback;
    return Object.entries(replacements).reduce(
        (text, [name, replacement]) => text.replace(`{${name}}`, replacement),
        value === key ? fallback : value
    );
}

function eventText(text) {
    return typeof translateStaticText === 'function' ? translateStaticText(text) : text;
}

function syncEventJoinButtons() {
    document.querySelectorAll('.event-actions .btn-primary, .event-actions .btn-secondary').forEach(button => {
        if (!button.matches('button') || button.classList.contains('chat-btn')) return;
        button.innerText = button.classList.contains('joined')
            ? eventTranslate('event_joined_button', 'Du bist dabei')
            : eventTranslate('event_join_button', 'Ich bin dabei!');
    });
}

function toggleJoinEvent(button, eventName) {
    const chatButton = button ? button.nextElementSibling : null;
    if (!button) return;
    const joining = !button.classList.contains('joined');
    button.classList.toggle('joined', joining);
    button.innerText = joining
        ? eventTranslate('event_joined_button', 'Du bist dabei')
        : eventTranslate('event_join_button', 'Ich bin dabei!');
    button.classList.toggle('btn-primary', !joining);
    button.classList.toggle('btn-secondary', joining);
    if (chatButton) chatButton.style.display = joining ? 'inline-flex' : 'none';
    showToast(joining
        ? eventTranslate('event_joined_toast', 'Teilnahme bestätigt: {event}', { event: eventText(eventName) })
        : eventTranslate('event_left_toast', 'Teilnahme entfernt'));
}
