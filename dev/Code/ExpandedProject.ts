namespace Portfolio {

    export class ExpandedProject {

        public original: HTMLElement;
        public element: HTMLElement;


        //
        // MANAGE ARROW
        //
        //


        constructor(_original) {

            this.original = _original;
            this.element = <HTMLElement>_original.cloneNode(true);

            document.querySelector("body").insertAdjacentElement('afterbegin', this.element);
        }

        public expand(): void {

            this.original.classList.toggle('expanded', true);
            this.original.classList.toggle('expanded-project', true);

            this.element.classList.toggle('expanded', true);

            overlay.style.opacity = "1";



            let secondToggleChildren: HTMLCollection = this.element.querySelector(".second-toggle-content").children;
            let headingToggle: HTMLDivElement = this.element.querySelector(".heading-toggle-content");

            for (let secondToggleChild of secondToggleChildren) {
                secondToggleChild.classList.toggle('foreign', true);
                headingToggle.appendChild(secondToggleChild);
            }
        }

        public dexpand(): void {

            this.original.classList.toggle('expanded', false);
            this.element = null;

            overlay.style.opacity = "0";
        }
    }
}