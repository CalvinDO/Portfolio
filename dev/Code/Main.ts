namespace Portfolio {

    let overlay: HTMLDivElement = document.querySelector('#overlay');

    setWidth();

    function init() {

        overlay = <HTMLDivElement>document.querySelector('#overlay');

        document.querySelectorAll('.flex-item').forEach(handleFlexItem);

        document.querySelectorAll('.details-flex-item').forEach(handleDetailsFlexItem);
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
                    innerSection.style.setProperty('width', /*'85.4102%'*/ '100%', 'important');  // Oder '1200px', je nach Bedarf
                    innerSection.style.setProperty('max-width', 'none', 'important'); // Entfernt max-width
                    innerSection.style.setProperty('min-width', 'none', 'important');  // oder '1200px', je nach Bedarf
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


    function setupArrow(arrow: Element, item: HTMLElement) {

        arrow.addEventListener('click', () => {
            item.classList.toggle('expanded');
        });
    }


    function generateContentIn(item: HTMLElement) {

        //first toggle

        let toggleContentDiv = document.createElement("div");
        toggleContentDiv.classList.add("toggle-content");
        toggleContentDiv.classList.add("heading-toggle-content");


        let projectHeader: HTMLHeadingElement = <HTMLHeadingElement>item.querySelector("h2");
        projectHeader.parentNode?.replaceChild(toggleContentDiv, projectHeader);

        toggleContentDiv.appendChild(projectHeader);

        let visualPresentationContainer: HTMLDivElement = item.querySelector(".visual-presentation-container");

        //second toggle

        let secondToggleContentDiv = document.createElement("div");
        secondToggleContentDiv.classList.add("toggle-content");

        let nextSibling = visualPresentationContainer.nextElementSibling;

        while (nextSibling) {

            let currentSibling = nextSibling;
            nextSibling = currentSibling.nextElementSibling;  // das nächste Geschwister-Element

            // Verschiebe das Element in den 'toggle-content' Wrapper
            secondToggleContentDiv.appendChild(currentSibling);
        }

        visualPresentationContainer.parentNode?.appendChild(secondToggleContentDiv);
    }

    window.addEventListener('load', init);
}


