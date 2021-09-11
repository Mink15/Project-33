const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var world, engine
var snow1 = []

var bgimg,snow

function preload(){
  bgimg = loadImage("snow2.jpg")
}
function setup() {
  engine = Engine.create()
  world = engine.world 
  createCanvas(800,400);
  if(frameCount%50 === 0){
    for(var i = 0; i < 200; i++){
      snow1.push(new Snow(random(0,800), random(0,800)))
    }
  }
}

function draw() {
  background(bgimg);
  Engine.update(engine)
  for(var i = 0; i < 200; i++){
    snow1[i].showDrop()
    snow1[i].updateY()
  }  
  drawSprites();
}