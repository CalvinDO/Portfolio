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
        let documentsWrapper = document.querySelector(".documents-wrapper");
        footer.appendChild(documentsWrapper);
    }
    function handleInteraction(ev) {
        footer = document.querySelector("#footer_wrap footer");
        if (footer) {
            if (!footer.contains(document.querySelector(".documents-wrapper"))) {
                setupFooterDocuments();
            }
        }
    }
    document.body.addEventListener('mousemove', handleInteraction);
    document.body.addEventListener('scroll', handleInteraction);
    document.body.addEventListener('keydown', handleInteraction);
    document.body.addEventListener('click', handleInteraction);
    document.body.addEventListener('touchstart', handleInteraction);
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=FooterInserter.js.map