
function borrowItem(button, itemName) {
    const chatButton = button ? button.nextElementSibling : null;
    if (button) {
        button.innerText = 'Angefragt';
        button.disabled = true;
    }
    if (chatButton) chatButton.style.display = 'inline-flex';
    showToast('Ausleihanfrage gesendet: ' + itemName);
}

function openAddShareItemModal() {
    openGlobalModal('add-item');
}

function closeAddShareItemModal() {
    closeGlobalModal('add-item');
}

function selectItemIcon(button, icon) {
    state.selectedItemIcon = icon;
    saveState();
    document.querySelectorAll('#modal-add-item .category-button').forEach(element => element.classList.remove('selected'));
    if (button) button.classList.add('selected');
}

function submitAddShareItem() {
    const input = document.getElementById('new-item-name');
    const name = input && input.value.trim() ? input.value.trim() : 'Gegenstand';
    closeAddShareItemModal();
    showToast('Gegenstand hinzugefÃ¼gt: ' + name);
    if (input) input.value = '';
}

function filterSharedItems() {
    const input = document.getElementById('item-search');
    const term = input ? input.value.trim().toLowerCase() : '';
    document.querySelectorAll('#items-container .item-card').forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(term) ? 'flex' : 'none';
    });
}
