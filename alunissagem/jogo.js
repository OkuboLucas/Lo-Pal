//PROJETO ARTEMIS 3.0
// LeCUBESS (@OkuboLucas)
//08/04/2026
//Versão 0.1.0

/** @type {HTMLCanvasElement} */

let canvas = document.querySelector('#jogo');
let contexto = canvas.getContext("2d");
let lua = {
   posicao: {
      x: 300,
      y: 500,
   },
   raio: 50,
   cor: "#c9c9c9",
   largura: 700,  // Aumentado para cobrir toda a largura do canvas
   altura: 20,    // Aumentado para um chão mais espesso
};
   

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
      moduloLunar.velocidade.y = -2;
   }
}); 
window.addEventListener('keydown', function(event) {
   if (event.key.toLowerCase() === 'd') {
      moduloLunar.velocidade.x = 2;
   }
}); 
window.addEventListener('keydown', function(event) {
   if (event.key.toLowerCase() === 'a') {
      moduloLunar.velocidade.x = -2;
   }
}); 
function desenho() {
//atração gravitacional
moduloLunar.velocidade.y += 0.1; //gravidade

// Verificar colisão com o chão da lua

let chaolua = canvas.height - lua.altura; // é a posição da lua, o topo, chãoY
let baseNave = moduloLunar.posicao.y + moduloLunar.altura /2 // É a base da nave, sua parte inferior. moduloLunarY
if (baseNave >= chaolua) {
   moduloLunar.velocidade.x = 0; //Isso impede a nave de se movimentar horizontalmente quando colidir com o solo lunar.
   moduloLunar.velocidade.y = 0; //Isso impede a nave de se movimentar verticalmente quando colidir com o solo.
   

}




//-------------------------------------//


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

//desenho lua 
contexto.save();
contexto.beginPath();
contexto.translate(lua.posicao.x, lua.posicao.y);
contexto.fillStyle = lua.cor;
contexto.fill();
contexto.restore();
contexto.save();
contexto.fillStyle = lua.cor;
contexto.fillRect(0, canvas.height - lua.altura, lua.largura, lua.altura);  // Desenha o chão da lua
contexto.restore();

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