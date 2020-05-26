var fixedrect, movingrect;
function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(350, 300, 150, 150);
  movingrect=createSprite(450, 200, 120, 200);
  fixedrect.shapeColor="red";
  movingrect.shapeColor="red";
}

function draw() {
  background(0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
if(isTouching(movingrect, fixedrect))
{
  fixedrect.shapeColor="yellow";
  movingrect.shapeColor="yellow";
}
else
{
  fixedrect.shapeColor="red";
  movingrect.shapeColor="red";
}
  
  drawSprites();
}
