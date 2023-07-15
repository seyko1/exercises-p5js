let squareWidth = 40;
let position;

function setup() {
  createCanvas(400, 400);
  
  // centre du canvas
  position = createVector(width / 2, height / 2);
}

function draw() {
  background(200);
  fill(255);

  // 1. I want a square centered in the canvas

  rect(position.x - (squareWidth / 2), position.y - (squareWidth / 2), squareWidth);
}