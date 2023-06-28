// variaveis da bolinha

let xbolinha = 300;
let ybolinha = 200;
let diametro = 13;
let raio = diametro /2;

let velocidadexbolinha = 6;
let velocidadeybolinha = 6;

let raquetecomprimento = 10;
let raquetealtura = 90;
    
//variaveis da raquete

let xraquete = 5;
let yraquete = 150;

//sons do jogo
let raquetada;
let ponto;
let trilha;

//oponente errar
let chanceDeErrar = 0;

 function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
  
}

//variaveis raquete oponente
let xraqueteoponente = 585;
let yraqueteoponente = 150;
let velocidadeyoponente;

let colidir = false;

//placar do jogo

let meuspontos = 0;
let pontosoponente = 0;


function setup() {
  //600 é a largura, 400 o comprimento
  createCanvas(600, 400);
   trilha.loop();
  
}

function draw() {
  background(0,100,0);
  linha();
  mostrabolinha();
  movimentabolinha();
  verificacolisao();
  movimentaraquete();
  movimentaraqueteoponente();
  verificacolisaoraquete(xraquete, yraquete);
  verificacolisaoraquete(xraqueteoponente, yraqueteoponente);
  mostraraquete(xraqueteoponente, yraqueteoponente);
  mostraraquete(xraquete, yraquete);
  incluiplacar();
  marcaponto();

   }

function mostrabolinha(){
  circle(xbolinha,ybolinha,diametro);
}

function movimentabolinha(){
  xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
  
}

function verificacolisao(){
   if (xbolinha + raio > width || xbolinha - raio< 0){
    velocidadexbolinha *= -1;
    
  }
  if (ybolinha + raio > height || ybolinha - raio < 0){
    velocidadeybolinha *= -1;
    
  }
}


function mostraraquete(x,y){
    rect(x, y, raquetecomprimento, raquetealtura);
}

function movimentaraquete(){
  if (keyIsDown(UP_ARROW)){
    yraquete -= 10;
  
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yraquete += 10;
  
  }
  
}
function verificacolisaoraquete(x, y){
 colidir =
    collideRectCircle(x,y, raquetecomprimento, raquetealtura, xbolinha, ybolinha, raio);
  if (colidir){
  velocidadexbolinha *= -1;
  raquetada.play();
 }
  }                  

function verificacolisaoraqueteoponente(x, y){
  colidir = 
  collideRectCircle(x, y, raquetecomprimento, raquetealtura, xbolinha, ybolinha, raio);
  if (colidir){
    velocidadexbolinha *= -1;
    raquetada.play();
  }
}

function movimentaraqueteoponente(){
   velocidadeyoponente = ybolinha - yraqueteoponente - raquetecomprimento / 2 - 30;
  yraqueteoponente += velocidadeyoponente + chanceDeErrar
  calculaChanceDeErrar();
  
  //se quiser que o oponente possa competir tbm
// if (keyIsDown(87)){
  //  yraqueteoponente -= 10;
  
 // }
  
 // if (keyIsDown(83)){
  //  yraqueteoponente += 10;
  
 // }
}
 
function incluiplacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(47,79,79));
  rect(150,10,40,20);
  fill(255);
  text(meuspontos, 170, 26);
  fill(color(47,79,79));
  rect(450,10,40,20);
  fill(255);
  text(pontosoponente, 470, 26);

  
}
  function linha(){
  stroke(126);
  rect(300, 3, 3, 510);
   
}

function marcaponto(){
  if (xbolinha > 590){
    meuspontos += 1;
    ponto.play();
  }
  if (xbolinha < 10){
    pontosoponente  += 1;
    ponto.play();
  
  }
}

function calculaChanceDeErrar() {
  if (pontosoponente >= meuspontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}




