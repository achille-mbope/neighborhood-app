
function toggleNetiquetteAcceptance() {
    const checkbox = document.getElementById('accept-checkbox');
    if (!checkbox) return;
    state.netiquetteAccepted = checkbox.checked;
    saveState();
    applyGlobalSettings();
}
