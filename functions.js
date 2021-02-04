function killing(){

  if(khiladi.index!==1){
  if(player1.bulletGroup.isTouching(invisibleObject)){
    player1.bulletGroup.destroyEach();
    if(khiladi.health>0){
      khiladi.health-=20;
    }else{
      khiladi.health=-1;

      if(khiladi.health<0&&khiladi.state==="alive"){
        plr1 +=1;
      }

      khiladi.state = "dead";
      khiladi.update();
    }


    khiladi.updateK1();
  
  }}

  if(khiladi.index!==2){
  if(player2.bulletGroup.isTouching(invisibleObject)){
    player2.bulletGroup.destroyEach();
    if(khiladi.health>0){
      khiladi.health-=20;
    }else{
      khiladi.health=-1;

      if(khiladi.health<0&&khiladi.state==="alive"){
        plr2 +=1;
      }

      khiladi.state = "dead";
      khiladi.update();
    }


    khiladi.updateK2();
  
  }}

  if(khiladi.index!==3){
  if(player3.bulletGroup.isTouching(invisibleObject)){
    player3.bulletGroup.destroyEach();
    if(khiladi.health>0){
      khiladi.health-=20;
    }else{
      khiladi.health=-1;

      if(khiladi.health<0&&khiladi.state==="alive"){
        plr3 +=1;
      }

      khiladi.state = "dead";
      khiladi.update();
    }


    khiladi.updateK3();
  
  }}

  if(khiladi.index!==4){
  if(player4.bulletGroup.isTouching(invisibleObject)){
    player4.bulletGroup.destroyEach();
    if(khiladi.health>0){
      khiladi.health-=20;
    }else{
      khiladi.health=-1;

      if(khiladi.health<0&&khiladi.state==="alive"){
        plr4 +=1;
      }

      khiladi.state = "dead";
      khiladi.update();
    }


    khiladi.updateK4();
  
  }}



}

function updatation(){

  if(velo1>=-25){
    velo1 = velo1-0.9;
  }

  if(velo2<=25){
    velo2 = velo2+0.9;
  }
  
  if(velo3<=25){
    velo3 = velo3+0.9;
  }

  if(velo4>=-25){
    velo4 = velo4 - 0.9;
  }

  velo5 = invisibleObject.velocity.x;
  
  if(velo5>0){
    velo5 = velo5-0.02;
  }
  if(velo5<0){
    velo5 = velo5+0.02;
  }


  abcd = invisibleObject.velocity.y;
  if(abcd<15){
    abcd = abcd + 0.5;
  }else {
    abcd = invisibleObject.velocity.y;
  }

  if(keyDown("UP_ARROW")){

    let velo = invisibleObject.velocity;
    invisibleObject.setVelocity(velo.x,velo1);

   
  }else{

    velo1 = invisibleObject.velocity.y;
    invisibleObject.velocity.y = abcd;

  }

  if(keyDown("RIGHT_ARROW")) {

    let velo = invisibleObject.velocity;
    invisibleObject.setVelocity(velo3,velo.y);
  
  }else{
    velo3 = invisibleObject.velocity.x;
    invisibleObject.velocity.x = velo5;
  }

  if (keyDown("LEFT_ARROW")) {

    let velo = invisibleObject.velocity;
    invisibleObject.setVelocity(velo4,velo.y);

  }else{
    velo4 = invisibleObject.velocity.x;
    //invisibleObject.velocity.x = velo5;
  }

angleMode(DEGREES);
khiladi.mousy = atan2(mouseY - height / 2, mouseX - width / 2);

if(mouseX>662){
khiladi.direction = "right";
}else{
khiladi.direction = "left";
}

if(mouseDown("leftButton")){
khiladi.firingState = "onfire"; 
}else{
khiladi.firingState = "nofire";           
}

//khiladi.update();
khiladi.posX = invisibleObject.x;
khiladi.posY = invisibleObject.y;
khiladi.update();
        

}

function killSorting(){

  elem5.html("Positions");
  elem5.position(400,100);

  elem6.html("kills");
  elem6.position(905,100);

  elem7.html("You were killed ");
  elem7.position(540,40);


  if(killsArray!==undefined){

    if(killsArray[0]===plr1){
      
      elem.html(" 1  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp " +player1.name+"&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp "+plr1);
      elem.position(400,155);

    }else if(killsArray[0]===plr2){

      elem.html(" 1  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp " +player2.name+"&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp "+plr2);
      elem.position(400,155);

    }else if(killsArray[0]===plr3){

      elem.html(" 1  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp " +player3.name+"&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp "+plr3);
      elem.position(400,155);

    }else{

      elem.html(" 1  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp " +player4.name+"  &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp "+plr4);
      elem.position(400,155);

    }

    ////////////////////////

    if(killsArray[1]===plr1){

      elem2.html(" 2  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp " +player1.name+"&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp "+plr1);
      elem2.position(400,255);

    }else if(killsArray[1]===plr2){

      elem2.html(" 2  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp " +player2.name+"&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp "+plr2);
      elem2.position(400,255);

    }else if(killsArray[1]===plr3){

      elem2.html(" 2  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp " +player3.name+"&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp "+plr3);
      elem2.position(400,255);

    }else{

      elem2.html(" 2  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp " +player4.name+"  &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp "+plr4);
      elem2.position(400,255);

    }

    if(killsArray[2]===plr1){

      elem3.html(" 3  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp " +player1.name+"&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp "+plr1);
      elem3.position(400,355);

    }else if(killsArray[2]===plr2){

      elem3.html(" 3  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp " +player2.name+"&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp "+plr2);
      elem3.position(400,355);

    }else if(killsArray[2]===plr3){

      elem3.html(" 3  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp " +player3.name+"&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp "+plr3);
      elem3.position(400,355);

    }else{

      elem3.html(" 3  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp " +player4.name+"  &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp "+plr4);
      elem3.position(400,355);

    }

    if(killsArray[3]===plr1){

      elem4.html(" 4  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp " +player1.name+"&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp "+plr1);
      elem4.position(400,455);

    }else if(killsArray[3]===plr2){
      
      elem4.html(" 4  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp " +player2.name+"&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp "+plr2);
      elem4.position(400,455);

    }else if(killsArray[3]===plr3){

      elem4.html(" 4  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp " +player3.name+"&nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp "+plr3);
      elem4.position(400,455);

    }else{
      
      elem4.html(" 4  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp " +player4.name+"  &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp "+plr4);
      elem4.position(400,455);

    }


  }
}
