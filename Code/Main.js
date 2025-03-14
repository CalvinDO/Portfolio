var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    function init() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                setupNavBar();
            }
            catch (error) {
                console.warn("try init setupnavbar, error:", error);
            }
            overlay = document.querySelector('#overlay');
            document.addEventListener('click', onClickDoc, { capture: true });
            document.addEventListener('mouseover', onHoverDoc, { capture: true });
            setupDetailsFlexItems();
            setupProjectFlexItems();
            setupVideoOverlayHover();
            setupFlexItemsPreview();
            setupMoreProjectsButtons();
            /* TODO: try multithread solution */
            //await setupHeavyProjects();
        });
    }
    function setupHeavyProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            yield addAllDynamicProjects();
            setupProjectFlexItems();
            setupVideoOverlayHover();
            setupFlexItemsPreview();
            setupMoreProjectsButtons();
        });
    }
    function addAllDynamicProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            yield addDynamicProjectsIn("coding");
            yield addDynamicProjectsIn("modelling");
        });
    }
    function addDynamicProjectsIn(_containerPrefix) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch("Code/" + _containerPrefix + "DynamicProjects.txt");
                if (!response.ok)
                    throw new Error("Fehler beim Laden der" + _containerPrefix + "Coding Dymanic Projects Datei");
                const htmlText = yield response.text();
                const container = document.querySelector("#" + _containerPrefix + "-container");
                if (container) {
                    container.innerHTML += htmlText; // Flex-Items einfügen
                }
            }
            catch (error) {
                console.error("Fehler:", error);
            }
        });
    }
    function sendIpifyEmail(ev) {
        fetch('https://api64.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
            sendEmail("IPIFY Portfolio Access - New site load", "IP: " + data.ip);
        })
            .catch(error => {
            //console.warn("ify failed"/*"ipify failed", error*/);
        });
    }
    function sendEmail(_subject, _body) {
        return __awaiter(this, void 0, void 0, function* () {
            const emailData = {
                to: 'calvindelloro@mail.de',
                subject: _subject,
                html: '<p>' + _body + "</p>"
            };
            try {
                const response = yield fetch('https://portfolio-ten-liard-43.vercel.app/api/send-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(emailData),
                });
                //console.log(response);
                const result = yield response.json();
                if (response.ok) {
                    //console.log("response.ok"/*'Email sent:', result.message*/);
                }
                else {
                    //console.warn("response not ok"/*'Error sending email:', result.error*/);
                }
            }
            catch (error) {
                //console.warn("Request failed"/*'Request failed:', error*/);
            }
        });
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
    function setupVideoOverlayHover() {
        const items = document.querySelectorAll('.flex-item');
        items.forEach((item) => {
            if (!item.classList.contains("setup")) {
                let video = item.querySelector("video");
                if (video) {
                    video.addEventListener('mouseenter', () => {
                        video.play();
                    });
                    video.addEventListener('mouseleave', () => {
                        video.pause();
                        //video.currentTime = 0;
                    });
                    let arrow = item.querySelector(".toggle-arrow");
                    if (!arrow.classList.contains("is-x")) {
                        arrow.addEventListener('mouseenter', () => {
                            video.play();
                        });
                        arrow.addEventListener('mouseleave', () => {
                            video.pause();
                            //video.currentTime = 0;
                        });
                    }
                }
                item.classList.toggle("setup", true);
            }
        });
    }
    function setupDetailsFlexItems() {
        document.querySelectorAll('.details-flex-item').forEach((detailsFlexItem) => { handleDetailsFlexItem(detailsFlexItem); });
    }
    function setupProjectFlexItems() {
        document.querySelectorAll('.flex-item').forEach(setupFlexItem);
        document.querySelectorAll('.second-toggle-content').forEach((toggleContent) => {
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
        if (!parent.classList.contains("setup")) {
            toggleTrigger.addEventListener('click', () => {
                expandProjectFlexItem(parent);
            });
        }
    }
    function expandProjectFlexItem(item) {
        if (item.classList.contains('expanded')) {
            //console.log("already expanded, ");
            dexpandProjectFlexItem(item);
            return;
        }
        //console.log("expand");
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
        let arrow = item.querySelector(".toggle-arrow");
        arrow.classList.toggle("is-x", true);
        headingToggle.insertAdjacentElement('afterbegin', arrow);
    }
    function dexpandProjectFlexItem(item) {
        //console.log("dexpand");
        item.classList.toggle('expanded', false);
        item.classList.toggle('hovered', false);
        overlay.style.opacity = "0";
        let secondToggleDiv = item.querySelector(".second-toggle-content");
        item.querySelector(".third-toggle-content").insertAdjacentElement('beforebegin', secondToggleDiv);
        let arrow = item.querySelector(".toggle-arrow");
        item.querySelector(".vignette").insertAdjacentElement('beforebegin', arrow);
        arrow.classList.toggle("is-x", false);
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
        if (item.classList.contains("setup")) {
            return;
        }
        const content = item.querySelector('.toggle-content');
        if (!content) {
            generateContentIn(item);
        }
        if (!item.querySelector('.toggle-content')) {
            console.warn("toggle content not found! abort");
            return;
        }
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
        setupArrow(arrow, item);
        setupMouseEnter(item);
        setupMouseLeave(item);
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
        if (document.documentElement.querySelector('.expanded') && !this.classList.contains(".expanded")) {
            return;
        }
        this.classList.remove('hovered');
    }
    function onMouseEnter() {
        if (document.documentElement.querySelector('.expanded') && !this.classList.contains(".expanded")) {
            return;
        }
        this.classList.add('hovered');
    }
    function setupArrow(arrow, flexItem) {
        arrow.addEventListener('click', () => {
            if (arrow.classList.contains("is-x")) {
                dexpandProjectFlexItem(flexItem);
            }
            else {
                expandProjectFlexItem(flexItem);
            }
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
        let quoteContainer = getSetupedHeaderQuote();
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
    function getSetupedHeaderQuote() {
        let quote = document.createElement("blockquote");
        quote.innerHTML = '<span class="quote-text"><strong>Calvin Dell’Oro</strong> [zählt] unter den etlichen hundert Studierenden,<br>die ich seit 2008 [...] unterrichtet habe,<br>zu den drei <strong>engagiertesten</strong> und <strong>erfolgreichsten</strong>.</span><footer><cite class="author">— <a href="EmpfehlungsschreibenVonProfDrThomasSchneider.pdf" target = "_blank">Prof. Dr. rer. nat. Thomas Schneider</a><img src = "HFULogo.jpg"></cite></footer>';
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
        const menuLinks = navbar.querySelectorAll(".menu li a");
        const headers = document.querySelectorAll("h1");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    menuLinks.forEach((link) => {
                        if (link.getAttribute("href").replace("#", "") === id) {
                            link.classList.add("active");
                        }
                        else {
                            link.classList.remove("active");
                        }
                    });
                }
            });
        }, { root: null, rootMargin: "0px", threshold: 0.5 });
        headers.forEach((header) => {
            observer.observe(header);
        });
    }
    Portfolio.setupNavBar = setupNavBar;
    function turnPage() {
        window.scrollTo({
            top: document.querySelector("#main_content").offsetTop,
            behavior: 'smooth', // Sanftes Scrollen
        });
    }
    function setupFlexItemsPreview() {
        for (let container of document.querySelectorAll(".flex-container")) {
            Array.from(container.children).forEach((value, index) => {
                if (index > 2) {
                    value.classList.toggle("excess", true);
                }
                else {
                    value.classList.toggle("excess", false);
                }
            });
        }
    }
    function setupMoreProjectsButtons() {
        document.querySelectorAll(".flex-container").forEach(setupButtonInContainer);
    }
    function setupButtonInContainer(flexContainer, key, parent) {
        if (flexContainer.children.length <= 3) {
            return;
        }
        let button = document.createElement("button");
        button.innerHTML = "mehr";
        button.classList.toggle("more-projects", true);
        button.onclick = onClickMoreProjects(flexContainer, button);
        flexContainer.insertAdjacentElement('afterend', button);
    }
    function onClickMoreProjects(value, button) {
        return function () {
            Array.from(value.children).forEach(flexItem => flexItem.classList.toggle("excess", false));
            button.remove();
        };
    }
    document.addEventListener("DOMContentLoaded", () => {
        //console.log("DOM CONTENT LOADED");
        try {
            setupNavBar();
        }
        catch (error) {
            console.warn("dom content loaded try setupnavbar, error: ", error);
        }
    });
    window.addEventListener('load', init);
    window.addEventListener('load', sendIpifyEmail);
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=Main.js.map