namespace Portfolio {

    let overlay: HTMLDivElement = document.querySelector('#overlay');

    setupHeaderQuote();


    try {
        removeForkme();
        setupNavBar();
    } catch (error) {
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

        overlay = <HTMLDivElement>document.querySelector('#overlay');

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

    function onHoverDoc(_event: Event) {
        preventEventAndDexpand(_event, true);
    }

    function onClickDoc(_event: Event) {
        preventEventAndDexpand(_event, false);
    }

    function preventEventAndDexpand(_event: Event, _hover: boolean) {

        if (!(_event.target instanceof HTMLElement)) {
            return
        }

        let expandedProject: HTMLElement | null | undefined = document.querySelector(".expanded");

        if (expandedProject) {

            if (!expandedProject.contains(<HTMLElement>_event.target)) {

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

        const videos: NodeListOf<Element> = document.querySelectorAll('video');

        videos.forEach((video: HTMLVideoElement) => {
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
        document.querySelectorAll('.details-flex-item').forEach((detailsFlexItem: HTMLElement) => { handleDetailsFlexItem(detailsFlexItem) });
    }

    function setupProjectFlexItems() {
        document.querySelectorAll('.flex-item').forEach(setupFlexItem);

        document.querySelectorAll('.toggle-content').forEach((toggleContent: HTMLDivElement) => {
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

    function addClickExpand(parent: HTMLElement, toggleTrigger: HTMLDivElement): void {
        console.log("parent or parent parent:", parent);

        toggleTrigger.addEventListener('click', () => {
            expandProjectFlexItem(parent);
        });
    }

    function expandProjectFlexItem(item: HTMLElement): void {

        if (item.classList.contains('expanded')) {
            dexpandProjectFlexItem(item);
            return;
        }

        document.querySelectorAll('.flex-item').forEach((otherItem: HTMLElement) => {

            if (otherItem != item) {

                if (otherItem.classList.contains('expanded')) {
                    dexpandProjectFlexItem(otherItem);
                }
            }
        });

        item.classList.toggle('expanded', true);
        overlay.style.opacity = "1";


        let secondToggleDiv: HTMLElement = item.querySelector(".second-toggle-content");
        let headingToggle: HTMLDivElement = item.querySelector(".heading-toggle-content");

        headingToggle.insertAdjacentElement('beforeend', secondToggleDiv);
    }


    function dexpandProjectFlexItem(item: HTMLElement): void {

        item.classList.toggle('expanded', false);

        overlay.style.opacity = "0";

        let secondToggleDiv: HTMLElement = item.querySelector(".second-toggle-content");
        item.querySelector(".third-toggle-content").insertAdjacentElement('beforebegin', secondToggleDiv);
    }


    function handleDetailsFlexItem(detailsFlexItem: HTMLElement): void {

        let detail: HTMLDetailsElement = detailsFlexItem.querySelector("details");
        let summary: HTMLElement = detailsFlexItem.querySelector("summary");

        detailsFlexItem.addEventListener('click', () => { detail.open = detail.open ? false : true; })
        summary.addEventListener('click', () => { detail.open = detail.open ? false : true; })
    }

    function setWidth(): void {
        document.addEventListener("DOMContentLoaded", function () {
            let innerSections = document.querySelectorAll<HTMLElement>('.inner'); // Holt alle Elemente mit der Klasse .inner
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

    function setupFlexItem(item: HTMLElement): void {

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
        let arrow: HTMLDivElement = item.querySelector('.toggle-arrow');

        while (!arrow) {
            console.log("try generate and find arrow");
            insertArrowIn(item);
            arrow = item.querySelector('.toggle-arrow');
        }

        let vignette: HTMLDivElement = item.querySelector(".vignette");

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

    function movePrimaryInfoIntoHeadingIn(item: HTMLElement) {

        let primaryInfo: HTMLDivElement = item.querySelector(".primary-info-container");
        item.querySelector(".heading-toggle-content").insertAdjacentElement('beforeend', primaryInfo);
    }

    function insertVignetteIn(item: HTMLElement) {

        let vignette: HTMLDivElement = document.createElement("div");
        vignette.classList.add("vignette");

        item.querySelector(".visual-presentation-container").insertAdjacentElement('beforeend', vignette);
    }


    function insertArrowIn(item: HTMLElement) {

        let toggleArrowDiv = document.createElement("div");
        toggleArrowDiv.classList.add("toggle-arrow");
        toggleArrowDiv.innerHTML = '<span class = "toggle-arrow-span">▼</span>';

        item.querySelector(".visual-presentation-container").insertAdjacentElement('beforeend', toggleArrowDiv);
    }

    function setupMouseLeave(item: HTMLElement) {

        item.addEventListener('mouseleave', onMouseLeave.bind(item));
    }

    function setupMouseEnter(item: HTMLElement) {

        item.addEventListener('mouseenter', onMouseEnter.bind(item));
    }


    function onMouseLeave(this: HTMLElement) {

        this.classList.remove('hovered');

    }

    function onMouseEnter(this: HTMLElement) {

        this.classList.add('hovered');
    }


    function setupArrow(arrow: Element, flexItem: HTMLElement) {

        arrow.addEventListener('click', () => {
            //flexItem.classList.toggle('expanded');
            expandProjectFlexItem(flexItem);
        });
    }


    function generateContentIn(item: HTMLElement) {

        //first toggle

        let toggleContentDiv = document.createElement("div");
        toggleContentDiv.classList.add("toggle-content", "heading-toggle-content");


        let projectHeader: HTMLHeadingElement = <HTMLHeadingElement>item.querySelector("h2");
        projectHeader.parentNode?.replaceChild(toggleContentDiv, projectHeader);

        toggleContentDiv.appendChild(projectHeader);

        let visualPresentationContainer: HTMLDivElement = item.querySelector(".visual-presentation-container");

        //second toggle

        let secondToggleContentDiv = document.createElement("div");
        secondToggleContentDiv.classList.add("toggle-content", "second-toggle-content");
        let oldH4: HTMLHeadingElement = <HTMLHeadingElement>item.querySelector("h4");
        visualPresentationContainer.parentNode?.replaceChild(secondToggleContentDiv, oldH4);
        secondToggleContentDiv.appendChild(oldH4);


        let thirdToggleContentDiv = document.createElement("div");
        thirdToggleContentDiv.classList.add("toggle-content", "third-toggle-content");

        let nextSibling = secondToggleContentDiv.nextElementSibling;

        while (nextSibling) {

            let currentSibling = nextSibling;
            nextSibling = currentSibling.nextElementSibling;

            thirdToggleContentDiv.appendChild(currentSibling);
        }

        visualPresentationContainer.parentNode?.appendChild(thirdToggleContentDiv);

        console.log("setup 3 toggle contents");
    }

    function removeForkme() {
        let banner: HTMLElement = document.querySelector("header a#forkme_banner");
        banner.classList.add("to-remove");

        banner.remove();
    }


    function setupHeaderQuote() {
        let header: HTMLElement | null = document.querySelector("header");

        let quote: HTMLQuoteElement = document.createElement("blockquote");
        quote.innerHTML = '<span class="quote-text">[...] <strong>Calvin Dell’Oro</strong> zählt unter den etlichen hundert Studierenden,<br>die ich seit 2008 [...] unterrichtet habe,<br>zu den drei <strong>engagiertesten</strong> und <strong>erfolgreichsten</strong>...</span><footer><cite class="author">— <a href="EmpfehlungsschreibenVonProfDrThomasSchneider.pdf">Prof. Dr. rer. nat. Thomas Schneider</a></cite></footer>'
        /*, <cite class="quote-time">2025</cite>*/

        let quoteContainer: HTMLDivElement = document.createElement("div");
        quoteContainer.classList.add("quote-container");
        quoteContainer.appendChild(quote);

        header.insertAdjacentElement('beforeend', quoteContainer);
        let arrow = document.createElement("span");
        arrow.innerHTML = "˄";
        arrow.id = "startpage-arrow";

        header.insertAdjacentElement('beforeend', arrow);
    }

    function setupFooterDocuments() {

        let footer: HTMLElement | null = document.querySelector("#footer_wrap footer");

        let documentsList: HTMLUListElement | null = document.querySelector(".documents-list");
        footer.appendChild(documentsList);
    }

    function setupNavBar() {
        const navbar = document.getElementById("navbar");
        const placeholder = <HTMLDivElement>document.getElementById("navbar-placeholder");

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    navbar.classList.add("sticky");
                } else {
                    navbar.classList.remove("sticky");
                }
            },
            { threshold: 0 }
        );

        observer.observe(placeholder);
    }


    window.addEventListener('load', init);
}


