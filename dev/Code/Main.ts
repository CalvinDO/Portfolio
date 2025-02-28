namespace Portfolio {

    let overlay: HTMLDivElement = document.querySelector('#overlay');

    setWidth();

    try {
        removeForkme();
    } catch (error) {
        console.warn(error);
    }


    function init() {

        overlay = <HTMLDivElement>document.querySelector('#overlay');

        document.addEventListener('click', onClickDoc);



        /*
        setupOverlay();
        */
        removeForkme();

        setupDetailsFlexItems();

        setupProjectFlexItems();

        setupVideoHover();
    }

    function onClickDoc(_event: Event) {

        if (!(_event.target instanceof HTMLElement)) {
            return
        }

        let expandedProject: HTMLElement = document.querySelector(".expanded");

        if (expandedProject) {

            if (!expandedProject.contains(<HTMLElement>_event.target)) {

                _event.stopPropagation();
                _event.preventDefault();

                dexpandProjectFlexItem(expandedProject);
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
        console.log(banner);
        banner.classList.add("to-remove");
    }



    window.addEventListener('load', init);
}


