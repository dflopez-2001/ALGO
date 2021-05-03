var fixedRect, movingRect;
function setup() {
  createCanvas(1600,1600);
  fixedRect = createSprite(600, 600, 120, 120);
  movingRect = createSprite(600, 1200,70 ,70);
  fixedRect.shapeColor="yellow";
  movingRect.shapeColor="yellow";
  movingRect.velocityY=-5;
  fixedRect.velocityY=5;
}

function draw() {
  background(100,100,50);  
 bounceOffRectangles();


  if(movingRect.x-fixedRect.x< movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x< movingRect.width/2+fixedRect.width/2 && movingRect.y-fixedRect.y< movingRect.height/2+fixedRect.height/2 && fixedRect.y-movingRect.y< movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
    background(15,100,15); 
  }
  else{
    movingRect.shapeColor="maroon";
    fixedRect.shapeColor="maroon";
    background(45,0,0);   
  }
  
  drawSprites();
} 

function bounceOffRectangles(){
  if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.velocityY = movingRect.velocityY*(-1);
    fixedRect.velocityY = fixedRect.velocityY*(-1);
  }

}