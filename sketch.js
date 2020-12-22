
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var egine,world,dustbin,paper;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	Egine.run(egine);

	dustbin=new dustbin(720, 390, 100, 10);
	paper=new paper(100, 300, 10);
	ground=Bodies.rectangle(width/2,200,width,10,{isStatic:true});

	World.add(world,ground);

	
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  dustbin.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === up_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{
		   x:12,
		   y: -13
		});
	}
}



