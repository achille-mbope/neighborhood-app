
function updateProfileName(value) {
    state.profileName = value || 'Max Mustermann';
    saveState();
    const display = document.getElementById('profile-display-name');
    if (display) display.innerText = state.profileName;
}

function updateProfileStreet(value) {
    state.profileStreet = value;
    saveState();
}

function updateProfileZip(value) {
    state.profileZip = value;
    saveState();
}

function updateProfileRadius(radius) {
    [50, 100, 500].forEach(value => {
        const button = document.getElementById('profile-rad-' + value);
        if (!button) return;
        button.classList.toggle('btn-primary', value === radius);
        button.classList.toggle('btn-secondary', value !== radius);
    });
    state.radius = radius;
    saveState();
}

function updateProfileLendItems(value) {
    state.profileLendItems = value;
    saveState();
}

function toggleProfileSkill(skill) {
    const index = state.profileSkills.indexOf(skill);
    if (index >= 0) {
        state.profileSkills.splice(index, 1);
    } else {
        state.profileSkills.push(skill);
    }
    saveState();
    showToast(skill + ' aktualisiert');
}

function setInputValue(id, value) {
    const input = document.getElementById(id);
    if (input) input.value = value || '';
}

function hydrateProfileImage(scope) {
    const image = document.getElementById(scope + '-avatar-image');
    const placeholder = document.getElementById(scope + '-avatar-placeholder');
    const removeButton = document.getElementById(scope + '-remove-active-btn');
    if (!image || !placeholder) return;

    if (state.profileImageDataUrl) {
        image.src = state.profileImageDataUrl;
        image.style.display = 'block';
        placeholder.style.display = 'none';
        if (removeButton) removeButton.style.display = 'inline-flex';
    } else {
        image.removeAttribute('src');
        image.style.display = 'none';
        placeholder.style.display = 'inline';
        if (removeButton) removeButton.style.display = 'none';
    }
}

function getProfileInterests() {
    return state.setupTags.Interessen || [];
}

function renderTagDisplay(containerId, tags, emptyText) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = tags.length
        ? tags.map(tag => `<span class="tag-pill active">${tag}</span>`).join('')
        : `<span class="tag-pill active">${emptyText}</span>`;
}

function hydrateProfileSkills() {
    const checkboxMap = {
        'skill-shopping': 'Einkäufe',
        'skill-garden': 'Gartenarbeit',
        'skill-tech': 'Technik-Unterstützung',
        'skill-craft': 'Handwerk',
        'skill-animals': 'Haustier-Betreuung',
        'skill-chat': 'Gesellschaft leisten'
    };
    const aliases = {
        'Einkäufe': ['Einkäufe', 'Einkaufshilfe'],
        'Technik-Unterstützung': ['Technik-Unterstützung', 'Technikhilfe'],
        'Handwerk': ['Handwerk', 'Handwerkliches'],
        'Haustier-Betreuung': ['Haustier-Betreuung', 'Tierbetreuung']
    };

    Object.entries(checkboxMap).forEach(([id, skill]) => {
        const checkbox = document.getElementById(id);
        const acceptedValues = aliases[skill] || [skill];
        if (checkbox) checkbox.checked = acceptedValues.some(value => state.profileSkills.includes(value));
    });
}

function hydrateProfileRadius() {
    [50, 100, 500].forEach(value => {
        const button = document.getElementById('profile-rad-' + value);
        if (!button) return;
        button.classList.toggle('btn-primary', value === state.radius);
        button.classList.toggle('btn-secondary', value !== state.radius);
    });
}

function hydrateProfileView() {
    const displayName = document.getElementById('profile-display-name');
    if (displayName) displayName.innerText = state.profileName || 'Max Mustermann';

    setInputValue('profile-name-input', state.profileName);
    setInputValue('profile-street-input', state.profileStreet);
    setInputValue('profile-zip-input', state.profileZip);
    setInputValue('profile-lend-items-input', state.profileLendItems);

    hydrateProfileImage('onboarding');
    hydrateProfileImage('profile');
    renderTagDisplay('profile-interests-display', getProfileInterests(), 'Keine Interessen ausgewählt');
    hydrateProfileSkills();
    hydrateProfileRadius();
}

function logoutSimulation() {
    resetSavedState();
    state.currentView = 'onboarding';
    state.onboardingStep = 'welcome';
    renderApp();
    showToast('Abgemeldet');
}
