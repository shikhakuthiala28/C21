var bullet,wall,speed,thickness,weight;
function setup(){
  createCanvas(1500,650);

  speed=Math.round(random(100,200));
  thickness=Math.round(random(22,83));
  weight=Math.round(random(30,52))

  bullet=createSprite(200,325,100,25);
  bullet.shapeColor='black';
  bullet.velocityX=speed;

  wall=createSprite(1200,325,thickness,height/2);
  wall.shapeColor='brown';
}
function draw(){
  background('lightgreen');
  if(wall.x-bullet.x<(wall.width+bullet.width)/2
    && bullet.x-wall.x<(bullet.width+wall.width)/2){

      var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);
      
      if(damage>10){
        wall.shapeColor="red";
        bullet.velocityX=0;
      }
    
    if(damage<10){
      wall.shapeColor="green";
      bullet.velocityX=0;
    }
  }
  drawSprites();
}


