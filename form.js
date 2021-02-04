class Form{
    constructor(){

        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");
        this.title = createElement("h2");
        this.reset = createButton("Reset");
        

    }

    hide(){

        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();

    }

    display(){

        this.title.html("Miliatia works ");
        this.title.position(displayWidth/2-50,0);

        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30, displayHeight/2);
        this.reset.position(displayWidth-150,20);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            khiladi.name = this.input.value();
            playerCount+=1;
            khiladi.index = playerCount;
            khiladi.update();
            khiladi.updateCount(playerCount);
            this.greeting.html("Hello 😃😃 " + khiladi.name)
            this.greeting.position(displayWidth/2 - 70, displayHeight/4);
          });
      
          this.reset.mousePressed(()=>{
            khiladi.updateCount(0);
            game.update(0);
          });
    }
}













/*
.customButton {
    width: 200px;
    height: 60px;
    background-color: #fea834;
    border: none;
    color: #000;
    font-weight: bold;
    padding: 15px 32px;
    border-radius: 15px;
    margin-bottom: 100px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
}
function btns() {
  b = createButton('button').style('padding', '25px');
  b.style("position","100,10");
  b.style("-webkit-transition-duration","0.2s");
  b.style("transition-duration","1s")

  b.mouseOver(onTop).mouseOut(outside);
}
 
function onTop() {
  b.style('background-color', 'red');
  b.style('opacity', '10');
  //b.style('border','none');
  b.style("box-shadow","0 8px 16px 0 rgb(193 47 122 / 87%)", "0 6px 20px rgba(0,0,0,0.19)")
}
 
function outside() {
  b.style('background-color', 'white');
  b.style('border','20px');
  b.style("box-shadow","0 20px 40px 0 rgba(0,0,0,0.2)", "0 6px 20px rgba(0,0,0,0.19)")
}


*/