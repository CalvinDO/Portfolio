var CalvinFraktal;
(function (CalvinFraktal) {
    let childrenAmount;
    let radius;
    let backgroundColor = "";
    let spread = 0;
    CalvinFraktal.currentSpread = 0;
    CalvinFraktal.rotationAngle = 0;
    window.addEventListener("load", init);
    document.addEventListener("input", update);
    function init(_event) {
        let canvas = document.querySelector("canvas");
        CalvinFraktal.crc2 = canvas.getContext("2d");
        drawBackground();
        CalvinFraktal.crc2.translate(canvas.width / 2, canvas.height / 2);
        update(null);
    }
    function update(_event) {
        let inputs = document.querySelectorAll("input");
        childrenAmount = parseInt(inputs[0].value);
        radius = parseFloat(inputs[1].value);
        CalvinFraktal.sizeFactor = parseFloat(inputs[2].value);
        CalvinFraktal.gradientFactor = parseFloat(inputs[3].value);
        CalvinFraktal.internGradientFactor = parseFloat(inputs[4].value);
        CalvinFraktal.maxRecursionLevel = parseInt(inputs[5].value);
        spread = parseFloat(inputs[6].value);
        CalvinFraktal.rotationAngle = parseFloat(inputs[7].value);
        backgroundColor = inputs[8].value;
        CalvinFraktal.currentSpread = -Math.cos(spread / 10 * 2 * Math.PI);
        CalvinFraktal.crc2.clearRect(-CalvinFraktal.crc2.canvas.width, -CalvinFraktal.crc2.canvas.height, CalvinFraktal.crc2.canvas.width, CalvinFraktal.crc2.canvas.height);
        drawBackground();
        let ball = new CalvinFraktal.Ball(0, 0, radius, 0, 0);
        ball.draw();
        ball.createChildren(childrenAmount);
    }
    function drawBackground() {
        CalvinFraktal.crc2.fillStyle = backgroundColor;
        CalvinFraktal.crc2.fillRect(-CalvinFraktal.crc2.canvas.width, -CalvinFraktal.crc2.canvas.height, CalvinFraktal.crc2.canvas.width * 2, CalvinFraktal.crc2.canvas.height * 2);
    }
})(CalvinFraktal || (CalvinFraktal = {}));
//# sourceMappingURL=Main.js.map