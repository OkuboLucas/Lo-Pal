//PROJETO ARTEMIS 3.0
// LeCUBESS (@OkuboLucas)
//08/04/2026
//Versão 0.1.1

/** @type {HTMLCanvasElement} */

let canvas = document.querySelector("#jogo");
let contexto = canvas.getContext("2d");
 
let moduloLunar = {
    posicao: {
        x: 700,
        y: 100,
        
    },
    angulo:  Math.PI /2 , // Apontando para cima
    largura: 20,
    altura: 30,
    cor: "lightgray",
    velocidade: {
        x: -2,
        y: 0
    },
    motorligado: false,
    combustivel: 999999999999999,
    rotacaoantihoraria: false,
    rotacaohorario: false,
}
function mostrarAngulo(){   
    contexto.Font = "Bold 18px Arial";  
    contexto.textAlign = "left";
    contexto.testBaseline = "middle";
    contexto.fillStyle = "#26ff00";
    contexto.fillText(`Ângulo: ${(moduloLunar.angulo * 180 / Math.PI).toFixed(2)}°`,
    50,
    45
    );
}
function mostrarVelocidadeHorizontal(){
    contexto.Font = "Bold 18px Arial";
    contexto.textAlign = "left";
    contexto.testBaseline = "middle";  
    contexto.fillStyle = "#ff0000";
    contexto.fillText(`Velocidade Horizontal: ${(10 * moduloLunar.velocidade.x).toFixed(2)} m/s`,
    50,
    30
    );
}

function mostrarVelocidadeVertical(){
    contexto.Font = "Bold 18px Arial";
    contexto.textAlign = "left";
    contexto.testBaseline = "middle";
    contexto.fillStyle = "#ff0000";
    contexto.fillText(`Velocidade Vertical: ${(10 * moduloLunar.velocidade.y).toFixed(2)} m/s`,
    50,
    60
    );
}
function mostrarCombustivel(){
   contexto.Font = "Bold 18px Arial";
   contexto.textAlign = "left";
   contexto.testBaseline = "middle";
   contexto.fillStyle = "#26ff00";
   contexto.fillText(`Combustível: ${(moduloLunar.combustivel / 10).toFixed(0)} %`,
   50,
   90
   );

}
 
function desenharFundo(){
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    contexto.save();
    contexto.fillStyle = "#1c1f34";
    contexto.fillRect(0,0, canvas.width, canvas.height);
    contexto.restore();
    contexto.strokeStyle = "#49466d";
    contexto.lineWidth = 5;
    contexto.strokeRect(0, 0, canvas.width, canvas.height);
}
 
function desenharModuloLunar(){
    contexto.save();
    contexto.beginPath();
    contexto.translate(moduloLunar.posicao.x, moduloLunar.posicao.y);
    contexto.rotate(moduloLunar.angulo);
    contexto.rect(moduloLunar.largura * -0.5, moduloLunar.altura * -0.5,
        moduloLunar.largura, moduloLunar.altura);
    contexto.fillStyle = moduloLunar.cor;
    contexto.fill();
    contexto.closePath;
 
    if(moduloLunar.motorligado){
        desenharChama();    
        moduloLunar.combustivel--;
        if(moduloLunar.combustivel <= 0){
            moduloLunar.motorligado = false
    }
    }
    contexto.restore();        
}
    function desenharChama(){
     contexto.beginPath();
    contexto.moveTo(moduloLunar.largura * -0.5, moduloLunar.altura * 0.5);
    contexto.lineTo(moduloLunar.largura * 0.5, moduloLunar.altura * 0.5);
    //determinar
    contexto.lineTo(0, moduloLunar.altura *0.5 + Math.random() * 85);
    contexto.closePath();
    contexto.fillStyle = "#4000ff5b";
    contexto.fill();
    }
 
function desenhar(){
   
    atracaoGravitacional();
    desenharFundo();
    desenharModuloLunar();
    mostrarCombustivel();
    mostrarVelocidadeVertical();
    mostrarVelocidadeHorizontal();  
    mostrarAngulo();
    
    if (moduloLunar.posicao.y >= canvas.height - moduloLunar.altura * 0.5) {
        if(moduloLunar.velocidade.y <= 0.5 &&
           moduloLunar.velocidade.x <= 0.5 &&
           moduloLunar.angulo <= 3){
        mostrarResultado("Você conseguiu, bandeira do Brasil hasteada!", cor = "gold" );    
        }else { 
            mostrarResultado("Você perdeu! A bandeira do Brasil não foi hasteada.", cor = "red");
        }
        return
    }
 
    requestAnimationFrame(desenhar);
 
}
function mostrarResultado(mensagem, cor){
    contexto.font = "Bold 36px Arial";
    contexto.textAlign = "center";
    contexto.textBaseline = "middle";
    contexto.fillStyle = cor;
    contexto.fillText(mensagem, canvas.width / 2, canvas.height / 2);

}
 
document.addEventListener('keydown', teclaPressionada);
 
function teclaPressionada(evento){
    if(evento.key == 'w' && moduloLunar.combustivel > 0){
        moduloLunar.motorligado = true;
    } else if (evento.key == 'd') {
        moduloLunar.rotacaohorario = true;
    } else if (evento.key == 'a') {
        moduloLunar.rotacaoantihoraria = true;
    }
}
document.addEventListener('keyup' , teclasolta);
function teclasolta (evento){
    if (evento.key == 'w'){
        moduloLunar.motorligado = false;
    } else if (evento.key == 'd') {
        moduloLunar.rotacaohorario = false;
    } else if (evento.key == 'a') {
        moduloLunar.rotacaoantihoraria = false;
    }
}
//------------------------------------------------------------ para editar caso não seja isso
document.addEventListener('keydown', function(event) {
   if (event.key.toLowerCase() === 'd') {
      
   


   }
});
document.addEventListener('keydown', function(event) {
   if (event.key.toLowerCase() === 'a') {
   
     
   }
});
document.addEventListener('keydown', function(event) {
   if (event.key.toLowerCase() === 's') {
      moduloLunar.velocidade.y = 1.5;

   }
});
//------------------------------------------------------------ remova*/
 
const gravidade = 0.01;
function atracaoGravitacional(){
//atração gravitacional
    moduloLunar.posicao.x += moduloLunar.velocidade.x;
    moduloLunar.posicao.y += moduloLunar.velocidade.y;
    moduloLunar.velocidade.y += gravidade;
    if(moduloLunar.rotacaohorario){
        moduloLunar.angulo += Math.PI /180
    } else if(moduloLunar.rotacaoantihoraria){
        moduloLunar.angulo -= Math.PI /180
    }
 
    if(moduloLunar.motorligado){
        moduloLunar.velocidade.y -= 0.020 * Math.cos(moduloLunar.angulo)
        moduloLunar.velocidade.x += 0.1 * Math.sin(moduloLunar.angulo)
        
    }
 
}
 
desenhar();