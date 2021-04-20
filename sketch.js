var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
   fixedRect = createSprite(450, 150, 70, 50);
   fixedRect.shapeColor = "pink";
   fixedRect.debug = true;

   movingRect = createSprite (300,200,100,70);
   movingRect.shapeColor = "pink";
   movingRect.debug = true;
}

function draw() {
  background(35,165,117); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    &&  fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
      fixedRect.shapeColor = "#A5239C";
      movingRect.shapeColor = rgb(165,25,156);
    }
  else{
    fixedRect.shapeColor = "pink";
    movingRect.shapeColor = "pink";
  }

  drawSprites();
}