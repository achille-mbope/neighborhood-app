
function chatTranslate(key, fallback, replacements = {}) {
    const value = typeof t === 'function' ? t(key) : fallback;
    return Object.entries(replacements).reduce(
        (text, [name, replacement]) => text.replace(`{${name}}`, replacement),
        value === key ? fallback : value
    );
}

function chatText(text) {
    return typeof translateStaticText === 'function' ? translateStaticText(text) : text;
}

function openChatModal(name, subtitle) {
    const title = document.getElementById('chat-title');
    const sub = document.getElementById('chat-subtitle');
    const messages = document.getElementById('chat-messages-box') || document.getElementById('chat-messages');
    const input = document.getElementById('chat-text-input') || document.getElementById('chat-input');
    const translatedName = chatText(name);
    const translatedSubtitle = subtitle || '';
    const welcomeText = subtitle
        ? chatTranslate('chat_welcome_with_topic', '{topic}: Schreib eine Nachricht, um den Kontakt zu starten.', { topic: translatedSubtitle })
        : chatTranslate('chat_welcome_default', 'Schreib eine Nachricht, um den Kontakt zu starten.');
    if (title) title.innerText = translatedName;
    if (sub) sub.innerText = translatedSubtitle;
    if (messages) {
        messages.innerHTML = '<div class="chat-bubble received" id="chat-welcome-msg"></div>';
    }
    const activeWelcome = document.getElementById('chat-welcome-msg');
    if (activeWelcome) activeWelcome.innerText = welcomeText;
    if (input) input.value = '';
    openGlobalModal('chat');
}

function closeChatModal() {
    closeGlobalModal('chat');
}

function openAmbassadorChat(name) {
    openChatModal(name, chatTranslate('chat_type_ambassador', 'Botschafter-Chat'));
}

function openGroupChat(name) {
    openChatModal(name, chatTranslate('chat_type_group', 'Gruppen-Chat'));
}

function openBorrowChat(item, owner) {
    openChatModal(owner, chatTranslate('chat_type_borrow', 'Ausleihe: {item}', { item: chatText(item) }));
}

function openEventChat(name) {
    openChatModal(name, chatTranslate('chat_type_event', 'Event-Chat'));
}

function sendChatMessage() {
    const input = document.getElementById('chat-text-input') || document.getElementById('chat-input');
    const messages = document.getElementById('chat-messages-box') || document.getElementById('chat-messages');
    const text = input ? input.value.trim() : '';
    if (!text || !messages) return;
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble sent';
    bubble.innerText = text;
    messages.appendChild(bubble);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
}

function submitReport(reason) {
    closeGlobalModal('report');
    showToast(chatTranslate('chat_report_sent', 'Meldung gesendet: {reason}', { reason: chatText(reason) }));
}
