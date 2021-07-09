var hasDocked = false;
var bg;
var issImg;
var sc1Img, sc2Img,sc3Img, sc4Img

function preload(){
  bg = loadImage("spacebg.jpg");
  issImg = loadImage("iss.png");
  sc1Img = loadImage("spacecraft1.png");
  sc2Img = loadImage("spacecraft2.png");
  sc3Img = loadImage("spacecraft3.png");
  sc4Img = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(600,350);
  spacecraft = createSprite(285,240, 100, 100);
  spacecraft.addImage("SC1", sc1Img);
  spacecraft.scale = 0.15;

  iss = createSprite(330,130, 100, 100);
  iss.addImage("ISS", issImg);
  iss.scale = 0.25;
}

function draw() {
  background(bg);  
  if(!hasDocked){
     spacecraft.x = spacecraft.x + random(-1,1)
    if(keyDown("UP_ARROW")){
      spacecraft.addImage("SC2", sc2Img);
      spacecraft.y = spacecraft.y-2;
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage("SC4", sc4Img);
      spacecraft.x = spacecraft.x-1;
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage("SC3", sc3Img);
      spacecraft.x = spacecraft.x+1;
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage("SC2", sc2Img);
    }
  }

  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking succesful", 200,300)
  }

  drawSprites();
}