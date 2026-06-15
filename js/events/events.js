
function eventTranslate(key, fallback, replacements = {}) {
    const value = typeof t === 'function' ? t(key) : fallback;
    return Object.entries(replacements).reduce(
        (text, [name, replacement]) => text.replace(`{${name}}`, replacement),
        value === key ? fallback : value
    );
}

function eventText(text) {
    return typeof translateStaticText === 'function' ? translateStaticText(text) : text;
}

const selectedEventCategories = new Set();
let editingEventId = null;

const eventCategoryThumbs = {
    food: 'event-thumb-coffee',
    outdoor: 'event-thumb-hike',
    sport: 'event-thumb-yoga',
    culture: 'event-thumb-art',
    community: 'event-thumb-game'
};

const eventCategoryI18n = {
    food: ['event_cat_food', 'Essen & Trinken'],
    outdoor: ['event_cat_outdoor', 'Outdoor'],
    sport: ['event_cat_sport', 'Sport & Bewegung'],
    culture: ['event_cat_culture', 'Kultur & Kreativ'],
    community: ['event_cat_community', 'Community']
};

const eventDetailContent = {
    'Sommergrillen im Hof': {
        description: ['event_detail_grill_desc', 'Gemeinsames Grillen im Innenhof mit Nachbarn. Bring gerne eine Beilage oder ein Getränk mit.'],
        location: ['event_detail_location_courtyard', 'Innenhof, Haus 4'],
        organizer: 'Anna Keller'
    },
    'Wanderung am See': {
        description: ['event_detail_hike_desc', 'Entspannte Runde am See mit kurzen Pausen. Geeignet für alle, die gemeinsam draußen unterwegs sein möchten.'],
        location: ['event_detail_location_lake', 'Treffpunkt Seeeingang'],
        organizer: 'Jonas Weber'
    },
    'Spieleabend': {
        description: ['event_detail_game_desc', 'Brettspiele, Karten und kleine Snacks im Gemeinschaftsraum. Eigene Lieblingsspiele sind willkommen.'],
        location: ['event_detail_location_common_room', 'Gemeinschaftsraum'],
        organizer: 'Mira Hoffmann'
    },
    'Business Breakfast': {
        description: ['event_detail_breakfast_desc', 'Lockerer Austausch bei Kaffee und Frühstück für Selbstständige, Berufstätige und Interessierte aus der Nachbarschaft.'],
        location: ['event_detail_location_cafe_corner', 'Nachbarschaftscafe Ecke'],
        organizer: 'David Schwarz'
    },
    'Yoga im Grünen': {
        description: ['event_detail_yoga_desc', 'Ruhige Yoga-Session im Park. Bitte Matte oder Handtuch mitbringen. Anfänger sind willkommen.'],
        location: ['event_detail_location_park_meadow', 'Parkwiese am Spielplatz'],
        organizer: 'Lea Brandt'
    },
    'Kunst im Park': {
        description: ['event_detail_art_desc', 'Gemeinsames Zeichnen und kreativer Austausch im Park. Material kann mitgebracht oder geteilt werden.'],
        location: ['event_detail_location_park_pavilion', 'Pavillon im Park'],
        organizer: 'Nora Stein'
    }
};

function eventEscapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    }[char]));
}

function eventEscapeJs(value) {
    return String(value ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function getEventInputValue(id) {
    const input = document.getElementById(id);
    return input ? input.value.trim() : '';
}

function getSelectedEventStatus() {
    return document.querySelector('input[name="new-event-status"]:checked')?.value || 'open';
}

function toggleEventUnlimitedParticipants(checked) {
    const input = document.getElementById('new-event-participants');
    if (!input) return;
    input.disabled = checked;
    if (checked) {
        input.value = '';
    } else if (!input.value) {
        input.value = '12';
    }
}

function readEventImage() {
    const input = document.getElementById('new-event-image');
    const file = input && input.files ? input.files[0] : null;
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

function formatEventDateTime(dateValue, timeValue) {
    if (!dateValue) return '';
    const [year, month, day] = dateValue.split('-').map(Number);
    if (!year || !month || !day) return dateValue;
    const date = new Date(year, month - 1, day);
    const locale = (typeof state !== 'undefined' && state.language === 'en') ? 'en-US' : 'de-DE';
    const dateText = date.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    if (!timeValue) return dateText;
    return locale === 'en-US' ? `${dateText} · ${timeValue}` : `${dateText} · ${timeValue} Uhr`;
}

function getEventThumbForCategory(category) {
    return eventCategoryThumbs[category] || 'event-thumb-game';
}

function syncEventJoinButtons() {
    document.querySelectorAll('.event-actions .btn-primary, .event-actions .btn-secondary').forEach(button => {
        if (!button.matches('button') || button.classList.contains('chat-btn')) return;
        button.innerText = button.classList.contains('joined')
            ? eventTranslate('event_joined_button', 'Du bist dabei')
            : eventTranslate('event_join_button', 'Ich bin dabei!');
    });
}

function getEventToday() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function getEventDate(card) {
    const value = card.dataset.eventDate;
    if (!value) return null;
    const [year, month, day] = value.split('-').map(Number);
    if (!year || !month || !day) return null;
    return new Date(year, month - 1, day);
}

function getActiveEventFilter() {
    return document.querySelector('.events-tabs [data-event-filter].active')?.dataset.eventFilter || 'upcoming';
}

function getEventSearchTerm() {
    return document.getElementById('event-search')?.value.trim().toLowerCase() || '';
}

function getEventSearchText(card) {
    return [
        card.querySelector('.event-title')?.textContent,
        card.querySelector('.event-status')?.textContent,
        card.querySelector('.event-card-content')?.textContent,
        card.dataset.eventCategory
    ].filter(Boolean).join(' ').toLowerCase();
}

function filterEvents(filter = getActiveEventFilter()) {
    const today = getEventToday();
    const searchTerm = getEventSearchTerm();
    const cards = document.querySelectorAll('.events-list .event-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const eventDate = getEventDate(card);
        const isUpcoming = eventDate ? eventDate >= today : true;
        const matchesDateFilter = filter === 'past' ? !isUpcoming : isUpcoming;
        const matchesSearch = !searchTerm || getEventSearchText(card).includes(searchTerm);
        const matchesCategory = !selectedEventCategories.size || selectedEventCategories.has(card.dataset.eventCategory);
        const shouldShow = matchesDateFilter && matchesSearch && matchesCategory;
        card.hidden = !shouldShow;
        if (shouldShow) visibleCount += 1;
    });

    const emptyState = document.querySelector('.events-empty');
    if (emptyState) emptyState.hidden = visibleCount > 0;
}

function setEventFilter(filter) {
    document.querySelectorAll('.events-tabs [data-event-filter]').forEach(button => {
        const isActive = button.dataset.eventFilter === filter;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-selected', String(isActive));
    });
    filterEvents(filter);
}

function toggleEventCategory(button) {
    const category = button?.dataset.eventCategory;
    if (!category) return;

    if (selectedEventCategories.has(category)) {
        selectedEventCategories.delete(category);
        button.classList.remove('selected');
    } else {
        selectedEventCategories.add(category);
        button.classList.add('selected');
    }

    filterEvents();
}

function resetEventCategoryFilters() {
    selectedEventCategories.clear();
    document.querySelectorAll('.event-category-tile.selected').forEach(button => {
        button.classList.remove('selected');
    });
    filterEvents();
}

function getEventCategoryLabel(category) {
    const entry = eventCategoryI18n[category];
    return entry ? eventTranslate(entry[0], entry[1]) : category;
}

function getEventDetailContent(title) {
    return eventDetailContent[title] || {
        description: ['event_detail_default_desc', 'Weitere Informationen zu diesem Event werden in der Nachbarschaft abgestimmt.'],
        location: ['event_detail_location_nearby', 'In deiner Nachbarschaft'],
        organizer: 'Gartenzaun'
    };
}

function getEventDataFromCard(card) {
    const title = card.querySelector('.event-title')?.textContent.trim() || '';
    const detail = getEventDetailContent(title);
    const thumb = Array.from(card.querySelector('.event-thumb')?.classList || []).filter(className => className !== 'event-thumb').join(' ');
    const photo = card.querySelector('.event-thumb img')?.getAttribute('src') || card.dataset.eventPhoto || '';
    return {
        id: card.dataset.eventId || '',
        isUserEvent: card.dataset.userEvent === 'true',
        title,
        category: card.dataset.eventCategory || '',
        dateText: card.querySelector('.event-meta-item span:last-child')?.textContent.trim() || '',
        participants: card.querySelector('.event-participants-count')?.textContent.trim() || '',
        status: card.querySelector('.event-status')?.textContent.trim() || '',
        statusClass: card.querySelector('.event-status')?.classList.contains('closed') ? 'closed' : 'open',
        thumbClass: thumb,
        photo,
        description: card.dataset.eventDescription || eventTranslate(detail.description[0], detail.description[1]),
        location: card.dataset.eventLocation || eventTranslate(detail.location[0], detail.location[1]),
        organizer: card.dataset.eventOrganizer || detail.organizer
    };
}

function bindEventCard(card) {
    if (!card || card.dataset.bound === 'true') return;
    card.dataset.bound = 'true';
    card.addEventListener('click', () => openEventDetail(card));
    card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openEventDetail(card);
        }
    });
}

function renderEventCard(event) {
    const thumbClass = event.thumbClass || getEventThumbForCategory(event.category);
    const categoryLabel = getEventCategoryLabel(event.category);
    const statusKey = event.statusClass === 'closed' ? 'event_status_closed' : 'event_status_open';
    const statusFallback = event.statusClass === 'closed' ? 'Geschlossen' : 'Offen';
    const dateText = formatEventDateTime(event.date, event.time) || event.dateText;
    const photo = event.photo || '';
    const imageMarkup = photo
        ? `<div class="event-thumb event-photo-thumb" aria-hidden="true"><img src="${eventEscapeHtml(photo)}" alt=""></div>`
        : `<div class="event-thumb ${eventEscapeHtml(thumbClass)}" aria-hidden="true"></div>`;
    return `
        <div class="event-card" data-event-id="${eventEscapeHtml(event.id || '')}" data-event-date="${eventEscapeHtml(event.date)}" data-event-category="${eventEscapeHtml(event.category)}"
            data-event-description="${eventEscapeHtml(event.description)}" data-event-location="${eventEscapeHtml(event.location)}"
            data-event-photo="${eventEscapeHtml(photo)}"
            data-event-organizer="${eventEscapeHtml(event.organizer)}" role="button" tabindex="0">
            ${imageMarkup}
            <div class="event-card-content">
                <span class="share-category-chip event-category-chip">${eventEscapeHtml(categoryLabel)}</span>
                <div class="event-title">${eventEscapeHtml(event.title)}</div>
                <div class="event-meta">
                    <div class="event-meta-item">
                        <i data-lucide="calendar" aria-hidden="true"></i>
                        <span>${eventEscapeHtml(dateText)}</span>
                    </div>
                    <div class="event-meta-item">
                        <span>👥</span>
                        <span class="event-participants-count">${eventEscapeHtml(event.participants)}</span>
                    </div>
                </div>
            </div>
            <span class="event-status ${eventEscapeHtml(event.statusClass)}" data-i18n="${statusKey}">${eventTranslate(statusKey, statusFallback)}</span>
        </div>
    `;
}

function renderUserEvents() {
    const list = document.querySelector('.events-list');
    const emptyState = document.querySelector('.events-empty');
    if (!list) return;

    document.querySelectorAll('.event-card[data-user-event="true"]').forEach(card => card.remove());
    const events = Array.isArray(state.userEvents) ? state.userEvents : [];
    let migrated = false;
    events.forEach((event, index) => {
        if (!event.id) {
            event.id = `user-event-${Date.now()}-${index}`;
            migrated = true;
        }
    });
    if (migrated) saveState();
    const markup = events.map(renderEventCard).join('');
    if (markup) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = markup;
        Array.from(wrapper.children).forEach(card => {
            card.dataset.userEvent = 'true';
            list.insertBefore(card, emptyState || null);
            bindEventCard(card);
        });
    }
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}

function renderEventDetail(event) {
    const categoryLabel = getEventCategoryLabel(event.category);
    const imageMarkup = event.photo
        ? `<div class="event-detail-image event-detail-photo" aria-hidden="true"><img src="${eventEscapeHtml(event.photo)}" alt=""></div>`
        : `<div class="event-detail-image ${eventEscapeHtml(event.thumbClass)}" aria-hidden="true"></div>`;
    const ownerActions = event.isUserEvent ? `
                <div class="share-action-stack event-owner-actions">
                    <button class="btn btn-secondary" type="button" onclick="openEditEventModal('${eventEscapeJs(event.id)}')">${eventTranslate('event_edit_button', 'Event bearbeiten')}</button>
                    <button class="btn btn-secondary event-delete-button" type="button" onclick="deleteUserEvent('${eventEscapeJs(event.id)}')">${eventTranslate('event_delete_button', 'Event löschen')}</button>
                </div>
    ` : '';
    return `
        <div class="share-detail-layout event-detail-layout">
            <div class="share-detail-main event-detail-main">
                ${imageMarkup}
                <span class="share-category-chip">${eventEscapeHtml(categoryLabel)}</span>
                <h1 class="share-title">${eventEscapeHtml(event.title)}</h1>
                <p class="share-subtitle">${eventEscapeHtml(event.description)}</p>
                <div class="share-detail-facts">
                    <span>${eventTranslate('event_detail_date_label', 'Datum')}: <strong>${eventEscapeHtml(event.dateText)}</strong></span>
                    <span>${eventTranslate('event_detail_location_label', 'Ort')}: <strong>${eventEscapeHtml(event.location)}</strong></span>
                    <span>${eventTranslate('event_detail_participants_label', 'Teilnehmer')}: <strong>${eventEscapeHtml(event.participants)}</strong></span>
                    <span>${eventTranslate('event_detail_organizer_label', 'Organisiert von')}: <strong>${eventEscapeHtml(event.organizer)}</strong></span>
                </div>
                <div class="share-info-card">
                    <strong>${eventTranslate('event_detail_meeting_title', 'Treffpunkt & Ablauf')}</strong>
                    <span>${eventTranslate('event_detail_meeting_text', 'Alle weiteren Details werden im Event-Chat abgestimmt. Änderungen werden dort direkt mitgeteilt.')}</span>
                </div>
            </div>
            <aside class="share-request-panel event-detail-panel">
                <span class="event-status ${eventEscapeHtml(event.statusClass)}">${eventEscapeHtml(event.status)}</span>
                <h2>${eventTranslate('event_detail_join_title', 'Teilnehmen')}</h2>
                <p class="feature-desc">${eventTranslate('event_detail_join_text', 'Melde dich an oder öffne den Event-Chat, um Fragen zu stellen und Details abzustimmen.')}</p>
                <div class="share-request-summary">
                    <span>${eventTranslate('event_detail_next_step', 'Nächster Schritt')}</span>
                    <p>${eventTranslate('event_detail_next_step_text', 'Bestätige deine Teilnahme und nutze den Chat für Rückfragen.')}</p>
                </div>
                <div class="share-action-stack">
                    <button class="btn btn-primary" type="button" onclick="toggleJoinEvent(this, '${eventEscapeJs(event.title)}')">${eventTranslate('event_join_button', 'Ich bin dabei!')}</button>
                    <button class="btn btn-secondary" type="button" onclick="openEventChat('${eventEscapeJs(event.title)}')">${eventTranslate('event_detail_open_chat', 'Event-Chat öffnen')}</button>
                </div>
                ${ownerActions}
            </aside>
        </div>
    `;
}

function setEventHeaderBackVisible(visible) {
    const button = document.getElementById('share-header-back');
    if (!button) return;

    button.hidden = !visible;
    if (visible) {
        button.setAttribute('onclick', 'closeEventDetail()');
        button.setAttribute('aria-label', eventTranslate('event_detail_back', 'Zurück zu Events'));
        button.setAttribute('data-i18n-aria-label', 'event_detail_back');
    } else {
        button.setAttribute('onclick', 'closeShareItemDetail()');
        button.setAttribute('aria-label', eventTranslate('share_back_aria', 'Zurück zur Übersicht'));
        button.setAttribute('data-i18n-aria-label', 'share_back_aria');
    }
}

function openEventDetail(card) {
    const overview = document.querySelector('#tab-events .events-page');
    const detail = document.getElementById('event-detail-view');
    if (!card || !overview || !detail) return;

    overview.hidden = true;
    overview.style.display = 'none';
    detail.hidden = false;
    detail.style.display = 'flex';
    detail.innerHTML = renderEventDetail(getEventDataFromCard(card));
    setEventHeaderBackVisible(true);
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}

function closeEventDetail() {
    const overview = document.querySelector('#tab-events .events-page');
    const detail = document.getElementById('event-detail-view');
    if (detail) {
        detail.hidden = true;
        detail.style.display = 'none';
        detail.innerHTML = '';
    }
    if (overview) {
        overview.hidden = false;
        overview.style.display = 'flex';
        filterEvents();
    }
    setEventHeaderBackVisible(false);
}

function openAddEventModal() {
    editingEventId = null;
    clearAddEventForm();
    setEventModalMode('add');
    const dateInput = document.getElementById('new-event-date');
    const timeInput = document.getElementById('new-event-time');
    if (dateInput && !dateInput.value) {
        dateInput.value = new Date().toISOString().slice(0, 10);
    }
    if (timeInput && !timeInput.value) {
        timeInput.value = '18:00';
    }
    openGlobalModal('add-event');
}

function closeAddEventModal() {
    closeGlobalModal('add-event');
}

function setEventModalMode(mode) {
    const isEdit = mode === 'edit';
    const title = document.getElementById('event-modal-title');
    const submit = document.getElementById('event-submit-button');
    if (title) {
        title.textContent = isEdit
            ? eventTranslate('event_edit_modal_title', 'Event bearbeiten')
            : eventTranslate('event_add_modal_title', 'Event hinzufügen');
    }
    if (submit) {
        submit.textContent = isEdit
            ? eventTranslate('event_edit_submit', 'Änderungen speichern')
            : eventTranslate('event_add_submit', 'Event erstellen');
    }
}

function clearAddEventForm() {
    ['new-event-title', 'new-event-date', 'new-event-time', 'new-event-location', 'new-event-description'].forEach(id => {
        const input = document.getElementById(id);
        if (input) input.value = '';
    });
    const image = document.getElementById('new-event-image');
    if (image) image.value = '';
    const category = document.getElementById('new-event-category');
    if (category) category.value = 'food';
    const participants = document.getElementById('new-event-participants');
    if (participants) participants.value = '12';
    const unlimited = document.getElementById('new-event-unlimited');
    if (unlimited) unlimited.checked = false;
    toggleEventUnlimitedParticipants(false);
    const openStatus = document.querySelector('input[name="new-event-status"][value="open"]');
    if (openStatus) openStatus.checked = true;
}

function fillEventForm(event) {
    const values = {
        'new-event-title': event.title || '',
        'new-event-category': event.category || 'community',
        'new-event-date': event.date || '',
        'new-event-time': event.time || '',
        'new-event-location': event.location || '',
        'new-event-description': event.description || ''
    };

    Object.entries(values).forEach(([id, value]) => {
        const input = document.getElementById(id);
        if (input) input.value = value;
    });

    const unlimited = String(event.participants || '').includes('∞');
    const unlimitedInput = document.getElementById('new-event-unlimited');
    if (unlimitedInput) unlimitedInput.checked = unlimited;
    const participantsInput = document.getElementById('new-event-participants');
    const maxParticipants = String(event.participants || '').match(/\/\s*(\d+)/);
    if (participantsInput) participantsInput.value = maxParticipants ? maxParticipants[1] : '12';
    toggleEventUnlimitedParticipants(unlimited);

    const status = document.querySelector(`input[name="new-event-status"][value="${event.statusClass === 'closed' ? 'closed' : 'open'}"]`);
    if (status) status.checked = true;

    const image = document.getElementById('new-event-image');
    if (image) image.value = '';
}

function getUserEventById(eventId) {
    const events = Array.isArray(state.userEvents) ? state.userEvents : [];
    return events.find(event => event.id === eventId);
}

function openEditEventModal(eventId) {
    const event = getUserEventById(eventId);
    if (!event) return;
    editingEventId = eventId;
    clearAddEventForm();
    fillEventForm(event);
    setEventModalMode('edit');
    openGlobalModal('add-event');
}

async function submitAddEvent() {
    const title = getEventInputValue('new-event-title') || eventTranslate('event_add_default_title', 'Neues Nachbarschaftsevent');
    const category = getEventInputValue('new-event-category') || 'community';
    const date = getEventInputValue('new-event-date') || new Date().toISOString().slice(0, 10);
    const time = getEventInputValue('new-event-time');
    const unlimitedParticipants = document.getElementById('new-event-unlimited')?.checked;
    const maxParticipants = Math.max(1, Number(getEventInputValue('new-event-participants')) || 12);
    const statusClass = getSelectedEventStatus() === 'closed' ? 'closed' : 'open';
    const location = getEventInputValue('new-event-location') || eventTranslate('event_detail_location_nearby', 'In deiner Nachbarschaft');
    const description = getEventInputValue('new-event-description') || eventTranslate('event_detail_default_desc', 'Weitere Informationen zu diesem Event werden in der Nachbarschaft abgestimmt.');
    const photo = await readEventImage();
    const existingEvent = editingEventId ? getUserEventById(editingEventId) : null;
    const event = {
        id: existingEvent?.id || 'user-event-' + Date.now(),
        title,
        category,
        date,
        time,
        dateText: formatEventDateTime(date, time),
        participants: unlimitedParticipants
            ? `0 / ∞ ${eventTranslate('event_participants_label', 'Teilnehmer')}`
            : `0 / ${maxParticipants} ${eventTranslate('event_participants_label', 'Teilnehmer')}`,
        statusClass,
        thumbClass: getEventThumbForCategory(category),
        photo: photo || existingEvent?.photo || '',
        description,
        location,
        organizer: existingEvent?.organizer || state.profileName || eventTranslate('event_detail_you', 'Du')
    };

    state.userEvents = Array.isArray(state.userEvents) ? state.userEvents : [];
    if (existingEvent) {
        const index = state.userEvents.findIndex(item => item.id === editingEventId);
        if (index >= 0) state.userEvents[index] = event;
    } else {
        state.userEvents.unshift(event);
    }
    saveState();
    renderUserEvents();
    closeAddEventModal();
    clearAddEventForm();
    editingEventId = null;
    const searchInput = document.getElementById('event-search');
    if (searchInput) searchInput.value = '';
    selectedEventCategories.clear();
    document.querySelectorAll('.event-category-tile.selected').forEach(button => button.classList.remove('selected'));
    const targetFilter = getEventDate({ dataset: { eventDate: date } }) >= getEventToday() ? 'upcoming' : 'past';
    setEventFilter(targetFilter);
    const detail = document.getElementById('event-detail-view');
    if (detail && !detail.hidden) {
        const updatedCard = Array.from(document.querySelectorAll('.event-card[data-user-event="true"]'))
            .find(card => card.dataset.eventId === event.id);
        if (updatedCard) detail.innerHTML = renderEventDetail(getEventDataFromCard(updatedCard));
    }
    showToast(eventTranslate(existingEvent ? 'event_updated_toast' : 'event_created_toast', existingEvent ? 'Event aktualisiert: {event}' : 'Event erstellt: {event}', { event: title }));
}

function deleteUserEvent(eventId) {
    const event = getUserEventById(eventId);
    if (!event) return;
    if (!window.confirm(eventTranslate('event_delete_confirm', 'Dieses Event wirklich löschen?'))) return;

    state.userEvents = (Array.isArray(state.userEvents) ? state.userEvents : []).filter(item => item.id !== eventId);
    saveState();
    closeEventDetail();
    renderUserEvents();
    filterEvents();
    showToast(eventTranslate('event_deleted_toast', 'Event gelöscht: {event}', { event: event.title }));
}

function initEventFilters() {
    const tabs = document.querySelectorAll('.events-tabs [data-event-filter]');

    tabs.forEach(button => {
        button.addEventListener('click', () => setEventFilter(button.dataset.eventFilter));
    });

    const searchInput = document.getElementById('event-search');
    if (searchInput) {
        searchInput.addEventListener('input', () => filterEvents());
    }

    document.querySelectorAll('.event-category-tile').forEach(button => {
        button.addEventListener('click', () => toggleEventCategory(button));
    });

    document.querySelector('.event-filter-reset')?.addEventListener('click', resetEventCategoryFilters);

    renderUserEvents();
    document.querySelectorAll('.events-list .event-card').forEach(bindEventCard);

    const activeTab = document.querySelector('.events-tabs [data-event-filter].active');
    setEventFilter(activeTab?.dataset.eventFilter || 'upcoming');
}

function toggleJoinEvent(button, eventName) {
    const chatButton = button ? button.nextElementSibling : null;
    if (!button) return;
    const joining = !button.classList.contains('joined');
    button.classList.toggle('joined', joining);
    button.innerText = joining
        ? eventTranslate('event_joined_button', 'Du bist dabei')
        : eventTranslate('event_join_button', 'Ich bin dabei!');
    button.classList.toggle('btn-primary', !joining);
    button.classList.toggle('btn-secondary', joining);
    if (chatButton) chatButton.style.display = joining ? 'inline-flex' : 'none';
    showToast(joining
        ? eventTranslate('event_joined_toast', 'Teilnahme bestätigt: {event}', { event: eventText(eventName) })
        : eventTranslate('event_left_toast', 'Teilnahme entfernt'));
}

document.addEventListener('DOMContentLoaded', initEventFilters);
