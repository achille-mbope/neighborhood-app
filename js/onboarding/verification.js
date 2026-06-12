
function selectVerifyMethod(method) {
    state.selectedVerifyMethod = method;
    saveState();
    document.querySelectorAll('.verification-option').forEach(element => element.classList.remove('selected'));
    const option = document.getElementById('opt-' + method);
    if (option) option.classList.add('selected');
    const button = document.getElementById('verify-select-next-btn');
    if (button) button.disabled = false;
    if (method === 'eid') goToOnboardingStep('verify-eid-intro');
}

function startSimulatedVerification() {
    goToOnboardingStep('verify-simulation');
    document.querySelectorAll('[id^="sim-"][id$="-view"]').forEach(view => {
        view.style.display = 'none';
    });
    const methodView = document.getElementById('sim-' + state.selectedVerifyMethod + '-view');
    if (methodView) {
        methodView.style.display = 'flex';
    } else {
        setTimeout(completeSimulationFlow, 1000);
    }
}

function startEidSimulation() {
    state.selectedVerifyMethod = 'eid';
    saveState();
    goToOnboardingStep('verify-simulation');
    document.querySelectorAll('[id^="sim-"][id$="-view"]').forEach(view => {
        view.style.display = 'none';
    });

    const title = document.getElementById('sim-title');
    const subtitle = document.getElementById('sim-subtitle');
    const content = document.getElementById('sim-content-area');
    if (title) title.innerText = 'eID-Verifizierung läuft';
    if (subtitle) subtitle.innerText = 'Deine Registrierung wird simuliert bestätigt.';
    if (content) {
        content.innerHTML = `
            <div class="simulator-view" style="background-color: var(--color-primary-light); color: var(--color-text-dark);">
                <div class="scanner-line"></div>
                <div class="camera-preview" style="color: var(--color-text-dark); font-weight: 700;">
                    eID wird geprüft...
                </div>
            </div>
            <p class="onboarding-subtitle" style="text-align: center;">
                Die Registrierung wird für diesen Prototyp automatisch als gültig bestätigt.
            </p>
        `;
    }

    setTimeout(completeSimulationFlow, 1400);
}

function completeSimulationFlow() {
    state.isVerified = true;
    state.currentView = 'app';
    state.activeAppTab = 'home';
    saveState();
    const title = document.getElementById('sim-title');
    const subtitle = document.getElementById('sim-subtitle');
    if (title) title.innerText = typeof window.t === 'function' ? window.t('toast_id_confirmed') : 'IdentitÃ¤t bestÃ¤tigt';
    if (subtitle) subtitle.innerText = 'Du wirst nun weitergeleitet.';
    setTimeout(() => {
        switchTab('home');
        showToast(typeof window.t === 'function' ? window.t('toast_welcome') : 'Willkommen in der Nachbarschaft!');
    }, 900);
}

function sendNeighborRequest(button, neighborName) {
    if (button) {
        button.innerText = 'Angefragt';
        button.disabled = true;
    }
    const waiting = document.getElementById('neighbor-waiting');
    if (waiting) waiting.style.display = 'block';
    showToast('Anfrage an ' + neighborName + ' gesendet');
    saveState();
    setTimeout(completeSimulationFlow, 1200);
}
