namespace Portfolio {

    let overlay: HTMLDivElement = document.querySelector('#overlay');

    setWidth();

    function init() {

        overlay = <HTMLDivElement>document.querySelector('#overlay');

        setupProjectFlexItems();

        setupDetailsFlexItems();
    }


    function setupDetailsFlexItems() {
        document.querySelectorAll('.details-flex-item').forEach(handleDetailsFlexItem);
    }

    function setupProjectFlexItems() {
        document.querySelectorAll('.flex-item').forEach(handleFlexItem);
    }

    function handleDetailsFlexItem(detailsFlexItem: HTMLElement): void {

        let detail: HTMLDetailsElement = detailsFlexItem.querySelector("details");

        detailsFlexItem.addEventListener('click', () => { detail.open = true; console.log("set detail open"); })
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

    function handleFlexItem(item: HTMLElement): void {

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
        if (!arrow) {
            insertArrowIn(item);
        }
        let isMobile = window.matchMedia("(max-width: 768px)").matches;
        //console.log("isMobile? " + isMobile);

        if (isMobile) {

            setupArrow(arrow, item);

        } else {

            setupMouseEnter(item);

            setupMouseLeave(item);
        }
    }

    function insertArrowIn(item: HTMLElement) {

        let toggleArrowDiv = document.createElement("div");
        toggleArrowDiv.classList.add("toggle-arrow");
        toggleArrowDiv.innerHTML = "▼";

        item.querySelector(".visual-presentation-container a:last-of-type").insertAdjacentElement('afterend', toggleArrowDiv);
    }

    function setupMouseLeave(item: HTMLElement) {

        item.addEventListener('mouseleave', onMouseLeave.bind(item));
    }

    function setupMouseEnter(item: HTMLElement) {

        item.addEventListener('mouseenter', onMouseEnter.bind(item));
    }


    function onMouseLeave(this: HTMLElement) {

        this.classList.remove('expanded');
        overlay.style.opacity = "0";

        document.querySelectorAll('.flex-item').forEach(otherItem => {

            if (otherItem !== this) {

                (<HTMLElement>otherItem).style.filter = "none !important";
                (<HTMLElement>otherItem).style.opacity = "1 !important";
                console.log("deblur");
            }
        });
    }

    function onMouseEnter(this: HTMLElement) {

        this.classList.add('expanded');
        overlay.style.opacity = "1";

        document.querySelectorAll('.flex-item').forEach(otherItem => {

            if (otherItem !== this) {

                (<HTMLElement>otherItem).style.filter = "blur(5px) !important";
                (<HTMLElement>otherItem).style.opacity = "0.5 !important";
                console.log("blur");

            }
        });
    }


    function setupArrow(arrow: Element, flexItem: HTMLElement) {

        arrow.addEventListener('click', () => {
            flexItem.classList.toggle('expanded');
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
        thirdToggleContentDiv.classList.add("toggle-content third-toggle-content");

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


