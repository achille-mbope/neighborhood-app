const shareState = {
    view: 'home',
    filterTerm: '',
    categories: [],
    selectedItem: null,
    addStep: 1
}

const newItem = {
    title: '',
    category: 'Werkzeug',
    description:'Elektrischer Rasenmaeher mit Kabel',
    condition: 'Gebraucht',
    owner: 'Familie Krause',
    status: '',
    isAvailable: true,
    distance: 250,
    ownerAvatar: 'FK',
}


const shareCategoryMeta = {
    Werkzeug: { icon: '🛠️' },
    Garten: { icon: '🌱' },
    Haushalt: { icon: '🏠' },
    'Freizeit & Sport': { icon: '🚲' }
};

const conditionRank = {
    neu: 1,
    'sehr gut': 2,
    gebraucht: 3
};

function shareTranslate(key, fallback, replacements = {}) {
    const value = typeof t === 'function' ? t(key) : fallback;
    return Object.entries(replacements).reduce(
        (text, [name, replacement]) => text.replace(`{${name}}`, replacement),
        value === key ? fallback : value
    );
}

function shareText(text) {
    return typeof translateStaticText === 'function' ? translateStaticText(text) : text;
}

function getShareCategoryLabel(category) {
    const keys = {
        Werkzeug: 'share_cat_tools',
        Garten: 'share_cat_garden',
        Haushalt: 'share_cat_household',
        'Freizeit & Sport': 'share_cat_sports'
    };
    return keys[category] ? shareTranslate(keys[category], category) : shareText(category);
}

const defaultShareItems = [
    {
        id: 'drill',
        title: 'Schlagbohrmaschine',
        category: 'Werkzeug',
        description: 'Kräftige Bohrmaschine für Beton, Stein und schwere Regalbretter.',
        condition: 'sehr gut',
        availableCount: 1,
        owner: 'Klaus Weber',
        ownerAvatar: 'KW',
        distance: 80,
        createdAt: '2026-06-10',
        isAvailable: true,
        depositType: 'voluntary',
        depositAmount: '20 € Pfand',
        depositMethod: '',
        manualLink: '',
        from: '',
        to: '',
        options: ['Kostenlos verleihen'],
        secureDetails: {
            street: 'Tulpenweg 12',
            floor: 'Kellerabteil',
            bell: 'Klingel Weber',
            handover: 'Übergabe am Hoftor, bitte vorher kurz klingeln.',
            pickupTimes: 'werktags ab 18 Uhr'
        }
    },
    {
        id: 'ladder',
        title: '3m Teleskopleiter',
        category: 'Werkzeug',
        description: 'Stabile Leiter für Fenster, Garage und kleinere Reparaturen.',
        condition: 'gebraucht',
        availableCount: 2,
        owner: 'Dieter Müller',
        ownerAvatar: 'DM',
        distance: 120,
        createdAt: '2026-06-08',
        isAvailable: true,
        depositType: 'none',
        depositAmount: '',
        depositMethod: '',
        manualLink: '',
        from: '',
        to: '',
        options: ['Nur für bestätigte Nachbarn sichtbar'],
        secureDetails: {
            street: 'Tulpenweg 8',
            floor: 'Garage',
            bell: 'Müller',
            handover: 'Leiter steht nach Annahme in der Garage bereit.',
            pickupTimes: 'Samstagvormittag oder abends'
        }
    },
    {
        id: 'cargo-bike',
        title: 'E-Lastenrad',
        category: 'Freizeit & Sport',
        description: 'Elektrisches Lastenrad für Einkäufe, Kisten oder kurze Transporte.',
        condition: 'sehr gut',
        availableCount: 1,
        owner: 'Familie Krause',
        ownerAvatar: 'FK',
        distance: 210,
        createdAt: '2026-06-11',
        isAvailable: true,
        depositType: 'digital',
        depositAmount: '50 € Kaution',
        depositMethod: 'Wallet',
        manualLink: '',
        from: '',
        to: '',
        options: ['Digitale Kaution simulieren'],
        secureDetails: {
            street: 'Tulpenweg 15',
            floor: 'Hof',
            bell: 'Krause',
            handover: 'Akku und Schlüssel werden gemeinsam geprüft.',
            pickupTimes: 'Mo, Mi, Fr 17-20 Uhr'
        }
    },
    {
        id: 'hedge-trimmer',
        title: 'Elektrische Heckenschere',
        category: 'Garten',
        description: 'Für Hecken und Sträucher, inklusive Verlängerungskabel.',
        condition: 'gebraucht',
        availableCount: 0,
        owner: 'Sabine & Paul',
        ownerAvatar: 'SP',
        distance: 260,
        createdAt: '2026-06-05',
        isAvailable: false,
        depositType: 'none',
        depositAmount: '',
        depositMethod: '',
        manualLink: '',
        from: '',
        to: '',
        options: ['Kostenlos verleihen'],
        secureDetails: {
            street: 'Tulpenweg 22',
            floor: 'Gartenhaus',
            bell: 'Sabine & Paul',
            handover: 'Nur mit kurzer Einweisung zur Sicherheit.',
            pickupTimes: 'nach Absprache'
        }
    },
    {
        id: 'pressure-cooker',
        title: 'Schnellkochtopf',
        category: 'Haushalt',
        description: 'Großer Topf für Suppen, Eintöpfe und Meal-Prep.',
        condition: 'neu',
        availableCount: 1,
        owner: 'Helga Schmidt',
        ownerAvatar: 'HS',
        distance: 60,
        createdAt: '2026-06-12',
        isAvailable: true,
        depositType: 'none',
        depositAmount: '',
        depositMethod: '',
        manualLink: '',
        from: '',
        to: '',
        options: ['Kostenlos verleihen'],
        secureDetails: {
            street: 'Tulpenweg 4',
            floor: 'EG',
            bell: 'Schmidt',
            handover: 'Bitte sauber zurückgeben, Dichtung liegt im Deckel.',
            pickupTimes: 'täglich 10-12 Uhr'
        }
    }
];

function initSharingMarketplace() {
    ensureSharingState();
    renderShareItems();
    updateShareFlowStep();
}

function ensureSharingState() {
    state.shareFilters = state.shareFilters || {
        search: '',
        categories: [],
        categoryFilter: 'alle',
        availableOnly: true,
        showDistance: false,
        sort: 'distance'
    };
    state.shareRequests = state.shareRequests || {};
    state.shareLoans = state.shareLoans || {};
    state.userShareItems = Array.isArray(state.userShareItems) ? state.userShareItems : [];
    state.shareFlowStep = state.shareFlowStep || 1;
}

function getShareItems() {
    ensureSharingState();
    return defaultShareItems.concat(state.userShareItems);
}

function renderShareItems() {
    const container = document.getElementById('items-container');
    if (!container) return;

    const items = getFilteredShareItems();
    syncShareControls();
    container.innerHTML = items.length
        ? items.map(renderShareItemCard).join('')
        : '<div class="share-empty-state">Keine passenden Gegenstände gefunden.</div>';
    renderShareNotification();
}

function renderShareItems2(){
    const container = document.getElementById('share-root');
    if (!container) return;

    switch (shareState.view){
        case 'add':

            break;
        case 'request':

            break;
        case 'manage':

            break;
        default:
            renderHome();
    }
}

function renderHome() {
    const cats = Object.keys(shareCategoryMeta);
    const filteredItems = defaultShareItems.filter(item => {
        const matchesTerm = item.title.toLowerCase().includes(shareState.filterTerm.toLowerCase());
        const matchesCat = cats.length === 0 || cats.includes(item.category);

        return matchesTerm && matchesCat;
    });

    const categoryTiles = cats.map(cat => {})
}

function getFilteredShareItems() {
    ensureSharingState();
    const controls = readShareControls();
    state.shareFilters = controls;
    saveState();

    const term = controls.search.toLowerCase();
    let items = getShareItems().filter(item => {
        const categoryMatch = controls.categoryFilter === 'alle' || item.category === controls.categoryFilter;
        const tileMatch = !controls.categories.length || controls.categories.includes(item.category);
        const availabilityMatch = !controls.availableOnly || item.isAvailable;
        const text = `${item.title} ${item.category} ${item.description} ${item.owner}`.toLowerCase();
        return categoryMatch && tileMatch && availabilityMatch && (!term || text.includes(term));
    });

    items = items.slice().sort((a, b) => {
        if (controls.sort === 'condition') return conditionRank[a.condition] - conditionRank[b.condition];
        if (controls.sort === 'newest') return new Date(b.createdAt) - new Date(a.createdAt);
        return a.distance - b.distance;
    });

    return items;
}

function renderShareItemCard(item) {
    const request = state.shareRequests[item.id];
    const statusText = item.isAvailable
        ? shareTranslate('share_status_available', 'Verfügbar')
        : shareTranslate('share_status_borrowed', 'Aktuell verliehen');
    const actionText = request
        ? shareTranslate('share_request_running', 'Anfrage läuft')
        : shareTranslate('share_view_details', 'Details ansehen');
    const disabled = item.isAvailable ? '' : ' aria-disabled="true"';
    const distanceMeta = shareTranslate('share_distance_away', '{distance} m entfernt', { distance: item.distance });

    return `
        <button class="item-card share-item-card" type="button" onclick="openShareItemDetail('${item.id}')"${disabled}>
            <div class="share-item-image" aria-label="Bild des Gegenstands">${getShareCategoryIcon(item.category)}</div>
            <div class="share-card-body">
                <div class="share-card-topline">
                    <span class="share-category-chip">${escapeHtml(getShareCategoryLabel(item.category))}</span>
                    <span class="item-status ${item.isAvailable ? 'available' : 'borrowed'}">${statusText}</span>
                </div>
                <span class="share-distance-badge">${escapeHtml(distanceMeta)}</span>
                <h2 class="item-name">${escapeHtml(shareText(item.title))}</h2>
                <p class="share-card-desc">${escapeHtml(shareText(item.description))}</p>
                <div class="share-card-meta">
                    <span>${shareTranslate('share_condition_label', 'Zustand')}: ${escapeHtml(shareText(item.condition))}</span>
                    <span>${shareTranslate('share_count_label', 'Anzahl')}: ${item.availableCount}</span>
                </div>
                <div class="share-owner-row">
                    <span class="share-owner-avatar">${escapeHtml(item.ownerAvatar)}</span>
                    <span>${escapeHtml(shareText(item.owner))}</span>
                </div>
                <span class="share-card-action">${actionText}</span>
            </div>
        </button>
    `;
}

function getShareCategoryIcon(category) {
    return shareCategoryMeta[category] ? shareCategoryMeta[category].icon : '📦';
}

function readShareControls() {
    const search = document.getElementById('item-search');
    const categoryFilter = document.getElementById('share-category-filter');
    const availableOnly = document.getElementById('share-available-only');
    const showDistance = document.getElementById('share-location-enabled');
    const sort = document.getElementById('share-sort');

    return {
        search: search ? search.value.trim() : state.shareFilters.search,
        categories: state.shareFilters.categories || [],
        categoryFilter: categoryFilter ? categoryFilter.value : state.shareFilters.categoryFilter,
        availableOnly: availableOnly ? availableOnly.checked : state.shareFilters.availableOnly,
        showDistance: showDistance ? showDistance.checked : state.shareFilters.showDistance,
        sort: sort ? sort.value : state.shareFilters.sort
    };
}

function syncShareControls() {
    ensureSharingState();
    const filters = state.shareFilters;
    const search = document.getElementById('item-search');
    const categoryFilter = document.getElementById('share-category-filter');
    const availableOnly = document.getElementById('share-available-only');
    const showDistance = document.getElementById('share-location-enabled');
    const sort = document.getElementById('share-sort');

    if (search && search.value !== filters.search) search.value = filters.search;
    if (categoryFilter) categoryFilter.value = filters.categoryFilter || 'alle';
    if (availableOnly) availableOnly.checked = filters.availableOnly !== false;
    if (showDistance) showDistance.checked = filters.showDistance === true;
    if (sort) sort.value = filters.sort || 'distance';

    document.querySelectorAll('.share-category-tile').forEach(tile => {
        tile.classList.toggle('selected', filters.categories.includes(tile.dataset.category));
    });
}

function filterSharedItems() {
    renderShareItems();
}

function toggleShareCategory(button, category) {
    ensureSharingState();
    const categories = new Set(state.shareFilters.categories || []);
    if (categories.has(category)) {
        categories.delete(category);
    } else {
        categories.add(category);
    }
    state.shareFilters.categories = Array.from(categories);
    if (button) button.classList.toggle('selected', categories.has(category));
    renderShareItems();
}

function setShareCategoryFilter(value) {
    ensureSharingState();
    state.shareFilters.categoryFilter = value || 'alle';
    renderShareItems();
}

function openShareItemDetail(itemId) {
    const item = getShareItems().find(entry => entry.id === itemId);
    const detail = document.getElementById('share-detail-view');
    const overview = document.getElementById('share-overview');
    if (!item || !detail || !overview) return;

    state.selectedShareItemId = itemId;
    saveState();
    overview.hidden = true;
    overview.style.display = 'none';
    detail.hidden = false;
    detail.style.display = 'flex';
    detail.innerHTML = renderShareDetail(item);
    setShareHeaderBackVisible(true);
}

function closeShareItemDetail() {
    const detail = document.getElementById('share-detail-view');
    const overview = document.getElementById('share-overview');
    if (detail) {
        detail.hidden = true;
        detail.style.display = 'none';
        detail.innerHTML = '';
    }
    if (overview) {
        overview.hidden = false;
        overview.style.display = 'block';
    }
    setShareHeaderBackVisible(false);
    state.selectedShareItemId = null;
    saveState();
    renderShareItems();
}

function setShareHeaderBackVisible(visible) {
    const button = document.getElementById('share-header-back');
    if (!button) return;
    button.hidden = !visible;
}

function renderShareDetail(item) {
    const request = state.shareRequests[item.id];
    const loan = state.shareLoans[item.id];
    const accepted = request && request.status === 'accepted';
    const deposit = renderDepositSummary(item, accepted);
    const secureDetails = accepted ? renderSecureDetails(item) : `
        <div class="share-privacy-box">
            <strong>Adressdaten geschützt</strong>
            <p>Straße, Hausnummer, Stockwerk, Klingel- und Übergabehinweise werden erst nach Annahme der Anfrage angezeigt.</p>
        </div>
    `;

    return `
        <div class="share-detail-layout">
            <div class="share-detail-main">
                <div class="share-detail-image">${getShareCategoryIcon(item.category)}</div>
                <span class="share-category-chip">${escapeHtml(getShareCategoryLabel(item.category))}</span>
                <h1 class="share-title">${escapeHtml(shareText(item.title))}</h1>
                <p class="share-subtitle">${escapeHtml(shareText(item.description))}</p>
                <div class="share-detail-facts">
                    <span>${shareTranslate('share_condition_label', 'Zustand')}: <strong>${escapeHtml(shareText(item.condition))}</strong></span>
                    <span>${shareTranslate('share_available_label', 'Verfügbar')}: <strong>${item.availableCount}</strong></span>
                    <span>${shareTranslate('share_sort_distance', 'Entfernung')}: <strong>${shareTranslate('share_distance_away', '{distance} m entfernt', { distance: item.distance })}</strong></span>
                    <span>${shareTranslate('share_owner_label', 'Anbieter')}: <strong>${escapeHtml(shareText(item.owner))}</strong></span>
                </div>
                ${deposit}
                ${secureDetails}
                ${renderLoanStatus(item, request, loan)}
            </div>
            <aside class="share-request-panel">
                ${renderRequestPanel(item, request)}
            </aside>
        </div>
    `;
}

function renderDepositSummary(item, accepted) {
    if (item.depositType === 'none') {
        return '<div class="share-info-card"><strong>Pfand</strong><span>Kein Pfand erforderlich.</span></div>';
    }
    const label = item.depositType === 'digital' ? 'Digitale Kaution (Simulation)' : 'Freiwilliges Pfand';
    const method = item.depositType === 'digital' && item.depositMethod ? ` über ${item.depositMethod}` : '';
    const visibility = accepted ? 'simuliert reserviert und nach Rückgabe freigegeben' : 'erst nach Annahme simuliert reserviert';
    return `<div class="share-info-card"><strong>${label}</strong><span>${item.depositAmount || 'Betrag offen'}${method}, ${visibility}.</span></div>`;
}

function renderSecureDetails(item) {
    const details = item.secureDetails || {};
    return `
        <div class="share-secure-details">
            <strong>Sichere Übergabe</strong>
            <dl>
                <div><dt>Adresse</dt><dd>${escapeHtml(details.street || 'wird abgestimmt')}</dd></div>
                <div><dt>Stockwerk</dt><dd>${escapeHtml(details.floor || 'wird abgestimmt')}</dd></div>
                <div><dt>Klingel</dt><dd>${escapeHtml(details.bell || 'wird abgestimmt')}</dd></div>
                <div><dt>Hinweise</dt><dd>${escapeHtml(details.handover || 'wird abgestimmt')}</dd></div>
                <div><dt>Abholzeiten</dt><dd>${escapeHtml(details.pickupTimes || 'nach Absprache')}</dd></div>
            </dl>
        </div>
    `;
}

function renderRequestPanel(item, request) {
    if (!item.isAvailable) {
        return '<div class="share-info-card"><strong>Nicht verfügbar</strong><span>Dieser Gegenstand ist aktuell verliehen.</span></div>';
    }

    if (!request) {
        return `
            <h2>Anfrage senden</h2>
            <div class="form-group">
                <label class="form-label" for="share-request-start">Startdatum</label>
                <input type="date" class="search-bar" id="share-request-start" style="margin-bottom: 0;">
            </div>
            <div class="form-group">
                <label class="form-label" for="share-request-end">Rückgabedatum</label>
                <input type="date" class="search-bar" id="share-request-end" style="margin-bottom: 0;">
            </div>
            <div class="form-group">
                <label class="form-label" for="share-request-message">Nachricht an den Verleiher</label>
                <textarea class="form-textarea" id="share-request-message" placeholder="Kurz erklären, wofür du den Gegenstand brauchst."></textarea>
            </div>
            <button class="btn btn-primary" type="button" onclick="submitBorrowRequest('${item.id}')">Anfrage senden</button>
        `;
    }

    if (request.status === 'pending') {
        return `
            <h2>Anfrage beim Verleiher</h2>
            <p class="feature-desc">Simulierte Benachrichtigung wurde an ${escapeHtml(item.owner)} gesendet.</p>
            <div class="share-request-summary">
                <span>${escapeHtml(request.startDate || 'Start offen')} bis ${escapeHtml(request.endDate || 'Rückgabe offen')}</span>
                <p>${escapeHtml(request.message || 'Keine Nachricht')}</p>
            </div>
            <div class="share-action-stack">
                <button class="btn btn-primary" type="button" onclick="respondToBorrowRequest('${item.id}', 'accepted')">Anfrage annehmen</button>
                <button class="btn btn-secondary" type="button" onclick="respondToBorrowRequest('${item.id}', 'question')">Rückfrage stellen</button>
                <button class="btn btn-secondary" type="button" onclick="respondToBorrowRequest('${item.id}', 'declined')">Anfrage ablehnen</button>
            </div>
        `;
    }

    if (request.status === 'declined') {
        return '<div class="share-info-card"><strong>Anfrage abgelehnt</strong><span>Du kannst eine neue Anfrage mit anderen Daten senden.</span></div>';
    }

    if (request.status === 'question') {
        return `
            <div class="share-info-card">
                <strong>Rückfrage gestellt</strong>
                <span>Der Verleiher fragt nach Details. Nutze den Chat, um die Übergabe abzustimmen.</span>
            </div>
            <button class="btn btn-secondary" type="button" onclick="openBorrowChat('${escapeJs(item.title)}', '${escapeJs(item.owner)}')">Chat öffnen</button>
        `;
    }

    return `
        <h2>Leihvorgang aktiv</h2>
        <label class="share-confirmation">
            <input type="checkbox" id="share-handover-confirm" onchange="toggleHandoverConfirmation('${item.id}', this.checked)" ${request.handoverConfirmed ? 'checked' : ''}>
            <span>Ich bestätige, dass ich den Gegenstand sorgfältig behandle und im vereinbarten Zustand zurückgebe.</span>
        </label>
        <button class="btn btn-primary" type="button" onclick="confirmHandover('${item.id}')" ${request.handoverConfirmed ? '' : 'disabled'}>Übergabe abschließen</button>
        <button class="btn btn-secondary" type="button" onclick="openBorrowChat('${escapeJs(item.title)}', '${escapeJs(item.owner)}')">Chat öffnen</button>
    `;
}

function renderLoanStatus(item, request, loan) {
    if (!request) return '';
    const accepted = request.status === 'accepted';
    const returnedByBorrower = loan && loan.returnedByBorrower;
    const returnedByOwner = loan && loan.returnedByOwner;
    const done = returnedByBorrower && returnedByOwner;

    return `
        <div class="share-status-card">
            <strong>Status</strong>
            <ol>
                <li class="${request ? 'done' : ''}">Anfrage gesendet</li>
                <li class="${accepted ? 'done' : ''}">Annahme durch Verleiher</li>
                <li class="${request.handoverComplete ? 'done' : ''}">Übergabe bestätigt</li>
                <li class="${done ? 'done' : ''}">Rückgabe abgeschlossen</li>
            </ol>
            ${accepted ? renderReturnPanel(item, loan) : ''}
        </div>
    `;
}

function renderReturnPanel(item, loan) {
    loan = loan || {};
    const depositText = item.depositType === 'none' ? '' : '<p class="feature-desc">Pfandfreigabe wird nach beidseitiger Rückgabe simuliert ausgelöst.</p>';
    return `
        <div class="share-return-panel">
            <h3>Rückgabeprozess</h3>
            <div class="share-checkbox-list">
                <label><input type="checkbox" onchange="toggleReturnConfirmation('${item.id}', 'borrower', this.checked)" ${loan.returnedByBorrower ? 'checked' : ''}> Ausleiher: Gegenstand zurückgegeben</label>
                <label><input type="checkbox" onchange="toggleReturnConfirmation('${item.id}', 'owner', this.checked)" ${loan.returnedByOwner ? 'checked' : ''}> Verleiher: Rückgabe erhalten</label>
            </div>
            <textarea class="form-textarea" id="share-return-note" placeholder="Optional: Zustand dokumentieren"></textarea>
            ${depositText}
        </div>
    `;
}

function submitBorrowRequest(itemId) {
    const start = document.getElementById('share-request-start');
    const end = document.getElementById('share-request-end');
    const message = document.getElementById('share-request-message');
    state.shareRequests[itemId] = {
        status: 'pending',
        startDate: start ? start.value : '',
        endDate: end ? end.value : '',
        message: message ? message.value.trim() : '',
        handoverConfirmed: false,
        handoverComplete: false
    };
    saveState();
    showToast('Neue Anfrage gesendet');
    renderShareNotification('Neue Anfrage wurde simuliert an den Verleiher gesendet.');
    openShareItemDetail(itemId);
}

function respondToBorrowRequest(itemId, status) {
    const request = state.shareRequests[itemId];
    if (!request) return;
    request.status = status;
    if (status === 'accepted') {
        state.shareLoans[itemId] = {
            returnedByBorrower: false,
            returnedByOwner: false,
            depositReleased: false
        };
        showToast('Anfrage angenommen');
        renderShareNotification('Anfrage angenommen: Leihvorgang wurde erstellt.');
    } else if (status === 'declined') {
        showToast('Anfrage abgelehnt');
        renderShareNotification('Anfrage wurde abgelehnt.');
    } else {
        showToast('Rückfrage gestellt');
        renderShareNotification('Rückfrage wurde simuliert gesendet.');
    }
    saveState();
    openShareItemDetail(itemId);
}

function toggleHandoverConfirmation(itemId, checked) {
    if (!state.shareRequests[itemId]) return;
    state.shareRequests[itemId].handoverConfirmed = checked;
    saveState();
    openShareItemDetail(itemId);
}

function confirmHandover(itemId) {
    const request = state.shareRequests[itemId];
    if (!request || !request.handoverConfirmed) {
        showToast('Bitte bestätige zuerst die sorgfältige Behandlung.');
        return;
    }
    request.handoverComplete = true;
    saveState();
    showToast('Übergabe abgeschlossen');
    renderShareNotification('Übergabe bestätigt. Erinnerung zur Rückgabe ist aktiv.');
    openShareItemDetail(itemId);
}

function toggleReturnConfirmation(itemId, party, checked) {
    state.shareLoans[itemId] = state.shareLoans[itemId] || {};
    if (party === 'borrower') state.shareLoans[itemId].returnedByBorrower = checked;
    if (party === 'owner') state.shareLoans[itemId].returnedByOwner = checked;

    const loan = state.shareLoans[itemId];
    if (loan.returnedByBorrower && loan.returnedByOwner) {
        loan.depositReleased = true;
        showToast('Rückgabe abgeschlossen. Pfandfreigabe simuliert.');
        renderShareNotification('Erfolgreicher Abschluss: Rückgabe bestätigt und Pfand freigegeben.');
    }
    saveState();
    openShareItemDetail(itemId);
}

function openAddShareItemModal() {
    renderShareFlowModal();
    state.shareFlowStep = 1;
    saveState();
    updateShareFlowStep();
    openGlobalModal('add-item');
}

function closeAddShareItemModal() {
    closeGlobalModal('add-item');
}

function renderShareFlowModal() {
    const modal = document.querySelector('#modal-add-item .modal-content');
    if (!modal) return;
    modal.className = 'modal-content share-flow-modal';
    modal.innerHTML = `
        <button class="modal-close-btn" onclick="closeAddShareItemModal()">×</button>
        <h2 class="modal-title">Gegenstand einstellen</h2>
        <div class="share-stepper" aria-label="Eingabeschritte">
            <span class="share-step-dot active" data-step-dot="1">1</span>
            <span class="share-step-dot" data-step-dot="2">2</span>
            <span class="share-step-dot" data-step-dot="3">3</span>
        </div>
        <div class="share-flow-step active" data-share-step="1">
            <div class="form-group">
                <label class="form-label" for="new-item-name">Titel des Gegenstands</label>
                <input type="text" class="search-bar" id="new-item-name" placeholder="z.B. Vertikutierer, Bohrer" style="margin-bottom: 0;">
            </div>
            <div class="form-group">
                <label class="form-label" for="new-item-category">Kategorie</label>
                <select class="search-bar" id="new-item-category" style="margin-bottom: 0;">
                    <option value="Werkzeug">Werkzeug</option>
                    <option value="Garten">Garten</option>
                    <option value="Haushalt">Haushalt</option>
                    <option value="Freizeit & Sport">Freizeit & Sport</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label" for="new-item-description">Beschreibung</label>
                <textarea class="form-textarea" id="new-item-description" placeholder="Kurz beschreiben, wofür der Gegenstand geeignet ist."></textarea>
            </div>
            <div class="form-group">
                <label class="form-label" for="new-item-photos">Fotos hochladen</label>
                <input type="file" id="new-item-photos" accept="image/*" multiple>
                <p class="feature-desc" style="font-size: var(--fs-xs); margin-top: 6px;">Mehrere Fotos sind möglich. Die Vorschau wird lokal simuliert.</p>
            </div>
        </div>
        <div class="share-flow-step" data-share-step="2">
            <div class="share-form-grid">
                <div class="form-group">
                    <label class="form-label" for="new-item-condition">Zustand</label>
                    <select class="search-bar" id="new-item-condition" style="margin-bottom: 0;">
                        <option value="neu">neu</option>
                        <option value="sehr gut" selected>sehr gut</option>
                        <option value="gebraucht">gebraucht</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label" for="new-item-count">Anzahl verfügbar</label>
                    <input type="number" class="search-bar" id="new-item-count" value="1" min="1" style="margin-bottom: 0;">
                </div>
            </div>
            <div class="form-group">
                <label class="form-label" for="new-item-link">Optional: Bedienungslink</label>
                <input type="url" class="search-bar" id="new-item-link" placeholder="https://..." style="margin-bottom: 0;">
            </div>
            <div class="share-form-grid">
                <div class="form-group">
                    <label class="form-label" for="new-item-from">Verfügbar von</label>
                    <input type="date" class="search-bar" id="new-item-from" style="margin-bottom: 0;">
                </div>
                <div class="form-group">
                    <label class="form-label" for="new-item-to">Verfügbar bis</label>
                    <input type="date" class="search-bar" id="new-item-to" style="margin-bottom: 0;">
                </div>
            </div>
            <div class="share-checkbox-list">
                <label><input type="checkbox" id="new-item-free" checked> Kostenlos verleihen</label>
                <label><input type="checkbox" id="new-item-effort"> Gegen kleine Aufwandsentschädigung (nicht monetär)</label>
                <label><input type="checkbox" id="new-item-confirmed-only"> Nur für bestätigte Nachbarn sichtbar</label>
            </div>
        </div>
        <div class="share-flow-step" data-share-step="3">
            <div class="form-group">
                <label class="form-label" for="new-item-deposit-type">Pfandsystem</label>
                <select class="search-bar" id="new-item-deposit-type" onchange="updateDepositFields()" style="margin-bottom: 0;">
                    <option value="none">Kein Pfand</option>
                    <option value="voluntary">Freiwilliges Pfand</option>
                    <option value="digital">Digitale Kaution (Simulation)</option>
                </select>
            </div>
            <div id="new-item-deposit-fields" class="share-deposit-fields" hidden>
                <div class="share-form-grid">
                    <div class="form-group">
                        <label class="form-label" for="new-item-deposit-amount">Betrag</label>
                        <input type="text" class="search-bar" id="new-item-deposit-amount" placeholder="20 € Pfand" style="margin-bottom: 0;">
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="new-item-deposit-method">Methode</label>
                        <select class="search-bar" id="new-item-deposit-method" style="margin-bottom: 0;">
                            <option value="PayPal">PayPal</option>
                            <option value="Kreditkarte">Kreditkarte</option>
                            <option value="Wallet">Wallet</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="share-privacy-box">
                <strong>Sichere Übergabe</strong>
                <p>Adressdaten sind nicht öffentlich sichtbar und werden erst nach Annahme der Anfrage zwischen Verleiher und Ausleiher angezeigt.</p>
            </div>
            <div class="share-form-grid">
                <div class="form-group">
                    <label class="form-label" for="new-item-floor">Stockwerk</label>
                    <input type="text" class="search-bar" id="new-item-floor" placeholder="z.B. 2. OG" style="margin-bottom: 0;">
                </div>
                <div class="form-group">
                    <label class="form-label" for="new-item-pickup-times">Bevorzugte Abholzeiten</label>
                    <input type="text" class="search-bar" id="new-item-pickup-times" placeholder="z.B. werktags ab 18 Uhr" style="margin-bottom: 0;">
                </div>
            </div>
            <div class="form-group">
                <label class="form-label" for="new-item-handover">Klingel- und Übergabehinweise</label>
                <textarea class="form-textarea" id="new-item-handover" placeholder="z.B. Klingel Müller, Übergabe im Hof."></textarea>
            </div>
        </div>
        <div class="share-flow-actions">
            <button class="btn btn-secondary" type="button" onclick="changeShareFlowStep(-1)" id="share-flow-back">Zurück</button>
            <button class="btn btn-primary" type="button" onclick="changeShareFlowStep(1)" id="share-flow-next">Weiter</button>
            <button class="btn btn-primary" type="button" onclick="submitAddShareItem()" id="share-flow-submit" hidden>Einstellen</button>
        </div>
    `;
}

function changeShareFlowStep(delta) {
    state.shareFlowStep = Math.min(3, Math.max(1, (state.shareFlowStep || 1) + delta));
    saveState();
    updateShareFlowStep();
}

function updateShareFlowStep() {
    const step = state.shareFlowStep || 1;
    document.querySelectorAll('.share-flow-step').forEach(panel => {
        panel.classList.toggle('active', Number(panel.dataset.shareStep) === step);
    });
    document.querySelectorAll('.share-step-dot').forEach(dot => {
        dot.classList.toggle('active', Number(dot.dataset.stepDot) <= step);
    });
    const back = document.getElementById('share-flow-back');
    const next = document.getElementById('share-flow-next');
    const submit = document.getElementById('share-flow-submit');
    if (back) back.disabled = step === 1;
    if (next) next.hidden = step === 3;
    if (submit) submit.hidden = step !== 3;
}

function updateDepositFields() {
    const type = document.getElementById('new-item-deposit-type');
    const fields = document.getElementById('new-item-deposit-fields');
    if (fields && type) fields.hidden = type.value === 'none';
}

function selectItemIcon() {
    // Kept for compatibility with older inline handlers that may still exist in cached HTML.
}

function submitAddShareItem() {
    const title = getInputValue('new-item-name') || 'Gegenstand';
    const category = getInputValue('new-item-category') || 'Werkzeug';
    const depositType = getInputValue('new-item-deposit-type') || 'none';
    const depositMethod = getInputValue('new-item-deposit-method');
    const item = {
        id: 'user-' + Date.now(),
        title,
        category,
        description: getInputValue('new-item-description') || 'Von dir eingestellter Gegenstand.',
        condition: getInputValue('new-item-condition') || 'sehr gut',
        availableCount: Math.max(1, Number(getInputValue('new-item-count')) || 1),
        owner: state.profileName || 'Du',
        ownerAvatar: getInitials(state.profileName || 'Du'),
        distance: 0,
        createdAt: new Date().toISOString(),
        isAvailable: true,
        depositType,
        depositAmount: getInputValue('new-item-deposit-amount'),
        depositMethod: depositType === 'digital' ? depositMethod : '',
        manualLink: getInputValue('new-item-link'),
        from: getInputValue('new-item-from'),
        to: getInputValue('new-item-to'),
        options: getNewItemOptions(),
        secureDetails: {
            street: state.profileStreet || 'Adresse nach Annahme sichtbar',
            floor: getInputValue('new-item-floor'),
            bell: state.profileName || 'Klingelhinweis nach Annahme',
            handover: getInputValue('new-item-handover'),
            pickupTimes: getInputValue('new-item-pickup-times')
        }
    };

    state.userShareItems.unshift(item);
    saveState();
    closeAddShareItemModal();
    showToast('Gegenstand eingestellt: ' + title);
    renderShareItems();
    renderShareNotification('Neues Angebot wurde erstellt.');
}

function getNewItemOptions() {
    const options = [];
    if (document.getElementById('new-item-free')?.checked) options.push('Kostenlos verleihen');
    if (document.getElementById('new-item-effort')?.checked) options.push('Gegen kleine Aufwandsentschädigung');
    if (document.getElementById('new-item-confirmed-only')?.checked) options.push('Nur für bestätigte Nachbarn sichtbar');
    return options;
}

function getInputValue(id) {
    const input = document.getElementById(id);
    return input ? input.value.trim() : '';
}

function getInitials(name) {
    return String(name || 'Du')
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map(part => part[0].toUpperCase())
        .join('');
}

function renderShareNotification(message) {
    const strip = document.getElementById('share-notification-strip');
    if (!strip) return;
    strip.textContent = message || getLatestShareNotification();
}

function getLatestShareNotification() {
    const activeRequests = Object.values(state.shareRequests || {}).filter(request => request.status === 'pending').length;
    if (activeRequests) return `${activeRequests} neue Anfrage${activeRequests > 1 ? 'n' : ''} offen.`;
    const activeLoans = Object.values(state.shareLoans || {}).filter(loan => !(loan.returnedByBorrower && loan.returnedByOwner)).length;
    if (activeLoans) return 'Bevorstehende Rückgabe im Blick behalten.';
    return 'Keine neuen Benachrichtigungen.';
}

function borrowItem(button, itemName) {
    const item = getShareItems().find(entry => entry.title === itemName);
    if (item) {
        openShareItemDetail(item.id);
    } else {
        showToast('Bitte öffne den Gegenstand über die Detailansicht.');
    }
}

function escapeHtml(value) {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function escapeJs(value) {
    return String(value || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}
