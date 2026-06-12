
function openChatModal(name, subtitle) {
    const title = document.getElementById('chat-title');
    const sub = document.getElementById('chat-subtitle');
    const welcome = document.getElementById('chat-welcome-msg');
    if (title) title.innerText = name;
    if (sub) sub.innerText = subtitle || '';
    if (welcome) {
        welcome.innerText = subtitle
            ? subtitle + ': Schreib eine Nachricht, um den Kontakt zu starten.'
            : 'Schreib eine Nachricht, um den Kontakt zu starten.';
    }
    openGlobalModal('chat');
}

function closeChatModal() {
    closeGlobalModal('chat');
}

function openAmbassadorChat(name) {
    openChatModal(name, 'Botschafter-Chat');
}

function openGroupChat(name) {
    openChatModal(name, 'Gruppen-Chat');
}

function openBorrowChat(item, owner) {
    openChatModal(owner, 'Ausleihe: ' + item);
}

function openEventChat(name) {
    openChatModal(name, 'Event-Chat');
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
    showToast('Meldung gesendet: ' + reason);
}
