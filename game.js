class Game{

    constructor(){

    }

    getGameState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",(data)=>{

            gameState = data.val();

        });
    }

    update(state){

        database.ref('/').update({

            gameState:state

        })
    }

    async start(){

        if(gameState === 0){

          k1 = createButton(' ');
          k1.style("border-radius","7px");
          k1.style("width","600px");
          k1.style("height","50px");
          k1.style("background-color","#9999ff");
          k1.style("cursor","pointer");
          k1.style("border","none");
          k1.position(390, 160);
          
          k2 = createButton(' ');
          k2.style("border-radius","7px");
          k2.style("width","600px");
          k2.style("height","50px");
          k2.style("background-color","#9999ff");
          k2.style("cursor","pointer");
          k2.style("border","none");
          k2.position(390, 260);
            
          k3 = createButton(' ');
          k3.style("border-radius","7px");
          k3.style("width","600px");
          k3.style("height","50px");
          k3.style("background-color","#9999ff");
          k3.style("cursor","pointer");
          k3.style("border","none");
          k3.position(390, 360);
           
          k4 = createButton(' ');
          k4.style("border-radius","7px");
          k4.style("width","600px");
          k4.style("height","50px");
          k4.style("background-color","#9999ff");
          k4.style("cursor","pointer");
          k4.style("border","none");
          k4.position(390, 460);
      
          k1.style('opacity','0');
          k2.style('opacity','0');
          k3.style('opacity','0');
          k4.style('opacity','0');
      
          elem  = createElement("h2");
          elem2  = createElement("h2");
          elem3  = createElement("h2");
          elem4  = createElement("h2");
          elem5  = createElement("h2");
          elem6  = createElement("h2");
          elem7  = createElement("h1");
          elem8  = createElement("h1");

          elem.style('color',"#333399");
          elem2.style('color',"#333399");
          elem3.style('color',"#333399");
          elem4.style('color',"#333399");
          elem5.style('font-family',"OCR A Std, monospace");
          elem6.style('font-family',"OCR A Std, monospace");
          elem7.style('font-family',"OCR A Std, monospace");
          elem7.style('color',"#003366");
          //elem6.style('font-family',"OCR A Std, monospace");
      

            khiladi = new Player();
            var playerCountRef = await database.ref('playerCount').once('value');

            if(playerCountRef.exists()){

                playerCount = playerCountRef.val();
                khiladi.getCount();

            }
            form = new Form();
            form.display();

        }

        ani_images();

        
        khiladi.posX = 1000;
        khiladi.posY = 0;


    }

    play(){

        form.hide();

        Player.getPlayerInfo();

        if(allPlayers !== undefined){


        if(frameCount%60===0){
          timer2--;
        }

          
      if(khiladi.state==="dead"){

        k1.style('opacity','10');
        k2.style('opacity','10');
        k3.style('opacity','10');
        k4.style('opacity','10');

        elem.style('opacity',"10");
        elem2.style('opacity',"10");
        elem3.style('opacity',"10");
        elem4.style('opacity',"10");


        if (frameCount % 30 == 0 && timer > 0) { 
          timer --;
        }

        if(timer===0){
          khiladi.state = "alive";
          khiladi.health = 200;
          khiladi.update();
        }
       }

       if(khiladi.state==="alive"){

         timer = 8;
         updatation();

         k1.style('opacity','0');
         k2.style('opacity','0');
         k3.style('opacity','0');
         k4.style('opacity','0');

         elem.style('opacity',"0");
         elem2.style('opacity',"0");
         elem3.style('opacity',"0");
         elem4.style('opacity',"0");

       }

            var index = 0;

            camera.position.x = invisibleObject.x+width/2-600;
            camera.position.y = invisibleObject.y;
        
            
            sound();

            khiladi.getk1();
            khiladi.getk2();
            khiladi.getk3();
            khiladi.getk4();


            killing();

           // console.log()
      
            
            for(var plr in allPlayers){
              console.log(plr1k+":"+plr2k+":"+plr3k+":"+plr4k);
                index = index+1;
                //console.log(allPlayers[plr].kills+":"+player1.kills);
                
                if(allPlayers[plr].posX!== undefined&&allPlayers[plr].posY!==undefined){

                  var yy = allPlayers[plr].posY;
                  var xx = allPlayers[plr].posX
                khiladies[index-1].body.x = xx;
                khiladies[index-1].body.y = yy;
                }

                khiladies[index-1].mousy = allPlayers[plr].mousy;
                khiladies[index-1].direction = allPlayers[plr].direction;
                khiladies[index-1].fireState = allPlayers[plr].firingState;
                khiladies[index-1].health = allPlayers[plr].health;
                khiladies[index-1].name = allPlayers[plr].name;
                khiladies[index-1].state = allPlayers[plr].state;

               // console.log(index+":"+plr);

            };

         push();

         fill("skyblue");
         textSize(40);
         text(player1.name+":"+plr1,player1.body.x,player1.body.y+90);
         text(player2.name+":"+plr2,player2.body.x,player2.body.y+90);
         text(player3.name+":"+plr3,player3.body.x,player3.body.y+90);
         text(player4.name+":"+plr4,player4.body.x,player4.body.y+90);

         rectMode(CORNER);
         rect(player1.body.x-170,player1.body.y,player1.health,20);
         rect(player2.body.x-170,player2.body.y,player2.health,20);
         rect(player3.body.x-170,player3.body.y,player3.health,20);
         rect(player4.body.x-170,player4.body.y,player4.health,20);

         pop();

        }

          invisibleObject.collide(spritesGroup);
          
    }

    gameEnd(){

      k1.style('opacity','10');
      k2.style('opacity','10');
      k3.style('opacity','10');
      k4.style('opacity','10');

      elem.style('opacity',"10");
      elem2.style('opacity',"10");
      elem3.style('opacity',"10");
      elem4.style('opacity',"10");

    }
}