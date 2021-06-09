var bg , bgImg;
var dp,dpImg;

function preload(){
bg = loadImage("snow2.jpg");
dpImg = loadImage("winter project character"); 

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  dp = createSprite(400,390,50,50);
  dp.addImage("dpImg");
}

function draw() {
  background(255,255,255);  

  if (keyCode (32)){
    dp.velocityX=dp.velocityX +5;
  }

  if (keyDown(UP_ARROW)){
    dp.velocityX = dp.velocityX -5;
  }
  drawSprites();
}