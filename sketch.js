const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var bullet;
var wall;
var damage;

function setup() {
  createCanvas(1600,400);

  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 0;

  
 
  bullet = new Bullet();

  wall = new Wall();
 
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);

  bullet.display();

if(isTouching(bullet,wall)){
  damage = (0.5*bullet.weight*bullet.speed*bullet.speed)/(wall.thickness*wall.thickness*wall.thickness);
  
}


 wall.display();

 if(damage < 0.20){
  wall.color = "green";
} else if(damage > 0.20){
  wall.color = "red";
}
}

function isTouching(object1,object2){
  if (object1.body.position.x - object2.body.position.x < object2.width/2 + object1.width/2
    && object2.body.position.x - object1.body.position.x < object2.width/2 + object1.width/2)
     {
   
    return true;
  }
  else {
    return false;
  } 
}