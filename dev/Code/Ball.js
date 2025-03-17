var Portfolio;
(function (Portfolio) {
    var Vector2D = Vector.Vector2D;
    class Ball {
        constructor(_position, _parent, _isKinematic, _radius) {
            this.speed = new Vector2D(0, 0);
            this.pull = new Vector2D(0, 0);
            this.friction = new Vector2D(0, 0);
            this.position = _position;
            this.radius = _radius || Ball.defaultRadius;
        }
        createLinkedBall() {
            let newBallPosition = new Vector2D(this.position.x, this.position.y + this.radius * 2);
            return new Ball(newBallPosition, this, false, this.radius);
        }
        moveBall(_balls) {
            for (let i = 0; i < _balls.length; i++) {
                let ball = _balls[i];
                ball.pull = ball.position.getDiff(Portfolio.vPointer);
                ball.pull.scale(-Ball.pullForceFactor);
                ball.speed.add(Portfolio.gravity);
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
        drawBall() {
            Portfolio.drawCircle(this.position, this.radius);
        }
        drawConnection() {
            if (this.parentBall) {
                Portfolio.drawLine(this.position, this.parentBall.position);
            }
        }
        calculateAndDraw(_balls) {
            this.moveBall(_balls);
            this.drawBall();
            this.drawConnection();
        }
    }
    Ball.defaultRadius = 15;
    Ball.pullForceFactor = 1 / 50;
    Portfolio.Ball = Ball;
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=Ball.js.map