//PROJETO ARTEMIS 3.0
// LeCUBESS (@OkuboLucas)
//08/04/2026
//Versão 0.1.2

/** @type {HTMLCanvasElement} */

let canvas = document.querySelector("#jogo");
let contexto = canvas.getContext("2d");
let lancamento = (Math.round(Math.random()) == 0);// Lançamento aleatório (variável booleana)
let estrelas = [];
for (let i = 0; i < 500; i++){
        estrelas[i] = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        raio: Math.sqrt(2 * Math.random()),
        brilho: 1.0,
        apagando: true,
        cintilacao: 0.05 * Math.random()
    
    }; 
}

let moduloLunar = {
    posicao: {
        x: lancamento ? 100 : 700,
        y: 100,
        
    },
    angulo: lancamento ? Math.PI / 2 : -Math.PI / 2, // Apontando para cima
    largura: 20,
    altura: 35,
    cor: "#585858",
    velocidade: { 
        x: lancamento ? 2 : -2,
        y: 0
    },
    motorligado: false,
    combustivel: 99999,
    rotacaoantihoraria: false,
    rotacaohorario: false,
}
// voltar jogo após perder com o botão R    
    document.addEventListener('keydown', function(event) {
        if (event.key.toLowerCase() === 'r') {
            location.reload(); // Recarrega a página para reiniciar o jogo
        }
    });

function mostrarAltitude(){
    mostrarIndicador( `Altitude: ${(canvas.height - moduloLunar.posicao.y - 0.5 * moduloLunar.altura).toFixed(2)}`, 
    520,
    20
    )
}
    
function mostrarAngulo(){   
    mostrarIndicador(`Ângulo: ${(moduloLunar.angulo * 180 / Math.PI).toFixed(2)}°`,
    520,
    45
    );
}
function mostrarIndicador(mensagem, x , y){
     contexto.Font = "Bold Arial" , "90px";
    contexto.textAlign = "left";
    contexto.testBaseline = "middle";
    contexto.fillStyle = "lightgray";
    
    contexto.fillText(
        mensagem,
        x,
        y
    );
}
function mostrarVelocidadeHorizontal(){
    mostrarIndicador(`Velocidade Horizontal: ${(10 * moduloLunar.velocidade.x).toFixed(2)} m/s`,
    50,
    30

    );
}

function mostrarVelocidadeVertical(){
    contexto.Font = "Bold 25px Arial";
    contexto.textAlign = "left";
    contexto.testBaseline = "middle";
    contexto.fillStyle = "#ff0000";
    mostrarIndicador(`Velocidade Vertical: ${(10 * moduloLunar.velocidade.y).toFixed(2)} m/s`,
    50,
    60
    );
}
function mostrarCombustivel(){
   contexto.Font = "Bold 25px Arial";
   contexto.textAlign = "left";
   contexto.testBaseline = "middle";
   contexto.fillStyle = "#26ff00";
   contexto.fillText(`Combustível: ${(moduloLunar.combustivel / 10).toFixed(0)} %`,
   50,
   90
   );

}
 
function desenharEstrela(){
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    contexto.save();
    contexto.fillStyle = "#1c1f34";
    contexto.fillRect(0,0, canvas.width, canvas.height);
    contexto.restore();
    contexto.strokeStyle = "#49466d";
    contexto.lineWidth = 5;
    contexto.strokeRect(0, 0, canvas.width, canvas.height);
    
    //estrelas
    for(let i = 0; i < 500; i++){
        let estrela = estrelas[i]; 
        contexto.beginPath();
        contexto.arc(estrela.x , estrela.y , estrela.raio, 0, 2 * Math.PI);
        contexto.closePath();
        contexto.fillStyle = `rgba(255, 255, 255, ${estrela.brilho})`;
        contexto.fill();
        if(estrela.apagando){
            estrela.brilho -= estrela.cintilacao;
            if(estrela.brilho <= 0){
                estrela.brilho = 0;
                estrela.apagando = false;
            }
        } else {
            estrela.brilho += estrela.cintilacao;
            if(estrela.brilho > 0.95){
                estrela.apagando = true;
            }
        }
    }
}
    contexto.restore();


 
function desenharModuloLunar(){
    //Retângulo Fogute
    contexto.save();
    contexto.beginPath();
    contexto.translate(moduloLunar.posicao.x, moduloLunar.posicao.y);
    contexto.rotate(moduloLunar.angulo);
    contexto.rect(moduloLunar.largura * -0.5, moduloLunar.altura * -0.4,
                  moduloLunar.largura , moduloLunar.altura * 0.9);
    contexto.fillStyle = moduloLunar.cor;
    contexto.fill();
    //Triângulo Foguete
        contexto.beginPath();
    contexto.moveTo(moduloLunar.largura * 0.5, moduloLunar.altura * -0.4);
    contexto.lineTo(moduloLunar.largura * -0.5, moduloLunar.altura * -0.4)
    contexto.lineTo(0, moduloLunar.altura *-1.1);
    contexto.closePath();
    contexto.fillStyle = 'gray'
    contexto.fill();
     //Base Foguete
        contexto.beginPath();
         contexto.rect(moduloLunar.largura * -0.5, moduloLunar.altura * 0.38,
                  moduloLunar.largura * 1, moduloLunar.altura * 0.1);
        contexto.closePath();
        contexto.fillStyle = 'red'
        contexto.fill();
    //Janela da Nave
            contexto.beginPath();
            contexto.arc(0, moduloLunar.altura * -0.1, 5, 0, 2 * Math.PI);
            contexto.fillStyle = 'lightblue';
            contexto.fill();
         
    if(moduloLunar.motorligado){
        desenharChama();    
       consumirCombustível();
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
    desenharEstrela();
    desenharModuloLunar();
    mostrarCombustivel();
    mostrarVelocidadeVertical();
    mostrarVelocidadeHorizontal();  
    mostrarAngulo();
    mostrarAltitude();

    if(encerrarJogo()){
        return;
    }

    requestAnimationFrame(desenhar);
 
}
function mostrarResultado(mensagem, cor){
    contexto.font = "Bold 30px Arial";
    contexto.textAlign = "center";
    contexto.textBaseline = "middle";
    contexto.fillStyle = cor;
    contexto.fillText(mensagem, canvas.width / 2, canvas.height / 2);

}
//CONTROLES (W,S,A,D)
function encerrarJogo(){
     if (moduloLunar.posicao.y >= canvas.height - moduloLunar.altura * 0.5) {
        if(moduloLunar.velocidade.y <= 0.5 &&
           moduloLunar.velocidade.x <= 0.5 &&
           moduloLunar.angulo <= 3){
        mostrarResultado("Você conseguiu, bandeira do Brasil hasteada!", cor = "gold" );    
        }else { 
            mostrarResultado("Você perdeu! A bandeira do Brasil não foi hasteada.", cor = "red");
        }
        return true;
    }
    return false;
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
   if (event.key.toLowerCase() === 's') {
      moduloLunar.velocidade.y = 1.5;

   }
});
//------------------------------------------------------------ remova*/

function consumirCombustível(){
     moduloLunar.combustivel--;
        if(moduloLunar.combustivel <= 0){
            moduloLunar.motorligado = false
    }
}
 
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
        moduloLunar.velocidade.y -= 0.02 * Math.cos(moduloLunar.angulo)
        moduloLunar.velocidade.x += 0.1 * Math.sin(moduloLunar.angulo)
        
    }
 
}
 
desenhar();