
var ground, gameState
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
  gameState = "play"
	engine = Engine.create();
	world = engine.world
  bob1 = new Paper(280,590,30)
  bob2 = new Paper(340,590,30)
  bob3 = new Paper(400,590,30)
  bob4 = new Paper(450,590,30)
  bob5 = new Paper(510,590,30)
  //Create a Ground
  
  roof = new Ground(400, 400 , bob1.radius * 10, 10);
  
  chain1 = new Slingshot(bob1.body,roof.body,-bob1.radius*4, 0);
  chain2 = new Slingshot(bob2.body,roof.body,-bob1.radius*2, 0);
  chain3 = new Slingshot(bob3.body,roof.body,0, 0);
  chain4 = new Slingshot(bob4.body,roof.body,bob1.radius*2, 0);
  chain5 = new Slingshot(bob5.body,roof.body,bob1.radius*4, 0);
  
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  if(gameState === "start"){
  text("This is small game that will teach you the importance of throwing away your trash. Press Up Arrow to Start, and Up to throw away the trash.", 50,350)
  if(keyCode === UP_ARROW){
  gameState = "play"
  }
  }
  if(gameState === "play"){
  rectMode(CENTER);
  background("white");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  text("Xpos: "+mouseX +"yPos: "+ mouseY,500,40); 
  }
}
function keyPressed() {
  if (keyCode === UP_ARROW && gameState === "play") {
     Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-205, y:-50});
   }
 }
 