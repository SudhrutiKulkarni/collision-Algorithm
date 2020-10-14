var fixed, moving;
function setup() {
  createCanvas(400, 400);
  fixed = createSprite(200, 200, 50, 50);
  fixed.shapeColor = 'green';
  fixed.debug = true;
  moving = createSprite(100, 100, 100, 50);
  moving.shapeColor = 'green';
  moving.debug = true;
} function draw() {
  background(0);
  moving.x = World.mouseX;
  moving.y = World.mouseY;
  console.log(moving.width / 2 + fixed.width / 2);
  console.log(moving.x - fixed.x);
  if (moving.x - fixed.x < moving.width / 2 + fixed.width / 2 &&
    fixed.x - moving.x < moving.width / 2 + fixed.width / 2 &&
    moving.y - fixed.y < moving.height / 2 + fixed.height / 2 &&
    fixed.y - moving.y < moving.height / 2 + fixed.height / 2) {
    fixed.shapeColor = 'red';
    moving.shapeColor = 'red';
  }
  else {
    fixed.shapeColor = 'green';
    moving.shapeColor = 'green';
  }
  drawSprites();
}