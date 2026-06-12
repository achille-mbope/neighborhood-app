
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
    const elements = getTtsElements(id);
    if (elements.play) elements.play.style.display = isPlaying ? 'none' : 'inline-flex';
    if (elements.pause) elements.pause.style.display = isPlaying ? 'inline-flex' : 'none';
    if (elements.stop) elements.stop.style.display = isPlaying ? 'inline-flex' : 'none';
    if (elements.progressContainer) elements.progressContainer.style.display = isPlaying ? 'block' : 'none';
    if (elements.progressBar) elements.progressBar.style.width = isPlaying ? '100%' : '0%';
}

function startTTS(id) {
    if (!('speechSynthesis' in window)) {
        showToast('Vorlesefunktion wird von diesem Browser nicht unterstÃ¼tzt.');
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
