namespace Portfolio {


    let footer: HTMLElement;

    /*
    try {
        setupFooter();
    } catch (error) {
        console.warn(error);
    }
    */


    function setupFooter(): void {

        setupFooterDocuments();
        setupQuote();

        let privacyPolicyFootnote: HTMLParagraphElement = document.createElement("p");
        privacyPolicyFootnote.innerHTML = 'Diese Webseite erfasst technische Informationen zur Optimierung und Sicherheit. Mehr dazu: <a href = "datenschutzerklärung.html">Datenschutzerklärung</a>';

        footer.appendChild(privacyPolicyFootnote);
    }

    function setupFooterDocuments() {

        let documentsWrapper: HTMLDivElement | null = document.querySelector(".documents-wrapper");

        let documentsHeading: HTMLHeadingElement | null = document.querySelector("#dokumente");
        let documentsHeadingSection: HTMLDivElement = <HTMLDivElement>documentsHeading.parentElement;

        footer.insertAdjacentElement('afterbegin', documentsHeadingSection);
        documentsHeadingSection.insertAdjacentElement('afterend', documentsWrapper);
    }

    function setupQuote() {
        footer.insertAdjacentElement('afterbegin', getSetupedFooterWrapQuote());
    }

    function getSetupedFooterWrapQuote() {

        let quote: HTMLQuoteElement = document.createElement("blockquote");
        quote.innerHTML = '<span class="quote-text">Sehr gerne <strong>empfehle</strong> ich [...] Dell’Oro <strong>mit Nachdruck</strong> für eine Tätigkeit im Bereich <strong>Game Development</strong></span><footer><cite class="author">— <a href="EmpfehlungsschreibenVonProfChristophMueller.pdf" target = "_blank">Prof. Christoph Müller</a><img src = "HFULogo.png"></cite></footer>';
        /*, <cite class="quote-time">2025</cite>*/
        let quoteContainer: HTMLDivElement = document.createElement("div");
        quoteContainer.classList.add("quote-container");
        quoteContainer.appendChild(quote);

        return quoteContainer;
    }

    function handleInteraction(this: HTMLElement, ev: MouseEvent) {

        footer = document.querySelector("#footer_wrap footer");

        if (footer) {

            if (!footer.contains(document.querySelector(".documents-wrapper"))) {
                setupFooter();
            }
        }
    }

    document.body.addEventListener('mousemove', handleInteraction);
    document.body.addEventListener('scroll', handleInteraction);
    document.body.addEventListener('keydown', handleInteraction);
    document.body.addEventListener('click', handleInteraction);
    document.body.addEventListener('touchstart', handleInteraction);
}

