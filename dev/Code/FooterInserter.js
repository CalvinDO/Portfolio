var Portfolio;
(function (Portfolio) {
    let footer;
    try {
        setupFooterDocuments();
    }
    catch (error) {
        console.warn(error);
    }
    function setupFooterDocuments() {
        let documentsList = document.querySelector(".documents-list");
        footer.appendChild(documentsList);
    }
    function handleInteraction(ev) {
        footer = document.querySelector("#footer_wrap footer");
        if (footer) {
            setupFooterDocuments();
        }
    }
    document.body.addEventListener('mousemove', handleInteraction);
    document.body.addEventListener('scroll', handleInteraction);
    document.body.addEventListener('keydown', handleInteraction);
    document.body.addEventListener('click', handleInteraction);
    document.body.addEventListener('touchstart', handleInteraction);
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=FooterInserter.js.map