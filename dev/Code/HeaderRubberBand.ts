namespace Portfolio {

    import Vector2D = Vector.Vector2D;

    let crc2: CanvasRenderingContext2D;

    const timeSliceInMS: number = 1;

    // Initial position
    //let position = 0;
    let gravity = 2;


    //window.addEventListener("load", init);
    document.querySelector("#header_wrap").addEventListener("mousemove", trackMouseMove);
    document.querySelector("#header_wrap").addEventListener('mouseover', trackMouseMove);
    document.querySelector("#header_wrap").addEventListener('mouseenter', trackMouseMove);

    let vPull: Vector2D = new Vector2D(0, 0);
    let vPull2: Vector2D = new Vector2D(0, 0);
    let vPull3: Vector2D = new Vector2D(0, 0);

    let vSpeed: Vector2D = new Vector2D(0, 0);
    let vSpeed2: Vector2D = new Vector2D(0, 0);
    //let vResult: Vector2D = new Vector2D(0, 0);
    let vBall: Vector2D = new Vector2D(0, 0);
    let vBall2: Vector2D = new Vector2D(0, 0);

    let vPointer: Vector2D = new Vector2D(0, 0);

    let vGravity: Vector2D = new Vector2D(0, gravity);
    let vGravity2: Vector2D = new Vector2D(0, gravity);
    let vFriction: Vector2D = new Vector2D(0, 0);
    let vFriction2: Vector2D = new Vector2D(0, 0);

    let xMouse: number = 0;
    let yMouse: number = 0;

    let i: number = 0;

    let lastPressedKey: string = "";

    let ballColor: string = "#495057";
    let lineColor: string = ballColor;

    let lineWidth: number = 6.5;
    let ballRadius: number = 14.5;
    let pointerRadius: number = 3;

    let pullForceFactor: number = 1 / 50;
    // Set the initial canvas size based on window dimensions

    try {
        init(null);
    } catch (error) {
        console.warn("HeaderRubberBand tries to call init before load: ", error);
    }

    function init(_event: Event): void {

        crc2 = canvas.getContext("2d");

        //xMouse = canvas.width / 2;
        //yMouse = canvas.height / 2;

        setCanvasSize();

        // Adjust canvas size on window resize
        window.addEventListener("resize", setCanvasSize);

        //canvas = document.querySelector("canvas");
        //crc2.translate(canvas.width / 2, canvas.height / 2);



        console.log("init executed. Animate");
        animate();
    }

    function setCanvasSize() {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Adjust the scale factor for canvas context to avoid pixelation or stretching
        canvas.getContext("2d").scale(window.innerWidth / canvas.width, window.innerHeight / canvas.height);
    }

    function trackMouseMove(_event: MouseEvent): void {

        const canvasRect = canvas.getBoundingClientRect();

        xMouse = (_event.clientX - canvasRect.left) * (canvas.width / canvasRect.width);
        yMouse = (_event.clientY - canvasRect.top) * (canvas.height / canvasRect.height);

        vPointer.x = xMouse;
        vPointer.y = yMouse;
    }

    function onKeyDown(_event: KeyboardEvent): void {
        lastPressedKey = _event.key;
    }

    window.addEventListener('keydown', onKeyDown);


    function drawBackground(_x: number, _y: number, _w: number, _h: number) {

        crc2.beginPath();
        crc2.strokeStyle = 'hsl(210, 10.80%, 14.50%)';
        crc2.fillStyle = 'hsl(210, 10.80%, 14.50%)';
        crc2.rect(_x, _y, _w, _h)
        crc2.stroke();
        crc2.fill()
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


    function drawPull(): void {

        drawLine(vBall, vPointer);
    }


    function drawPull2(): void {

        drawLine(vBall2, vBall);
    }


    function moveBall() {

        vPull = vBall.getDiff(vPointer);
        vPull.x *= - pullForceFactor;
        vPull.y *= -pullForceFactor;

        vPull2 = vBall2.getDiff(vBall);
        vPull2.x *= -pullForceFactor;
        vPull2.y *= -pullForceFactor;

        vPull3.x = - vPull2.x;
        vPull3.y = - vPull2.y;

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

        drawBackground(-canvas.width, -canvas.height, canvas.width * 2, canvas.height * 2);

        drawPointer();

        moveBall();

        drawBall();
        drawBall2();

        drawPull();
        drawPull2();


        requestAnimationFrame(animate);
    }


    function drawLine(_from: Vector.Vector2D, _to: Vector.Vector2D) {

        crc2.beginPath();
        crc2.strokeStyle = lineColor;
        crc2.lineWidth = lineWidth;
        crc2.moveTo(_from.x, _from.y);
        crc2.lineTo(_to.x, _to.y);
        crc2.stroke();
    }


    function drawCircle(_pos: Vector.Vector2D, _radius: number) {

        crc2.beginPath();
        crc2.strokeStyle = ballColor;
        crc2.fillStyle = ballColor;
        crc2.arc(_pos.x, _pos.y, _radius, 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();
        crc2.fill();
    }

}