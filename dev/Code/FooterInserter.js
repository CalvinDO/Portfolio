var Portfolio;
(function (Portfolio) {
    setupFooterDocuments();
    function setupFooterDocuments() {
        let footer = document.querySelector("#footer_wrap footer");
        let documentsList = document.querySelector(".documents-list");
        footer.appendChild(documentsList);
    }
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=FooterInserter.js.map