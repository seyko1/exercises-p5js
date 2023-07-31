const radius = 50;
const diameter = radius * 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(210);
  textAlign(LEFT, TOP);
  
  let angle = frameCount * 0.05;
  
  stroke(0);
  noFill();
  
  let x = cos(angle);
  let y = sin(angle);
  
  text(`cos : ${x}`, 5, 5);
  text(`sin : ${y}`, 5, 20);
  
  // 1. Turn around center
  translate(100, 150);
  ellipse(0, 0, 5, 5);

  ellipse(0, 0, diameter);
  
  fill('#f00');
  ellipse(x * radius, y * radius, 5, 5);
  
  // 2. Round trip using sinus
  translate(100, 0);
  
  line(0, -radius, 0, radius);
  ellipse(0, y * radius, 5, 5);
  
  // 3. Shrink and grow (between 50 & 100) 
  translate(100, 0);
  
  noFill();
  ellipse(0, 0, 5, 5);
  
  fill('#f00');
  ellipse(0, 0, 5, 5);
  
  noFill();
  ellipse(0, 0, 75 + x * 25);
  // OR ellipse(0, 0, map(y, -1, 1, radius, diameter));
}