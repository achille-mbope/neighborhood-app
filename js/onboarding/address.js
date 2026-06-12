
function setAddressValidationStatus(message, type) {
    const status = document.getElementById('address-validation-status');
    if (!status) return;
    status.style.display = 'block';
    status.innerText = message;
    status.style.backgroundColor = type === 'success'
        ? '#E8F8F5'
        : type === 'error'
            ? 'var(--color-accent-light)'
            : 'var(--color-primary-light)';
    status.style.borderColor = type === 'success'
        ? 'var(--color-success)'
        : type === 'error'
            ? 'var(--color-danger)'
            : 'var(--color-primary)';
    status.style.color = 'var(--color-text-dark)';
}

function setAddressButtonLoading(isLoading) {
    const button = document.getElementById('address-next-btn');
    if (!button) return;
    button.disabled = isLoading;
    button.dataset.originalText = button.dataset.originalText || button.innerText;
    button.innerText = isLoading ? 'Adresse wird geprÃ¼ft...' : button.dataset.originalText;
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
        headers: { Accept: 'application/json' }
    });
    if (!response.ok) throw new Error('OpenStreetMap konnte nicht erreicht werden.');
    const results = await response.json();
    return results.find(result => isLikelyValidAddress(result, street, zipCity)) || null;
}

function selectOnboardingRadius(radius, persist) {
    document.querySelectorAll('[id^="radius-"]').forEach(element => element.classList.remove('selected'));
    const selected = document.getElementById('radius-' + radius);
    if (selected) selected.classList.add('selected');
    state.radius = radius;
    if (persist !== false) saveState();
}

async function submitAddressAndRadius() {
    const values = getAddressInputs();
    const firstName = values.firstName.trim();
    const lastName = values.lastName.trim();
    const street = values.street.trim();
    const zipCity = values.zipCity.trim();

    if (!firstName || !lastName || !street || !zipCity) {
        setAddressValidationStatus('Bitte fÃ¼lle Vorname, Nachname, StraÃŸe sowie Postleitzahl & Ort aus.', 'error');
        return;
    }
    if (!/\d/.test(street)) {
        setAddressValidationStatus('Bitte gib StraÃŸe und Hausnummer an, damit die Adresse eindeutig geprÃ¼ft werden kann.', 'error');
        return;
    }

    try {
        setAddressButtonLoading(true);
        setAddressValidationStatus('Adresse wird mit OpenStreetMap geprÃ¼ft...', 'info');
        const result = await validateAddressWithOpenStreetMap(street, zipCity);
        if (!result) {
            setAddressValidationStatus('Diese Adresse konnte nicht eindeutig gefunden werden. Bitte prÃ¼fe StraÃŸe, Hausnummer, Postleitzahl und Ort.', 'error');
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
        saveState();

        setAddressValidationStatus('Adresse bestÃ¤tigt: ' + result.display_name, 'success');
        showToast('Adresse erfolgreich bestÃ¤tigt');
        setTimeout(() => goToOnboardingStep('profile-setup'), 700);
    } catch (error) {
        setAddressValidationStatus('Die OpenStreetMap-PrÃ¼fung ist fehlgeschlagen. Bitte prÃ¼fe deine Internetverbindung und versuche es erneut.', 'error');
    } finally {
        setAddressButtonLoading(false);
    }
}

function hydrateAddressStep() {
    const nameParts = (state.profileName || '').split(' ');
    const firstName = document.getElementById('profile-firstname');
    const lastName = document.getElementById('profile-lastname');
    const street = document.getElementById('address-street');
    const zip = document.getElementById('address-zip');

    if (firstName && state.profileName && state.profileName !== 'Max Mustermann') firstName.value = nameParts.shift() || '';
    if (lastName && state.profileName && state.profileName !== 'Max Mustermann') lastName.value = nameParts.join(' ');
    if (street) street.value = state.profileStreet || '';
    if (zip) zip.value = state.profileZip || '';
    selectOnboardingRadius(state.radius || 100, false);
}
