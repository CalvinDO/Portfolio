namespace Portfolio {

    import Vector2D = Vector.Vector2D;


    let crc2: CanvasRenderingContext2D;

    const timeSliceInMS: number = 1;


    //window.addEventListener("load", init);
    document.querySelector("#header_wrap").addEventListener("mousemove", trackMouseMove);
    document.querySelector("#header_wrap").addEventListener('mouseover', trackMouseMove);
    document.querySelector("#header_wrap").addEventListener('mouseenter', trackMouseMove);


    // Initial position
    //let position = 0;
    export let gravity: Vector2D = new Vector2D(0, -2);

    let lineWidth: number = 6;
    let lineColor: string = "#495057";
    let ballColor: string = lineColor;

    let pointerRadius: number = 3;

    export let vPointer: Vector2D = new Vector2D(0, 0);

    let lastPressedKey: string = "";



    let balls: Ball[] = [];

    try {
        init(null);
    } catch (error) {
        console.warn("HeaderRubberBand tries to call init before load: ", error);
    }

    function init(_event: Event): void {
        crc2 = canvas.getContext("2d");

        vPointer = new Vector2D(canvas.width / 2, 0);

        setCanvasSize();

        window.addEventListener("resize", setCanvasSize);

        generateChain(4);

        animate();
    }

    function setCanvasSize(): void {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        canvas.getContext("2d").scale(window.innerWidth / canvas.width, window.innerHeight / canvas.height);
    }

    function trackMouseMove(_event: MouseEvent): void {

        const canvasRect = canvas.getBoundingClientRect();

        let xPointer: number = (_event.clientX - canvasRect.left) * (canvas.width / canvasRect.width);
        let yPointer: number = (_event.clientY - canvasRect.top) * (canvas.height / canvasRect.height);

        vPointer = new Vector2D(xPointer, yPointer);
    }

    function onKeyDown(_event: KeyboardEvent): void {
        lastPressedKey = _event.key;
    }

    window.addEventListener('keydown', onKeyDown);

    function generateChain(_num: number): void {

        let previousBall: Ball = new Ball(vPointer, null, true, pointerRadius);
        balls.push(previousBall);

        for (let i = 1; i < _num; i++) {
            let newBall = previousBall.createLinkedBall();
            balls.push(newBall);
            previousBall = newBall;
        }
    }

    function animate(): void {

        drawBackground(-canvas.width, -canvas.height, canvas.width * 2, canvas.height * 2);


        calculateAndDrawBalls();

        requestAnimationFrame(animate);
    }

    function calculateAndDrawBalls() {

        for (let ball of balls) {
            ball.calculateAndDraw(balls);
        }
    }

    function drawBackground(_x: number, _y: number, _w: number, _h: number): void {
        crc2.beginPath();
        crc2.strokeStyle = 'hsl(210, 10.80%, 14.50%)';
        crc2.fillStyle = 'hsl(210, 10.80%, 14.50%)';
        crc2.rect(_x, _y, _w, _h)
        crc2.stroke();
        crc2.fill()
    }

    export function drawLine(_from: Vector2D, _to: Vector2D): void {

        crc2.beginPath();
        crc2.strokeStyle = lineColor;
        crc2.lineWidth = lineWidth;
        crc2.moveTo(_from.x, _from.y);
        crc2.lineTo(_to.x, _to.y);
        crc2.stroke();
    }

    export function drawCircle(_pos: Vector2D, _radius: number): void {

        crc2.beginPath();
        crc2.strokeStyle = ballColor;
        crc2.fillStyle = ballColor;
        crc2.arc(_pos.x, _pos.y, _radius, 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();
        crc2.fill();
    }

}