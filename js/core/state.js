var STORAGE_KEY = 'gartenzaun_app_state';

var defaultState = {
    currentView: "onboarding",
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
    profileName: 'Max Mustermann',
    profileStreet: '',
    profileZip: '',
    profileLendItems: '',
    profileImageDataUrl: '',
    profileImageKind: '',
    profileSkills: [],
    formValues: {},
    isVerified: false,
    netiquetteAccepted: false,
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
        Interessen: []
    }
};

function mergeDeep(target, source) {
    Object.keys(source || {}).forEach(key => {
        const sourceValue = source[key];
        const targetValue = target[key];
        if (
            sourceValue &&
            typeof sourceValue === 'object' &&
            !Array.isArray(sourceValue) &&
            targetValue &&
            typeof targetValue === 'object' &&
            !Array.isArray(targetValue)
        ) {
            mergeDeep(targetValue, sourceValue);
        } else {
            target[key] = sourceValue;
        }
    });
    return target;
}

function loadSavedState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch (error) {
        return {};
    }
}

var state = mergeDeep(JSON.parse(JSON.stringify(defaultState)), loadSavedState());

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
        console.warn('Could not save app state:', error);
    }
}

function resetSavedState() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) { }
}
