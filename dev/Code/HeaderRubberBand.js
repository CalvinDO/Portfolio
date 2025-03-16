var Portfolio;
(function (Portfolio) {
    var Vector2D = Vector.Vector2D;
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
    let ballColor = "#495057";
    let lineColor = ballColor;
    let lineWidth = 6.5;
    let ballRadius = 14.5;
    let pointerRadius = 3;
    let pullForceFactor = 1 / 50;
    // Set the initial canvas size based on window dimensions
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
        // Adjust canvas size on window resize
        window.addEventListener("resize", setCanvasSize);
        //canvas = document.querySelector("canvas");
        //crc2.translate(canvas.width / 2, canvas.height / 2);
        console.log("init executed. Animate");
        animate();
    }
    function setCanvasSize() {
        Portfolio.canvas.width = window.innerWidth;
        Portfolio.canvas.height = window.innerHeight;
        // Adjust the scale factor for canvas context to avoid pixelation or stretching
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
    function drawBackground(_x, _y, _w, _h) {
        crc2.beginPath();
        crc2.strokeStyle = 'hsl(210, 10.80%, 14.50%)';
        crc2.fillStyle = 'hsl(210, 10.80%, 14.50%)';
        crc2.rect(_x, _y, _w, _h);
        crc2.stroke();
        crc2.fill();
    }
    function drawBall() {
        drawCircle(vBall, ballRadius);
    }
    function drawBall2() {
        drawCircle(vBall2, ballRadius);
    }
    function drawPointer() {
        drawCircle(vPointer, pointerRadius);
    }
    function drawPull() {
        drawLine(vBall, vPointer);
    }
    function drawPull2() {
        drawLine(vBall2, vBall);
    }
    function moveBall() {
        vPull = vBall.getDiff(vPointer);
        vPull.x *= -pullForceFactor;
        vPull.y *= -pullForceFactor;
        vPull2 = vBall2.getDiff(vBall);
        vPull2.x *= -pullForceFactor;
        vPull2.y *= -pullForceFactor;
        vPull3.x = -vPull2.x;
        vPull3.y = -vPull2.y;
        vSpeed.add(vGravity);
        vSpeed.add(vPull);
        vSpeed.add(vPull3);
        vSpeed2.add(vGravity2);
        vSpeed2.add(vPull2);
        vFriction.x = vSpeed.x / 50;
        vFriction.y = vSpeed.y / 50;
        vFriction2.x = vSpeed2.x / 50;
        vFriction2.y = vSpeed2.y / 50;
        vSpeed.subtract(vFriction);
        vSpeed2.subtract(vFriction2);
        vBall.add(vSpeed);
        vBall2.add(vSpeed2);
    }
    function animate() {
        drawBackground(-Portfolio.canvas.width, -Portfolio.canvas.height, Portfolio.canvas.width * 2, Portfolio.canvas.height * 2);
        drawPointer();
        moveBall();
        drawBall();
        drawBall2();
        drawPull();
        drawPull2();
        requestAnimationFrame(animate);
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