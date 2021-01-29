var fixedRect,movingRect;



function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(200, 200, 50, 80);
 fixedRect.shapeColor = "green"
 fixedRect.debug = true;


 movingRect = createSprite(400,200,80,30);
 movingRect.shapeColor = "green"
 movingRect.debug = true;

}

function draw() {
  background(255,255,255);
  
  movingRect.y = World.mouseY;

  movingRect.x = World.mouseX;
  console.log(fixedRect.x-movingRect.x)

  
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

  }
else{
movingRect.shapeColor = "green";
fixedRect.shapeColor = "green";
}

  drawSprites();
}