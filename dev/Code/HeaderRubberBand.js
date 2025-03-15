var Portfolio;
(function (Portfolio) {
    let crc2;
    const timeSliceInMS = 1;
    // Initial position
    let position = 0;
    let gravity = 2;
    let gravity2 = 2;
    var Vector2D = Vector.Vector2D;
    //window.addEventListener("load", init);
    document.querySelector("#header_wrap").addEventListener("mousemove", trackMouseMove);
    document.querySelector("#header_wrap").addEventListener('mo', trackMouseMove);
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
    let ballColor = "#6C757D";
    let lineColor = ballColor;
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
        yMouse = Portfolio.canvas.height / 2;
        setCanvasSize();
        // Adjust canvas size on window resize
        window.addEventListener("resize", setCanvasSize);
        //canvas = document.querySelector("canvas");
        //crc2.translate(canvas.width / 2, canvas.height / 2);
        console.log("init executed. Animate");
        animate();
    }
    function setCanvasSize() {
        // Set canvas width and height to the current window size
        Portfolio.canvas.width = window.innerWidth;
        Portfolio.canvas.height = window.innerHeight;
        // Adjust the scale factor for canvas context to avoid pixelation or stretching
        Portfolio.canvas.getContext("2d").scale(window.innerWidth / Portfolio.canvas.width, window.innerHeight / Portfolio.canvas.height);
    }
    function trackMouseMove(_event) {
        // Adjust for scaling and translation
        /*
            switch (lastPressedKey) {
                case "p":
                    xMouse = (_event.pageX - canvas.width / 2) * (canvas.width / window.innerWidth);
                    yMouse = (_event.pageY - canvas.height / 2) * (canvas.height / window.innerHeight);
                    break;
                case "l":
                    xMouse = (_event.layerX - canvas.width / 2) * (canvas.width / window.innerWidth);
                    yMouse = (_event.layerY - canvas.height / 2) * (canvas.height / window.innerHeight);
                case "o":
                    xMouse = (_event.offsetX - canvas.width / 2) * (canvas.width / window.innerWidth);
                    yMouse = (_event.offsetY - canvas.height / 2) * (canvas.height / window.innerHeight);
                case "s":
                    xMouse = (_event.screenX - canvas.width / 2) * (canvas.width / window.innerWidth);
                    yMouse = (_event.screenY - canvas.height / 2) * (canvas.height / window.innerHeight);
                case "m":
                    xMouse = (_event.movementX - canvas.width / 2) * (canvas.width / window.innerWidth);
                    yMouse = (_event.movementY - canvas.height / 2) * (canvas.height / window.innerHeight);
                case "r":
                    xMouse = (_event.x - canvas.width / 2) * (canvas.width / window.innerWidth);
                    yMouse = (_event.y - canvas.height / 2) * (canvas.height / window.innerHeight);
                case "":
                    
                case "c":
                default:
                }
        */
        xMouse = _event.clientX; /*(_event.clientX - canvas.width / 2) * (canvas.width / window.innerWidth);*/
        yMouse = _event.clientY; /*(_event.clientY - canvas.height / 2) * (canvas.height / window.innerHeight);*/
        vPointer.x = xMouse;
        vPointer.y = yMouse;
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
    function drawBall(_radius) {
        crc2.beginPath();
        crc2.strokeStyle = ballColor;
        crc2.fillStyle = ballColor;
        crc2.arc(vBall.x, vBall.y, _radius, 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();
        crc2.fill();
    }
    function drawBall2(_radius) {
        crc2.beginPath();
        crc2.strokeStyle = ballColor;
        crc2.fillStyle = ballColor;
        crc2.arc(vBall2.x, vBall2.y, _radius, 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();
        crc2.fill();
    }
    function drawPointer(_radius) {
        crc2.beginPath();
        crc2.strokeStyle = ballColor;
        crc2.fillStyle = ballColor;
        crc2.arc(xMouse, yMouse, _radius, 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();
        crc2.fill();
    }
    function moveBall() {
        vPull = vBall.getDiff(vPointer);
        vPull.x *= -1 / 50;
        vPull.y *= -1 / 50;
        vPull2 = vBall2.getDiff(vBall);
        vPull2.x *= -1 / 50;
        vPull2.y *= -1 / 50;
        vPull3.x = vPull2.x / -1;
        vPull3.y = vPull2.y / -1;
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
        //console.log(vPointer, vPull, vSpeed, vBall, vFriction);
    }
    function drawPull(_width) {
        crc2.beginPath();
        crc2.strokeStyle = lineColor;
        crc2.lineWidth = _width;
        crc2.moveTo(vBall.x, vBall.y);
        crc2.lineTo(vPointer.x, vPointer.y);
        crc2.stroke();
    }
    function drawPull2(_width) {
        crc2.beginPath();
        crc2.strokeStyle = lineColor;
        crc2.lineWidth = _width;
        crc2.moveTo(vBall2.x, vBall2.y);
        crc2.lineTo(vBall.x, vBall.y);
        crc2.stroke();
    }
    function animate() {
        drawBackground(-Portfolio.canvas.width, -Portfolio.canvas.height, Portfolio.canvas.width * 2, Portfolio.canvas.height * 2);
        drawPointer(7);
        moveBall();
        drawBall(20);
        drawBall2(20);
        drawPull(4);
        drawPull2(3);
        requestAnimationFrame(animate);
    }
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=HeaderRubberBand.js.map