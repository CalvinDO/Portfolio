namespace Portfolio {

    export class UserData {

        public ip: string;
        public country: string;
        public city: string;
        public totalTime: string;
        public scrollDepth: number;
        public itemTimes: { name: string; time: string }[];
        public devToolsUsed: boolean;
        public clickedLinks: string[];
        public device: string;
        public system: string;
        public browser: string;
        public referrerURL: string;

        constructor() {
            this.itemTimes = [];
            this.clickedLinks = [];
        }
    }
}