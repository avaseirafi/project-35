var balloon, position, database;
var backgroundImg;

function preload(){
  backgroundImg = loadImage("sprites/back.png");
  balloonImg = loadImage("sprites/pic.png")
}

function setup() {
  createCanvas(500,500);
  balloon = createSprite(50,200,50,50);
  balloon.addImage(balloonImg);
  balloon.scale = 0.3;
}

function draw() {
  background(backgroundImg);  
  if (position!==undefined){
    if(keyDown(LEFT_ARROW)){
        balloon.x = balloon.x -10;
    }
    else if(keyDown(RIGHT_ARROW)){
        balloon.x = balloon.x +10;
    }
    else if(keyDown(UP_ARROW)){
        balloon.y = balloon.y -10;
    }
    else if(keyDown(DOWN_ARROW)){
        balloon.y = balloon.y +10;
    }
}
else{
    console.log("position undefined");
}
drawSprites();
}