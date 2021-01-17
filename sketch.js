var background, backgroundImage
var plane, planeImage

function preload() {
  backgroundImage = loadImage("images/1.png")
  planeImage = loadImage("images/plane.jpg")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
background = createSprite(width/2,height-100,width,height/4)
background.scale = 2
background.addImage(backgroundImage)
background.velocityX = -5
plane = createSprite(300,180,200,20)
plane.addImage(planeImage)
}

function draw() {
 // background("white");  
  drawSprites();

  if (background.x < 0){
    background.x = 15000;
  }
}