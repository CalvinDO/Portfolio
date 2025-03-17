namespace Portfolio {

    import Vector2D = Vector.Vector2D;

    export class Ball {

        private static defaultRadius: number = 15;
        private static pullForceFactor: number = 1 / 50;

        private position: Vector2D;
        private speed: Vector2D = new Vector2D(0, 0);
        private pull: Vector2D = new Vector2D(0, 0);
        private friction: Vector2D = new Vector2D(0, 0);

        private radius: number;

        private parentBall: Ball;

        private isKinematic: boolean;


        constructor(_position: Vector2D, _parent?: Ball, _isKinematic?: boolean, _radius?: number) {

            this.position = _position;
            this.radius = _radius || Ball.defaultRadius;
        }

        public createLinkedBall(): Ball {

            let newBallPosition = new Vector2D(this.position.x, this.position.y + this.radius * 2);
            return new Ball(newBallPosition, this, false, this.radius);
        }

        public moveBall(_balls: Ball[]): void {

            for (let i = 0; i < _balls.length; i++) {

                let ball = _balls[i];

                ball.pull = ball.position.getDiff(vPointer);
                ball.pull.scale(- Ball.pullForceFactor);

                ball.speed.add(gravity);

                ball.speed.add(ball.pull);

                if (i > 0) {

                    let prevBall = _balls[i - 1];
                    let ballToPrevBall = ball.position.getDiff(prevBall.position);
                    ballToPrevBall.x *= -Ball.pullForceFactor;
                    ballToPrevBall.y *= -Ball.pullForceFactor;
                    ball.speed.add(ballToPrevBall);
                }

                ball.friction.x = ball.speed.x / 50;
                ball.friction.y = ball.speed.y / 50;

                ball.speed.subtract(ball.friction);

                ball.position.add(ball.speed);
            }
        }

        public drawBall(): void {
            drawCircle(this.position, this.radius);
        }

        public drawConnection(): void {
            if (this.parentBall) {
                drawLine(this.position, this.parentBall.position);
            }
        }

        public calculateAndDraw(_balls: Ball[]): void {

            this.moveBall(_balls);
            this.drawBall();
            this.drawConnection();
        }
    }
}