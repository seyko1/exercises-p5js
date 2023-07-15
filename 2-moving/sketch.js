let squareWidth = 40;
let position;

function setup() {
  createCanvas(400, 400);

  position = createVector(width / 2, height / 2);
}

function draw() {
  background(200);
  fill(255);

  // 2. Move square to the right every frame

  // solution 1 :
  rect(position.x - (squareWidth / 2), position.y - (squareWidth / 2), squareWidth);
  position.x = position.x + 1;

  // solution 2 with translate :
  // translate(frameCount, 0);
  // rect(position.x - (squareWidth / 2), position.y - (squareWidth / 2), squareWidth);
}