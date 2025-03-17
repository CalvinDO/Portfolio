var Portfolio;
(function (Portfolio) {
    var Vector2D = Vector.Vector2D;
    class Ball {
        constructor(_position, _parent, _isKinematic, _radius) {
            this.speed = new Vector2D(0, 0);
            this.position = _position;
            this.parent = _parent;
            if (this.parent) {
                this.parent.childBall = this;
            }
            this.radius = _radius || Ball.defaultRadius;
        }
        createLinkedBall() {
            let newBallPosition = new Vector2D(this.position.x, this.position.y + this.radius * 2);
            return new Ball(newBallPosition, this, false, this.radius);
        }
        calculatePulls(_balls) {
            if (this.isKinematic || !this.parent) {
                this.position.setVector(Portfolio.vPointer);
                return;
            }
            let pullToParent = this.position.getDiff(this.parent.position);
            pullToParent.scale(-Ball.pullForceFactor);
            this.speed.add(pullToParent);
            if (this.childBall) {
                let pullToChild = this.position.getDiff(this.childBall.position);
                pullToChild.scale(-Ball.pullForceFactor);
                this.speed.add(pullToChild);
            }
            this.speed.add(Portfolio.gravity);
            let friction = new Vector2D(0, 0);
            friction.setVector(this.speed);
            friction.scale(1 / 50);
            this.speed.subtract(friction);
            this.position.add(this.speed);
        }
        drawBall() {
            Portfolio.drawCircle(this.position, this.radius);
        }
        drawConnection() {
            if (this.parent) {
                Portfolio.drawLine(this.position, this.parent.position);
            }
        }
        calculateAndDraw(_balls) {
            this.calculatePulls(_balls);
            this.drawBall();
            this.drawConnection();
        }
    }
    Ball.defaultRadius = 15;
    Ball.pullForceFactor = 1 / 50;
    Portfolio.Ball = Ball;
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=Ball.js.map