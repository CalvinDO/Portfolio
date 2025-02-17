var Portfolio;
(function (Portfolio) {
    init();
    function init() {
        setWidth();
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
        const container = item.querySelector('.visual-presentation-container');
        const arrow = item.querySelector('.toggle-arrow');
        let isMobile = window.matchMedia("(max-width: 768px)").matches;
        //console.log("isMobile? " + isMobile);
        if (isMobile) {
            setupArrow(arrow, item);
        }
        else {
            setupMouseEnter(container, item);
            setupMouseLeave(item, container);
        }
    }
    function setupMouseLeave(item, container) {
        item.addEventListener('mouseleave', (event) => {
            if (!item.contains(event.relatedTarget)) {
                console.log("mouseleave");
                console.log("in" + container);
                item.classList.remove('expanded');
            }
        });
    }
    function setupMouseEnter(container, item) {
        container.addEventListener('mouseenter', () => {
            console.log("mouseenter");
            console.log("in" + container);
            item.classList.add('expanded');
        });
    }
    function setupArrow(arrow, item) {
        arrow.addEventListener('click', () => {
            item.classList.toggle('expanded');
        });
    }
})(Portfolio || (Portfolio = {}));
function generateContentIn(item) {
    //first toggle
    var _a, _b;
    let toggleContentDiv = document.createElement("div");
    toggleContentDiv.classList.add("toggle-content");
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
        toggleContentDiv.appendChild(currentSibling);
    }
    (_b = visualPresentationContainer.parentNode) === null || _b === void 0 ? void 0 : _b.appendChild(toggleContentDiv);
}
//# sourceMappingURL=Main.js.map