var fixedrect, movingrect;
function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(400, 100, 50, 80);
  movingrect=createSprite(400, 800, 80, 30);
  fixedrect.shapeColor="red";
  movingrect.shapeColor="red";
  movingrect.velocityY=-5;
  fixedrect.velocityY=+5;
}

function draw() {
  background(0);  
 bounceoff(movingrect, fixedrect);
  

  
  drawSprites();
}
