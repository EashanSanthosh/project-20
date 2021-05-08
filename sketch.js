var backgroundImg;
var cat,catSit,catWalk,catStill,rat,ratSteals,ratTaunt,ratInspect;


function preload() {
    //load the images here
    backgroundImg=loadImage("images/garden.png");

    catSit=loadAnimation("images/cat1.png");
    catWalk=loadAnimation("images/cat2.png","images/cat3.png");
    catStill=loadAnimation("images/cat4.png");

    ratSteals=loadAnimation("images/mouse1.png");
    ratTaunt=loadAnimation("images/mouse2.png","images/mouse3.png");
    ratInspect=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(750,700);
    cat.addAnimation("sitting",catSit);
    cat.addAnimation("walking",catWalk);
    cat.addAnimation("still",catStill);
    cat.scale=0.15;

    rat=createSprite(100,700);
    rat.addAnimation("steal",ratSteals);
    rat.addAnimation("taunt",ratTaunt);
    rat.addAnimation("inspect",ratInspect);
    rat.scale=0.15;

}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
    if(detectCollision(cat,rat)){
        cat.changeAnimation("still");
        rat.changeAnimation("inspect");
        cat.velocityX=0;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    rat.changeAnimation("taunt");
    cat.changeAnimation("walking");
    cat.velocityX=-3 
  }
}

function detectCollision(sprite1,sprite2){
    if(sprite1.x-sprite2.x<(sprite1.width-sprite2.width)){
        return true;   
    }
    else{
        return false;
    }
}


