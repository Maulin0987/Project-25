
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var paper;
var dustBin1, dustBin2, dustBin3;
var ground;

function preload()
{
	dustbinimage = loadImage('dustbingreen.png');

}

function setup() {
	var canvas = createCanvas(1200, 600);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	
	
	ground = new Ground(700,550,1400,30);
	
	paper = new Paper(200,300);
	
	 Engine.run(engine);
  
}


function draw() {
	background(206,237,227);
	Engine.update(engine);
	
	
	paper.display();
	ground.display();
	image(dustbinimage,1020,350,200,200);
	
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-110});

		}
	}