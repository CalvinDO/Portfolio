namespace Portfolio {

    import Vector2D = Vector.Vector2D;

    export class Ball {

        private static defaultRadius: number = 15;
        private static pullForceFactor: number = 1;
        private static frictionConstant: number = this.pullForceFactor * 1.618;

        private position: Vector2D;
        private speed: Vector2D = new Vector2D(0, 0);

        private radius: number;

        private parent: Ball;
        private childBall: Ball;

        private isKinematic: boolean;


        constructor(_position: Vector2D, _parent?: Ball, _isKinematic?: boolean, _radius?: number) {

            this.position = _position;
            this.parent = _parent;

            if (this.parent) {
                this.parent.childBall = this;
            }

            this.radius = _radius || Ball.defaultRadius;

        }

        public createLinkedBall(): Ball {

            let newBallPosition = new Vector2D(this.position.x, this.position.y + this.radius * 2);
            return new Ball(newBallPosition, this, false, Ball.defaultRadius);
        }

        public calculate(_balls: Ball[]): void {

            if (this.isKinematic || !this.parent) {

                this.position.setVector(vPointer);

                return;
            }

            let pullToParent: Vector2D = this.position.getDiff(this.parent.position);
            pullToParent.scale(- Ball.pullForceFactor * deltaTime);

            this.speed.add(pullToParent);


            if (this.childBall) {

                let pullToChild: Vector2D = this.position.getDiff(this.childBall.position);
                pullToChild.scale(- Ball.pullForceFactor * deltaTime);
                this.speed.add(pullToChild);
            }

            let scaledGravity: Vector2D = new Vector2D(0, 0);
            scaledGravity.setVector(gravity);
            scaledGravity.scale(deltaTime);
            this.speed.add(scaledGravity);


            let friction: Vector2D = new Vector2D(this.speed.x, this.speed.y);
            friction.scale(Ball.frictionConstant);
            friction.scale(deltaTime);
            this.speed.subtract(friction);


            this.position.add(this.speed);
        }

        public drawBall(): void {
            drawCircle(this.position, this.radius);
        }

        public drawConnection(): void {
            if (this.parent) {
                drawLine(this.position, this.parent.position);
            }
        }

        public calculateAndDraw(_balls: Ball[]): void {

            this.calculate(_balls);
            this.drawBall();
            this.drawConnection();
        }
    }


    let crc2: CanvasRenderingContext2D;


    //window.addEventListener("load", init);
    document.querySelector("#header_wrap").addEventListener("mousemove", trackMouseMove);
    document.querySelector("#header_wrap").addEventListener('mouseover', trackMouseMove);
    document.querySelector("#header_wrap").addEventListener('mouseenter', trackMouseMove);

    document.querySelector("#header_wrap").addEventListener("touchstart", trackTouchMove);
    document.querySelector("#header_wrap").addEventListener("touchmove", trackTouchMove);
    document.querySelector("#header_wrap").addEventListener("touchend", trackTouchMove);
    document.querySelector("#header_wrap").addEventListener("touchcancel", trackTouchMove);

    // Initial position
    //let position = 0;
    export let gravity: Vector2D = new Vector2D(0, 100);

    let lineWidth: number = 6;
    let lineColor: string = "#495057";
    let ballColor: string = lineColor;

    let pointerRadius: number = 3;

    export let vPointer: Vector2D = new Vector2D(0, 0);

    let lastPressedKey: string = "";

    let balls: Ball[] = [];

    let chainLength: number = 3;

    //avarage good frameRate for deltaTime as start;
    export let deltaTime: number = 0.020;
    let timeLastFrame: number = Date.now();

    try {
        initHeaderR(null);
    } catch (error) {
        console.warn("HeaderRubberBand fast call error:", error);
    }


    export function initHeaderR(_event: Event): void {

        if (!canvas) {
            canvas = document.querySelector("canvas");
        }

        crc2 = canvas.getContext("2d");

        vPointer = new Vector2D(canvas.width / 2, 0);

        setCanvasSize();

        window.addEventListener("resize", setCanvasSize);

        generateChain(chainLength);

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

    function trackTouchMove(_event: TouchEvent): void {

        /*
        if (_event.type == 'touchmove') {
            _event.preventDefault();
        }
        */

        const touch = _event.touches[0] || _event.changedTouches[0];

        if (!touch) return;

        const canvasRect = canvas.getBoundingClientRect();


        let xPointer: number = (touch.clientX - canvasRect.left) * (canvas.width / canvasRect.width);
        let yPointer: number = (touch.clientY - canvasRect.top) * (canvas.height / canvasRect.height);


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

        let timeThisFrame: number = Date.now();
        deltaTime = timeThisFrame - timeLastFrame;
        deltaTime /= 1000;
        timeLastFrame = timeThisFrame;

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