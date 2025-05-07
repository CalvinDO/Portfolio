var CalvinFraktal;
(function (CalvinFraktal) {
    var V2 = Vector.Vector2D;
    class Ball {
        constructor(_x, _y, _radius, _level, _colorAngle) {
            this.position = new V2(0, 0);
            this.speed = new V2(0, 0);
            this.color = "";
            this.position.setXY(_x, _y);
            this.radius = _radius;
            this.level = _level;
            this.colorAngle = _colorAngle;
            this.color = "HSLA(" + this.colorAngle + ",100%,50%, 0.6)";
        }
        draw() {
            CalvinFraktal.crc2.beginPath();
            CalvinFraktal.crc2.fillStyle = this.color;
            CalvinFraktal.crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, null);
            CalvinFraktal.crc2.fill();
        }
        createChildren(_nChildren) {
            this.level += 1;
            this.colorAngle += CalvinFraktal.gradientFactor;
            this.gradColorAngle = this.colorAngle;
            for (let i = 0; i < _nChildren; i++) {
                this.gradColorAngle += CalvinFraktal.internGradientFactor;
                let angle = (((Math.PI / 32) * CalvinFraktal.rotationAngle) + (i * 1 / _nChildren * 2 * Math.PI)) * CalvinFraktal.currentSpread;
                let x = this.position.x + this.radius * Math.sin(angle);
                let y = this.position.y + this.radius * Math.cos(angle);
                let ball = new Ball(x, y, this.radius / CalvinFraktal.sizeFactor, this.level, this.gradColorAngle);
                ball.draw();
                if (this.level < CalvinFraktal.maxRecursionLevel) {
                    ball.createChildren(_nChildren);
                }
            }
        }
    }
    CalvinFraktal.Ball = Ball;
})(CalvinFraktal || (CalvinFraktal = {}));
//# sourceMappingURL=Ball.js.map