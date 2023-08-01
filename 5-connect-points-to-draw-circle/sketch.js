const radius = 200;
const nbPoints = 50;

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(220);
  
  translate(width / 2, height / 2);
  
  beginShape()
  for (var i = 0; i < nbPoints; i++) {
    let angle = i / nbPoints * TWO_PI;
    
    let x = cos(angle) * radius;
    let y = sin(angle) * radius;

    ellipse(x, y, 5, 5);
    vertex(x, y);
  }
  endShape(CLOSE);
}