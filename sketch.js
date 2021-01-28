
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	CrumpledPaper=new Crumpled();
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  THROW()

  groundObject.display();
  
  CrumpledPaper.display();
  dustbinObj.display();
  groundObject.display();
}
function THROW(){
	if(keyDown('space')){
		Matter.Body.applyForce(CrumpledPaper.body,CrumpledPaper.body.position,{x:160,y:-215});
	}
	}
	

