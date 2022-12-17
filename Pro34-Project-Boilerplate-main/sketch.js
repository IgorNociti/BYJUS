
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var floresta;
var manga;
var mng;
var pedra;
var pdr;

function preload(){
  floresta = loadImage('Floresta.jpg');
  manga = loadImage('png-clipart-mango-mango.png');
  pedra = loadImage('Pedra.jpg');
}

function setup() {
  createCanvas(900,640);

  engine = Engine.create();
  world = engine.world;

  mng = Bodies.circle(675,90,30);
  pdr = Bodies.circle(225,400,30);

  
}


function draw() 
{
  background(51);
  image(floresta,0,0,900,640);
  image(manga,mng.position.x,mng.position.y,80,80);
  image(pedra,pdr.position.x,pdr.position.y,100,100);

  Engine.update(engine);

  
}

