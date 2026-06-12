
function removeActiveProfilePicture() {
    state.profileImageDataUrl = '';
    state.profileImageKind = '';
    saveState();
    ['onboarding', 'profile'].forEach(scope => {
        const image = document.getElementById(scope + '-avatar-image');
        const placeholder = document.getElementById(scope + '-avatar-placeholder');
        const removeButton = document.getElementById(scope + '-remove-active-btn');
        if (image) {
            image.removeAttribute('src');
            image.style.display = 'none';
        }
        if (placeholder) placeholder.style.display = 'inline';
        if (removeButton) removeButton.style.display = 'none';
    });
    showToast(typeof window.t === 'function' ? window.t('toast_photo_removed') : 'Foto entfernt.');
}

function getAvatarSvg(config) {
    const headByShape = {
        rund: '<circle cx="100" cy="92" r="44" fill="{skin}" />',
        oval: '<ellipse cx="100" cy="94" rx="38" ry="50" fill="{skin}" />',
        eckig: '<rect x="60" y="50" width="80" height="88" rx="24" fill="{skin}" />'
    };
    const hairByStyle = {
        kurz: '<path d="M58 83c5-31 26-47 52-42 21 4 35 19 35 43-19-14-52-19-87-1z" fill="{hair}" />',
        lang: '<path d="M55 86c0-34 21-51 47-51s44 18 44 52c0 30-13 53-27 62 4-28-4-46-19-55-11 20-29 33-45 38 3-14 0-29 0-46z" fill="{hair}" />',
        lang_offen: '<path d="M49 91c0-37 22-57 52-57 29 0 51 21 51 58 0 33-12 63-29 73 4-31-2-55-22-69-20 14-27 38-23 69-17-10-29-40-29-74z" fill="{hair}" />',
        lockig: '<path d="M55 88c-6-15 5-27 15-23 0-20 24-32 39-19 13-10 35 3 32 21 14 0 19 18 8 29-27-14-64-17-94-8z" fill="{hair}" />',
        glatze: ''
    };
    const accessory = {
        none: '',
        brille: '<g fill="none" stroke="#1E3324" stroke-width="4"><circle cx="82" cy="94" r="13"/><circle cx="118" cy="94" r="13"/><path d="M95 94h10"/></g>',
        sonnenbrille: '<g fill="#1E3324"><rect x="68" y="83" width="28" height="20" rx="8"/><rect x="104" y="83" width="28" height="20" rx="8"/><rect x="96" y="91" width="8" height="4"/></g>',
        muetze: '<path d="M56 72c11-25 34-36 63-28 14 4 25 12 32 24-36-7-65-6-95 4z" fill="#6F9575" /><path d="M51 75c35-10 67-11 101-3" fill="none" stroke="#4B6D51" stroke-width="8" stroke-linecap="round"/>'
    };
    const beard = {
        none: '',
        schnaeuzer: '<path d="M84 116c8-8 16-8 24 0 8-8 16-8 24 0-10 10-38 10-48 0z" fill="{hair}" />',
        vollbart: '<path d="M70 112c12 33 48 39 61 0 0 28-12 48-31 48s-31-20-30-48z" fill="{hair}" opacity="0.9" />',
        goatee: '<path d="M92 122c6 8 10 8 16 0l-4 23h-8z" fill="{hair}" />'
    };
    const earrings = {
        none: '',
        perlenstecker: '<circle cx="56" cy="105" r="4" fill="#f8f4d8"/><circle cx="144" cy="105" r="4" fill="#f8f4d8"/>',
        creolen: '<circle cx="55" cy="108" r="7" fill="none" stroke="#d6b85a" stroke-width="3"/><circle cx="145" cy="108" r="7" fill="none" stroke="#d6b85a" stroke-width="3"/>'
    };

    const head = (headByShape[config.shape] || headByShape.rund).replace('{skin}', config.skinColor);
    const hair = (hairByStyle[config.hairStyle] || '').split('{hair}').join(config.hairColor);
    const beardSvg = (beard[config.beard] || '').split('{hair}').join(config.hairColor);

    return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <rect width="200" height="200" fill="#EBF2ED"/>
  <circle cx="100" cy="100" r="92" fill="#DDEADF"/>
  ${earrings[config.earrings] || ''}
  ${head}
  ${hair}
  <circle cx="84" cy="94" r="5" fill="#1E3324"/>
  <circle cx="116" cy="94" r="5" fill="#1E3324"/>
  <path d="M94 112c5 4 9 4 14 0" fill="none" stroke="#1E3324" stroke-width="4" stroke-linecap="round"/>
  ${beardSvg}
  ${accessory[config.accessory] || ''}
  <path d="M57 178c6-30 24-47 43-47s37 17 43 47" fill="#6F9575"/>
</svg>`.trim();
}

function getAvatarDataUrl() {
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(getAvatarSvg(state.avatarConfig));
}

function setAvatarActiveButtons() {
    Object.keys(state.avatarConfig).forEach(category => {
        document.querySelectorAll(`[data-category="${category}"]`).forEach(button => {
            button.classList.toggle('active', button.dataset.value === state.avatarConfig[category]);
        });
    });
}

function updateAvatarPreview(category, value) {
    if (category && value) {
        state.avatarConfig[category] = value;
        saveState();
    }
    setAvatarActiveButtons();
    const preview = document.getElementById('avatar-live-preview');
    if (preview) preview.innerHTML = getAvatarSvg(state.avatarConfig);
}

function applyAvatarToPreview(scope) {
    const image = document.getElementById(scope + '-avatar-image');
    const placeholder = document.getElementById(scope + '-avatar-placeholder');
    const removeButton = document.getElementById(scope + '-remove-active-btn');
    if (image) {
        image.src = getAvatarDataUrl();
        image.style.display = 'block';
    }
    if (placeholder) placeholder.style.display = 'none';
    if (removeButton) removeButton.style.display = 'inline-flex';
}

function applyAvatarConfig() {
    const wasInApp = state.currentView === 'app';
    state.profileImageDataUrl = getAvatarDataUrl();
    state.profileImageKind = 'avatar';
    saveState();
    applyAvatarToPreview('onboarding');
    applyAvatarToPreview('profile');
    closeAvatarEditor();
    showToast(typeof window.t === 'function' ? window.t('toast_avatar_saved') : 'Avatar gespeichert');
    if (wasInApp) renderApp();
    else goToOnboardingStep('verify-select');
}

function openAvatarEditor() {
    openGlobalModal('avatar-editor');
    updateAvatarPreview();
}

function closeAvatarEditor() {
    closeGlobalModal('avatar-editor');
}

function handleImageSelection(input, scope) {
    const file = input && input.files ? input.files[0] : null;
    if (!file) return;
    const image = document.getElementById(scope + '-avatar-image');
    const placeholder = document.getElementById(scope + '-avatar-placeholder');
    const removeButton = document.getElementById(scope + '-remove-active-btn');
    const reader = new FileReader();
    reader.onload = () => {
        state.profileImageDataUrl = reader.result;
        state.profileImageKind = 'photo';
        saveState();
        if (image) {
            image.src = reader.result;
            image.style.display = 'block';
        }
        if (placeholder) placeholder.style.display = 'none';
        if (removeButton) removeButton.style.display = 'inline-flex';
    };
    reader.readAsDataURL(file);
}
