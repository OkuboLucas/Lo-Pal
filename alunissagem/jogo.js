//PROJETO ARTEMIS 3.0
// LeCUBESS (@OkuboLucas)
//08/04/2026
//Versão 0.1.0

/** @type {HTMLCanvasElement} */

let canvas = document.querySelector('#jogo');
let contexto = canvas.getContext("2d");
let moduloLunar = {
   posicao: {
      x: 100,
      y: 100
   },
   largura: 20,
   altura: 30,
   cor: "#b2b1b1",
   velocidade: {
      x: 0,
      y: 2
   }
};

window.addEventListener('keydown', function(event) {
   if (event.key.toLowerCase() === 'w') {
      moduloLunar.velocidade.y = -4;
   }
}); 
window.addEventListener('keydown', function(event) {
   if (event.key.toLowerCase() === 'd') {
      moduloLunar.velocidade.x = 4;
   }
}); 
window.addEventListener('keydown', function(event) {
   if (event.key.toLowerCase() === 'a') {
      moduloLunar.velocidade.x = -4;
   }
}); 
window.addEventListener('keydown', function(event) {
   if (event.key.toLowerCase() === 'd') {
      moduloLunar.velocidade.x = 4;
   }
}); 

function desenho() {
//atração gravitacional
moduloLunar.velocidade.y += 0.1; //gravidade
moduloLunar.posicao.x += moduloLunar.velocidade.x;
moduloLunar.posicao.y += moduloLunar.velocidade.y;

contexto.clearRect(0, 0, canvas.width, canvas.height);
contexto.save();
contexto.fillStyle = "#000000";
contexto.fillRect(0, 0, canvas.width, canvas.height); 
contexto.restore();
contexto.strokeStyle = "#49466d";
contexto.lineWidth = 5;
contexto.strokeRect(0, 0, canvas.width, canvas.height);

//desenhar módulo lunar
contexto.save();
contexto.beginPath();
contexto.translate(moduloLunar.posicao.x, moduloLunar.posicao.y);
contexto.rect(moduloLunar.largura * -0.5, moduloLunar.altura * -0.5  , moduloLunar.largura, moduloLunar.altura);
contexto.fillStyle = moduloLunar.cor;
contexto.fill();
contexto.restore();

requestAnimationFrame(desenho);

}
desenho();