var Portfolio;
(function (Portfolio) {
    var Vector2D = Vector.Vector2D;
    let crc2;
    //window.addEventListener("load", init);
    document.querySelector("#header_wrap").addEventListener("mousemove", trackMouseMove);
    document.querySelector("#header_wrap").addEventListener('mouseover', trackMouseMove);
    document.querySelector("#header_wrap").addEventListener('mouseenter', trackMouseMove);
    // Initial position
    //let position = 0;
    Portfolio.gravity = new Vector2D(0, -2);
    let lineWidth = 6;
    let lineColor = "#495057";
    let ballColor = lineColor;
    let pointerRadius = 3;
    Portfolio.vPointer = new Vector2D(0, 0);
    let lastPressedKey = "";
    let balls = [];
    try {
        init(null);
    }
    catch (error) {
        console.warn("HeaderRubberBand tries to call init before load: ", error);
    }
    function init(_event) {
        crc2 = Portfolio.canvas.getContext("2d");
        Portfolio.vPointer = new Vector2D(Portfolio.canvas.width / 2, 0);
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
        let xPointer = (_event.clientX - canvasRect.left) * (Portfolio.canvas.width / canvasRect.width);
        let yPointer = (_event.clientY - canvasRect.top) * (Portfolio.canvas.height / canvasRect.height);
        Portfolio.vPointer = new Vector2D(xPointer, yPointer);
    }
    function onKeyDown(_event) {
        lastPressedKey = _event.key;
    }
    window.addEventListener('keydown', onKeyDown);
    function generateChain(_num) {
        let previousBall = new Portfolio.Ball(Portfolio.vPointer, null, true, pointerRadius);
        balls.push(previousBall);
        for (let i = 1; i < _num; i++) {
            let newBall = previousBall.createLinkedBall();
            balls.push(newBall);
            previousBall = newBall;
        }
    }
    function animate() {
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