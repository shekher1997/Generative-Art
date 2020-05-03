let canvas;
let x = 0.1;
let y = 0.1;
let z = 0.1;
let dt = 0.01;
let sigma = 10;
let beta = 8.0/3.0;
let rho = 28;
let points = new Array();

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    colorMode(HSB);
    background(0);
}

function draw() {

    rotateY(frameCount * 0.005);
    rotateX(frameCount * 0.005);

    let dx = sigma * (y - x) * dt;
    let dy = (x*(rho - z) - y) * dt;
    let dz = (x * y - beta * z) * dt;
    x += dx;
    y += dy;
    z += dz;

    points.push(new p5.Vector(x, y, z));
    translate(0, 0, -80);
    scale(5);
    stroke(255);
    strokeWeight(7)
    noFill();

    let hu = 0;
    beginShape();
    for (let elements of points) {
        stroke(hu, 255, 255);
        vertex(elements.x, elements.y, elements.z);
    
        hu += 1;
        if (hu > 255) {
          hu = 0;
        }
    }
    endShape();

}

window.onresize = function () {
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.size(w, h, WEBGL);
    width = w;
    height = h;
    background(0);
};