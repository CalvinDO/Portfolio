var Portfolio;
(function (Portfolio) {
    try {
        setupFooterDocuments();
    }
    catch (error) {
        console.warn(error);
    }
    function setupFooterDocuments() {
        let footer = document.querySelector("#footer_wrap footer");
        let documentsList = document.querySelector(".documents-list");
        footer.appendChild(documentsList);
    }
    document.addEventListener('load', setupFooterDocuments);
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=FooterInserter.js.map