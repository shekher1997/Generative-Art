let radius = 0
let totaldegree = 360
let canvas

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    noFill();
    radius = window.innerHeight / 2;

}

function draw() {
    // let r = map(noise(36 * 0.02, float(frameCount) / 150), 0, 1, 148, 255);
    // let g = map(noise(36 * 0.02, float(frameCount) / 150), 0, 1, 30, 255);
    // let b = map(noise(36 * 0.02, float(frameCount) / 150), 0, 1, 30, 255);
    let r = random(148, 255);
    let g = random(30, 255);
    let b = random(60, 190);

    stroke(r, g, b, 25);
    //translate(frameCount,0);

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2

    beginShape();
    for (i = 0; i < totaldegree; i++) {
        let randomness = noise(i * 0.02, float(frameCount) / 150);
        endX = x + radius * cos(radians(i)) * randomness;
        endY = y + radius * sin(radians(i)) * randomness;
        curveVertex(endX, endY);
    }
    endShape(CLOSE);
    radius -= 1;

    if (radius == -(window.innerHeight)) {
        //background(0);
        radius = window.innerHeight / 2;
        r = 220;
        g = 20;
        b = 60;
    }
}

window.onresize = function () {   
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.size(w, h);
    width = w;
    height = h;
    background(0);
};