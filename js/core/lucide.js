(function () {
    const icons = {
        'volume-2': [
            '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
            '<path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
            '<path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>'
        ],
        play: [
            '<polygon points="5 3 19 12 5 21 5 3"></polygon>'
        ],
        pause: [
            '<rect x="6" y="4" width="4" height="16"></rect>',
            '<rect x="14" y="4" width="4" height="16"></rect>'
        ],
        square: [
            '<rect x="5" y="5" width="14" height="14" rx="2" ry="2"></rect>'
        ]
    };

    function createSvg(name, sourceElement) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-width', '2');
        svg.setAttribute('stroke-linecap', 'round');
        svg.setAttribute('stroke-linejoin', 'round');
        svg.setAttribute('class', `lucide lucide-${name}`);
        svg.setAttribute('data-lucide', name);
        svg.innerHTML = icons[name].join('');

        if (sourceElement) {
            if (sourceElement.getAttribute('style')) {
                svg.setAttribute('style', sourceElement.getAttribute('style'));
            }
            if (sourceElement.getAttribute('class')) {
                svg.setAttribute('class', `${sourceElement.getAttribute('class')} lucide lucide-${name}`);
            }
            Array.from(sourceElement.attributes).forEach(attribute => {
                if (!['data-lucide', 'style', 'class'].includes(attribute.name)) {
                    svg.setAttribute(attribute.name, attribute.value);
                }
            });
        }

        return svg;
    }

    window.lucide = {
        createIcons() {
            document.querySelectorAll('[data-lucide]').forEach(element => {
                const name = element.getAttribute('data-lucide');
                if (!icons[name] || element.tagName.toLowerCase() === 'svg') return;
                element.replaceWith(createSvg(name, element));
            });
        }
    };
})();
