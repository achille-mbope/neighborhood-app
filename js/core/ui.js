
let rerender = () => {};

function setRenderCallback(callback) {
    rerender = callback;
}

function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}

function showToast(message) {
    const toast = document.getElementById('global-toast');
    if (!toast) return;
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function getModal(id) {
    return document.getElementById(id) || document.getElementById('modal-' + id);
}

function openGlobalModal(id) {
    const modal = getModal(id);
    if (modal) modal.classList.add('active');
    document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('show'));
}

function closeGlobalModal(id) {
    const modal = getModal(id);
    if (modal) modal.classList.remove('active');
}

function toggleCustomSelect(trigger) {
    const options = trigger && trigger.parentElement
        ? trigger.parentElement.querySelector('.custom-select-options')
        : null;
    if (options) options.classList.toggle('open');
}

function toggleMenu(event) {
    event.stopPropagation();
    const menu = event.currentTarget.nextElementSibling;
    if (menu && menu.classList.contains('dropdown-menu')) {
        menu.classList.toggle('show');
    }
}

function setAccessibilityClass(className, enabled) {
    document.documentElement.classList.toggle(className, enabled);
    document.body.classList.toggle(className, enabled);
}

function applyGlobalSettings() {
    try {
        if (typeof window.setLanguage === 'function') {
            window.setLanguage(state.language);
        }
        document.querySelectorAll('.custom-select-trigger .custom-select-value').forEach(valueContainer => {
            valueContainer.innerHTML = state.language === 'de'
                ? '<img src="assets/flag-de.svg" alt="DE"><span>Deutsch</span>'
                : '<img src="assets/flag-us.svg" alt="US"><span>English</span>';
        });
    } catch (error) { }

    setAccessibilityClass('high-contrast', state.highContrast);
    setAccessibilityClass('large-font', state.largeFont);

    const highContrast = document.getElementById('toggle-high-contrast');
    const profileHighContrast = document.getElementById('profile-toggle-high-contrast');
    const largeFont = document.getElementById('toggle-large-font');
    const profileLargeFont = document.getElementById('profile-toggle-large-font');
    if (highContrast) highContrast.checked = state.highContrast;
    if (profileHighContrast) profileHighContrast.checked = state.highContrast;
    if (largeFont) largeFont.checked = state.largeFont;
    if (profileLargeFont) profileLargeFont.checked = state.largeFont;

    const netiquetteCheckbox = document.getElementById('accept-checkbox');
    const netiquetteButton = document.getElementById('netiquette-next-btn');
    if (netiquetteCheckbox && netiquetteButton) {
        netiquetteCheckbox.checked = state.netiquetteAccepted;
        netiquetteButton.disabled = !state.netiquetteAccepted;
    }
}

function selectLanguage(lang) {
    state.language = lang;
    localStorage.setItem('gartenzaun_language', lang);
    saveState();
    rerender();
    showToast(typeof window.t === 'function' ? (window.t('toast_lang_changed') || 'Sprache geÃ¤ndert.') : 'Sprache geÃ¤ndert.');
}

function toggleLargeFont(checked) {
    state.largeFont = typeof checked === 'boolean' ? checked : !state.largeFont;
    localStorage.setItem('gartenzaun_large_font', state.largeFont ? 'true' : 'false');
    saveState();
    rerender();
    showToast(typeof window.t === 'function'
        ? window.t(state.largeFont ? 'toast_large_font_on' : 'toast_large_font_off')
        : (state.largeFont ? 'GroÃŸe Schrift aktiviert' : 'GroÃŸe Schrift deaktiviert'));
}

function toggleHighContrast(checked) {
    state.highContrast = typeof checked === 'boolean' ? checked : !state.highContrast;
    localStorage.setItem('gartenzaun_high_contrast', state.highContrast ? 'true' : 'false');
    saveState();
    rerender();
    showToast(typeof window.t === 'function'
        ? window.t(state.highContrast ? 'toast_high_contrast_on' : 'toast_high_contrast_off')
        : (state.highContrast ? 'Hoher Kontrast aktiviert' : 'Hoher Kontrast deaktiviert'));
}

function bindGlobalDismissHandlers() {
    document.addEventListener('click', event => {
        if (!event.target.closest('.menu-container')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('show'));
        }
        if (!event.target.closest('.custom-select-container')) {
            document.querySelectorAll('.custom-select-options').forEach(options => options.classList.remove('open'));
        }
    });
}
