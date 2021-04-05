var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy, fairyImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg = loadImage("images/fairy.png");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairyvoice = loadSound("sound/JoyMusic.mp3");
	//create fairy sprite and add animation for fairy
	fairy = createSprite(400,20);
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y > 470 && stayBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true);
  }
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
	if (keyDown("UP_ARROW")) 
  
fairy.velocityX= 0;
fairy.velocityY = -4;


if (keyDown("DOWN_ARROW")) {
  
fairy.velocityX = 0;
fairy.velocityY = 4;
}
if (keyDown("RIGHT_ARROW")) {
  
fairy.velocityX = 4;
fairy.velocityY = 0;
}
if (keyDown("LEFT_ARROW")) {
  
fairy.velocityX = -2;
fairy.velocityX = 0;
}
}
