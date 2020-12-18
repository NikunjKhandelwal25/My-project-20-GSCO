var ball,ball1




function setup() {
  createCanvas(800,400);
 ball1= createSprite(400, 200, 50, 50);
ball1.shapeColor="white"
  ball=createSprite(200,200,50,50);
ball.shapeColor="white"

ball.velocityX=5;
ball1.velocityX=-5;
}

function draw() {

  background(255,255,255);  


if(bounceNikunj(ball,ball1)){
  background("blue");
}
else {
  background("green");
}

  drawSprites();
}