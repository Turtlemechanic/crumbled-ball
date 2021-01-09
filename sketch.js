
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bin1=new Dustbin(625,100,175,20);
	bin2=new Dustbin(675,100,20,100);
	bin3=new Dustbin(575,100,20,100);

	paper=new Paper(200,450,20);

	Engine.run(engine);
  
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bin1.display();
  bin2.display();
  bin3.display();
  paper.display();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-10});

	}
}