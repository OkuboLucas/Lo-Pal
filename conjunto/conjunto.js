function conjunto(){
        const letras = new Set();
        letras.add("L");
        letras.add("U");
        letras.add("C");
        letras.add("A");
        letras.add("S");
        letras.add("G")
        console.log(letras.has("A"))
        letras.delete("G");
        console.log(letras);

        for (const x of letras.values()){
                console.log(x)
        }
        for (const x of letras.keys()){
                console.log(x)
        }
        

}
conjunto();
