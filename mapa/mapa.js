function mapa(){
        const frutas = new Map();

        frutas.set("maçã", 18)
        frutas.set("uva", 16)
        frutas.set("banana", 16)
        frutas.set("pera", 12)
        let Frutas = ["banana", "maçã", "uva" , "pera"]
        let valor = frutas.get("banana");
        let valor1 = frutas.get("maçã");
        let valor2 = frutas.get("uva");
        frutas.get("pera");
        /*console.log(Frutas)
        console.log(valor )
          console.log(valor1 )
            console.log(valor2)
        console.log(valor);
        console.log(frutas.size);*/
        console.log(frutas.has('uva'))
        frutas.forEach((valor, chave) => console.log(`${chave} = R$${valor},99`))

        for (const x of frutas.keys()){
          console.log(x)
        }
         for (const x of frutas.values()){
          console.log(x)
        }
}
mapa();