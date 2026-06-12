
function renderApp() {
    const root = document.getElementById("app");
    if (root) {
        if (state.currentView === "onboarding") {
            root.innerHTML = typeof window.renderOnboarding === 'function' ? window.renderOnboarding() : '';
        } else if (state.currentView === "app") {
            root.innerHTML = typeof window.renderMainApp === 'function' ? window.renderMainApp() : '';
        }
    }

    if (state.currentView === "onboarding") {
        const onboardingFlow = document.getElementById('onboarding-flow');
        const mainApp = document.getElementById('main-app');
        const globalHeader = document.getElementById('global-header');
        if (onboardingFlow) onboardingFlow.style.display = 'block';
        if (mainApp) mainApp.style.display = 'none';
        if (globalHeader) globalHeader.style.display = 'none';

        document.querySelectorAll('#onboarding-flow .screen').forEach(screen => screen.classList.remove('active'));
        const target = document.getElementById('screen-' + state.onboardingStep);
        if (target) {
            target.classList.add('active');
            const header = document.getElementById('onboarding-header');
            if (header) {
                header.style.display = ['welcome', 'netiquette', 'address', 'address-radius'].includes(state.onboardingStep)
                    ? 'flex'
                    : 'none';
            }
        }
    } else if (state.currentView === "app") {
        document.querySelectorAll('#main-app .screen').forEach(screen => screen.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(button => button.classList.remove('active'));

        const targetScreen = document.getElementById('tab-' + state.activeAppTab);
        const targetButton = document.querySelector(`.nav-item[onclick="switchTab('${state.activeAppTab}')"]`);
        const mainApp = document.getElementById('main-app');
        const onboardingFlow = document.getElementById('onboarding-flow');
        const globalHeader = document.getElementById('global-header');

        if (targetScreen) targetScreen.classList.add('active');
        if (targetButton) targetButton.classList.add('active');
        if (mainApp) mainApp.style.display = 'flex';
        if (onboardingFlow) onboardingFlow.style.display = 'none';
        if (globalHeader) globalHeader.style.display = 'flex';
    }

    applyGlobalSettings();
    if (typeof hydrateAddressStep === 'function') {
        hydrateAddressStep();
    }
    if (typeof hydrateOnboardingSetup === 'function') {
        hydrateOnboardingSetup();
    }
    if (typeof hydrateProfileView === 'function') {
        hydrateProfileView();
    }
    if (typeof hydrateFormValues === 'function') {
        hydrateFormValues();
    }
    refreshIcons();
}

function goToOnboardingStep(stepId) {
    state.onboardingStep = stepId;
    state.currentView = "onboarding";
    saveState();
    renderApp();
}

function switchTab(tabId) {
    state.activeAppTab = tabId;
    state.currentView = "app";
    saveState();
    renderApp();
}
