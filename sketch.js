
var mouse, mouseImg1,mouseImg2,mouseImg3
var gardenImg
var cat, catImg1,catImg2,catImg3

function preload() {
    //load the images here
    gardenImg= loadImage ("images/garden.png")
    catImg1=loadImage ("images/cat1.png")
    mouseImg1=loadImage ("images/mouse1.png")
    catImg2=loadAnimation ("images/cat2.png","images/cat3.png")
    mouseImg2=loadAnimation ("images/mouse2.png","images/mouse3.png")
    catImg3=loadImage ("images/cat4.png")
    mouseImg3=loadImage ("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(700,600,50,50)
    cat.addImage(catImg1)
    cat.scale=0.2
    mouse=createSprite(200,600,50,50)
    mouse.addImage(mouseImg1)
    mouse.scale=0.2
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x-mouse.x< (cat.width-mouse.width)/2 &&
    cat.x-mouse.x< (cat.width-mouse.width)/2){
     cat.velocityX=0
     cat.x=270
      mouse.addImage("happy",mouseImg3)
      mouse.changeImage("happy")
      cat.addImage("happy",catImg3)
      cat.changeImage("happy")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode===LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2)
      mouse.changeAnimation("mouseTeasing")
      mouse.frameDealy=25
      cat.addAnimation("catComing",catImg2)
      cat.changeAnimation("catComing")
      cat.frameDealy=25
      cat.velocityX=cat.velocityX-4
}
}
