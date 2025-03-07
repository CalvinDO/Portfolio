namespace Portfolio {


    let footer: HTMLElement;

    try {
        setupFooterDocuments();
    } catch (error) {
        console.warn(error);
    }


    function setupFooterDocuments() {


        let documentsList: HTMLUListElement | null = document.querySelector(".documents-list");
        footer.appendChild(documentsList);
    }

    function handleInteraction(this: HTMLElement, ev: MouseEvent) {

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
}

