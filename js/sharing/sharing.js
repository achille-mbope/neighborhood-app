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

function shareDetailValue(text) {
    const value = text || '';
    const knownValues = {
        'Adresse nach Annahme sichtbar': ['share_detail_address_after_acceptance', 'Adresse nach Annahme sichtbar'],
        'Klingelhinweis nach Annahme': ['share_detail_bell_after_acceptance', 'Klingelhinweis nach Annahme'],
        'nach Absprache': ['share_detail_by_agreement', 'nach Absprache'],
        'wird abgestimmt': ['share_detail_to_be_arranged', 'wird abgestimmt']
    };
    if (knownValues[value]) {
        return shareTranslate(knownValues[value][0], knownValues[value][1]);
    }
    return shareText(value);
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
            ${renderShareItemImage(item, 'share-item-image')}
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

function renderShareItemImage(item, className) {
    const photo = Array.isArray(item.photos) && item.photos.length ? item.photos[0] : '';
    const label = shareTranslate('share_item_image_aria', 'Bild des Gegenstands');

    if (photo) {
        return `
            <div class="${className}">
                <img src="${escapeHtml(photo)}" alt="${escapeHtml(label)}">
            </div>
        `;
    }

    return `<div class="${className}" aria-label="${escapeHtml(label)}">${getShareCategoryIcon(item.category)}</div>`;
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
            <strong>${shareTranslate('share_detail_address_protected_title', 'Adressdaten geschützt')}</strong>
            <p>${shareTranslate('share_detail_address_protected_text', 'Straße, Hausnummer, Stockwerk, Klingel- und Übergabehinweise werden erst nach Annahme der Anfrage angezeigt.')}</p>
        </div>
    `;

    return `
        <div class="share-detail-layout">
            <div class="share-detail-main">
                ${renderShareItemImage(item, 'share-detail-image')}
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
        return `<div class="share-info-card"><strong>${shareTranslate('share_detail_deposit_title', 'Pfand')}</strong><span>${shareTranslate('share_detail_deposit_none_required', 'Kein Pfand erforderlich.')}</span></div>`;
    }
    const label = item.depositType === 'digital'
        ? shareTranslate('share_add_deposit_digital', 'Digitale Kaution (Simulation)')
        : shareTranslate('share_add_deposit_voluntary', 'Freiwilliges Pfand');
    const method = item.depositType === 'digital' && item.depositMethod
        ? shareTranslate('share_detail_deposit_method', ' über {method}', { method: item.depositMethod })
        : '';
    const amount = item.depositAmount ? shareText(item.depositAmount) : shareTranslate('share_detail_deposit_amount_open', 'Betrag offen');
    const visibility = accepted
        ? shareTranslate('share_detail_deposit_visibility_accepted', 'simuliert reserviert und nach Rückgabe freigegeben')
        : shareTranslate('share_detail_deposit_visibility_pending', 'erst nach Annahme simuliert reserviert');
    return `<div class="share-info-card"><strong>${label}</strong><span>${escapeHtml(amount)}${escapeHtml(method)}, ${visibility}.</span></div>`;
}

function renderSecureDetails(item) {
    const details = item.secureDetails || {};
    const pending = shareTranslate('share_detail_to_be_arranged', 'wird abgestimmt');
    return `
        <div class="share-secure-details">
            <strong>${shareTranslate('share_add_secure_handover_title', 'Sichere Übergabe')}</strong>
            <dl>
                <div><dt>${shareTranslate('share_detail_address_label', 'Adresse')}</dt><dd>${escapeHtml(shareDetailValue(details.street || pending))}</dd></div>
                <div><dt>${shareTranslate('share_add_floor_label', 'Stockwerk')}</dt><dd>${escapeHtml(shareDetailValue(details.floor || pending))}</dd></div>
                <div><dt>${shareTranslate('share_detail_bell_label', 'Klingel')}</dt><dd>${escapeHtml(shareDetailValue(details.bell || pending))}</dd></div>
                <div><dt>${shareTranslate('share_detail_notes_label', 'Hinweise')}</dt><dd>${escapeHtml(shareDetailValue(details.handover || pending))}</dd></div>
                <div><dt>${shareTranslate('share_detail_pickup_times_label', 'Abholzeiten')}</dt><dd>${escapeHtml(shareDetailValue(details.pickupTimes || shareTranslate('share_detail_by_agreement', 'nach Absprache')))}</dd></div>
            </dl>
        </div>
    `;
}

function renderRequestPanel(item, request) {
    if (!item.isAvailable) {
        return `<div class="share-info-card"><strong>${shareTranslate('share_detail_unavailable_title', 'Nicht verfügbar')}</strong><span>${shareTranslate('share_detail_unavailable_text', 'Dieser Gegenstand ist aktuell verliehen.')}</span></div>`;
    }

    if (!request) {
        return `
            <h2>${shareTranslate('share_detail_send_request_title', 'Anfrage senden')}</h2>
            <div class="form-group">
                <label class="form-label" for="share-request-start">${shareTranslate('share_detail_start_date_label', 'Startdatum')}</label>
                <input type="date" class="search-bar" id="share-request-start" style="margin-bottom: 0;">
            </div>
            <div class="form-group">
                <label class="form-label" for="share-request-end">${shareTranslate('share_detail_return_date_label', 'Rückgabedatum')}</label>
                <input type="date" class="search-bar" id="share-request-end" style="margin-bottom: 0;">
            </div>
            <div class="form-group">
                <label class="form-label" for="share-request-message">${shareTranslate('share_detail_message_label', 'Nachricht an den Verleiher')}</label>
                <textarea class="form-textarea" id="share-request-message" placeholder="${shareTranslate('share_detail_message_placeholder', 'Kurz erklären, wofür du den Gegenstand brauchst.')}"></textarea>
            </div>
            <button class="btn btn-primary" type="button" onclick="submitBorrowRequest('${item.id}')">${shareTranslate('share_detail_send_request_button', 'Anfrage senden')}</button>
        `;
    }

    if (request.status === 'pending') {
        return `
            <h2>${shareTranslate('share_detail_request_owner_title', 'Anfrage beim Verleiher')}</h2>
            <p class="feature-desc">${shareTranslate('share_detail_request_sent_to_owner', 'Simulierte Benachrichtigung wurde an {owner} gesendet.', { owner: escapeHtml(item.owner) })}</p>
            <div class="share-request-summary">
                <span>${escapeHtml(request.startDate || shareTranslate('share_detail_start_open', 'Start offen'))} ${shareTranslate('share_detail_until', 'bis')} ${escapeHtml(request.endDate || shareTranslate('share_detail_return_open', 'Rückgabe offen'))}</span>
                <p>${escapeHtml(request.message || shareTranslate('share_detail_no_message', 'Keine Nachricht'))}</p>
            </div>
            <div class="share-action-stack">
                <button class="btn btn-primary" type="button" onclick="respondToBorrowRequest('${item.id}', 'accepted')">${shareTranslate('share_detail_accept_request', 'Anfrage annehmen')}</button>
                <button class="btn btn-secondary" type="button" onclick="respondToBorrowRequest('${item.id}', 'question')">${shareTranslate('share_detail_ask_question', 'Rückfrage stellen')}</button>
                <button class="btn btn-secondary" type="button" onclick="respondToBorrowRequest('${item.id}', 'declined')">${shareTranslate('share_detail_decline_request', 'Anfrage ablehnen')}</button>
            </div>
        `;
    }

    if (request.status === 'declined') {
        return `<div class="share-info-card"><strong>${shareTranslate('share_detail_request_declined_title', 'Anfrage abgelehnt')}</strong><span>${shareTranslate('share_detail_request_declined_text', 'Du kannst eine neue Anfrage mit anderen Daten senden.')}</span></div>`;
    }

    if (request.status === 'question') {
        return `
            <div class="share-info-card">
                <strong>${shareTranslate('share_detail_question_title', 'Rückfrage gestellt')}</strong>
                <span>${shareTranslate('share_detail_question_text', 'Der Verleiher fragt nach Details. Nutze den Chat, um die Übergabe abzustimmen.')}</span>
            </div>
            <button class="btn btn-secondary" type="button" onclick="openBorrowChat('${escapeJs(item.title)}', '${escapeJs(item.owner)}')">${shareTranslate('share_detail_open_chat', 'Chat öffnen')}</button>
        `;
    }

    return `
        <h2>${shareTranslate('share_detail_loan_active_title', 'Leihvorgang aktiv')}</h2>
        <label class="share-confirmation">
            <input type="checkbox" id="share-handover-confirm" onchange="toggleHandoverConfirmation('${item.id}', this.checked)" ${request.handoverConfirmed ? 'checked' : ''}>
            <span>${shareTranslate('share_detail_care_confirmation', 'Ich bestätige, dass ich den Gegenstand sorgfältig behandle und im vereinbarten Zustand zurückgebe.')}</span>
        </label>
        <button class="btn btn-primary" type="button" onclick="confirmHandover('${item.id}')" ${request.handoverConfirmed ? '' : 'disabled'}>${shareTranslate('share_detail_complete_handover', 'Übergabe abschließen')}</button>
        <button class="btn btn-secondary" type="button" onclick="openBorrowChat('${escapeJs(item.title)}', '${escapeJs(item.owner)}')">${shareTranslate('share_detail_open_chat', 'Chat öffnen')}</button>
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
            <strong>${shareTranslate('share_detail_status_title', 'Status')}</strong>
            <ol>
                <li class="${request ? 'done' : ''}">${shareTranslate('share_detail_status_request_sent', 'Anfrage gesendet')}</li>
                <li class="${accepted ? 'done' : ''}">${shareTranslate('share_detail_status_owner_acceptance', 'Annahme durch Verleiher')}</li>
                <li class="${request.handoverComplete ? 'done' : ''}">${shareTranslate('share_detail_status_handover_confirmed', 'Übergabe bestätigt')}</li>
                <li class="${done ? 'done' : ''}">${shareTranslate('share_detail_status_return_done', 'Rückgabe abgeschlossen')}</li>
            </ol>
            ${accepted ? renderReturnPanel(item, loan) : ''}
        </div>
    `;
}

function renderReturnPanel(item, loan) {
    loan = loan || {};
    const depositText = item.depositType === 'none' ? '' : `<p class="feature-desc">${shareTranslate('share_detail_deposit_release_text', 'Pfandfreigabe wird nach beidseitiger Rückgabe simuliert ausgelöst.')}</p>`;
    return `
        <div class="share-return-panel">
            <h3>${shareTranslate('share_detail_return_process_title', 'Rückgabeprozess')}</h3>
            <div class="share-checkbox-list">
                <label><input type="checkbox" onchange="toggleReturnConfirmation('${item.id}', 'borrower', this.checked)" ${loan.returnedByBorrower ? 'checked' : ''}> ${shareTranslate('share_detail_borrower_returned', 'Ausleiher: Gegenstand zurückgegeben')}</label>
                <label><input type="checkbox" onchange="toggleReturnConfirmation('${item.id}', 'owner', this.checked)" ${loan.returnedByOwner ? 'checked' : ''}> ${shareTranslate('share_detail_owner_received', 'Verleiher: Rückgabe erhalten')}</label>
            </div>
            <textarea class="form-textarea" id="share-return-note" placeholder="${shareTranslate('share_detail_return_note_placeholder', 'Optional: Zustand dokumentieren')}"></textarea>
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
    showToast(shareTranslate('share_toast_request_sent', 'Neue Anfrage gesendet'));
    renderShareNotification(shareTranslate('share_notification_request_sent', 'Neue Anfrage wurde simuliert an den Verleiher gesendet.'));
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
        showToast(shareTranslate('share_toast_request_accepted', 'Anfrage angenommen'));
        renderShareNotification(shareTranslate('share_notification_request_accepted', 'Anfrage angenommen: Leihvorgang wurde erstellt.'));
    } else if (status === 'declined') {
        showToast(shareTranslate('share_toast_request_declined', 'Anfrage abgelehnt'));
        renderShareNotification(shareTranslate('share_notification_request_declined', 'Anfrage wurde abgelehnt.'));
    } else {
        showToast(shareTranslate('share_toast_question_sent', 'Rückfrage gestellt'));
        renderShareNotification(shareTranslate('share_notification_question_sent', 'Rückfrage wurde simuliert gesendet.'));
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
        showToast(shareTranslate('share_toast_confirm_care_first', 'Bitte bestätige zuerst die sorgfältige Behandlung.'));
        return;
    }
    request.handoverComplete = true;
    saveState();
    showToast(shareTranslate('share_toast_handover_complete', 'Übergabe abgeschlossen'));
    renderShareNotification(shareTranslate('share_notification_handover_complete', 'Übergabe bestätigt. Erinnerung zur Rückgabe ist aktiv.'));
    openShareItemDetail(itemId);
}

function toggleReturnConfirmation(itemId, party, checked) {
    state.shareLoans[itemId] = state.shareLoans[itemId] || {};
    if (party === 'borrower') state.shareLoans[itemId].returnedByBorrower = checked;
    if (party === 'owner') state.shareLoans[itemId].returnedByOwner = checked;

    const loan = state.shareLoans[itemId];
    if (loan.returnedByBorrower && loan.returnedByOwner) {
        loan.depositReleased = true;
        showToast(shareTranslate('share_toast_return_complete', 'Rückgabe abgeschlossen. Pfandfreigabe simuliert.'));
        renderShareNotification(shareTranslate('share_notification_return_complete', 'Erfolgreicher Abschluss: Rückgabe bestätigt und Pfand freigegeben.'));
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
    const text = (key, fallback, replacements) => shareTranslate(key, fallback, replacements);
    modal.className = 'modal-content share-flow-modal';
    modal.innerHTML = `
        <button class="modal-close-btn" onclick="closeAddShareItemModal()" aria-label="${text('modal_close_aria', 'Schließen')}">×</button>
        <h2 class="modal-title">${text('share_add_modal_title', 'Gegenstand einstellen')}</h2>
        <div class="share-stepper" aria-label="${text('share_add_steps_aria', 'Eingabeschritte')}">
            <span class="share-step-dot active" data-step-dot="1">1</span>
            <span class="share-step-dot" data-step-dot="2">2</span>
            <span class="share-step-dot" data-step-dot="3">3</span>
        </div>
        <div class="share-flow-step active" data-share-step="1">
            <div class="form-group">
                <label class="form-label" for="new-item-name">${text('share_add_item_title_label', 'Titel des Gegenstands')}</label>
                <input type="text" class="search-bar" id="new-item-name" placeholder="${text('share_add_item_title_placeholder', 'z.B. Vertikutierer, Bohrer')}" style="margin-bottom: 0;">
            </div>
            <div class="form-group">
                <label class="form-label" for="new-item-category">${text('share_add_category_label', 'Kategorie')}</label>
                <select class="search-bar" id="new-item-category" style="margin-bottom: 0;">
                    <option value="Werkzeug">${text('share_cat_tools', 'Werkzeug')}</option>
                    <option value="Garten">${text('share_cat_garden', 'Garten')}</option>
                    <option value="Haushalt">${text('share_cat_household', 'Haushalt')}</option>
                    <option value="Freizeit & Sport">${text('share_cat_sports', 'Freizeit & Sport')}</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label" for="new-item-description">${text('share_add_description_label', 'Beschreibung')}</label>
                <textarea class="form-textarea" id="new-item-description" placeholder="${text('share_add_description_placeholder', 'Kurz beschreiben, wofür der Gegenstand geeignet ist.')}"></textarea>
            </div>
            <div class="form-group">
                <label class="form-label" for="new-item-photos">${text('share_add_photos_label', 'Fotos hochladen')}</label>
                <input type="file" id="new-item-photos" accept="image/*" multiple>
                <p class="feature-desc" style="font-size: var(--fs-xs); margin-top: 6px;">${text('share_add_photos_hint', 'Mehrere Fotos sind möglich. Die Vorschau wird lokal simuliert.')}</p>
            </div>
        </div>
        <div class="share-flow-step" data-share-step="2">
            <div class="share-form-grid">
                <div class="form-group">
                    <label class="form-label" for="new-item-condition">${text('share_condition_label', 'Zustand')}</label>
                    <select class="search-bar" id="new-item-condition" style="margin-bottom: 0;">
                        <option value="neu">${text('share_condition_new', 'neu')}</option>
                        <option value="sehr gut" selected>${text('share_condition_very_good', 'sehr gut')}</option>
                        <option value="gebraucht">${text('share_condition_used', 'gebraucht')}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label" for="new-item-count">${text('share_add_count_label', 'Anzahl verfügbar')}</label>
                    <input type="number" class="search-bar" id="new-item-count" value="1" min="1" style="margin-bottom: 0;">
                </div>
            </div>
            <div class="form-group">
                <label class="form-label" for="new-item-link">${text('share_add_manual_link_label', 'Optional: Bedienungslink')}</label>
                <input type="url" class="search-bar" id="new-item-link" placeholder="https://..." style="margin-bottom: 0;">
            </div>
            <div class="share-form-grid">
                <div class="form-group">
                    <label class="form-label" for="new-item-from">${text('share_add_available_from_label', 'Verfügbar von')}</label>
                    <input type="date" class="search-bar" id="new-item-from" style="margin-bottom: 0;">
                </div>
                <div class="form-group">
                    <label class="form-label" for="new-item-to">${text('share_add_available_to_label', 'Verfügbar bis')}</label>
                    <input type="date" class="search-bar" id="new-item-to" style="margin-bottom: 0;">
                </div>
            </div>
            <div class="share-checkbox-list">
                <label><input type="checkbox" id="new-item-free" checked> ${text('share_add_free_option', 'Kostenlos verleihen')}</label>
                <label><input type="checkbox" id="new-item-effort"> ${text('share_add_effort_option', 'Gegen kleine Aufwandsentschädigung (nicht monetär)')}</label>
                <label><input type="checkbox" id="new-item-confirmed-only"> ${text('share_add_confirmed_only_option', 'Nur für bestätigte Nachbarn sichtbar')}</label>
            </div>
        </div>
        <div class="share-flow-step" data-share-step="3">
            <div class="form-group">
                <label class="form-label" for="new-item-deposit-type">${text('share_add_deposit_label', 'Pfandsystem')}</label>
                <select class="search-bar" id="new-item-deposit-type" onchange="updateDepositFields()" style="margin-bottom: 0;">
                    <option value="none">${text('share_add_deposit_none', 'Kein Pfand')}</option>
                    <option value="voluntary">${text('share_add_deposit_voluntary', 'Freiwilliges Pfand')}</option>
                    <option value="digital">${text('share_add_deposit_digital', 'Digitale Kaution (Simulation)')}</option>
                </select>
            </div>
            <div id="new-item-deposit-fields" class="share-deposit-fields" hidden>
                <div class="share-form-grid">
                    <div class="form-group">
                        <label class="form-label" for="new-item-deposit-amount">${text('share_add_deposit_amount_label', 'Betrag')}</label>
                        <input type="text" class="search-bar" id="new-item-deposit-amount" placeholder="${text('share_add_deposit_amount_placeholder', '20 € Pfand')}" style="margin-bottom: 0;">
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="new-item-deposit-method">${text('share_add_deposit_method_label', 'Methode')}</label>
                        <select class="search-bar" id="new-item-deposit-method" style="margin-bottom: 0;">
                            <option value="PayPal">PayPal</option>
                            <option value="Kreditkarte">${text('share_add_payment_card', 'Kreditkarte')}</option>
                            <option value="Wallet">Wallet</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="share-privacy-box">
                <strong>${text('share_add_secure_handover_title', 'Sichere Übergabe')}</strong>
                <p>${text('share_add_secure_handover_text', 'Adressdaten sind nicht öffentlich sichtbar und werden erst nach Annahme der Anfrage zwischen Verleiher und Ausleiher angezeigt.')}</p>
            </div>
            <div class="share-form-grid">
                <div class="form-group">
                    <label class="form-label" for="new-item-floor">${text('share_add_floor_label', 'Stockwerk')}</label>
                    <input type="text" class="search-bar" id="new-item-floor" placeholder="${text('share_add_floor_placeholder', 'z.B. 2. OG')}" style="margin-bottom: 0;">
                </div>
                <div class="form-group">
                    <label class="form-label" for="new-item-pickup-times">${text('share_add_pickup_times_label', 'Bevorzugte Abholzeiten')}</label>
                    <input type="text" class="search-bar" id="new-item-pickup-times" placeholder="${text('share_add_pickup_times_placeholder', 'z.B. werktags ab 18 Uhr')}" style="margin-bottom: 0;">
                </div>
            </div>
            <div class="form-group">
                <label class="form-label" for="new-item-handover">${text('share_add_handover_label', 'Klingel- und Übergabehinweise')}</label>
                <textarea class="form-textarea" id="new-item-handover" placeholder="${text('share_add_handover_placeholder', 'z.B. Klingel Müller, Übergabe im Hof.')}"></textarea>
            </div>
        </div>
        <div class="share-flow-actions">
            <button class="btn btn-secondary" type="button" onclick="changeShareFlowStep(-1)" id="share-flow-back">${text('btn_back', 'Zurück')}</button>
            <button class="btn btn-primary" type="button" onclick="changeShareFlowStep(1)" id="share-flow-next">${text('btn_next', 'Weiter')}</button>
            <button class="btn btn-primary" type="button" onclick="submitAddShareItem()" id="share-flow-submit" hidden>${text('share_add_submit', 'Einstellen')}</button>
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
    if (next) next.disabled = step === 3;
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

async function submitAddShareItem() {
    const title = getInputValue('new-item-name') || 'Gegenstand';
    const category = getInputValue('new-item-category') || 'Werkzeug';
    const depositType = getInputValue('new-item-deposit-type') || 'none';
    const depositMethod = getInputValue('new-item-deposit-method');
    const photos = await readNewItemPhotos();
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
        photos,
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

function readNewItemPhotos() {
    const input = document.getElementById('new-item-photos');
    const files = input && input.files ? Array.from(input.files).slice(0, 4) : [];
    return Promise.all(files.map(readFileAsDataUrl));
}

function readFileAsDataUrl(file) {
    return new Promise(resolve => {
        if (!file || !file.type.startsWith('image/')) {
            resolve('');
            return;
        }

        const reader = new FileReader();
        reader.onload = () => resolve(reader.result || '');
        reader.onerror = () => resolve('');
        reader.readAsDataURL(file);
    });
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
