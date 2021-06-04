var background,backgroundIm,player1,player1Ani,player1st,player1ju,player2,player2Im,airship,airshipIm,bullets,fire,fireAni,prndullum,pendullumIm;
var ball1,ball2,ball3,imposter,imposterIm,life,lifeIm,track,trackIm,ballIm;

function preload(){
  player1Ani =loadAnimation('images/mariostanding.png','images/mrunning1.png','images/mrunning2.png','images/mrunning3.png');
  player1st = loadAnimation('images/mariostanding.png');
  player1ju = loadAnimation('images/mjumping.png');

  airship = loadImage('images/airship.png');
  fireAni =loadAnimation('images/fire1.png','images/fire2.png','images/fire3.png');

  backgroundIm =loadImage('images/bg.jpg');
  trackIm=loadImage('images/bgnew.jpg');

  pendullumIm=loadAnimation('images/p13.png','images/p12.png','images/p2.png','images/p3.png','images/p4.png','images/p5.png',
	'images/p1.png','images/p6.png','images/p7.png','images/p8.png','images/p9.png','images/p11.png',
	'images/p8.png','images/p7.png','images/p6.png','images/p1.png','images/p5.png','images/p4.png',
	'images/p3.png','images/p2.png','images/p12.png','images/p13.png');

  ballIm=loadImage('images/ball.png');
  
  imposterIm=loadImage('images/imposter1.png');

  lifeIm=loadImage('images/heart4.png');


}

function setup(){
 createCanvas(windowWidth,windowHeight);

 

 track=createSprite(displayWidth/2,displayHeight/2-50);
 track.addImage(trackIm);
 track.scale=3.8
 track.velocityX=-3

 player1=createSprite(170,300);
 player1.addAnimation('mario standing',player1st);
 player1.addAnimation('mario running',player1Ani);
 player1.addAnimation('mario jumping',player1ju);
 player1.scale=0.7
 

}

function draw(){
background(backgroundIm);
//image(trackIm, 0,100,displayWidth*5, displayHeight-300);

if(track.x<0){
  track.x = displayWidth/2
}

if(keyDown(RIGHT_ARROW)){
   player1.velocityX=3;
   player1.changeAnimation('mario running',player1Ani);
}
  drawSprites();
}