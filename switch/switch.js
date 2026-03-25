function meuSwitch(){

    let dia; 
    let data = new Date().getDay();

    switch(data) {
        case 0: 
            dia = "Domingo";
            break; 
      /*  case 2:
        case 3:
        case 4:
            dia = "o meio da semana"
            break;
        case 6: 
            dia = "Sábado";
            break;
        default: */
            dia = "segunda ou sexta"
        case 1:
            dia = "Segunda-Feira";
            break;
        case 2: 
            dia = "Terça-Feira";
            break; 
        case 3:
            dia = "Quarta-Feira, meus bacanos 🤙";
            document.getElementById("Quarta").src = "quarta.png";
            break;
        case 4: 
            dia = "Quinta-Feira";
            break; 
        case 5:
            dia = "Sexta-Feira";
            break;
        case 6:
            dia = "Sábado"

    }
    document.getElementById("demo").innerHTML = "Hoje é " + dia;
}