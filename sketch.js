
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3;
var ground1,paper1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    

	
	dustbin1 = new dustbin(640,680,150,20);
    dustbin2 = new dustbin(570,645,20,100);
	dustbin3 = new dustbin(710,645,20,100);
	ground1 = new ground(350,700,900,20);
	paper1 = new paper(100,600,20);
	Engine.run(engine);
}


function draw() {
  
  background(0);
  Engine.update(engine);
  
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 ground1.display();
 paper1.display();
 
}

function keyPressed() {
	if (keyCode=== UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:60,y:-60})

	}
}
