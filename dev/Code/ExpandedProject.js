var Portfolio;
(function (Portfolio) {
    class ExpandedProject {
        //
        // MANAGE ARROW
        //
        //
        constructor(_original) {
            this.original = _original;
            this.element = _original.cloneNode(true);
            document.querySelector("body").insertAdjacentElement('afterbegin', this.element);
        }
        expand() {
            this.original.classList.toggle('expanded', true);
            this.original.classList.toggle('expanded-project', true);
            this.element.classList.toggle('expanded', true);
            overlay.style.opacity = "1";
            let secondToggleChildren = this.element.querySelector(".second-toggle-content").children;
            let headingToggle = this.element.querySelector(".heading-toggle-content");
            for (let secondToggleChild of secondToggleChildren) {
                secondToggleChild.classList.toggle('foreign', true);
                headingToggle.appendChild(secondToggleChild);
            }
        }
        dexpand() {
            this.original.classList.toggle('expanded', false);
            this.element = null;
            overlay.style.opacity = "0";
        }
    }
    Portfolio.ExpandedProject = ExpandedProject;
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=ExpandedProject.js.map