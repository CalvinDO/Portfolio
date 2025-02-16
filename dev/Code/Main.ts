namespace Portfolio {

    init();

    function init() {

        setWidth();

        document.querySelectorAll('.flex-item').forEach(handleFlexItem);

    }

    function setWidth(): void {
        document.addEventListener("DOMContentLoaded", function () {
            let innerSections = document.querySelectorAll<HTMLElement>('.inner'); // Holt alle Elemente mit der Klasse .inner
            // Überprüft, ob es überhaupt Elemente gibt
            if (innerSections.length > 0) {
                // Schleife über jedes gefundene Element
                innerSections.forEach(function (innerSection) {
                    // Setzt die Breite jedes Elements auf 80% oder 1200px
                    innerSection.style.setProperty('width', '85.4102%', 'important');  // Oder '1200px', je nach Bedarf
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

        return;

        console.log("content found");

        const container: HTMLDivElement = <HTMLDivElement>item.querySelector('.visual-presentation-container');
        const arrow = item.querySelector('.toggle-arrow');

        let isMobile = window.matchMedia("(max-width: 768px)").matches;
        console.log("isMobile? " + isMobile);

        if (isMobile) {

            arrow.addEventListener('click', () => {
                item.classList.toggle('expanded');
            });

        } else {

            container.addEventListener('mouseenter', () => {
                console.log("mouseenter");
                console.log("in" + container);
                item.classList.add('expanded');
            });

            item.addEventListener('mouseleave', (event) => {
                if (!item.contains(event.relatedTarget)) {
                    console.log("mouseleave");
                    console.log("in" + container);
                    item.classList.remove('expanded');
                }
            });

        }
    }
}

function generateContentIn(item: HTMLElement) {

    //first toggle

    let toggleContentDiv = document.createElement("div");
    toggleContentDiv.classList.add("toggle-content");

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
        toggleContentDiv.appendChild(currentSibling);
    }

    visualPresentationContainer.parentNode?.appendChild(toggleContentDiv);
}
