var Portfolio;
(function (Portfolio_1) {
    var Vector2D = Vector.Vector2D;
    let crc2;
    //window.addEventListener("load", init);
    document.querySelector("#header_wrap").addEventListener("mousemove", trackMouseMove);
    document.querySelector("#header_wrap").addEventListener('mouseover', trackMouseMove);
    document.querySelector("#header_wrap").addEventListener('mouseenter', trackMouseMove);
    // Initial position
    //let position = 0;
    Portfolio_1.gravity = new Vector2D(0, -2);
    let lineWidth = 6;
    let lineColor = "#495057";
    let ballColor = lineColor;
    let pointerRadius = 3;
    Portfolio_1.vPointer = new Vector2D(0, 0);
    let lastPressedKey = "";
    let balls = [];
    try {
        init(null);
    }
    catch (error) {
        console.warn("HeaderRubberBand tries to call init before load: ", error);
    }
    function init(_event) {
        crc2 = Portfolio_1.canvas.getContext("2d");
        Portfolio_1.vPointer = new Vector2D(Portfolio_1.canvas.width / 2, 0);
        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);
        generateChain(4);
        animate();
    }
    function setCanvasSize() {
        Portfolio_1.canvas.width = window.innerWidth;
        Portfolio_1.canvas.height = window.innerHeight;
        Portfolio_1.canvas.getContext("2d").scale(window.innerWidth / Portfolio_1.canvas.width, window.innerHeight / Portfolio_1.canvas.height);
    }
    function trackMouseMove(_event) {
        const canvasRect = Portfolio_1.canvas.getBoundingClientRect();
        let xPointer = (_event.clientX - canvasRect.left) * (Portfolio_1.canvas.width / canvasRect.width);
        let yPointer = (_event.clientY - canvasRect.top) * (Portfolio_1.canvas.height / canvasRect.height);
        Portfolio_1.vPointer = new Vector2D(xPointer, yPointer);
    }
    function onKeyDown(_event) {
        lastPressedKey = _event.key;
    }
    window.addEventListener('keydown', onKeyDown);
    function generateChain(_num) {
        let previousBall = new Portfolio_1.Ball(Portfolio_1.vPointer, null, true, pointerRadius);
        balls.push(previousBall);
        for (let i = 1; i < _num; i++) {
            let newBall = previousBall.createLinkedBall();
            balls.push(newBall);
            previousBall = newBall;
        }
    }
    function animate() {
        drawBackground(-Portfolio_1.canvas.width, -Portfolio_1.canvas.height, Portfolio_1.canvas.width * 2, Portfolio_1.canvas.height * 2);
        calculateAndDrawBalls();
        requestAnimationFrame(animate);
    }
    function calculateAndDrawBalls() {
        for (let ball of balls) {
            ball.calculateAndDraw(balls);
        }
    }
    function drawBackground(_x, _y, _w, _h) {
        crc2.beginPath();
        crc2.strokeStyle = 'hsl(210, 10.80%, 14.50%)';
        crc2.fillStyle = 'hsl(210, 10.80%, 14.50%)';
        crc2.rect(_x, _y, _w, _h);
        crc2.stroke();
        crc2.fill();
    }
    function drawLine(_from, _to) {
        crc2.beginPath();
        crc2.strokeStyle = lineColor;
        crc2.lineWidth = lineWidth;
        crc2.moveTo(_from.x, _from.y);
        crc2.lineTo(_to.x, _to.y);
        crc2.stroke();
    }
    Portfolio_1.drawLine = drawLine;
    function drawCircle(_pos, _radius) {
        crc2.beginPath();
        crc2.strokeStyle = ballColor;
        crc2.fillStyle = ballColor;
        crc2.arc(_pos.x, _pos.y, _radius, 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();
        crc2.fill();
    }
    Portfolio_1.drawCircle = drawCircle;
    let Portfolio;
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
                    this.position.setVector(Portfolio_1.vPointer);
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
                this.speed.add(Portfolio_1.gravity);
                let friction = new Vector2D(0, 0);
                friction.setVector(this.speed);
                friction.scale(1 / 50);
                this.speed.subtract(friction);
                this.position.add(this.speed);
            }
            drawBall() {
                drawCircle(this.position, this.radius);
            }
            drawConnection() {
                if (this.parent) {
                    drawLine(this.position, this.parent.position);
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
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=HeaderRubberBand.js.map