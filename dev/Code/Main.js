var Portfolio;
(function (Portfolio) {
    Portfolio.overlay = document.querySelector('#overlay');
    let expandedProject;
    setWidth();
    function init() {
        Portfolio.overlay = document.querySelector('#overlay');
        setupDetailsFlexItems();
        setupProjectFlexItems();
        setupVideoHover();
    }
    function setupVideoHover() {
        const videos = document.querySelectorAll('video');
        videos.forEach((video) => {
            video.addEventListener('mouseenter', () => {
                video.play();
            });
            video.addEventListener('mouseleave', () => {
                video.pause();
                //video.currentTime = 0;
            });
        });
    }
    function setupDetailsFlexItems() {
        document.querySelectorAll('.details-flex-item').forEach((detailsFlexItem) => { handleDetailsFlexItem(detailsFlexItem); });
    }
    function setupProjectFlexItems() {
        document.querySelectorAll('.flex-item').forEach(setupFlexItem);
        document.querySelectorAll('.toggle-content').forEach((toggleContent) => {
            console.log("add listener for toggle-content");
            addClickExpand(toggleContent.parentElement, toggleContent);
        });
        /*
        document.querySelectorAll('.toggle-arrow').forEach((toggleArrow: HTMLDivElement) => {
            console.log("add listener for toggle-arrow");
            addClickExpand(toggleArrow.parentElement.parentElement, toggleArrow);
        });
        */
    }
    function addClickExpand(parent, toggleTrigger) {
        console.log("parent or parent parent:", parent);
        toggleTrigger.addEventListener('click', () => {
            expandProjectFlexItem(parent);
        });
    }
    function expandProjectFlexItem(_item) {
        expandedProject = new Portfolio.ExpandedProject(_item);
        if (_item.classList.contains('expanded')) {
            dexpandProjectFlexItem(_item);
            return;
        }
        document.querySelectorAll('.flex-item').forEach((otherItem) => {
            if (otherItem != _item) {
                if (otherItem.classList.contains('expanded')) {
                    dexpandProjectFlexItem(otherItem);
                }
            }
        });
        expandedProject.expand();
    }
    function dexpandProjectFlexItem(item) {
        expandedProject.dexpand();
        expandedProject = null;
    }
    function handleDetailsFlexItem(detailsFlexItem) {
        let detail = detailsFlexItem.querySelector("details");
        let summary = detailsFlexItem.querySelector("summary");
        detailsFlexItem.addEventListener('click', () => { detail.open = detail.open ? false : true; });
        summary.addEventListener('click', () => { detail.open = detail.open ? false : true; });
    }
    function setWidth() {
        document.addEventListener("DOMContentLoaded", function () {
            let innerSections = document.querySelectorAll('.inner'); // Holt alle Elemente mit der Klasse .inner
            // Überprüft, ob es überhaupt Elemente gibt
            if (innerSections.length > 0) {
                // Schleife über jedes gefundene Element
                innerSections.forEach(function (innerSection) {
                    // Setzt die Breite jedes Elements auf 80% oder 1200px
                    innerSection.style.setProperty('padding', '0');
                    innerSection.style.setProperty('width', /*'85.4102%'*/ '100%', 'important');
                    innerSection.style.setProperty('max-width', 'none', 'important');
                    innerSection.style.setProperty('min-width', 'none', 'important');
                });
            }
        });
    }
    function setupFlexItem(item) {
        const content = item.querySelector('.toggle-content');
        if (!content) {
            console.log("current content: ", content);
            generateContentIn(item);
        }
        if (!item.querySelector('.toggle-content')) {
            console.warn("toggle content not found! abort");
            return;
        }
        //console.log("content found");
        //const container: HTMLDivElement = <HTMLDivElement>item.querySelector('.visual-presentation-container');
        let arrow = item.querySelector('.toggle-arrow');
        while (!arrow) {
            console.log("try generate and find arrow");
            insertArrowIn(item);
            arrow = item.querySelector('.toggle-arrow');
        }
        let vignette = item.querySelector(".vignette");
        if (!vignette) {
            insertVignetteIn(item);
        }
        movePrimaryInfoIntoHeadingIn(item);
        let isMobile = window.matchMedia("(max-width: 890px)").matches;
        //console.log("isMobile? " + isMobile);
        setupArrow(arrow, item);
        setupMouseEnter(item);
        setupMouseLeave(item);
        /*
        if (!isMobile) {

        }
        */
    }
    function movePrimaryInfoIntoHeadingIn(item) {
        let primaryInfo = item.querySelector(".primary-info-container");
        item.querySelector(".heading-toggle-content").insertAdjacentElement('beforeend', primaryInfo);
    }
    function insertVignetteIn(item) {
        let vignette = document.createElement("div");
        vignette.classList.add("vignette");
        item.querySelector(".visual-presentation-container").insertAdjacentElement('beforeend', vignette);
    }
    function insertArrowIn(item) {
        let toggleArrowDiv = document.createElement("div");
        toggleArrowDiv.classList.add("toggle-arrow");
        toggleArrowDiv.innerHTML = '<span class = "toggle-arrow-span">▼</span>';
        item.querySelector(".visual-presentation-container").insertAdjacentElement('beforeend', toggleArrowDiv);
    }
    function setupMouseLeave(item) {
        item.addEventListener('mouseleave', onMouseLeave.bind(item));
    }
    function setupMouseEnter(item) {
        item.addEventListener('mouseenter', onMouseEnter.bind(item));
    }
    function onMouseLeave() {
        this.classList.remove('hovered');
    }
    function onMouseEnter() {
        this.classList.add('hovered');
    }
    function setupArrow(arrow, flexItem) {
        arrow.addEventListener('click', () => {
            //flexItem.classList.toggle('expanded');
            expandProjectFlexItem(flexItem);
        });
    }
    function generateContentIn(item) {
        //first toggle
        var _a, _b, _c;
        let toggleContentDiv = document.createElement("div");
        toggleContentDiv.classList.add("toggle-content", "heading-toggle-content");
        let projectHeader = item.querySelector("h2");
        (_a = projectHeader.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(toggleContentDiv, projectHeader);
        toggleContentDiv.appendChild(projectHeader);
        let visualPresentationContainer = item.querySelector(".visual-presentation-container");
        //second toggle
        let secondToggleContentDiv = document.createElement("div");
        secondToggleContentDiv.classList.add("toggle-content", "second-toggle-content");
        let oldH4 = item.querySelector("h4");
        (_b = visualPresentationContainer.parentNode) === null || _b === void 0 ? void 0 : _b.replaceChild(secondToggleContentDiv, oldH4);
        secondToggleContentDiv.appendChild(oldH4);
        let thirdToggleContentDiv = document.createElement("div");
        thirdToggleContentDiv.classList.add("toggle-content", "third-toggle-content");
        let nextSibling = secondToggleContentDiv.nextElementSibling;
        while (nextSibling) {
            let currentSibling = nextSibling;
            nextSibling = currentSibling.nextElementSibling;
            thirdToggleContentDiv.appendChild(currentSibling);
        }
        (_c = visualPresentationContainer.parentNode) === null || _c === void 0 ? void 0 : _c.appendChild(thirdToggleContentDiv);
        console.log("setup 3 toggle contents");
    }
    window.addEventListener('load', init);
    document.addEventListener("DOMContentLoaded", () => {
        const target = document.querySelector(".expanded");
        const overlay = document.querySelector(".expandedProject");
        function updateOverlayPosition() {
            if (!target || !overlay)
                return;
            // Position des Flex-Items abrufen
            const rect = target.getBoundingClientRect();
            // Overlay absolut zur gesamten Seite positionieren
            overlay.style.top = `${rect.top + window.scrollY}px`;
            overlay.style.left = `${rect.left + window.scrollX}px`;
        }
        // Position einmalig setzen und bei Resize oder Scroll anpassen
        updateOverlayPosition();
        window.addEventListener("resize", updateOverlayPosition);
        window.addEventListener("scroll", updateOverlayPosition);
    });
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=Main.js.map