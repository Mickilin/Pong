var ancho = 1000;
var alto = 600;
var speed = 5;
var posx = 0; 
function setup() {
  createCanvas(ancho,alto);
}

function draw() {
 drawBack();
 if (keyCode === UP_ARROW) {
    posx = posx - speed;
  } else if (keyCode === DOWN_ARROW) {
    posx = posx + speed;
  }
 drawPlayer();
 
}


function drawBack(){
  
  background(0);
  //fill(100,200,300);
  rect(ancho/2,0,5,alto);
}

function drawPlayer(){
  keyCode = LEFT_ARROW;
  rect(975,300+posx,10,100);

}

