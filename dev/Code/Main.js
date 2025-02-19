var Portfolio;
(function (Portfolio) {
    let overlay = document.querySelector('#overlay');
    setWidth();
    function init() {
        overlay = document.querySelector('#overlay');
        document.querySelectorAll('.flex-item').forEach(handleFlexItem);
    }
    function setWidth() {
        document.addEventListener("DOMContentLoaded", function () {
            let innerSections = document.querySelectorAll('.inner'); // Holt alle Elemente mit der Klasse .inner
            // Überprüft, ob es überhaupt Elemente gibt
            if (innerSections.length > 0) {
                // Schleife über jedes gefundene Element
                innerSections.forEach(function (innerSection) {
                    // Setzt die Breite jedes Elements auf 80% oder 1200px
                    innerSection.style.setProperty('width', '85.4102%', 'important'); // Oder '1200px', je nach Bedarf
                    innerSection.style.setProperty('max-width', 'none', 'important'); // Entfernt max-width
                    innerSection.style.setProperty('min-width', 'none', 'important'); // oder '1200px', je nach Bedarf
                });
            }
        });
    }
    function handleFlexItem(item) {
        const content = item.querySelector('.toggle-content');
        if (!content) {
            generateContentIn(item);
        }
        if (!item.querySelector('.toggle-content')) {
            console.warn("toggle content not found! abort");
            return;
        }
        //console.log("content found");
        //const container: HTMLDivElement = <HTMLDivElement>item.querySelector('.visual-presentation-container');
        const arrow = item.querySelector('.toggle-arrow');
        let isMobile = window.matchMedia("(max-width: 768px)").matches;
        //console.log("isMobile? " + isMobile);
        if (isMobile) {
            setupArrow(arrow, item);
        }
        else {
            setupMouseEnter(item);
            setupMouseLeave(item);
        }
    }
    function setupMouseLeave(item) {
        item.addEventListener('mouseleave', onMouseLeave.bind(item));
    }
    function setupMouseEnter(item) {
        item.addEventListener('mouseenter', onMouseEnter.bind(item));
    }
    function onMouseLeave() {
        this.classList.remove('expanded');
        overlay.style.opacity = "0";
        document.querySelectorAll('.flex-item').forEach(otherItem => {
            if (otherItem !== this) {
                otherItem.style.filter = "none !important";
                otherItem.style.opacity = "1 !important";
            }
        });
    }
    function onMouseEnter() {
        this.classList.add('expanded');
        overlay.style.opacity = "1";
        document.querySelectorAll('.flex-item').forEach(otherItem => {
            if (otherItem !== this) {
                otherItem.style.filter = "blur(5px) !important";
                otherItem.style.opacity = "0.5 !important";
            }
        });
    }
    function setupArrow(arrow, item) {
        arrow.addEventListener('click', () => {
            item.classList.toggle('expanded');
        });
    }
    function generateContentIn(item) {
        //first toggle
        var _a, _b;
        let toggleContentDiv = document.createElement("div");
        toggleContentDiv.classList.add("toggle-content");
        toggleContentDiv.classList.add("heading-toggle-content");
        let projectHeader = item.querySelector("h2");
        (_a = projectHeader.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(toggleContentDiv, projectHeader);
        toggleContentDiv.appendChild(projectHeader);
        let visualPresentationContainer = item.querySelector(".visual-presentation-container");
        //second toggle
        let secondToggleContentDiv = document.createElement("div");
        secondToggleContentDiv.classList.add("toggle-content");
        let nextSibling = visualPresentationContainer.nextElementSibling;
        while (nextSibling) {
            let currentSibling = nextSibling;
            nextSibling = currentSibling.nextElementSibling; // das nächste Geschwister-Element
            // Verschiebe das Element in den 'toggle-content' Wrapper
            secondToggleContentDiv.appendChild(currentSibling);
        }
        (_b = visualPresentationContainer.parentNode) === null || _b === void 0 ? void 0 : _b.appendChild(secondToggleContentDiv);
    }
    window.addEventListener('load', init);
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=Main.js.map