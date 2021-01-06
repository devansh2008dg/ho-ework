var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
helicopterIMG=loadImage("helicopter.png")
packageIMG=loadImage("package.png")
}

function setup() {
createCanvas(800, 700);
rectMode(CENTER);


packageSprite=createSprite(width/2, 80, 5,10);
packageSprite.addImage(packageIMG);
packageSprite.scale=0.3
packageSprite.visibilty="false";


var packageSprite_Option={
	restitution:0.3
}
helicopterSprite=createSprite(width/2, 200, 5,10);
helicopterSprite.addImage(helicopterIMG);
helicopterSprite.scale=0.6;


groundSprite=createSprite(width/2, height-35, width,10,packageSprite_Option);
groundSprite.shapeColor=color("red");


engine = Engine.create();
world = engine.world;

packageBody = Bodies.rectangle(width/2 , 200 , 20,20, {restitution:0.9, isStatic:true},packageSprite_Option);
World.add(world, packageBody);
packageBody.visibilty="false";

//Create a Ground
ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
World.add(world, ground);


Engine.run(engine);

}


function draw() {
rectMode(CENTER);
background(0);
packageSprite.x= packageBody.position.x 
packageSprite.y= packageBody.position.y 

drawSprites();

}

function keyPressed() {
if (keyCode ===UP_ARROW) {
packageSprite.visibilty=true;
Matter.Body.setStatic(packageBody,false);

}
if(packageSprite.y=ground.y){


}
}




