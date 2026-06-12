// app.js

let netiquetteAccepted = false;

let state = {
    currentView: "onboarding", // "onboarding" | "app"
    language: localStorage.getItem('gartenzaun_language') || "de",
    highContrast: localStorage.getItem('gartenzaun_high_contrast') === 'true',
    largeFont: localStorage.getItem('gartenzaun_large_font') === 'true',
    onboardingStep: 'welcome',
    activeAppTab: 'home',
    selectedVerifyMethod: 'postcard',
    selectedHelpCategory: 'Einkäufe',
    selectedItemIcon: '🛠️',
    radius: 100,
    validatedAddress: null,
    avatarConfig: {
        shape: 'rund',
        skinColor: '#fce2c4',
        hairStyle: 'kurz',
        hairColor: '#4a3b32',
        accessory: 'none',
        beard: 'none',
        earrings: 'none'
    },
    setupTags: {
        Interessen: [],
        Fähigkeiten: []
    }
};

function renderApp() {
    const root = document.getElementById("app");

    if (root) {
        if (state.currentView === "onboarding") {
            root.innerHTML = typeof renderOnboarding === 'function' ? renderOnboarding() : '';
        } else if (state.currentView === "app") {
            root.innerHTML = typeof renderMainApp === 'function' ? renderMainApp() : '';
        }
    }
    
    // Apply internal views depending on active state
    if (state.currentView === "onboarding") {
        const onboardingFlow = document.getElementById('onboarding-flow');
        if (onboardingFlow) onboardingFlow.style.display = 'block';
        const mainApp = document.getElementById('main-app');
        if (mainApp) mainApp.style.display = 'none';
        const globalHeader = document.getElementById('global-header');
        if (globalHeader) globalHeader.style.display = 'none';

        document.querySelectorAll('#onboarding-flow .screen').forEach(el => el.classList.remove('active'));
        const target = document.getElementById('screen-' + state.onboardingStep);
        if (target) {
            target.classList.add('active');
            const header = document.getElementById('onboarding-header');
            if (['welcome', 'netiquette', 'address', 'address-radius'].includes(state.onboardingStep)) {
                if (header) header.style.display = 'flex';
            } else {
                if (header) header.style.display = 'none';
            }
        }
    } else if (state.currentView === "app") {
        document.querySelectorAll('#main-app .screen').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));

        const targetScreen = document.getElementById('tab-' + state.activeAppTab);
        if (targetScreen) targetScreen.classList.add('active');

        const targetBtn = document.querySelector(`.nav-item[onclick="switchTab('${state.activeAppTab}')"]`);
        if (targetBtn) targetBtn.classList.add('active');
        
        const mainApp = document.getElementById('main-app');
        if (mainApp) mainApp.style.display = 'flex';
        const onboardingFlow = document.getElementById('onboarding-flow');
        if (onboardingFlow) onboardingFlow.style.display = 'none';
        
        const globalHeader = document.getElementById('global-header');
        if (globalHeader) globalHeader.style.display = 'flex';
    }

    applyGlobalSettings();
    refreshIcons();
}

function applyGlobalSettings() {
    try {
        const savedLang = state.language;
        if (typeof setLanguage === 'function') {
            setLanguage(savedLang);
        }
        const triggers = document.querySelectorAll('.custom-select-trigger .custom-select-value');
        triggers.forEach(valContainer => {
            if (savedLang === 'de') {
                valContainer.innerHTML = '<img src="Bilder/D Flagge.png" alt="DE"><span>Deutsch</span>';
            } else if (savedLang === 'en') {
                valContainer.innerHTML = '<img src="Bilder/US Flagge.png" alt="US"><span>English</span>';
            }
        });
    } catch (e) { }

    try {
        setAccessibilityClass('high-contrast', state.highContrast);
        const cb1 = document.getElementById('toggle-high-contrast');
        const cb2 = document.getElementById('profile-toggle-high-contrast');
        if (cb1) cb1.checked = state.highContrast;
        if (cb2) cb2.checked = state.highContrast;
    } catch (e) { }

    try {
        setAccessibilityClass('large-font', state.largeFont);
        const cb1 = document.getElementById('toggle-large-font');
        const cb2 = document.getElementById('profile-toggle-large-font');
        if (cb1) cb1.checked = state.largeFont;
        if (cb2) cb2.checked = state.largeFont;
    } catch (e) { }
    
    const cb = document.getElementById('accept-checkbox');
    const btn = document.getElementById('netiquette-next-btn');
    if (cb && btn) {
        cb.checked = netiquetteAccepted;
        btn.disabled = !netiquetteAccepted;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderApp();
    
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.menu-container')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('show');
            });
        }
        if (!e.target.closest('.custom-select-container')) {
            document.querySelectorAll('.custom-select-options').forEach(options => {
                options.classList.remove('open');
            });
        }
    });
});

function selectLanguage(lang) {
    state.language = lang;
    localStorage.setItem('gartenzaun_language', lang);
    renderApp();
    if (typeof t === 'function') {
        showToast(t('toast_lang_changed') || 'Sprache geändert.');
    } else {
        showToast('Sprache geändert.');
    }
}

function setAccessibilityClass(className, enabled) {
    document.documentElement.classList.toggle(className, enabled);
    document.body.classList.toggle(className, enabled);
}

function toggleLargeFont(checked) {
    state.largeFont = typeof checked === 'boolean' ? checked : !state.largeFont;
    localStorage.setItem('gartenzaun_large_font', state.largeFont ? 'true' : 'false');
    renderApp();
    if (typeof t === 'function') {
        showToast(state.largeFont ? t('toast_large_font_on') : t('toast_large_font_off'));
    } else {
        showToast(state.largeFont ? 'Große Schrift aktiviert' : 'Große Schrift deaktiviert');
    }
}

function toggleHighContrast(checked) {
    state.highContrast = typeof checked === 'boolean' ? checked : !state.highContrast;
    localStorage.setItem('gartenzaun_high_contrast', state.highContrast ? 'true' : 'false');
    renderApp();
    if (typeof t === 'function') {
        showToast(state.highContrast ? t('toast_high_contrast_on') : t('toast_high_contrast_off'));
    } else {
        showToast(state.highContrast ? 'Hoher Kontrast aktiviert' : 'Hoher Kontrast deaktiviert');
    }
}

function toggleCustomSelect(trigger) {
    if (trigger && trigger.parentElement) {
        const options = trigger.parentElement.querySelector('.custom-select-options');
        if (options) {
            options.classList.toggle('open');
        }
    }
}

function toggleMenu(event) {
    event.stopPropagation();
    const trigger = event.currentTarget;
    const menu = trigger.nextElementSibling;
    if (menu && menu.classList.contains('dropdown-menu')) {
        menu.classList.toggle('show');
    }
}

function toggleNetiquetteAcceptance() {
    const cb = document.getElementById('accept-checkbox');
    if (cb) {
        netiquetteAccepted = cb.checked;
        applyGlobalSettings();
    }
}

function getModal(id) {
    return document.getElementById(id) || document.getElementById('modal-' + id);
}

function openGlobalModal(id) {
    const modal = getModal(id);
    if (modal) modal.classList.add('active');

    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('show');
    });
}

function closeGlobalModal(id) {
    const modal = getModal(id);
    if (modal) modal.classList.remove('active');
}

function goToOnboardingStep(stepId) {
    state.onboardingStep = stepId;
    state.currentView = "onboarding";
    renderApp();
}

function startSimulatedVerification() {
    goToOnboardingStep('verify-simulation');
    document.querySelectorAll('[id^="sim-"][id$="-view"]').forEach(view => {
        view.style.display = 'none';
    });

    const methodView = document.getElementById('sim-' + state.selectedVerifyMethod + '-view');
    if (methodView) {
        methodView.style.display = 'flex';
        return;
    }

    setTimeout(() => {
        const spinner = document.getElementById('sim-spinner');
        if (spinner) spinner.style.display = 'none';
        const success = document.getElementById('sim-success');
        if (success) success.style.display = 'block';
        const title = document.getElementById('sim-title');
        if (title) title.innerText = typeof t === 'function' ? t('toast_id_confirmed') : 'Identität bestätigt';
        const sub = document.getElementById('sim-subtitle');
        if (sub) sub.innerText = 'Du wirst nun weitergeleitet.';

        setTimeout(() => {
            switchTab('home');
            showToast(typeof t === 'function' ? t('toast_welcome') : 'Willkommen in der Nachbarschaft!');
        }, 1500);
    }, 2000);
}

function switchTab(tabId) {
    state.activeAppTab = tabId;
    state.currentView = "app";
    renderApp();
}

function showToast(message) {
    const toast = document.getElementById('global-toast');
    if (toast) {
        toast.innerText = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

function toggleJoinGroup(btn, groupName) {
    const chatBtn = btn.nextElementSibling;
    if (btn.innerText === 'Beitreten') {
        btn.innerText = 'Beigetreten';
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-secondary');
        if (chatBtn) chatBtn.style.display = 'inline-block';
        showToast('Gruppe beigetreten: ' + groupName);
    } else {
        btn.innerText = 'Beitreten';
        btn.classList.add('btn-primary');
        btn.classList.remove('btn-secondary');
        if (chatBtn) chatBtn.style.display = 'none';
    }
}
function setAddressValidationStatus(message, type) {
    const status = document.getElementById('address-validation-status');
    if (!status) return;
    status.style.display = 'block';
    status.innerText = message;

    if (type === 'success') {
        status.style.backgroundColor = '#E8F8F5';
        status.style.borderColor = 'var(--color-success)';
    } else if (type === 'error') {
        status.style.backgroundColor = 'var(--color-accent-light)';
        status.style.borderColor = 'var(--color-danger)';
    } else {
        status.style.backgroundColor = 'var(--color-primary-light)';
        status.style.borderColor = 'var(--color-primary)';
    }
    status.style.color = 'var(--color-text-dark)';
}

function setAddressButtonLoading(isLoading) {
    const btn = document.getElementById('address-next-btn');
    if (!btn) return;
    btn.disabled = isLoading;
    btn.dataset.originalText = btn.dataset.originalText || btn.innerText;
    btn.innerText = isLoading ? 'Adresse wird geprüft...' : btn.dataset.originalText;
}

function getAddressInputs() {
    return {
        firstName: (document.getElementById('profile-firstname') || {}).value || '',
        lastName: (document.getElementById('profile-lastname') || {}).value || '',
        street: (document.getElementById('address-street') || {}).value || '',
        zipCity: (document.getElementById('address-zip') || {}).value || ''
    };
}

function buildNominatimUrl(street, zipCity) {
    const params = new URLSearchParams({
        format: 'jsonv2',
        addressdetails: '1',
        limit: '5',
        countrycodes: 'de',
        'accept-language': state.language === 'en' ? 'en' : 'de',
        q: `${street}, ${zipCity}`
    });
    return `https://nominatim.openstreetmap.org/search?${params.toString()}`;
}

function isLikelyValidAddress(result, street, zipCity) {
    if (!result || !result.address) return false;
    const address = result.address;
    const hasRoad = Boolean(address.road || address.pedestrian || address.footway || address.path || address.residential);
    const typedHouseNumber = (street.match(/\d+\s*[a-zA-Z]?/) || [''])[0].replace(/\s+/g, '').toLowerCase();
    const foundHouseNumber = (address.house_number || '').replace(/\s+/g, '').toLowerCase();
    const houseNumberMatches = Boolean(typedHouseNumber && foundHouseNumber && typedHouseNumber === foundHouseNumber);
    const zipMatch = zipCity.match(/\b\d{5}\b/);
    const postcodeMatches = !zipMatch || address.postcode === zipMatch[0];
    return hasRoad && houseNumberMatches && postcodeMatches;
}

async function validateAddressWithOpenStreetMap(street, zipCity) {
    const response = await fetch(buildNominatimUrl(street, zipCity), {
        headers: {
            Accept: 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('OpenStreetMap konnte nicht erreicht werden.');
    }

    const results = await response.json();
    return results.find(result => isLikelyValidAddress(result, street, zipCity)) || null;
}

async function submitAddressAndRadius() {
    const values = getAddressInputs();
    const firstName = values.firstName.trim();
    const lastName = values.lastName.trim();
    const street = values.street.trim();
    const zipCity = values.zipCity.trim();

    if (!firstName || !lastName || !street || !zipCity) {
        setAddressValidationStatus('Bitte fülle Vorname, Nachname, Straße sowie Postleitzahl & Ort aus.', 'error');
        return;
    }

    if (!/\d/.test(street)) {
        setAddressValidationStatus('Bitte gib Straße und Hausnummer an, damit die Adresse eindeutig geprüft werden kann.', 'error');
        return;
    }

    try {
        setAddressButtonLoading(true);
        setAddressValidationStatus('Adresse wird mit OpenStreetMap geprüft...', 'info');

        const result = await validateAddressWithOpenStreetMap(street, zipCity);
        if (!result) {
            setAddressValidationStatus('Diese Adresse konnte nicht eindeutig gefunden werden. Bitte prüfe Straße, Hausnummer, Postleitzahl und Ort.', 'error');
            return;
        }

        state.validatedAddress = {
            displayName: result.display_name,
            lat: Number(result.lat),
            lon: Number(result.lon),
            raw: result.address
        };
        state.profileName = `${firstName} ${lastName}`;
        state.profileStreet = street;
        state.profileZip = zipCity;

        const profileNameInput = document.getElementById('profile-name-input');
        const profileStreetInput = document.getElementById('profile-street-input');
        const profileZipInput = document.getElementById('profile-zip-input');
        if (profileNameInput) profileNameInput.value = state.profileName;
        if (profileStreetInput) profileStreetInput.value = street;
        if (profileZipInput) profileZipInput.value = zipCity;

        setAddressValidationStatus('Adresse bestätigt: ' + result.display_name, 'success');
        showToast('Adresse erfolgreich bestätigt');
        setTimeout(() => goToOnboardingStep('profile-setup'), 700);
    } catch (error) {
        setAddressValidationStatus('Die OpenStreetMap-Prüfung ist fehlgeschlagen. Bitte prüfe deine Internetverbindung und versuche es erneut.', 'error');
    } finally {
        setAddressButtonLoading(false);
    }
}
function submitProfileSetup() { goToOnboardingStep('profile-picture'); }

function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}

function selectOnboardingRadius(radius) {
    document.querySelectorAll('[id^="radius-"]').forEach(el => el.classList.remove('selected'));
    const selected = document.getElementById('radius-' + radius);
    if (selected) selected.classList.add('selected');
    state.radius = radius;
}

function getTagContainer(type) {
    return document.getElementById(type === 'Interessen' ? 'active-interests-container' : 'active-skills-container');
}

function renderSetupTags(type) {
    const container = getTagContainer(type);
    if (!container) return;
    container.innerHTML = '';
    state.setupTags[type].forEach(tag => {
        const pill = document.createElement('span');
        pill.className = 'active-tag-pill';
        pill.innerHTML = `<span>${tag}</span><span class="remove-tag" onclick="removeSetupTag('${type}', '${tag.replace(/'/g, "\\'")}')">×</span>`;
        container.appendChild(pill);
    });
}

function toggleSetupTag(tile, type, tag) {
    const tags = state.setupTags[type] || [];
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
    updateProfileTags();
}

function removeSetupTag(type, tag) {
    state.setupTags[type] = (state.setupTags[type] || []).filter(item => item !== tag);
    document.querySelectorAll('.tag-tile').forEach(tile => {
        if (tile.textContent.trim() === tag) tile.classList.remove('active');
    });
    renderSetupTags(type);
    updateProfileTags();
}

function addCustomSetupTag(type, inputId) {
    const input = document.getElementById(inputId);
    const value = input ? input.value.trim() : '';
    if (!value) return;
    if (!state.setupTags[type].includes(value)) state.setupTags[type].push(value);
    if (input) input.value = '';
    renderSetupTags(type);
    updateProfileTags();
}

function updateProfileTags() {
    const container = document.getElementById('profile-interests-display');
    if (!container) return;
    const tags = state.setupTags.Interessen;
    container.innerHTML = tags.length
        ? tags.map(tag => `<span class="tag-pill active">${tag}</span>`).join('')
        : '<span class="tag-pill active">Keine Interessen ausgewählt</span>';
}

function toggleProfileSkill(skill) {
    showToast(skill + ' aktualisiert');
}

function removeActiveProfilePicture() {
    ['onboarding', 'profile'].forEach(scope => {
        const img = document.getElementById(scope + '-avatar-image');
        const placeholder = document.getElementById(scope + '-avatar-placeholder');
        const removeBtn = document.getElementById(scope + '-remove-active-btn');
        if (img) {
            img.removeAttribute('src');
            img.style.display = 'none';
        }
        if (placeholder) placeholder.style.display = 'inline';
        if (removeBtn) removeBtn.style.display = 'none';
    });
    showToast(typeof t === 'function' ? t('toast_photo_removed') : 'Foto entfernt.');
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
        document.querySelectorAll(`[data-category="${category}"]`).forEach(btn => {
            btn.classList.toggle('active', btn.dataset.value === state.avatarConfig[category]);
        });
    });
}

function updateAvatarPreview(category, value) {
    if (category && value) {
        state.avatarConfig[category] = value;
    }
    setAvatarActiveButtons();
    const preview = document.getElementById('avatar-live-preview');
    if (preview) {
        preview.innerHTML = getAvatarSvg(state.avatarConfig);
    }
}

function applyAvatarToPreview(scope) {
    const img = document.getElementById(scope + '-avatar-image');
    const placeholder = document.getElementById(scope + '-avatar-placeholder');
    const removeBtn = document.getElementById(scope + '-remove-active-btn');
    if (img) {
        img.src = getAvatarDataUrl();
        img.style.display = 'block';
    }
    if (placeholder) placeholder.style.display = 'none';
    if (removeBtn) removeBtn.style.display = 'inline-flex';
}

function applyAvatarConfig() {
    const wasInApp = state.currentView === 'app';
    applyAvatarToPreview('onboarding');
    applyAvatarToPreview('profile');
    closeAvatarEditor();
    showToast(typeof t === 'function' ? t('toast_avatar_saved') : 'Avatar gespeichert');
    if (wasInApp) {
        renderApp();
    } else {
        goToOnboardingStep('verify-select');
    }
}
function startEidSimulation() { startSimulatedVerification(); }

function selectVerifyMethod(method) {
    state.selectedVerifyMethod = method;
    document.querySelectorAll('.verification-option').forEach(el => el.classList.remove('selected'));
    const opt = document.getElementById('opt-' + method);
    if (opt) opt.classList.add('selected');
    const btn = document.getElementById('verify-select-next-btn');
    if (btn) btn.disabled = false;
    if (method === 'eid') {
        goToOnboardingStep('verify-eid-intro');
    }
}

function completeSimulationFlow() {
    const title = document.getElementById('sim-title');
    const sub = document.getElementById('sim-subtitle');
    if (title) title.innerText = typeof t === 'function' ? t('toast_id_confirmed') : 'Identität bestätigt';
    if (sub) sub.innerText = 'Du wirst nun weitergeleitet.';
    setTimeout(() => {
        switchTab('home');
        showToast(typeof t === 'function' ? t('toast_welcome') : 'Willkommen in der Nachbarschaft!');
    }, 900);
}

function sendNeighborRequest(btn, neighborName) {
    if (btn) {
        btn.innerText = 'Angefragt';
        btn.disabled = true;
    }
    const waiting = document.getElementById('neighbor-waiting');
    if (waiting) waiting.style.display = 'block';
    showToast('Anfrage an ' + neighborName + ' gesendet');
    setTimeout(completeSimulationFlow, 1200);
}

function toggleHelpView(view) {
    const canHelp = document.getElementById('view-can-help');
    const needHelp = document.getElementById('view-need-help');
    const canBtn = document.getElementById('btn-show-can-help');
    const needBtn = document.getElementById('btn-show-need-help');

    if (canHelp) canHelp.style.display = view === 'can-help' ? 'flex' : 'none';
    if (needHelp) needHelp.style.display = view === 'need-help' ? 'flex' : 'none';
    if (canBtn) canBtn.classList.toggle('active', view === 'can-help');
    if (needBtn) needBtn.classList.toggle('active', view === 'need-help');
}

function selectHelpCategory(btn, category) {
    state.selectedHelpCategory = category;
    document.querySelectorAll('#view-need-help .category-button').forEach(el => el.classList.remove('selected'));
    if (btn) btn.classList.add('selected');
}

function submitHelpRequest() {
    const input = document.getElementById('help-request-text');
    const text = input ? input.value.trim() : '';
    showToast(text ? 'Unterstützungsanfrage gesendet' : 'Bitte beschreibe deine Anfrage kurz.');
    if (text && input) input.value = '';
}

function startHelpMatch(name, topic) {
    openChatModal(name, 'Unterstützung: ' + topic);
}

function openChatModal(name, subtitle) {
    const title = document.getElementById('chat-title');
    const sub = document.getElementById('chat-subtitle');
    const welcome = document.getElementById('chat-welcome-msg');
    if (title) title.innerText = name;
    if (sub) sub.innerText = subtitle || '';
    if (welcome) welcome.innerText = subtitle ? subtitle + ': Schreib eine Nachricht, um den Kontakt zu starten.' : 'Schreib eine Nachricht, um den Kontakt zu starten.';
    openGlobalModal('chat');
}

function closeChatModal() { closeGlobalModal('chat'); }
function openAmbassadorChat(name) { openChatModal(name, 'Botschafter-Chat'); }
function openGroupChat(name) { openChatModal(name, 'Gruppen-Chat'); }
function openBorrowChat(item, owner) { openChatModal(owner, 'Ausleihe: ' + item); }
function openEventChat(name) { openChatModal(name, 'Event-Chat'); }

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

function borrowItem(btn, itemName, ownerName) {
    const chatBtn = btn ? btn.nextElementSibling : null;
    if (btn) {
        btn.innerText = 'Angefragt';
        btn.disabled = true;
    }
    if (chatBtn) chatBtn.style.display = 'inline-flex';
    showToast('Ausleihanfrage gesendet: ' + itemName);
}

function toggleJoinEvent(btn, eventName) {
    const chatBtn = btn ? btn.nextElementSibling : null;
    if (!btn) return;
    const joining = !btn.classList.contains('joined');
    btn.classList.toggle('joined', joining);
    btn.innerText = joining ? 'Du bist dabei' : 'Ich bin dabei!';
    btn.classList.toggle('btn-primary', !joining);
    btn.classList.toggle('btn-secondary', joining);
    if (chatBtn) chatBtn.style.display = joining ? 'inline-flex' : 'none';
    showToast(joining ? 'Teilnahme bestätigt: ' + eventName : 'Teilnahme entfernt');
}

function openCreateGroupModal() { openGlobalModal('create-group'); }
function closeCreateGroupModal() { closeGlobalModal('create-group'); }

function submitCreateGroup() {
    const nameInput = document.getElementById('new-group-name');
    const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Neue Gruppe';
    closeCreateGroupModal();
    showToast('Gruppe gegründet: ' + name);
    if (nameInput) nameInput.value = '';
}

function openAddShareItemModal() { openGlobalModal('add-item'); }
function closeAddShareItemModal() { closeGlobalModal('add-item'); }

function selectItemIcon(btn, icon) {
    state.selectedItemIcon = icon;
    document.querySelectorAll('#modal-add-item .category-button').forEach(el => el.classList.remove('selected'));
    if (btn) btn.classList.add('selected');
}

function submitAddShareItem() {
    const input = document.getElementById('new-item-name');
    const name = input && input.value.trim() ? input.value.trim() : 'Gegenstand';
    closeAddShareItemModal();
    showToast('Gegenstand hinzugefügt: ' + name);
    if (input) input.value = '';
}

function openAvatarEditor() {
    openGlobalModal('avatar-editor');
    updateAvatarPreview();
}

function closeAvatarEditor() { closeGlobalModal('avatar-editor'); }

function handleImageSelection(input, scope) {
    const file = input && input.files ? input.files[0] : null;
    if (!file) return;
    const img = document.getElementById(scope + '-avatar-image');
    const placeholder = document.getElementById(scope + '-avatar-placeholder');
    const removeBtn = document.getElementById(scope + '-remove-active-btn');
    const reader = new FileReader();
    reader.onload = () => {
        if (img) {
            img.src = reader.result;
            img.style.display = 'block';
        }
        if (placeholder) placeholder.style.display = 'none';
        if (removeBtn) removeBtn.style.display = 'inline-flex';
    };
    reader.readAsDataURL(file);
}

function updateProfileName(value) {
    const display = document.getElementById('profile-display-name');
    if (display) display.innerText = value || 'Max Mustermann';
}

function updateProfileStreet(value) {
    state.profileStreet = value;
}

function updateProfileZip(value) {
    state.profileZip = value;
}

function updateProfileRadius(radius) {
    [50, 100, 500].forEach(value => {
        const btn = document.getElementById('profile-rad-' + value);
        if (!btn) return;
        btn.classList.toggle('btn-primary', value === radius);
        btn.classList.toggle('btn-secondary', value !== radius);
    });
    state.radius = radius;
}

function updateProfileLendItems(value) {
    state.profileLendItems = value;
}

function logoutSimulation() {
    state.currentView = 'onboarding';
    state.onboardingStep = 'welcome';
    renderApp();
    showToast('Abgemeldet');
}

function submitReport(reason) {
    closeGlobalModal('report');
    showToast('Meldung gesendet: ' + reason);
}

function filterSharedItems() {
    const input = document.getElementById('item-search');
    const term = input ? input.value.trim().toLowerCase() : '';
    document.querySelectorAll('#items-container .item-card').forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(term) ? 'flex' : 'none';
    });
}

function getTtsElements(id) {
    const suffix = id && id.includes('long') ? 'long' : 'short';
    return {
        play: document.getElementById('tts-play-' + suffix),
        pause: document.getElementById('tts-pause-' + suffix),
        stop: document.getElementById('tts-stop-' + suffix),
        progressContainer: document.getElementById('tts-progress-container-' + suffix),
        progressBar: document.getElementById('tts-progress-bar-' + suffix)
    };
}

function getTtsText(id) {
    const source = id && id.includes('long')
        ? document.getElementById('netiquette-long-text-content')
        : document.getElementById('netiquette-short-text-content');
    return source ? source.innerText : '';
}

function setTtsButtons(id, isPlaying) {
    const els = getTtsElements(id);
    if (els.play) els.play.style.display = isPlaying ? 'none' : 'inline-flex';
    if (els.pause) els.pause.style.display = isPlaying ? 'inline-flex' : 'none';
    if (els.stop) els.stop.style.display = isPlaying ? 'inline-flex' : 'none';
    if (els.progressContainer) els.progressContainer.style.display = isPlaying ? 'block' : 'none';
    if (els.progressBar) els.progressBar.style.width = isPlaying ? '100%' : '0%';
}

function startTTS(id) {
    if (!('speechSynthesis' in window)) {
        showToast('Vorlesefunktion wird von diesem Browser nicht unterstützt.');
        return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(getTtsText(id));
    utterance.lang = state.language === 'en' ? 'en-US' : 'de-DE';
    utterance.onend = () => setTtsButtons(id, false);
    utterance.onerror = () => setTtsButtons(id, false);
    setTtsButtons(id, true);
    window.speechSynthesis.speak(utterance);
}

function pauseTTS(id) {
    if ('speechSynthesis' in window) window.speechSynthesis.pause();
    setTtsButtons(id, false);
}

function stopTTS(id) {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setTtsButtons(id, false);
}
