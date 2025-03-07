namespace Portfolio {


    let footer: HTMLElement;

    try {
        setupFooterDocuments();
    } catch (error) {
        console.warn(error);
    }


    function setupFooterDocuments() {

        let documentsWrapper: HTMLDivElement | null = document.querySelector(".documents-wrapper");

        let documentsHeading: HTMLHeadingElement | null = document.querySelector("#dokumente");

        footer.appendChild(documentsHeading);
        footer.appendChild(documentsWrapper);

    }

    function handleInteraction(this: HTMLElement, ev: MouseEvent) {

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
}

