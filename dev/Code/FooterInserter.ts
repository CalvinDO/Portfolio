namespace Portfolio {

    setupFooterDocuments();

    function setupFooterDocuments() {

        let footer: HTMLElement | null = document.querySelector("#footer_wrap footer");

        let documentsList: HTMLUListElement | null = document.querySelector(".documents-list");
        footer.appendChild(documentsList);
    }
}