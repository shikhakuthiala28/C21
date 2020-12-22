// SELF DEFINED ISTOUCHING FUNCTION
function istouching(object1,object2){

    if(object1.x-object2.x<(object1.width+object2.width)/2
    && object2.x-object1.x<(object2.width+object1.width)/2
    && object1.y-object2.y<(object2.height+object1.height)/2
    && object2.y-object1.y<(object1.height+object2.height)/2)
    {
      return true;
    }
    else{
      return false;
    }
  }

//SELF DEFINED BOUNCEOFF FUNCTION
  function bounceoff(object1,object2){
    if(object1.x-object2.x<(object1.width+object2.width)/2
    && object2.x-object1.x<(object2.width+object1.width)/2){
      object1.velocityX=object1.velocityX*(-1);
    }
    if(object1.y-object2.y<(object2.height+object1.height)/2
    && object2.y-object1.y<(object1.height+object2.height)/2){
      object1.velocityY=object1.velocityY*(-1);
  
    }
  
  }

  //SELF DEFINED BOUNCE FUNCTION
  function Bounce(object1,object2){
    if(object1.x-object2.x<(object1.width+object2.width)/2
    && object2.x-object1.x<(object2.width+object1.width)/2){
     object2.velocityX=object1.velocityX*(1);
     object1.velocityX=0;
    
    }
    if(object1.y-object2.y<(object2.height+object1.height)/2
    && object2.y-object1.y<(object1.height+object2.height)/2){
     object2.velocityY=object1.velocityY*(1);
     object1.velocityY=0;
    }
  }

  //SELF DEFINED COLLIDE FUNCTION
  function Collide(object1,object2){
    if(object1.x-object2.x<(object1.width+object2.width)/2
    && object2.x-object1.x<(object2.width+object1.width)/2){
       object1.velocityX=0;
    
    }
    if(object1.y-object2.y<(object2.height+object1.height)/2
    && object2.y-object1.y<(object1.height+object2.height)/2){
     object1.velocityY=0;
    }
  }
