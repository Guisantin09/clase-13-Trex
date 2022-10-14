var suelo ,suelo_imagen;
var nube;
var trex ,trex_running;
function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
suelo_imagen = loadImage("ground2.png");
nube = loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex = createSprite(50,180);
 trex.addAnimation("running",trex_running);
 trex.scale = 0.5
 suelo = createSprite(100,180);
 suelo.addImage(suelo_imagen);
 suelo.velocityX= -10;
 oleus = createSprite(300,190,600,10);
 oleus.visible = false;
}

function draw(){
  background("white");
  if(keyDown("space") && trex.y >= 150 ){
    trex.velocityY = -10
  }
  trex.velocityY = trex.velocityY + 0.8;
  if(suelo.x < 0){ 
    suelo.x = suelo.width/2;
  }
  trex.collide(oleus);
  spawn();
  drawSprites();
  

}
function spawn(){
  if(frameCount %60 === 0){
    var nubes = createSprite(600,100);
    nubes.addImage(nube);
    nubes.velocityX = -9;
    nubes.y = Math.round(random(10,60));
  }
}