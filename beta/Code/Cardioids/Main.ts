namespace Cardioids {
    let crc2: CanvasRenderingContext2D;

    window.addEventListener("load", init);
    document.addEventListener("input", update);


    let timeLastFrame: number;
    let speed: number = 0.1;
    let animatedFactor: number = 0;

    let inputs: NodeListOf<HTMLInputElement>;

    let xOffset: number = 0;
    let yOffset: number = 0;

    function init(_event: Event): void {

        inputs = document.querySelectorAll("input");

        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.translate(canvas.width / 2, canvas.height / 2);
        // let multiplicationInput: number = parseFloat(prompt("Enter multiplication number"));
        // let resolutionInput: number = parseFloat(prompt("Enter resolution number"));

        update(null);

        inputs[3].addEventListener('click', resetDeltaTime);

        timeLastFrame = new Date().getTime();
        animate();

    }

    function resetDeltaTime(this: HTMLInputElement, ev: MouseEvent) {
        timeLastFrame = new Date().getTime();
        animatedFactor = parseFloat(inputs[0].value);
    }

    function animate() {

        if (inputs[3].checked) {
            calculateNewFactor();
        }

        requestAnimationFrame(animate);
    }

    function calculateNewFactor() {

        let currentTime: number = new Date().getTime();
        let deltaTime: number = currentTime - timeLastFrame;
        timeLastFrame = currentTime;

        console.log(deltaTime);
        animatedFactor += deltaTime * speed * 0.001;

        update(null, animatedFactor);
    }



    function update(_event: Event, _factor?): void {

        let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");

        let factor: number;

        if (_factor) {
            factor = animatedFactor;
            factor = parseFloat(factor.toFixed(3));
            inputs[0].value = "" + factor;
        } else {
            factor = parseFloat((parseFloat(inputs[0].value)).toFixed(3));
        }


        let lines: number = parseInt(inputs[1].value);
        let width: number = parseFloat(inputs[2].value);
        speed = parseFloat(inputs[4].value);

        let radius: number = crc2.canvas.width * 0.25;

        crc2.clearRect(-crc2.canvas.width / 2, -crc2.canvas.height / 2, crc2.canvas.width, crc2.canvas.height);

        drawOuterCircle(radius, lines);

        // crc2.font = radius / 10 + 'px serif';
        // crc2.fillText('Factor:' + multiplicationInput, -radius * 1.4, -radius);
        // crc2.font = radius / 15 + 'px serif';
        // crc2.fillText('Amount of Lines:' + resolutionInput, -radius * 1.4, -radius + radius / 8);

        for (let i: number = 0; i < lines; i++) {
            let startAngle: number = i * 1 / lines * 2 * Math.PI;
            let calcedNumber: number = i * factor;
            let endAngle: number = calcedNumber * 1 / lines * 2 * Math.PI;

            let startX: number = xOffset + (-Math.cos(startAngle) * radius);
            let startY: number = yOffset + (-Math.sin(startAngle) * radius);

            let endX: number = xOffset + (-Math.cos(endAngle) * radius);
            let endY: number = yOffset + (-Math.sin(endAngle) * radius);

            drawLine(startX, startY, endX, endY, i * 1 / lines * 360, width);
            //le.log(startAngle, endAngle, i, calcedNumber, endX, endY, lines, factor);
        }

    }

    function drawOuterCircle(_radius: number, _resolutionInput: number): void {
        crc2.beginPath();
        crc2.strokeStyle = "red";
        crc2.arc(xOffset, yOffset, _radius, 0 * Math.PI, 2 * Math.PI, null);
        crc2.stroke();



        for (let i: number = 0; i < _resolutionInput; i++) {

            let startAngle: number = i * 1 / _resolutionInput * 2 * Math.PI;
            let startX: number = -10 - Math.cos(startAngle) * _radius * 1.07;
            let startY: number = -Math.sin(startAngle) * _radius * 1.07;

            let dotStartX: number = - Math.cos(startAngle) * _radius;
            let dotStartY: number = - Math.sin(startAngle) * _radius;


            //draw small dots and numbers
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.arc(xOffset + dotStartX, yOffset + dotStartY, crc2.canvas.width / 2 / (5 * _resolutionInput), 0, 2 * Math.PI, null);
            crc2.fill();

            if (_resolutionInput <= 30) {
                crc2.font = ' 40px serif';
                crc2.fillText('' + i, startX, startY);
            }
            else if (_resolutionInput <= 200) {
                crc2.font = 1000 / _resolutionInput + 'px serif';
                crc2.fillText('' + i, startX, startY);
            }
        }
    }

    function drawLine(_startX: number, _startY: number, _endX: number, _endY: number, _colorAngle: number, _width: number): void {
        crc2.beginPath();
        crc2.strokeStyle = "HSLA(" + _colorAngle + ",100%,40%, 0.7)";
        crc2.lineWidth = _width;
        crc2.moveTo(_startX, _startY);
        crc2.lineTo(_endX, _endY);
        crc2.stroke();
    }
}


