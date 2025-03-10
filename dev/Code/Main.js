var Portfolio;
(function (Portfolio) {
    let overlay = document.querySelector('#overlay');
    setupHeader();
    try {
        removeForkme();
        setupNavBar();
    }
    catch (error) {
        console.warn(error);
    }
    /*
    try {
        init();
    } catch (error) {
        console.warn("Init called too fast: " + error);
    }
    */
    function init() {
        try {
            setupNavBar();
        }
        catch (error) {
            console.warn("try init setupnavbar, error:", error);
        }
        overlay = document.querySelector('#overlay');
        document.addEventListener('click', onClickDoc, { capture: true });
        document.addEventListener('mouseover', onHoverDoc, { capture: true });
        /*
        setupOverlay();
        */
        //removeForkme();
        setupDetailsFlexItems();
        setupProjectFlexItems();
        setupVideoHover();
    }
    function onHoverDoc(_event) {
        preventEventAndDexpand(_event, true);
    }
    function onClickDoc(_event) {
        preventEventAndDexpand(_event, false);
    }
    function preventEventAndDexpand(_event, _hover) {
        if (!(_event.target instanceof HTMLElement)) {
            return;
        }
        let expandedProject = document.querySelector(".expanded");
        if (expandedProject) {
            if (!expandedProject.contains(_event.target)) {
                _event.stopPropagation();
                _event.preventDefault();
                document.body.style.pointerEvents = "none";
                if (!_hover) {
                    dexpandProjectFlexItem(expandedProject);
                    document.body.style.pointerEvents = "";
                }
                setTimeout(() => {
                    document.body.style.pointerEvents = ""; // Nach kurzer Zeit wieder aktivieren
                }, 20);
            }
        }
    }
    /*
        function setupOverlay() {
            
            overlay.addEventListener('click', () => console.log("click overlay"));
        }
    */
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
        toggleTrigger.addEventListener('click', () => {
            expandProjectFlexItem(parent);
        });
    }
    function expandProjectFlexItem(item) {
        if (item.classList.contains('expanded')) {
            dexpandProjectFlexItem(item);
            return;
        }
        document.querySelectorAll('.flex-item').forEach((otherItem) => {
            if (otherItem != item) {
                if (otherItem.classList.contains('expanded')) {
                    dexpandProjectFlexItem(otherItem);
                }
            }
        });
        item.classList.toggle('expanded', true);
        overlay.style.opacity = "1";
        let secondToggleDiv = item.querySelector(".second-toggle-content");
        let headingToggle = item.querySelector(".heading-toggle-content");
        headingToggle.insertAdjacentElement('beforeend', secondToggleDiv);
        headingToggle.insertAdjacentElement('afterbegin', item.querySelector(".toggle-arrow"));
    }
    function dexpandProjectFlexItem(item) {
        item.classList.toggle('expanded', false);
        overlay.style.opacity = "0";
        let secondToggleDiv = item.querySelector(".second-toggle-content");
        item.querySelector(".third-toggle-content").insertAdjacentElement('beforebegin', secondToggleDiv);
        item.querySelector(".klicken-indicator").insertAdjacentElement('afterend', item.querySelector(".toggle-arrow"));
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
        toggleArrowDiv.innerHTML = '<span class = "toggle-arrow-span"><i class="fas fa-times"></i></span>';
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
    }
    function removeForkme() {
        let banner = document.querySelector("header a#forkme_banner");
        banner.classList.add("to-remove");
        banner.remove();
    }
    function setupHeader() {
        let header = document.querySelector("header");
        let quoteContainer = setupHeaderQuote();
        setupHeaderArrow(header, quoteContainer);
        header.addEventListener('click', handleClickHeader);
    }
    function handleClickHeader(ev) {
        let rect = this.getBoundingClientRect();
        let clickToScrollArea = rect.bottom - rect.height / 3;
        //console.log("rectheight / 3: " + rect.height / 3, " - rectbottom: " + rect.bottom);
        if (ev.clientY > clickToScrollArea) {
            turnPage();
        }
    }
    function setupHeaderQuote() {
        let quote = document.createElement("blockquote");
        quote.innerHTML = '<span class="quote-text"><strong>Calvin Dell’Oro</strong> [zählt] unter den etlichen hundert Studierenden,<br>die ich seit 2008 [...] unterrichtet habe,<br>zu den drei <strong>engagiertesten</strong> und <strong>erfolgreichsten</strong>.</span><footer><cite class="author">— <a href="EmpfehlungsschreibenVonProfDrThomasSchneider.pdf" target = "_blank">Prof. Dr. rer. nat. Thomas Schneider</a></cite></footer>';
        /*, <cite class="quote-time">2025</cite>*/
        let quoteContainer = document.createElement("div");
        quoteContainer.classList.add("quote-container");
        quoteContainer.appendChild(quote);
        return quoteContainer;
    }
    function setupHeaderArrow(header, quoteContainer) {
        header.insertAdjacentElement('beforeend', quoteContainer);
        let arrow = document.createElement("img");
        arrow.src = "startpageArrow.png";
        arrow.id = "startpage-arrow";
        header.insertAdjacentElement('beforeend', arrow);
    }
    function setupFooterDocuments() {
        let footer = document.querySelector("#footer_wrap footer");
        let documentsList = document.querySelector(".documents-list");
        footer.appendChild(documentsList);
    }
    function setupNavBar() {
        const navbar = document.querySelector(".navbar");
        const placeholder = document.querySelector("#navbar-placeholder");
        const topPlaceholder = document.querySelector("#navbar-top-placeholder");
        const lowerObserver = new IntersectionObserver(([entry]) => {
            if (entry.boundingClientRect.top <= 0) {
                //console.log("add sticky");
                navbar.classList.add("sticky");
            }
            else {
                navbar.classList.remove("sticky");
            }
        }, {
            threshold: 0
        });
        const upperObserver = new IntersectionObserver(([entry]) => {
            if (entry.boundingClientRect.top >= 0) {
                //console.log("remove sticky");
                navbar.classList.remove("sticky");
            }
        }, {
            threshold: 0
        });
        lowerObserver.observe(placeholder);
        upperObserver.observe(topPlaceholder);
        const observerForHiding = new MutationObserver(() => {
            const root = document.documentElement; // :root
            const navbar = document.querySelector('.navbar'); // Die Navbar mit der Klasse .sticky
            // Überprüft, ob es ein .expanded-Element gibt
            if (root.querySelector('.expanded')) {
                if (navbar)
                    navbar.classList.toggle('hidden', true); // Navbar ausblenden
            }
            else {
                if (navbar)
                    navbar.classList.toggle('hidden', false); // Navbar wieder einblenden
            }
        });
        // Beginnt die Überwachung auf Änderungen im DOM
        observerForHiding.observe(document.documentElement, {
            childList: true,
            subtree: true // Überwacht auch tiefere Elemente im DOM
        });
    }
    Portfolio.setupNavBar = setupNavBar;
    document.addEventListener("DOMContentLoaded", () => {
        try {
            setupNavBar();
        }
        catch (error) {
            console.warn("dom content loaded try setupnavbar, error: ", error);
        }
    });
    window.addEventListener('load', init);
})(Portfolio || (Portfolio = {}));
function turnPage() {
    window.scrollTo({
        top: document.querySelector("#main_content").offsetTop,
        behavior: 'smooth', // Sanftes Scrollen
    });
}
//# sourceMappingURL=Main.js.map