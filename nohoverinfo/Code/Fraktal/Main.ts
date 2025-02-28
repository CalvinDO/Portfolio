namespace CalvinFraktal {
    import V2 = Vector.Vector2D;
    export let crc2: CanvasRenderingContext2D;

    let childrenAmount: number;
    let radius: number;
    export let sizeFactor: number;
    export let gradientFactor: number;
    export let internGradientFactor: number;
    export let maxRecursionLevel: number;
    export let color: number;
    let backgroundColor: string = "";

    let spread: number = 0;
    export let currentSpread: number = 0;
    export let rotationAngle: number = 0;


    window.addEventListener("load", init);
    document.addEventListener("input", update);

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        drawBackground();
        crc2.translate(canvas.width / 2, canvas.height / 2);
        update(null);
    }

    function update(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");

        childrenAmount = parseInt(inputs[0].value);
        radius = parseFloat(inputs[1].value);
        sizeFactor = parseFloat(inputs[2].value);
        gradientFactor = parseFloat(inputs[3].value);
        internGradientFactor = parseFloat(inputs[4].value);
        maxRecursionLevel = parseInt(inputs[5].value);
        spread = parseFloat(inputs[6].value);
        rotationAngle = parseFloat(inputs[7].value);
        backgroundColor = inputs[8].value;

        currentSpread = -Math.cos(spread/ 10 * 2 * Math.PI) ;

        crc2.clearRect(-crc2.canvas.width, -crc2.canvas.height, crc2.canvas.width, crc2.canvas.height);
        drawBackground();

        let ball: Ball = new Ball(0, 0, radius, 0, 0);
        ball.draw();
        ball.createChildren(childrenAmount);
    }


    function drawBackground(): void {
        crc2.fillStyle = backgroundColor;
        crc2.fillRect(-crc2.canvas.width, -crc2.canvas.height, crc2.canvas.width * 2, crc2.canvas.height * 2);
    }
}