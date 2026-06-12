function saveFormField(element) {
    if (!element || !element.id || element.type === 'file') return;
    state.formValues[element.id] = {
        type: element.type || element.tagName.toLowerCase(),
        value: element.type === 'checkbox' ? element.checked : element.value
    };
    saveState();
}

function hydrateFormValues() {
    Object.entries(state.formValues || {}).forEach(([id, saved]) => {
        const element = document.getElementById(id);
        if (!element || element.type === 'file') return;
        if (saved.type === 'checkbox') {
            element.checked = Boolean(saved.value);
        } else {
            element.value = saved.value || '';
        }
    });
}

function bindPersistentFormHandlers() {
    document.addEventListener('input', event => {
        if (event.target.matches('input, textarea, select')) {
            saveFormField(event.target);
        }
    }, true);

    document.addEventListener('change', event => {
        if (event.target.matches('input, textarea, select')) {
            saveFormField(event.target);
        }
    }, true);
}
