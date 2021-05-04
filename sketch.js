const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,495,800,10);

	dustbin1 = new Ground(650,480,200,20);
	dustbin2 = new Ground(550,440,20,100);
	dustbin3 = new Ground(750,440,20,100);

	ball = new Paper(100,400,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill("brown")
  ground.display();

  fill("blue")
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  fill("pink")
  ball.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:150,y:-150});
	}
}



