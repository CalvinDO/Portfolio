var Portfolio;
(function (Portfolio) {
    var _a;
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
            return new Ball(newBallPosition, this, false, Ball.defaultRadius);
        }
        calculate(_balls) {
            if (this.isKinematic || !this.parent) {
                this.position.setVector(Portfolio.vPointer);
                return;
            }
            let pullToParent = this.position.getDiff(this.parent.position);
            pullToParent.scale(-Ball.pullForceFactor * Portfolio.deltaTime);
            this.speed.add(pullToParent);
            if (this.childBall) {
                let pullToChild = this.position.getDiff(this.childBall.position);
                pullToChild.scale(-Ball.pullForceFactor * Portfolio.deltaTime);
                this.speed.add(pullToChild);
            }
            let scaledGravity = new Vector2D(0, 0);
            scaledGravity.setVector(Portfolio.gravity);
            scaledGravity.scale(Portfolio.deltaTime);
            this.speed.add(scaledGravity);
            let friction = new Vector2D(this.speed.x, this.speed.y);
            friction.scale(Ball.frictionConstant);
            friction.scale(Portfolio.deltaTime);
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
            this.calculate(_balls);
            this.drawBall();
            this.drawConnection();
        }
    }
    _a = Ball;
    Ball.defaultRadius = 15;
    Ball.pullForceFactor = 1;
    Ball.frictionConstant = _a.pullForceFactor * 1.618;
    Portfolio.Ball = Ball;
    let crc2;
    //window.addEventListener("load", init);
    document.querySelector("#header_wrap").addEventListener("mousemove", trackMouseMove);
    document.querySelector("#header_wrap").addEventListener('mouseover', trackMouseMove);
    document.querySelector("#header_wrap").addEventListener('mouseenter', trackMouseMove);
    // Initial position
    //let position = 0;
    Portfolio.gravity = new Vector2D(0, 100);
    let lineWidth = 6;
    let lineColor = "#495057";
    let ballColor = lineColor;
    let pointerRadius = 3;
    Portfolio.vPointer = new Vector2D(0, 0);
    let lastPressedKey = "";
    let balls = [];
    let chainLength = 3;
    //avarage good frameRate for deltaTime as start;
    Portfolio.deltaTime = 0.020;
    let timeLastFrame = Date.now();
    try {
        initHeaderR(null);
    }
    catch (error) {
        console.warn("HeaderRubberBand fast call error:", error);
    }
    function initHeaderR(_event) {
        if (!Portfolio.canvas) {
            Portfolio.canvas = document.querySelector("canvas");
        }
        crc2 = Portfolio.canvas.getContext("2d");
        Portfolio.vPointer = new Vector2D(Portfolio.canvas.width / 2, 0);
        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);
        generateChain(chainLength);
        animate();
    }
    Portfolio.initHeaderR = initHeaderR;
    function setCanvasSize() {
        Portfolio.canvas.width = window.innerWidth;
        Portfolio.canvas.height = window.innerHeight;
        Portfolio.canvas.getContext("2d").scale(window.innerWidth / Portfolio.canvas.width, window.innerHeight / Portfolio.canvas.height);
    }
    function trackMouseMove(_event) {
        const canvasRect = Portfolio.canvas.getBoundingClientRect();
        let xPointer = (_event.clientX - canvasRect.left) * (Portfolio.canvas.width / canvasRect.width);
        let yPointer = (_event.clientY - canvasRect.top) * (Portfolio.canvas.height / canvasRect.height);
        Portfolio.vPointer = new Vector2D(xPointer, yPointer);
    }
    function onKeyDown(_event) {
        lastPressedKey = _event.key;
    }
    window.addEventListener('keydown', onKeyDown);
    function generateChain(_num) {
        let previousBall = new Ball(Portfolio.vPointer, null, true, pointerRadius);
        balls.push(previousBall);
        for (let i = 1; i < _num; i++) {
            let newBall = previousBall.createLinkedBall();
            balls.push(newBall);
            previousBall = newBall;
        }
    }
    function animate() {
        let timeThisFrame = Date.now();
        Portfolio.deltaTime = timeThisFrame - timeLastFrame;
        Portfolio.deltaTime /= 1000;
        timeLastFrame = timeThisFrame;
        drawBackground(-Portfolio.canvas.width, -Portfolio.canvas.height, Portfolio.canvas.width * 2, Portfolio.canvas.height * 2);
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
    Portfolio.drawLine = drawLine;
    function drawCircle(_pos, _radius) {
        crc2.beginPath();
        crc2.strokeStyle = ballColor;
        crc2.fillStyle = ballColor;
        crc2.arc(_pos.x, _pos.y, _radius, 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();
        crc2.fill();
    }
    Portfolio.drawCircle = drawCircle;
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=HeaderRubberBand.js.map