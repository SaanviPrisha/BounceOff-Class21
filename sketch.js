var fixedRect, movingRect, test, test1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  test = createSprite(100, 100,30,80);
  test.shapeColor = "red";
  test.debug = true;
  test1 = createSprite(500, 500,30,80);
  test1.shapeColor = "purple";
  test1.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;
  test.velocityX = 5;
  test.velocityY = 5;
  test1.velocityX = -5;
  test1.velocityY = -5;
}

function draw() {
  background(0,0,0);  

  bounceoff(fixedRect, movingRect);
  bounceoff(test,test1);

  drawSprites();
}


