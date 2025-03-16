var Portfolio;
(function (Portfolio) {
    var Vector2D = Vector.Vector2D;
    class Ball {
        constructor(_position, _color, _lineColor, _radius) {
            this.speed = new Vector2D(0, 0);
            this.pull = new Vector2D(0, 0);
            this.gravity = new Vector2D(0, gravity);
            this.friction = new Vector2D(0, 0);
            this.radius = ballRadius;
            this.color = ballColor;
            this.lineColor = lineColor;
            this.position = _position;
            this.color = _color;
            this.lineColor = _lineColor;
            this.radius = _radius;
        }
        createLinkedBall() {
            let newBallPosition = new Vector2D(this.position.x, this.position.y + this.radius * 2);
            return new Ball(newBallPosition, this.color, this.lineColor, this.radius);
        }
        moveBall(_pointer, _balls) {
            for (let i = 0; i < _balls.length; i++) {
                let ball = _balls[i];
                // Apply gravity and pull forces to each ball in the chain
                ball.pull = ball.position.getDiff(_pointer);
                ball.pull.x *= -pullForceFactor;
                ball.pull.y *= -pullForceFactor;
                ball.speed.add(ball.gravity);
                ball.speed.add(ball.pull);
                if (i > 0) {
                    let prevBall = _balls[i - 1];
                    let ballToPrevBall = ball.position.getDiff(prevBall.position);
                    ballToPrevBall.x *= -pullForceFactor;
                    ballToPrevBall.y *= -pullForceFactor;
                    ball.speed.add(ballToPrevBall);
                }
                ball.friction.x = ball.speed.x / 50;
                ball.friction.y = ball.speed.y / 50;
                ball.speed.subtract(ball.friction);
                ball.position.add(ball.speed);
            }
        }
        drawBall() {
            drawCircle(this.position, this.radius);
        }
        drawPull() {
            if (this.position !== vPointer) {
                drawLine(this.position, vPointer);
            }
        }
    }
    Portfolio.Ball = Ball;
    let crc2;
    const timeSliceInMS = 1;
    // Initial position
    //let position = 0;
    let gravity = 2;
    //window.addEventListener("load", init);
    document.querySelector("#header_wrap").addEventListener("mousemove", trackMouseMove);
    document.querySelector("#header_wrap").addEventListener('mouseover', trackMouseMove);
    document.querySelector("#header_wrap").addEventListener('mouseenter', trackMouseMove);
    let vPull = new Vector2D(0, 0);
    let vPull2 = new Vector2D(0, 0);
    let vPull3 = new Vector2D(0, 0);
    let vSpeed = new Vector2D(0, 0);
    let vSpeed2 = new Vector2D(0, 0);
    //let vResult: Vector2D = new Vector2D(0, 0);
    let vBall = new Vector2D(0, 0);
    let vBall2 = new Vector2D(0, 0);
    let vPointer = new Vector2D(0, 0);
    let vGravity = new Vector2D(0, gravity);
    let vGravity2 = new Vector2D(0, gravity);
    let vFriction = new Vector2D(0, 0);
    let vFriction2 = new Vector2D(0, 0);
    let xMouse = 0;
    let yMouse = 0;
    let i = 0;
    let lastPressedKey = "";
    let ballRadius = 15;
    let ballColor = "#495057";
    let lineColor = ballColor;
    let lineWidth = 6;
    let pointerRadius = 3;
    let pullForceFactor = 1 / 50;
    let balls = [];
    try {
        init(null);
    }
    catch (error) {
        console.warn("HeaderRubberBand tries to call init before load: ", error);
    }
    function init(_event) {
        crc2 = Portfolio.canvas.getContext("2d");
        xMouse = Portfolio.canvas.width / 2;
        yMouse = 0;
        vPointer = new Vector2D(xMouse, yMouse);
        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);
        generateChain(4);
        animate();
    }
    function setCanvasSize() {
        Portfolio.canvas.width = window.innerWidth;
        Portfolio.canvas.height = window.innerHeight;
        Portfolio.canvas.getContext("2d").scale(window.innerWidth / Portfolio.canvas.width, window.innerHeight / Portfolio.canvas.height);
    }
    function trackMouseMove(_event) {
        const canvasRect = Portfolio.canvas.getBoundingClientRect();
        xMouse = (_event.clientX - canvasRect.left) * (Portfolio.canvas.width / canvasRect.width);
        yMouse = (_event.clientY - canvasRect.top) * (Portfolio.canvas.height / canvasRect.height);
        vPointer = new Vector2D(xMouse, yMouse);
    }
    function onKeyDown(_event) {
        lastPressedKey = _event.key;
    }
    window.addEventListener('keydown', onKeyDown);
    function generateChain(_num) {
        let previousBall = new Ball(vPointer, ballColor, lineColor, ballRadius);
        balls.push(previousBall);
        for (let i = 1; i < _num; i++) {
            let newBall = previousBall.createLinkedBall();
            balls.push(newBall);
            previousBall = newBall;
        }
    }
    function animate() {
        drawBackground(-Portfolio.canvas.width, -Portfolio.canvas.height, Portfolio.canvas.width * 2, Portfolio.canvas.height * 2);
        drawPointer();
        for (let ball of balls) {
            ball.moveBall(vPointer, balls);
            ball.drawBall();
            ball.drawPull();
        }
        requestAnimationFrame(animate);
    }
    function drawBackground(_x, _y, _w, _h) {
        crc2.beginPath();
        crc2.strokeStyle = 'hsl(210, 10.80%, 14.50%)';
        crc2.fillStyle = 'hsl(210, 10.80%, 14.50%)';
        crc2.rect(_x, _y, _w, _h);
        crc2.stroke();
        crc2.fill();
    }
    function drawPointer() {
        drawCircle(vPointer, pointerRadius);
    }
    function drawLine(_from, _to) {
        crc2.beginPath();
        crc2.strokeStyle = lineColor;
        crc2.lineWidth = lineWidth;
        crc2.moveTo(_from.x, _from.y);
        crc2.lineTo(_to.x, _to.y);
        crc2.stroke();
    }
    function drawCircle(_pos, _radius) {
        crc2.beginPath();
        crc2.strokeStyle = ballColor;
        crc2.fillStyle = ballColor;
        crc2.arc(_pos.x, _pos.y, _radius, 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();
        crc2.fill();
    }
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=HeaderRubberBand.js.map