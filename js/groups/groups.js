
function groupTranslate(key, fallback, replacements = {}) {
    const value = typeof t === 'function' ? t(key) : fallback;
    return Object.entries(replacements).reduce(
        (text, [name, replacement]) => text.replace(`{${name}}`, replacement),
        value === key ? fallback : value
    );
}

function groupText(text) {
    return typeof translateStaticText === 'function' ? translateStaticText(text) : text;
}

let pendingLeaveGroup = null;

function syncGroupJoinButtons() {
    document.querySelectorAll('.group-action-btn[data-joined]').forEach(button => {
        const joined = button.dataset.joined === 'true';
        button.innerText = joined
            ? groupTranslate('group_joined_button', 'Beigetreten')
            : groupTranslate('group_join_button', 'Beitreten');
    });
}

function toggleJoinGroup(button, groupName) {
    const chatButton = button.nextElementSibling;
    const joining = button.dataset.joined !== 'true';

    if (joining) {
        button.dataset.joined = 'true';
        button.innerText = groupTranslate('group_joined_button', 'Beigetreten');
        button.classList.remove('btn-primary');
        button.classList.add('btn-secondary');
        if (chatButton) chatButton.style.display = 'inline-block';
        showToast(groupTranslate('group_joined_toast', 'Gruppe beigetreten: {group}', { group: groupText(groupName) }));
    } else {
        openLeaveGroupModal(button, groupName);
    }
}

function openLeaveGroupModal(button, groupName) {
    pendingLeaveGroup = { button, groupName };
    const name = document.getElementById('leave-group-name');
    const text = document.getElementById('leave-group-message');
    if (name) name.innerText = groupText(groupName);
    if (text) {
        text.innerText = groupTranslate(
            'group_leave_confirm_text',
            'Wenn du die Gruppe verlässt, wird der Gruppenchat ausgeblendet. Du kannst später jederzeit wieder beitreten.',
            { group: groupText(groupName) }
        );
    }
    openGlobalModal('leave-group');
}

function closeLeaveGroupModal() {
    pendingLeaveGroup = null;
    closeGlobalModal('leave-group');
}

function confirmLeaveGroup() {
    if (!pendingLeaveGroup || !pendingLeaveGroup.button) {
        closeGlobalModal('leave-group');
        return;
    }

    const { button, groupName } = pendingLeaveGroup;
    const chatButton = button.nextElementSibling;
    button.dataset.joined = 'false';
    button.innerText = groupTranslate('group_join_button', 'Beitreten');
    button.classList.add('btn-primary');
    button.classList.remove('btn-secondary');
    if (chatButton) chatButton.style.display = 'none';
    pendingLeaveGroup = null;
    closeGlobalModal('leave-group');
    showToast(groupTranslate('group_left_toast', 'Gruppe verlassen: {group}', { group: groupText(groupName) }));
}

function openCreateGroupModal() {
    openGlobalModal('create-group');
}

function closeCreateGroupModal() {
    closeGlobalModal('create-group');
}

function submitCreateGroup() {
    const input = document.getElementById('new-group-name');
    const name = input && input.value.trim() ? input.value.trim() : groupTranslate('group_default_name', 'Neue Gruppe');
    closeCreateGroupModal();
    showToast(groupTranslate('group_created_toast', 'Gruppe gegründet: {group}', { group: groupText(name) }));
    if (input) input.value = '';
}
