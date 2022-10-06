const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var square;
var ground;
var wedge;
var angle=60;
var poly;


function setup() {
createCanvas (400,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    restitution: 0.95,
    frictionAir: 0.01
  }
  var options_g = {
    isStatic: true
  }
  
   ball = Bodies.circle(100,10,20,options);
   World.add(world,ball);

   square = Bodies.rectangle(200,30,30,30,options);
   World.add(world,square);
  
   ground = Bodies.rectangle(200,390,400,20,options_g);
   World.add(world,ground);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);
 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
 rect(square.position.x,square.position.y,30,30);
  
}

