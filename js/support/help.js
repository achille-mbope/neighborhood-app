
function toggleHelpView(view) {
    const canHelp = document.getElementById('view-can-help');
    const needHelp = document.getElementById('view-need-help');
    const canButton = document.getElementById('btn-show-can-help');
    const needButton = document.getElementById('btn-show-need-help');
    if (canHelp) canHelp.style.display = view === 'can-help' ? 'flex' : 'none';
    if (needHelp) needHelp.style.display = view === 'need-help' ? 'flex' : 'none';
    if (canButton) canButton.classList.toggle('active', view === 'can-help');
    if (needButton) needButton.classList.toggle('active', view === 'need-help');
}

function selectHelpCategory(button, category) {
    state.selectedHelpCategory = category;
    saveState();
    document.querySelectorAll('#view-need-help .category-button').forEach(element => element.classList.remove('selected'));
    if (button) button.classList.add('selected');
}

function submitHelpRequest() {
    const input = document.getElementById('help-request-text');
    const text = input ? input.value.trim() : '';
    showToast(text ? 'UnterstÃ¼tzungsanfrage gesendet' : 'Bitte beschreibe deine Anfrage kurz.');
    if (text && input) input.value = '';
}

function startHelpMatch(name, topic) {
    const subtitle = typeof t === 'function'
        ? t('chat_type_support').replace('{topic}', typeof translateStaticText === 'function' ? translateStaticText(topic) : topic)
        : 'Unterstützung: ' + topic;
    openChatModal(name, subtitle);
}
