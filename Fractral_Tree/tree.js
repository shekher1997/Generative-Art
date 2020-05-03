let canvas;
let tree = [];
let noOfBranch = [0, 1, 1, 1, 1, 1, 2, 2, 2, 3]

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    fill(255)
    rect(0, window.innerHeight * 2 / 3, window.innerWidth, window.innerHeight / 3)
    angleMode(DEGREES)

}

function Branch(begin, end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;

    // this.movingBranch = function () {
    //     this.end.x += random(-1, 1);
    // }

    this.reveal = function () {
        //stroke(139, 69, 19);
        stroke(0)
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    this.branch = function () {
        let dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(random(-40, 40));
        dir.mult(random(0.3, 0.8));
        let newEnd = p5.Vector.add(this.end, dir)
        let newB = new Branch(this.end, newEnd);
        return newB;
    }
}

function CreateTree(n) {
    background(53, 81, 92);
    for (let dist = 0; dist <= window.innerWidth / n; dist++) {
        let a = createVector(window.innerWidth * dist / n, window.innerHeight * 2 / 3);
        let b = createVector(window.innerWidth * dist / n + random(0, 10), window.innerHeight * 2 / 3 - 60);
        let root = new Branch(a, b);
        tree[0] = root;
        while (tree.length < 150) {
            for (let i = tree.length - 1; i >= 0; i--) {
                let probabFactorL = random(noOfBranch)
                if (!tree[i].finished) {
                    tree.push(tree[i].branch());
                    for (let no = 0; no <= probabFactorL; no++) {
                        tree.push(tree[i].branch());                        // Bookmark
                        // if(i >= 0){
                        //     i--;
                        // }
                        // else{
                        //     break;
                        // }
                    }
                }
                tree[i].finished = true;
            }
        }
        strokeWeight(2);
        tree[0].reveal();
        for (let i = 1; i < tree.length; i++) {
            // if (tree[i].begin.x != temp) {
            //     console.log(strokeWeightValue)
            //     strokeWeightValue -= i/2;
            //     temp = tree[i].end.x
            // }
            // strokeWeight(strokeWeightValue);
            tree[i].reveal();
        }
        tree = []

    }

    fill(29, 24, 19)
    noStroke()
    rect(0, window.innerHeight * 2 / 3, window.innerWidth, window.innerHeight / 3)
    // console.log(tree.length)
    // let temp = tree[0].end.x
    // console.log(temp)

}

function draw() {
    frameRate(1)
    CreateTree(20);
    // tree = []
}

window.onresize = function () {
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.size(w, h);
    width = w;
    height = h;
    background(0);
};