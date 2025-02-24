namespace Portfolio {

    let overlay: HTMLDivElement = document.querySelector('#overlay');

    setWidth();

    function init() {

        overlay = <HTMLDivElement>document.querySelector('#overlay');

        setupDetailsFlexItems();

        setupProjectFlexItems();

        setupVideoHover();
    }

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

        let secondToggleChildren: HTMLCollection = item.querySelector(".second-toggle-content").children;
        let headingToggle: HTMLDivElement = item.querySelector(".heading-toggle-content");

        for (let secondToggleChild of secondToggleChildren) {
            secondToggleChild.classList.toggle('foreign', true);
            headingToggle.appendChild(secondToggleChild);
        }
    }

    function dexpandProjectFlexItem(item: HTMLElement): void {

        item.classList.toggle('expanded', false);

        overlay.style.opacity = "0";

        let foreignChildren: NodeListOf<Element> = item.querySelectorAll(".foreign");
        let secondToggleDiv: HTMLDivElement = item.querySelector(".second-toggle-content");

        for (let foreignChild of foreignChildren) {
            foreignChild.classList.toggle('foreign', false);
            secondToggleDiv.appendChild(foreignChild);
        }
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
            console.log("current content: ", content);
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
            movePrimaryInfoBeforeSecondContentIn(item);
        }

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

    function movePrimaryInfoBeforeSecondContentIn(item: HTMLElement) {

        let primaryInfo: HTMLDivElement = item.querySelector(".primary-info-container");
        item.querySelector(".second-toggle-content").insertAdjacentElement('beforebegin', primaryInfo);
    }

    function insertVignetteIn(item: HTMLElement) {

        let vignette: HTMLDivElement = document.createElement("div");
        vignette.classList.add("vignette");

        item.querySelector(".klicken-indicator").insertAdjacentElement('beforebegin', vignette);
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

    window.addEventListener('load', init);
}

