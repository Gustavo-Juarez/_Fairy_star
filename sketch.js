var starImg,bgImg;
var star, starBody;
var fairy;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadImage("images/fairy.png")
	fairyImg2 = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
	
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
    fairy = createSprite(50,550,200,200);
	fairy.addAnimation("fairy1",fairyImg)
	fairy.scale = .1
	//create fairy sprite and add animation for fairy


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

  if(keyDown(LEFT_ARROW)){
	  fairy.velocityX = -2
	  fairy.addAnimation("fairy2",fairyImg2)
	fairy.changeAnimation("fairy2")
  }
  if(keyDown(RIGHT_ARROW)){
	fairy.velocityX = 6
	fairy.addAnimation("fairy2",fairyImg2)
	fairy.changeAnimation("fairy2")
}

if(fairy.isTouching(star)){
	fairy.velocityX = 0
	Matter.Body.setStatic(starBody,true); 
	fairy.changeAnimation("fairy1")
}

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
