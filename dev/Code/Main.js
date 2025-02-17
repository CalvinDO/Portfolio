var Portfolio;
(function (Portfolio) {
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
    console.log("test");
    console.log("all flex items length: " + document.querySelectorAll('.flex-item').length);
    document.querySelectorAll('.flex-item').forEach(item => {
        console.log("current item: " + item);
    });
    const item = document.querySelector('.flex-item');
    const container = item.querySelector('.visual-presentation-container');
    const content = item.querySelector('.toggle-content');
    const arrow = item.querySelector('.toggle-arrow');
    let isMobile = window.matchMedia("(max-width: 768px)").matches;
    console.log("isMobile? " + isMobile);
    if (isMobile) {
        arrow.addEventListener('click', () => {
            item.classList.toggle('expanded');
        });
    }
    else {
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
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=Main.js.map