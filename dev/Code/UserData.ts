namespace Portfolio {

    export class UserData {

        public ip: string;
        public country: string;
        public city: string;
        public totalTime: string;
        public exitScrollDepth: number;
        public maxScrollDepth: number;
        public itemTimes: { name: string; timeOpened: string, duration: string }[];
        public devToolsUsed: boolean;
        public clickedLinks: string[];
        public isMobile: boolean;
        public browser: string;
        public referrerURL: string;

        constructor() {
            this.itemTimes = [];
            this.clickedLinks = [];
        }
    }
}