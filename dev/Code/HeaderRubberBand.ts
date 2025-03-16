namespace Portfolio {

    import Vector2D = Vector.Vector2D;


    export class Ball {

        position: Vector2D;
        speed: Vector2D = new Vector2D(0, 0);
        pull: Vector2D = new Vector2D(0, 0);
        gravity: Vector2D = new Vector2D(0, gravity);
        friction: Vector2D = new Vector2D(0, 0);
        radius: number = ballRadius;
        color: string = ballColor;
        lineColor: string = lineColor;

        constructor(_position: Vector2D, _color: string, _lineColor: string, _radius: number) {
            this.position = _position;
            this.color = _color;
            this.lineColor = _lineColor;
            this.radius = _radius;
        }

        public createLinkedBall(): Ball {
            let newBallPosition = new Vector2D(this.position.x, this.position.y + this.radius * 2);
            return new Ball(newBallPosition, this.color, this.lineColor, this.radius);
        }

        public moveBall(_pointer: Vector2D, _balls: Ball[]): void {
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

        public drawBall(): void {
            drawCircle(this.position, this.radius);
        }

        public drawPull(): void {
            if (this.position !== vPointer) {
                drawLine(this.position, vPointer);
            }
        }
    }

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


    let ballRadius: number = 15;


    let ballColor: string = "#495057";
    let lineColor: string = ballColor;

    let lineWidth: number = 6;
    let pointerRadius: number = 3;

    let pullForceFactor: number = 1 / 50;

    let balls: Ball[] = [];

    try {
        init(null);
    } catch (error) {
        console.warn("HeaderRubberBand tries to call init before load: ", error);
    }

    function init(_event: Event): void {
        crc2 = canvas.getContext("2d");

        xMouse = canvas.width / 2;
        yMouse = 0;
        vPointer = new Vector2D(xMouse, yMouse);

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

        xMouse = (_event.clientX - canvasRect.left) * (canvas.width / canvasRect.width);
        yMouse = (_event.clientY - canvasRect.top) * (canvas.height / canvasRect.height);

        vPointer = new Vector2D(xMouse, yMouse);
    }

    function onKeyDown(_event: KeyboardEvent): void {
        lastPressedKey = _event.key;
    }

    window.addEventListener('keydown', onKeyDown);

    function generateChain(_num: number): void {
        let previousBall: Ball = new Ball(vPointer, ballColor, lineColor, ballRadius);
        balls.push(previousBall);

        for (let i = 1; i < _num; i++) {
            let newBall = previousBall.createLinkedBall();
            balls.push(newBall);
            previousBall = newBall;
        }
    }

    function animate(): void {
        drawBackground(-canvas.width, -canvas.height, canvas.width * 2, canvas.height * 2);

        drawPointer();

        for (let ball of balls) {
            ball.moveBall(vPointer, balls);
            ball.drawBall();
            ball.drawPull();
        }

        requestAnimationFrame(animate);
    }

    function drawBackground(_x: number, _y: number, _w: number, _h: number): void {
        crc2.beginPath();
        crc2.strokeStyle = 'hsl(210, 10.80%, 14.50%)';
        crc2.fillStyle = 'hsl(210, 10.80%, 14.50%)';
        crc2.rect(_x, _y, _w, _h)
        crc2.stroke();
        crc2.fill()
    }

    function drawPointer(): void {
        drawCircle(vPointer, pointerRadius);
    }

    function drawLine(_from: Vector2D, _to: Vector2D): void {
        crc2.beginPath();
        crc2.strokeStyle = lineColor;
        crc2.lineWidth = lineWidth;
        crc2.moveTo(_from.x, _from.y);
        crc2.lineTo(_to.x, _to.y);
        crc2.stroke();
    }

    function drawCircle(_pos: Vector2D, _radius: number): void {
        crc2.beginPath();
        crc2.strokeStyle = ballColor;
        crc2.fillStyle = ballColor;
        crc2.arc(_pos.x, _pos.y, _radius, 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();
        crc2.fill();
    }

}