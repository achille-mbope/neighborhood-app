
function toggleJoinGroup(button, groupName) {
    const chatButton = button.nextElementSibling;
    if (button.innerText === 'Beitreten') {
        button.innerText = 'Beigetreten';
        button.classList.remove('btn-primary');
        button.classList.add('btn-secondary');
        if (chatButton) chatButton.style.display = 'inline-block';
        showToast('Gruppe beigetreten: ' + groupName);
    } else {
        button.innerText = 'Beitreten';
        button.classList.add('btn-primary');
        button.classList.remove('btn-secondary');
        if (chatButton) chatButton.style.display = 'none';
    }
}

function openCreateGroupModal() {
    openGlobalModal('create-group');
}

function closeCreateGroupModal() {
    closeGlobalModal('create-group');
}

function submitCreateGroup() {
    const input = document.getElementById('new-group-name');
    const name = input && input.value.trim() ? input.value.trim() : 'Neue Gruppe';
    closeCreateGroupModal();
    showToast('Gruppe gegrÃ¼ndet: ' + name);
    if (input) input.value = '';
}
