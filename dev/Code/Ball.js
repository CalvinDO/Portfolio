/*
namespace Portfolio {

    import Vector2D = Vector.Vector2D;

    export class Ball {

        private static defaultRadius: number = 15;
        private static pullForceFactor: number = 1 / 50;

        private position: Vector2D;
        private speed: Vector2D = new Vector2D(0, 0);

        private radius: number;

        private parent: Ball;
        private childBall: Ball;

        private isKinematic: boolean;


        constructor(_position: Vector2D, _parent?: Ball, _isKinematic?: boolean, _radius?: number) {

            this.position = _position;
            this.parent = _parent;

            if (this.parent) {
                this.parent.childBall = this;
            }

            this.radius = _radius || Ball.defaultRadius;

        }

        public createLinkedBall(): Ball {

            let newBallPosition = new Vector2D(this.position.x, this.position.y + this.radius * 2);
            return new Ball(newBallPosition, this, false, this.radius);
        }

        public calculatePulls(_balls: Ball[]): void {

            if (this.isKinematic || !this.parent) {

                this.position.setVector(vPointer);

                return;
            }

            let pullToParent: Vector2D = this.position.getDiff(this.parent.position);
            pullToParent.scale(- Ball.pullForceFactor);
            this.speed.add(pullToParent);


            if (this.childBall) {

                let pullToChild: Vector2D = this.position.getDiff(this.childBall.position);
                pullToChild.scale(- Ball.pullForceFactor);
                this.speed.add(pullToChild);
            }


            this.speed.add(gravity);

            let friction: Vector2D = new Vector2D(0, 0);
            friction.setVector(this.speed);
            friction.scale(1 / 50);

            this.speed.subtract(friction);

            this.position.add(this.speed);
        }

        public drawBall(): void {
            drawCircle(this.position, this.radius);
        }

        public drawConnection(): void {
            if (this.parent) {
                drawLine(this.position, this.parent.position);
            }
        }

        public calculateAndDraw(_balls: Ball[]): void {

            this.calculatePulls(_balls);
            this.drawBall();
            this.drawConnection();
        }
    }
}
*/ 
//# sourceMappingURL=Ball.js.map