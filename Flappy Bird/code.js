var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0e2bd2bc-13db-4661-b75d-e23bcaca0d17","0eaeb8bd-bcd9-4543-a753-6ad9a9bb6787","b59dc9d4-054b-4134-9976-f837fe04a4bf","6c6421ef-efe3-4078-a420-a2ad375bfecf","e4a049b6-3c1b-4d09-a741-ef2c7bc234bc","73d25723-77c1-4b96-9573-3bbb38b94f4f"],"propsByKey":{"0e2bd2bc-13db-4661-b75d-e23bcaca0d17":{"name":"pipedown.png_1","sourceUrl":"assets/v3/animations/1cELkxEPuw3vham5VjcOsNEYuphZpcIJdqRmfCQTaLw/0e2bd2bc-13db-4661-b75d-e23bcaca0d17.png","frameSize":{"x":138,"y":793},"frameCount":1,"looping":true,"frameDelay":4,"version":"fntEpd7r08j8yQ2ThldBN3ccIT8CwnZe","loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":793},"rootRelativePath":"assets/v3/animations/1cELkxEPuw3vham5VjcOsNEYuphZpcIJdqRmfCQTaLw/0e2bd2bc-13db-4661-b75d-e23bcaca0d17.png"},"0eaeb8bd-bcd9-4543-a753-6ad9a9bb6787":{"name":"pipeup.png_1","sourceUrl":"assets/v3/animations/1cELkxEPuw3vham5VjcOsNEYuphZpcIJdqRmfCQTaLw/0eaeb8bd-bcd9-4543-a753-6ad9a9bb6787.png","frameSize":{"x":89,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"R6aDV9Tl_75060MhtIIChRJ4V5Oi_iQB","loadedFromSource":true,"saved":true,"sourceSize":{"x":89,"y":512},"rootRelativePath":"assets/v3/animations/1cELkxEPuw3vham5VjcOsNEYuphZpcIJdqRmfCQTaLw/0eaeb8bd-bcd9-4543-a753-6ad9a9bb6787.png"},"b59dc9d4-054b-4134-9976-f837fe04a4bf":{"name":"bird.png_1","sourceUrl":"assets/v3/animations/1cELkxEPuw3vham5VjcOsNEYuphZpcIJdqRmfCQTaLw/b59dc9d4-054b-4134-9976-f837fe04a4bf.png","frameSize":{"x":512,"y":284},"frameCount":1,"looping":true,"frameDelay":4,"version":"HHCVB1J1rF0ZvPrt_Yxt.bgGD5Ry_Fp.","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":284},"rootRelativePath":"assets/v3/animations/1cELkxEPuw3vham5VjcOsNEYuphZpcIJdqRmfCQTaLw/b59dc9d4-054b-4134-9976-f837fe04a4bf.png"},"6c6421ef-efe3-4078-a420-a2ad375bfecf":{"name":"background.png_1","sourceUrl":"assets/v3/animations/1cELkxEPuw3vham5VjcOsNEYuphZpcIJdqRmfCQTaLw/6c6421ef-efe3-4078-a420-a2ad375bfecf.png","frameSize":{"x":2044,"y":768},"frameCount":1,"looping":true,"frameDelay":4,"version":"a0AX3Ig.CF63T3vlN1r99k2uotlxzHcm","loadedFromSource":true,"saved":true,"sourceSize":{"x":2044,"y":768},"rootRelativePath":"assets/v3/animations/1cELkxEPuw3vham5VjcOsNEYuphZpcIJdqRmfCQTaLw/6c6421ef-efe3-4078-a420-a2ad375bfecf.png"},"e4a049b6-3c1b-4d09-a741-ef2c7bc234bc":{"name":"game over.png_1","sourceUrl":"assets/v3/animations/1cELkxEPuw3vham5VjcOsNEYuphZpcIJdqRmfCQTaLw/e4a049b6-3c1b-4d09-a741-ef2c7bc234bc.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"_.8m1te5Xv21vmkJWqW65zJpfcSRn26v","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/1cELkxEPuw3vham5VjcOsNEYuphZpcIJdqRmfCQTaLw/e4a049b6-3c1b-4d09-a741-ef2c7bc234bc.png"},"73d25723-77c1-4b96-9573-3bbb38b94f4f":{"name":"restart.png_1","sourceUrl":"assets/v3/animations/1cELkxEPuw3vham5VjcOsNEYuphZpcIJdqRmfCQTaLw/73d25723-77c1-4b96-9573-3bbb38b94f4f.png","frameSize":{"x":980,"y":962},"frameCount":1,"looping":true,"frameDelay":4,"version":"v04eQJqzXtXS_op_hwFCgFsh5f.1IaV9","loadedFromSource":true,"saved":true,"sourceSize":{"x":980,"y":962},"rootRelativePath":"assets/v3/animations/1cELkxEPuw3vham5VjcOsNEYuphZpcIJdqRmfCQTaLw/73d25723-77c1-4b96-9573-3bbb38b94f4f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var serve = 0;
var play = 1;
var end = 2;

var gameState =  "serve";

var score = 0;

var bird;
var ground;
var upobstacles;
var downobstacles;
var sky;
var gameOver;

var restart;

var upobstaclesGroup, downobstaclesGroup;


function setup() {
 createCanvas(400,400);
 
 sky = createSprite(200,200,400,400);
 sky.setAnimation("background.png_1");
 sky.scale = 0.55;
 
 
 bird = createSprite(75,195,30,30);
 bird.setAnimation("bird.png_1");
 bird.scale = 0.1;
 bird.visible = true;
 
 ground = createSprite(200,375,400,5);
 ground.visible = false;
 
 gameOver = createSprite(200,200,100,20);
 gameOver.setAnimation("game over.png_1");
 gameOver.scale = 0.1;
 gameOver.visible = false;
 
 restart = createSprite(200,250,100,20);
 restart.setAnimation("restart.png_1");
 restart.scale = 0.04;
 restart.visible = false;
 
upobstaclesGroup = createGroup();
downobstaclesGroup = createGroup();
  
}




function draw() {
 background("lightblue");

  
 
  
  if(gameState === "serve" && keyDown("ENTER")){
  
    gameState = "play";
  
  }
  
  if(gameState === "play"){

    
     sky.velocityX = -4;
  
    if(sky.x<0){
      sky.x = 200;
      
    }
  
  if(frameCount%50 ===0){
    score = score+10;
  }
  
  
  if(keyDown("space")){
    bird.velocityY = -10;
  }
  
  bird.velocityY = bird.velocityY + 0.8;
  
  upobstacles();
  downobstacles();
  
  if(upobstaclesGroup.isTouching(bird)||downobstaclesGroup.isTouching(bird)|| bird.isTouching(ground)){
    gameState = "end";
    
  }
  
 
   
  }
  
 
  drawSprites();
  
  fill("white");
  textSize(20);
  text("Score: " +score,160,40);
  
  if(gameState === "end"){
    bird.velocityY = 0;
    sky.velocityX = 0;
    gameOver.visible = true;
    
    upobstaclesGroup.setVelocityXEach(0);
    downobstaclesGroup.setVelocityXEach(0);
    
    restart.visible = true;
   
   
    
     if(mousePressedOver(restart)){
    
    reset();
  }
  
  }
  
  
  
 
}

function reset(){
  gameState = "serve";
  bird.x = 75;
  bird.y = 195;
  restart.visible = false;
  gameOver.visible = false;
  score = 0;
  
  upobstaclesGroup.destroyEach();
  downobstaclesGroup.destroyEach();
}


function upobstacles(){
  
  if(frameCount%70 ===0){
  var upobstacle = createSprite(400, 300,10,30);
  upobstacle.setAnimation("pipeup.png_1");
  upobstacle.scale = 0.3;
  upobstacle.velocityX = -3;
  
  
  upobstaclesGroup.add(upobstacle);
  } 

}

function downobstacles(){
  
if(frameCount%80 ===0){
  var downobstacle = createSprite(400, 75,10,30);
  downobstacle.setAnimation("pipedown.png_1");
  downobstacle.scale = 0.2;
  downobstacle.velocityX = -3;
  
  
  downobstaclesGroup.add(downobstacle);
  } 

  
  
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
