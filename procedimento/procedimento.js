function procedimento(){
        function início(){
            let resultado = calcular(a = 3, b = 4) 
            //let frase = prompt("escreva uma frase positiva:     ")
            
            mensagem(frase = "O resultado de a² + b² é : " + resultado ); 
            
        }

        function mensagem(frase){
            let linha = "-"
            let i = 0;
        
            do{
                linha = linha + "-"
                i++;
            }while( i < 50);

            alert( linha = linha + "\n" + frase + "\n" + linha);         
        }

    function calcular (a, b ){
        let resultado = a * a + b * b;
        return resultado;

    }

        início()
}