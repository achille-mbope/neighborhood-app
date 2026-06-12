
function submitProfileSetup() {
    const lendItems = document.getElementById('setup-lend-items');
    if (lendItems) state.profileLendItems = lendItems.value.trim();
    state.profileSkills = Object.keys(state.setupTags)
        .filter(type => type !== 'Interessen')
        .flatMap(type => state.setupTags[type]);
    saveState();
    goToOnboardingStep('profile-picture');
}

function getTagContainer(type) {
    return document.getElementById(type === 'Interessen' ? 'active-interests-container' : 'active-skills-container');
}

function getSetupTags(type) {
    if (!state.setupTags[type]) state.setupTags[type] = [];
    return state.setupTags[type];
}

function renderSetupTags(type) {
    const container = getTagContainer(type);
    if (!container) return;
    container.innerHTML = '';
    getSetupTags(type).forEach(tag => {
        const pill = document.createElement('span');
        pill.className = 'active-tag-pill';
        const label = document.createElement('span');
        label.className = 'active-tag-label';
        label.textContent = typeof translateStaticText === 'function' ? translateStaticText(tag) : tag;

        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.className = 'remove-tag';
        removeButton.setAttribute('aria-label', tag + ' entfernen');
        removeButton.innerHTML = '&times;';
        removeButton.addEventListener('click', () => removeSetupTag(type, tag));

        pill.appendChild(label);
        pill.appendChild(removeButton);
        container.appendChild(pill);
    });
}

function toggleSetupTag(tile, type, tag) {
    const tags = getSetupTags(type);
    const index = tags.indexOf(tag);
    if (index >= 0) {
        tags.splice(index, 1);
        if (tile) tile.classList.remove('active');
    } else {
        tags.push(tag);
        if (tile) tile.classList.add('active');
    }
    state.setupTags[type] = tags;
    renderSetupTags(type);
    saveState();
}

function removeSetupTag(type, tag) {
    state.setupTags[type] = getSetupTags(type).filter(item => item !== tag);
    document.querySelectorAll('.tag-tile').forEach(tile => {
        if (tile.textContent.trim() === tag) tile.classList.remove('active');
    });
    renderSetupTags(type);
    saveState();
}

function addCustomSetupTag(type, inputId) {
    const input = document.getElementById(inputId);
    const value = input ? input.value.trim() : '';
    if (!value) return;
    const tags = getSetupTags(type);
    if (!tags.includes(value)) tags.push(value);
    if (input) input.value = '';
    renderSetupTags(type);
    saveState();
}

function hydrateSetupTags(type) {
    const container = getTagContainer(type);
    if (!container) return;
    const tags = getSetupTags(type);
    container.querySelectorAll('.tag-tile').forEach(tile => {
        const labelNode = tile.querySelector('span') ? tile.querySelector('span').firstChild : null;
        const original = labelNode && labelNode.__i18nOriginalText
            ? labelNode.__i18nOriginalText
            : tile.textContent.trim();
        tile.classList.toggle('active', tags.includes(original));
    });
    renderSetupTags(type);
}

function hydrateOnboardingSetup() {
    const lendItems = document.getElementById('setup-lend-items');
    if (lendItems) lendItems.value = state.profileLendItems || '';
    hydrateSetupTags('Interessen');
    Object.keys(state.setupTags).forEach(type => {
        if (type !== 'Interessen') hydrateSetupTags(type);
    });
}
